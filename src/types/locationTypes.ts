/**
 * Canonical Location Domain Models and TypeScript Contracts for BOTLYTICES.
 * Supports hierarchical navigation: Region -> Country -> Administrative Division -> City.
 */

export type GeographicalRegionId = 'americas' | 'europe' | 'oceania';

export interface ConfirmedService {
  title: string;
  category: 'web-development' | 'it-support' | 'local-presence' | 'ai-automation';
  summary: string;
  deliverables: string[];
}

export interface CityData {
  id: string;
  name: string;
  slug: string;
  path: string; // e.g. /locations/europe/united-kingdom/england/london
  divisionId: string;
  divisionName: string;
  countryId: string;
  countryName: string;
  regionId: GeographicalRegionId;
  regionName: string;
  heroHeadline: string;
  heroSupportingCopy: string;
  intro: string;
  businessContext: string;
  heroImage: string;
  metaTitle: string;
  metaDescription: string;
  confirmedServices: ConfirmedService[];
  howWeWork: {
    step: string;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  nearbyCities: {
    name: string;
    path: string;
    divisionOrCountry: string;
  }[];
  onSiteAvailable: boolean;
  onSiteDetails?: string;
  timezone: string;
}

export interface DivisionData {
  id: string;
  name: string;
  slug: string;
  path: string; // e.g. /locations/europe/united-kingdom/england
  type: string; // 'State' | 'Province' | 'Region' | 'Country / Division' | 'Autonomous Community'
  countryId: string;
  countryName: string;
  regionId: GeographicalRegionId;
  regionName: string;
  headline: string;
  intro: string;
  heroImage: string;
  metaTitle: string;
  metaDescription: string;
  faqs: {
    question: string;
    answer: string;
  }[];
  cities: CityData[];
}

export interface CountryData {
  id: string;
  name: string;
  slug: string;
  path: string; // e.g. /locations/europe/united-kingdom
  regionId: GeographicalRegionId;
  regionName: string;
  code: string;
  headline: string;
  intro: string;
  heroImage: string;
  metaTitle: string;
  metaDescription: string;
  deliveryModel: 'remote-first' | 'hybrid';
  deliveryNote: string;
  faqs: {
    question: string;
    answer: string;
  }[];
  divisions: DivisionData[];
}

export interface RegionData {
  id: GeographicalRegionId;
  name: string; // 'Americas' | 'Europe' | 'Oceania'
  slug: string; // 'americas' | 'europe' | 'oceania'
  path: string; // /locations/americas
  heroHeadline: string;
  heroDescription: string;
  heroImage: string;
  metaTitle: string;
  metaDescription: string;
  overview: string;
  faqs: {
    question: string;
    answer: string;
  }[];
  countries: CountryData[];
}

export interface RegionStats {
  countriesCount: number;
  divisionsCount: number;
  citiesCount: number;
}
