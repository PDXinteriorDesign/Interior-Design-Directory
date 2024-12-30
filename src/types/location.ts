export interface Location {
  state: string;
  stateSlug: string;
  cities: City[];
  metaDescription: string;
  popularDesignStyles: string[];
  averageCost: string;
}

export interface City {
  name: string;
  slug: string;
  metaDescription: string;
  designerCount: number;
  popularStyles: string[];
  averagePrice: string;
  neighborhoods: string[];
}

export interface LocationPageData {
  title: string;
  description: string;
  breadcrumbs: { text: string; url: string }[];
  content: {
    introduction: string;
    keyPoints: string[];
    conclusion: string;
  };
  faq: Array<{
    question: string;
    answer: string;
  }>;
}