import React from 'react';
import { Navbar } from '../components/Navbar';
import { SEOHead } from '../components/SEOHead';
import { designers } from '../data/designers';
import { DesignerCard } from '../components/DesignerCard';
import { designerSchema } from '../utils/schema';
import { useListings } from '../hooks/useListings';
import { Loader } from 'lucide-react';

export const DesignersPage: React.FC = () => {
  const { listings, loading, error } = useListings({ status: 'approved' });

  // Convert listings to designer format
  const listingDesigners = listings.map(listing => ({
    id: listing.id,
    name: listing.businessInfo.name,
    company: listing.businessInfo.company,
    rating: 5, // Default rating for new listings
    reviewCount: 0,
    specialty: listing.portfolio.style,
    description: listing.portfolio.description,
    personalBio: listing.portfolio.description,
    profileImage: listing.portfolio.images[0] || '/placeholder-profile.jpg',
    coverImage: listing.portfolio.images[1] || '/placeholder-cover.jpg',
    portfolioImages: listing.portfolio.images,
    location: listing.businessInfo.location,
    experience: 1, // Default experience for new listings
    contact: {
      phone: listing.businessInfo.phone,
      email: listing.businessInfo.email,
      website: listing.businessInfo.website
    },
    services: listing.services.offerings,
    priceRange: listing.services.priceRange
  }));

  // Combine static and dynamic designers
  const allDesigners = [...designers, ...listingDesigners];

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Interior Designers Directory",
    "description": "Browse our curated selection of top interior designers and find the perfect match for your project.",
    "hasPart": allDesigners.map(designer => designerSchema(designer))
  };
  console.log({ listings, loading, error }); // To debug useListings
  console.log({ listingDesigners }); // To debug the transformed listings
  console.log({ designers }); // To debug the static designers
  console.log(allDesigners.map(designer => designerSchema(designer))); // To debug the schema



  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Browse Interior Designers | The Design Refuge"
        description="Discover talented interior designers in your area. Browse portfolios, read reviews, and find the perfect designer for your project."
        schema={schema}
        canonicalUrl="/designers"
      />

      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Our Interior Designers</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse our curated selection of top interior designers and find the perfect match for your project
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <Loader className="w-8 h-8 animate-spin text-sage-600" />
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-600">{error}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allDesigners.map((designer) => (
              <DesignerCard key={designer.id} designer={designer} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};