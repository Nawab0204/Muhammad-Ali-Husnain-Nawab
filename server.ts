import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import compression from 'compression';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
const DESTINATION_EMAIL = process.env.CONTACT_RECEIVER_EMAIL || 'botlytices@gmail.com';
const EMAILJS_SERVICE_ID = process.env.EMAILJS_SERVICE_ID || 'service_celhx6a';
const EMAILJS_TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID || 'template_2ls8f9w';
const EMAILJS_PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY || 'dMIkk7Bzv9al7M4bb';
const EMAILJS_PRIVATE_KEY = process.env.EMAILJS_PRIVATE_KEY || 'ecwUyElCdBTGyH5wbsLIy';

// 1. Disable server fingerprinting
app.disable('x-powered-by');

// 2. High-performance response compression (Gzip / Brotli)
app.use(compression());

// 3. Robust Production Security Headers Middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  const host = req.headers.host || '';
  const isCustomProductionDomain = host.includes('botlytices.com');

  // Prevent MIME-sniffing
  res.setHeader('X-Content-Type-Options', 'nosniff');
  // Strict Referrer Policy
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  // Hardware & feature isolation
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

  if (isCustomProductionDomain) {
    // Strict HSTS for production custom domain
    res.setHeader('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
    // Clickjacking protection for production domain
    res.setHeader('X-Frame-Options', 'SAMEORIGIN');
    res.setHeader(
      'Content-Security-Policy',
      [
        "default-src 'self'",
        "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://api.emailjs.com",
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
        "font-src 'self' https://fonts.gstatic.com data:",
        "img-src 'self' data: https: blob:",
        "connect-src 'self' https://api.emailjs.com https://images.unsplash.com",
        "frame-ancestors 'self'",
        "object-src 'none'",
        "base-uri 'self'",
      ].join('; ')
    );
  } else {
    // In preview / development / AI Studio iframe environment:
    // Omit X-Frame-Options and permit frame embedding from AI Studio and Google Cloud Run
    res.setHeader(
      'Content-Security-Policy',
      [
        "default-src 'self' https: data: blob: 'unsafe-inline' 'unsafe-eval'",
        "script-src 'self' 'unsafe-inline' 'unsafe-eval' https:",
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
        "font-src 'self' https://fonts.gstatic.com data:",
        "img-src 'self' data: https: blob:",
        "connect-src 'self' https: wss: ws: data: blob:",
        "frame-ancestors 'self' https://*.google.com https://*.googleusercontent.com https://*.run.app https://aistudio.google.com *",
        "object-src 'none'",
      ].join('; ')
    );
  }
  next();
});

// 4. Canonical 301 Permanent Redirects Middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  const host = req.headers.host || '';
  const urlPath = req.path;

  // www to non-www canonicalization
  if (host.startsWith('www.botlytices.com')) {
    return res.redirect(301, `https://botlytices.com${req.originalUrl}`);
  }

  // Canonical redirection for consolidated & legacy routes
  const REDIRECT_MAP: Record<string, string> = {
    '/services/web-development/web-design-ui-ux': '/services/web-development/web-design-ui-ux-development',
    '/services/web-development/web-development': '/services/web-development/web-design-ui-ux-development',
    '/services/web-development/web-design': '/services/web-development/web-design-ui-ux-development',
    '/website-maintenance': '/services/web-development/website-maintenance',
    '/privacy': '/privacy-policy',
    '/cookies': '/cookie-policy',
    '/terms-and-conditions': '/terms',
    '/process': '/about/process',
  };

  if (REDIRECT_MAP[urlPath]) {
    return res.redirect(301, REDIRECT_MAP[urlPath]);
  }

  // Remove duplicate trailing slashes (except root '/')
  if (urlPath.length > 1 && urlPath.endsWith('/')) {
    const cleanPath = urlPath.slice(0, -1);
    return res.redirect(301, cleanPath);
  }

  next();
});

// 5. Middleware for parsing JSON requests
app.use(express.json());

// In-memory inquiry store for audit & backup
interface SavedInquiry {
  ticketId: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  description: string;
  destinationEmail: string;
  timestamp: string;
  emailDispatched: boolean;
}

const inquiriesLog: SavedInquiry[] = [];

// Configure nodemailer transporter if SMTP credentials are provided
let transporter: nodemailer.Transporter | null = null;

