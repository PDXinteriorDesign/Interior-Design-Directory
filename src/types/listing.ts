export interface BusinessInfo {
  name: string;
  email: string;
  phone: string;
  website: string;
  company: string;
  location: string;
}

export interface Portfolio {
  description: string;
  images: string[];
  style: string[];
}

export interface Services {
  offerings: string[];
  areas: string[];
  priceRange: string;
}

export interface ListingData {
  businessInfo: BusinessInfo;
  portfolio: Portfolio;
  services: Services;
}