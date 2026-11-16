import express, { Request, Response, NextFunction } from 'express';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import compression from 'compression';
import {
  APP_ROUTES,
  RouteDefinition,
  CANONICAL_ORIGIN,
  normalizeRoutePath,
  buildCanonicalUrl,
} from './src/config/routes.ts';
import { getAllLocationRoutes } from './src/data/locationsData.ts';

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

// Single Source of Truth Route Registry (60 Core/Service/Portfolio/Case Study/Blog + Locations)
const ALL_CANONICAL_ROUTES: RouteDefinition[] = [...APP_ROUTES, ...getAllLocationRoutes()];
const ROUTE_MAP = new Map<string, RouteDefinition>(
  ALL_CANONICAL_ROUTES.map((route) => [normalizeRoutePath(route.path), route])
);

// Single-hop 301 Canonical & Legacy Redirect Registry
const REDIRECT_MAP: Record<string, string> = {
  // Home & Core Aliases
  '/home': '/',
  '/index': '/',
  '/index.html': '/',
  '/process': '/about/process',
  '/website-maintenance': '/services/web-development/website-maintenance',
  '/services/data-analytics': '/services',

  // Legal Aliases
  '/terms': '/terms-of-service',
  '/terms-and-conditions': '/terms-of-service',
  '/privacy': '/privacy-policy',
  '/cookies': '/cookie-policy',
  '/refunds': '/refund-policy',
  '/cancellation-policy': '/refund-policy',

  // Web Development Consolidated Subcategory Aliases
  '/services/web-development/web-design-ui-ux': '/services/web-development/web-design-ui-ux-development',
  '/services/web-development/web-development': '/services/web-development/web-design-ui-ux-development',
  '/services/web-development/web-design': '/services/web-development/web-design-ui-ux-development',
  '/services/web-development/custom-web-development': '/services/web-development/web-design-ui-ux-development',

  // Legacy Descriptive Subcategory Slugs -> Canonical Route Slugs
  '/services/it-support/networking-wifi-solutions': '/services/it-support/networking-wifi',
  '/services/it-support/cybersecurity-data-protection': '/services/it-support/cybersecurity',
  '/services/digital-presence/brand-identity-logo-design': '/services/digital-presence/brand-identity',
  '/services/digital-presence/social-media-content-creation': '/services/digital-presence/social-media-content',
  '/services/digital-presence/google-business-local-presence': '/services/digital-presence/business-profiles',
  '/services/digital-presence/digital-marketing-growth': '/services/digital-presence/digital-marketing',
  '/services/ai-automation/ai-voice-assistants': '/services/ai-automation/voice-assistants',
  '/services/ai-automation/whatsapp-chat-automation': '/services/ai-automation/whatsapp-chat',
  '/services/ai-automation/ai-lead-generation': '/services/ai-automation/lead-generation',
  '/services/ai-automation/workflow-process-automation': '/services/ai-automation/workflow-automation',
  '/services/security-surveillance/cctv-video-surveillance': '/services/security-surveillance/cctv',
  '/services/security-surveillance/access-control-biometrics': '/services/security-surveillance/access-control',
  '/services/security-surveillance/remote-security-monitoring': '/services/security-surveillance/remote-monitoring',
  '/services/security-surveillance/security-maintenance-upgrades': '/services/security-surveillance/maintenance',

  // Legacy Portfolio & Case Study Slugs -> Canonical Project Slugs
  '/portfolio/ssdn-travels': '/portfolio/ssdn-travels-platform',
  '/portfolio/uk-architex': '/portfolio/uk-architex-architecture',
  '/case-studies/ssdn-travels': '/case-studies/ssdn-travels-platform',
  '/case-studies/uk-architex': '/case-studies/uk-architex-architecture',

  // Legacy Blog Slugs -> Canonical Blog Slugs
  '/blog/why-modern-businesses-need-speed-seo-and-aeo-in-2026':
    '/blog/practical-guide-to-seo-and-aeo-ai-search-visibility',
  '/blog/how-ai-voice-assistants-and-whatsapp-automation-drive-revenue':
    '/blog/automating-inbound-leads-with-ai-voice-and-whatsapp',
  '/blog/why-proactive-it-support-saves-thousands-in-downtime':
    '/blog/office-networking-structured-cabling-and-commercial-wifi',
  '/blog/enterprise-cybersecurity-in-the-age-of-remote-work-and-cloud':
    '/blog/defensive-cybersecurity-checklist-for-small-and-midsize-businesses',
  '/blog/local-seo-and-google-business-profile-domination-playbook':
    '/blog/google-business-profile-apple-maps-and-local-presence',
  '/blog/the-future-of-smart-surveillance-ai-cctv-and-biometric-access':
    '/blog/choosing-4k-ip-cctv-and-biometric-access-control-for-business',
};