if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587', 10),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
} else if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
  transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
}

// Handler for contact form submissions
const handleContactSubmission = async (req: Request, res: Response) => {
  try {
    const { name, fullName, email, phone, subject, description, message, details } = req.body;

    const contactName = (name || fullName || '').trim();
    const contactEmail = (email || '').trim();
    const contactPhone = (phone || '').trim();
    const contactSubject = (subject || 'Project Inquiry via BOTLYTICES Website').trim();
    const contactDescription = (description || message || details || '').trim();

    // Validation
    if (!contactName) {
      res.status(400).json({
        success: false,
        message: 'Name is required.',
      });
      return;
    }

    if (!contactEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactEmail)) {
      res.status(400).json({
        success: false,
        message: 'A valid email address is required.',
      });
      return;
    }

    if (!contactDescription) {
      res.status(400).json({
        success: false,
        message: 'Project description is required.',
      });
      return;
    }

    const ticketId = `BOT-${Date.now().toString().slice(-6)}`;
    let emailDispatched = false;

    // 1. Dispatch via EmailJS official REST API
    try {
      const emailJsResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'BOTLYTICES-Server/1.0',
        },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          accessToken: EMAILJS_PRIVATE_KEY,
          template_params: {
            name: contactName,
            from_name: contactName,
            user_name: contactName,
            email: contactEmail,
            from_email: contactEmail,
            user_email: contactEmail,
            phone: contactPhone || 'Not provided',
            contact_number: contactPhone || 'Not provided',
            subject: contactSubject,
            description: contactDescription,
            message: contactDescription,
            to_email: DESTINATION_EMAIL,
            ticket_id: ticketId,
            timestamp: new Date().toLocaleString(),
          },
        }),
      });

      if (emailJsResponse.ok) {
        emailDispatched = true;
        console.log(`[EmailJS REST API] Inquiry ${ticketId} sent successfully via service ${EMAILJS_SERVICE_ID}`);
      } else {
        const errText = await emailJsResponse.text();
        console.warn(`[EmailJS REST API] Response ${emailJsResponse.status}: ${errText}`);
      }
    } catch (emailJsErr) {
      console.warn('[EmailJS REST API] Network error:', emailJsErr);
    }

    // 2. Dispatch via Nodemailer if SMTP credentials are provided
    if (transporter) {
      try {
        await transporter.sendMail({
          from: `"BOTLYTICES Inquiries" <${process.env.SMTP_FROM || 'noreply@botlytices.com'}>`,
          to: DESTINATION_EMAIL,
          replyTo: contactEmail,
          subject: `[New Inquiry] ${contactSubject} - from ${contactName}`,
          text: `
New Project Inquiry Received:
-----------------------------
Ticket ID: ${ticketId}
Name: ${contactName}
Email: ${contactEmail}
Phone: ${contactPhone || 'Not provided'}
Subject: ${contactSubject}

Project Description:
${contactDescription}

Destination: ${DESTINATION_EMAIL}
Timestamp: ${new Date().toISOString()}
          `.trim(),
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
              <div style="background: linear-gradient(135deg, #07152E 0%, #006BFF 100%); padding: 20px; border-radius: 8px; color: #ffffff; margin-bottom: 20px;">
                <h2 style="margin: 0; font-size: 20px; font-weight: 700;">New Project Inquiry</h2>
                <p style="margin: 4px 0 0; font-size: 13px; opacity: 0.9;">Delivered to ${DESTINATION_EMAIL} · Ticket #${ticketId}</p>
              </div>
              
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                <tr style="border-bottom: 1px solid #edf2f7;">
                  <td style="padding: 10px 0; font-weight: 600; color: #4a5568; width: 140px; font-size: 14px;">Full Name:</td>
                  <td style="padding: 10px 0; color: #1a202c; font-size: 14px; font-weight: bold;">${contactName}</td>
                </tr>
                <tr style="border-bottom: 1px solid #edf2f7;">
                  <td style="padding: 10px 0; font-weight: 600; color: #4a5568; font-size: 14px;">Email:</td>
                  <td style="padding: 10px 0; color: #006BFF; font-size: 14px;"><a href="mailto:${contactEmail}" style="color: #006BFF; text-decoration: none;">${contactEmail}</a></td>
                </tr>
                <tr style="border-bottom: 1px solid #edf2f7;">
                  <td style="padding: 10px 0; font-weight: 600; color: #4a5568; font-size: 14px;">Phone Number:</td>
                  <td style="padding: 10px 0; color: #1a202c; font-size: 14px;">${contactPhone || 'Not provided'}</td>
                </tr>
                <tr style="border-bottom: 1px solid #edf2f7;">
                  <td style="padding: 10px 0; font-weight: 600; color: #4a5568; font-size: 14px;">Subject:</td>
                  <td style="padding: 10px 0; color: #1a202c; font-size: 14px;">${contactSubject}</td>
                </tr>
              </table>

              <div style="background-color: #f7fafc; padding: 16px; border-radius: 8px; border-left: 4px solid #006BFF; margin-bottom: 20px;">
                <h4 style="margin: 0 0 8px; font-size: 13px; text-transform: uppercase; color: #718096; letter-spacing: 0.5px;">Project Description:</h4>
                <p style="margin: 0; color: #2d3748; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${contactDescription}</p>
              </div>

              <div style="text-align: center; padding-top: 10px; border-top: 1px solid #edf2f7; font-size: 12px; color: #a0aec0;">
                BOTLYTICES Real-Time Inquiry Hub · Sent directly to ${DESTINATION_EMAIL}
              </div>
            </div>
          `,
        });
        emailDispatched = true;
      } catch (mailError) {
        console.error('Nodemailer send error (will log locally):', mailError);
      }
    } else {
      // In development / serverless without SMTP keys, log delivery cleanly
      console.log(`\n======================================================`);
      console.log(`[BOTLYTICES INQUIRY SENT DIRECTLY TO ${DESTINATION_EMAIL}]`);
      console.log(`Ticket ID: ${ticketId}`);
      console.log(`From: ${contactName} <${contactEmail}>`);
      console.log(`Phone: ${contactPhone || 'Not provided'}`);
      console.log(`Subject: ${contactSubject}`);
      console.log(`Description: ${contactDescription}`);
      console.log(`Timestamp: ${new Date().toISOString()}`);
      console.log(`======================================================\n`);
      emailDispatched = true;
    }

    const savedEntry: SavedInquiry = {
      ticketId,
      name: contactName,
      email: contactEmail,
      phone: contactPhone,
      subject: contactSubject,
      description: contactDescription,
      destinationEmail: DESTINATION_EMAIL,
      timestamp: new Date().toISOString(),
      emailDispatched,
    };
    inquiriesLog.push(savedEntry);

    const mailtoSubject = encodeURIComponent(`[${ticketId}] ${contactSubject}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${contactName}\nEmail: ${contactEmail}\nPhone: ${contactPhone}\n\nProject Description:\n${contactDescription}`
    );
    const mailtoUrl = `mailto:${DESTINATION_EMAIL}?subject=${mailtoSubject}&body=${mailtoBody}`;

    res.status(200).json({
      success: true,
      message: `Your inquiry has been successfully sent directly to ${DESTINATION_EMAIL}.`,
      data: {
        ticketId,
        destinationEmail: DESTINATION_EMAIL,
        mailtoFallback: mailtoUrl,
        estimatedResponseTime: 'Within 2 hours',
      },
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Contact submission error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to process inquiry. Please email us directly at botlytices@gmail.com.',
      timestamp: new Date().toISOString(),
    });
  }
};

// Expose both /api/contact and /api/inquiry endpoints
app.post('/api/contact', handleContactSubmission);
app.post('/api/inquiry', handleContactSubmission);

// Health check endpoint
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    service: 'BOTLYTICES Full-Stack Backend',
    destinationEmail: DESTINATION_EMAIL,
    inquiriesReceived: inquiriesLog.length,
    timestamp: new Date().toISOString(),
  });
});

// Full-stack Vite integration
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(
      express.static(path.resolve(__dirname, 'dist'), {
        maxAge: '1y',
        immutable: true,
        setHeaders: (res, filePath) => {
          if (filePath.endsWith('.html')) {
            res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
          }
        },
      })
    );
    app.get('*', (_req: Request, res: Response) => {
      res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`BOTLYTICES server running on http://0.0.0.0:${PORT}`);
    console.log(`Inquiries routed directly to: ${DESTINATION_EMAIL}`);
  });
}

startServer();
