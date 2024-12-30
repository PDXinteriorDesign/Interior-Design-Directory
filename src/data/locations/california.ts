import { Location } from '../../types/location';

export const california: Location = {
  state: 'California',
  stateSlug: 'california',
  metaDescription: 'Find top interior designers in California. Browse portfolios, read reviews, and connect with the best interior design professionals across California cities.',
  popularDesignStyles: ['Modern', 'Contemporary', 'Mediterranean', 'Coastal'],
  averageCost: '$150-300/hour',
  cities: [
    {
      name: 'Los Angeles',
      slug: 'los-angeles',
      metaDescription: 'Connect with Los Angeles\'s best interior designers. From Hollywood glamour to modern minimalism, find the perfect designer for your LA home.',
      designerCount: 150,
      popularStyles: ['Contemporary', 'Modern', 'Luxury'],
      averagePrice: '$200-400/hour',
      neighborhoods: ['Beverly Hills', 'Santa Monica', 'West Hollywood', 'Pasadena']
    },
    {
      name: 'San Francisco',
      slug: 'san-francisco',
      metaDescription: 'Discover San Francisco\'s top interior designers specializing in modern, Victorian, and tech-forward design solutions for Bay Area homes.',
      designerCount: 120,
      popularStyles: ['Modern', 'Contemporary', 'Victorian'],
      averagePrice: '$175-350/hour',
      neighborhoods: ['Pacific Heights', 'Marina', 'SOMA', 'Noe Valley']
    }
  ]
};