const escapeHtml = (value: string): string =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const isAssetOrInternalRequest = (reqPath: string): boolean => {
  if (
    reqPath.startsWith('/api/') ||
    reqPath.startsWith('/assets/') ||
    reqPath.startsWith('/src/') ||
    reqPath.startsWith('/@') ||
    reqPath.startsWith('/node_modules/')
  ) {
    return true;
  }
  const ext = path.posix.extname(reqPath).toLowerCase();
  return ext !== '' && ext !== '.html';
};

const buildSubpageFallbackMain = (route: RouteDefinition): string => {
  const parentRoute = route.parentPath ? ROUTE_MAP.get(route.parentPath) : undefined;
  const headingText = route.title.split('|')[0].split('—')[0].trim() || route.breadcrumbLabel;
  const siblingRoutes = ALL_CANONICAL_ROUTES.filter(
    (r) => r.path !== route.path && (r.parentPath === route.path || (route.parentPath && r.parentPath === route.parentPath))
  ).slice(0, 6);

  return `
      <main class="max-w-7xl mx-auto px-4 py-12">
        <nav aria-label="Breadcrumb" class="text-xs text-[#5D687A] mb-4 flex items-center gap-2">
          <a href="/" class="hover:text-[#0052CC]">Home</a>
          ${parentRoute ? `<span>/</span><a href="${escapeHtml(parentRoute.path)}" class="hover:text-[#0052CC]">${escapeHtml(parentRoute.breadcrumbLabel)}</a>` : ''}
          <span>/</span>
          <span class="text-[#0A1020] font-semibold">${escapeHtml(route.breadcrumbLabel)}</span>
        </nav>
        <section class="max-w-3xl mb-12">
          <p class="text-xs font-mono font-bold text-[#0052CC] uppercase tracking-wider mb-2">BOTLYTICES · ${escapeHtml(route.category.replace('-', ' '))}</p>
          <h1 class="text-3xl sm:text-5xl font-extrabold text-[#0A1020] tracking-tight leading-tight mb-4">${escapeHtml(headingText)}</h1>
          <p class="text-lg text-[#5D687A] leading-relaxed mb-6">${escapeHtml(route.description)}</p>
          <div class="flex flex-wrap items-center gap-4">
            <a href="/contact" class="inline-block px-6 py-3 bg-[#006BFF] text-white font-semibold rounded-full">Contact Engineers</a>
            <a href="/services" class="inline-block px-6 py-3 border border-[#006BFF] text-[#0A1020] font-semibold rounded-full">All Services</a>
            <a href="/pricing" class="inline-block px-6 py-3 border border-[#E6EBF2] text-[#0A1020] font-semibold rounded-full">View Pricing</a>
          </div>
        </section>
        ${
          siblingRoutes.length > 0
            ? `<section class="my-10">
          <h2 class="text-xl font-bold text-[#0A1020] mb-4">Related Services &amp; Pages</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
            ${siblingRoutes
              .map(
                (rel) => `<article class="p-5 border border-[#E6EBF2] rounded-xl bg-white">
              <h3 class="text-base font-bold text-[#0A1020] mb-1.5">${escapeHtml(rel.breadcrumbLabel)}</h3>
              <p class="text-sm text-[#5D687A] mb-3">${escapeHtml(rel.description)}</p>
              <a href="${escapeHtml(rel.path)}" class="text-xs font-bold text-[#0052CC]">Explore &rarr;</a>
            </article>`
              )
              .join('\n            ')}
          </div>
        </section>`
            : ''
        }
      </main>`;
};

const buildNotFoundMain = (requestPath: string): string => `
      <main class="max-w-4xl mx-auto px-4 py-20 text-center">
        <p class="text-xs font-mono font-bold text-[#0052CC] uppercase tracking-wider mb-3">HTTP 404 — Page Not Found</p>
        <h1 class="text-3xl sm:text-5xl font-extrabold text-[#0A1020] tracking-tight mb-4">We Could Not Locate That Page</h1>
        <p class="text-base text-[#5D687A] leading-relaxed mb-8">The requested URL (${escapeHtml(requestPath)}) does not correspond to an active page on BOTLYTICES.</p>
        <div class="flex flex-wrap items-center justify-center gap-4">
          <a href="/" class="inline-block px-6 py-3 bg-[#006BFF] text-white font-semibold rounded-full">Return to Homepage</a>
          <a href="/services" class="inline-block px-6 py-3 border border-[#006BFF] text-[#0A1020] font-semibold rounded-full">Browse Services</a>
          <a href="/contact" class="inline-block px-6 py-3 border border-[#E6EBF2] text-[#0A1020] font-semibold rounded-full">Contact Support</a>
        </div>
      </main>`;

const injectRouteHtml = (
  templateHtml: string,
  route: RouteDefinition | undefined,
  requestPath: string
): string => {
  let html = templateHtml;

  if (!route) {
    const title = '404 Page Not Found | BOTLYTICES';
    const description =
      'The requested page could not be found on BOTLYTICES. Explore our web development, IT support, digital presence, AI automation, and security services.';

    html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(title)}</title>`);
    html = html.replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i,
      `<meta name="description" content="${escapeHtml(description)}" />`
    );
    html = html.replace(
      /<meta\s+name="robots"\s+content="[^"]*"\s*\/?>/i,
      `<meta name="robots" content="noindex, follow" />`
    );
    // Remove canonical and og:url on 404 pages so crawlers never confuse 404s with canonicals
    html = html.replace(/<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>\s*/i, '');
    html = html.replace(/<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>\s*/i, '');
    html = html.replace(
      /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i,
      `<meta property="og:title" content="${escapeHtml(title)}" />`
    );
    html = html.replace(
      /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i,
      `<meta property="og:description" content="${escapeHtml(description)}" />`
    );
    html = html.replace(
      /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/i,
      `<meta name="twitter:title" content="${escapeHtml(title)}" />`
    );
    html = html.replace(
      /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/i,
      `<meta name="twitter:description" content="${escapeHtml(description)}" />`
    );
    html = html.replace(/<main[\s\S]*?<\/main>/i, buildNotFoundMain(requestPath));
    return html;
  }

  const canonicalUrl = buildCanonicalUrl(route.path, CANONICAL_ORIGIN);
  const escapedTitle = escapeHtml(route.title);
  const escapedDesc = escapeHtml(route.description);
  const escapedCanonical = escapeHtml(canonicalUrl);

  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapedTitle}</title>`);
  html = html.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="description" content="${escapedDesc}" />`
  );
  html = html.replace(
    /<meta\s+name="robots"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="robots" content="index, follow, max-image-preview:large" />`
  );
  html = html.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i,
    `<link rel="canonical" href="${escapedCanonical}" />`
  );
  html = html.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:title" content="${escapedTitle}" />`
  );
  html = html.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:description" content="${escapedDesc}" />`
  );
  html = html.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:url" content="${escapedCanonical}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:title" content="${escapedTitle}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:description" content="${escapedDesc}" />`
  );

  // Inject route-specific semantic pre-hydration HTML for every non-root canonical page
  if (route.path !== '/') {
    html = html.replace(/<main[\s\S]*?<\/main>/i, buildSubpageFallbackMain(route));
  }

  return html;
};

// 1. Disable server fingerprinting
app.disable('x-powered-by');

// 2. High-performance response compression (Gzip / Brotli)
app.use(compression());

// 3. Robust Production Security Headers Middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  const host = (req.headers['x-forwarded-host'] as string || req.headers.host || '').toLowerCase();
  const isCustomProductionDomain = host.includes('botlytices.com');

  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

  if (isCustomProductionDomain) {
    res.setHeader('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
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
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    return next();
  }

  const forwardedHost = (req.headers['x-forwarded-host'] as string || '').split(',')[0].trim().toLowerCase();
  const rawHost = (forwardedHost || req.headers.host || '').toLowerCase();
  const hostname = rawHost.split(':')[0];
  const forwardedProto = (req.headers['x-forwarded-proto'] as string || '').split(',')[0].trim().toLowerCase();

  // Enforce non-www + HTTPS on production custom domain
  if (hostname === 'www.botlytices.com') {
    return res.redirect(301, `${CANONICAL_ORIGIN}${req.originalUrl}`);
  }
  if (hostname === 'botlytices.com' && forwardedProto === 'http') {
    return res.redirect(301, `${CANONICAL_ORIGIN}${req.originalUrl}`);
  }

  const urlPath = req.path;

  // Clean legacy ?p=/... SPA redirect parameter if present on root
  if (urlPath === '/' && typeof req.query.p === 'string' && req.query.p.trim()) {
    const decoded = decodeURIComponent(req.query.p.replace(/~and~/g, '&'));
    const normalizedP = normalizeRoutePath(decoded);
    const resolvedP = REDIRECT_MAP[normalizedP] || normalizedP;
    if (ROUTE_MAP.has(resolvedP)) {
      return res.redirect(301, resolvedP);
    }
  }

  // Normalize without trailing slash to guarantee single-hop 301 redirects
  const strippedPath = urlPath.length > 1 ? urlPath.replace(/\/+$/, '') || '/' : urlPath;

  if (REDIRECT_MAP[strippedPath]) {
    return res.redirect(301, REDIRECT_MAP[strippedPath]);
  }

  // Remove duplicate trailing slashes on non-root HTML routes (except Vite internal paths)
  if (!isAssetOrInternalRequest(urlPath) && urlPath.length > 1 && urlPath.endsWith('/')) {
    return res.redirect(301, strippedPath);
  }

  next();
});

// 5. Middleware for parsing JSON requests
app.use(express.json());

// Dynamic canonical XML Sitemap synced directly with route registry
app.get('/sitemap.xml', (_req: Request, res: Response) => {
  const xmlEntries = ALL_CANONICAL_ROUTES.map((route) => {
    const loc = buildCanonicalUrl(route.path, CANONICAL_ORIGIN);
    return `  <url>\n    <loc>${escapeHtml(loc)}</loc>\n    <lastmod>2026-11-16</lastmod>\n    <changefreq>${route.changefreq}</changefreq>\n    <priority>${route.priority.toFixed(1)}</priority>\n  </url>`;
  }).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${xmlEntries}\n</urlset>\n`;
  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=3600, must-revalidate');
  res.status(200).send(xml);
});

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
    registeredCanonicalRoutes: ALL_CANONICAL_ROUTES.length,
    inquiriesReceived: inquiriesLog.length,
    timestamp: new Date().toISOString(),
  });
});

// Explicit /404 and /404.html route check before static serving ensures real HTTP 404 status
const isExplicit404Path = (reqPath: string): boolean => reqPath === '/404' || reqPath === '/404.html';

// Full-stack Vite / Production Static + Route-Aware HTML Rendering
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom',
    });

    // Enforce 404 before static public/404.html if directly requested
    app.get(['/404', '/404.html'], async (req: Request, res: Response, next: NextFunction) => {
      try {
        const rawHtml = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
        const pageHtml = await vite.transformIndexHtml(
          req.originalUrl,
          injectRouteHtml(rawHtml, undefined, req.path)
        );
        res.status(404);
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.setHeader('X-Robots-Tag', 'noindex, follow');
        res.setHeader('Cache-Control', 'no-store');
        res.send(pageHtml);
      } catch (err) {
        next(err);
      }
    });

    app.use(vite.middlewares);

    app.get('*', async (req: Request, res: Response, next: NextFunction) => {
      try {
        // Missing static files must return real 404 rather than HTML fallback
        if (isAssetOrInternalRequest(req.path)) {
          res.status(404).setHeader('X-Robots-Tag', 'noindex, follow').end('Not Found');
          return;
        }

        const normalizedPath = normalizeRoutePath(req.path);
        const matchedRoute = isExplicit404Path(normalizedPath) ? undefined : ROUTE_MAP.get(normalizedPath);
        const rawHtml = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
        const tailoredHtml = injectRouteHtml(rawHtml, matchedRoute, normalizedPath);
        const finalHtml = await vite.transformIndexHtml(req.originalUrl, tailoredHtml);

        if (!matchedRoute) {
          res.status(404);
          res.setHeader('X-Robots-Tag', 'noindex, follow');
          res.setHeader('Cache-Control', 'no-store');
        } else {
          res.status(200);
          res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
        }
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.send(finalHtml);
      } catch (err) {
        vite.ssrFixStacktrace(err as Error);
        next(err);
      }
    });
  } else {
    const distDir = path.resolve(__dirname, 'dist');
    const distTemplate = fs.readFileSync(path.resolve(distDir, 'index.html'), 'utf-8');

    app.get(['/404', '/404.html'], (req: Request, res: Response) => {
      res.status(404);
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.setHeader('X-Robots-Tag', 'noindex, follow');
      res.setHeader('Cache-Control', 'no-store');
      res.send(injectRouteHtml(distTemplate, undefined, req.path));
    });

    app.use(
      express.static(distDir, {
        index: false,
        maxAge: '1y',
        immutable: true,
        setHeaders: (res, filePath) => {
          if (filePath.endsWith('.html')) {
            res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
          }
        },
      })
    );

    app.get('*', (req: Request, res: Response) => {
      if (isAssetOrInternalRequest(req.path)) {
        res.status(404).setHeader('X-Robots-Tag', 'noindex, follow').end('Not Found');
        return;
      }

      const normalizedPath = normalizeRoutePath(req.path);
      const matchedRoute = isExplicit404Path(normalizedPath) ? undefined : ROUTE_MAP.get(normalizedPath);
      const finalHtml = injectRouteHtml(distTemplate, matchedRoute, normalizedPath);

      if (!matchedRoute) {
        res.status(404);
        res.setHeader('X-Robots-Tag', 'noindex, follow');
        res.setHeader('Cache-Control', 'no-store');
      } else {
        res.status(200);
        res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
      }
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.send(finalHtml);
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`BOTLYTICES server running on http://0.0.0.0:${PORT}`);
    console.log(`Inquiries routed directly to: ${DESTINATION_EMAIL}`);
    console.log(`Registered ${ALL_CANONICAL_ROUTES.length} canonical indexable routes.`);
  });
}

startServer();
