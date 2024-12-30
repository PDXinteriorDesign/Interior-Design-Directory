import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getLocationBySlug, getCityBySlug } from '../../data/locations';
import { CityHeader } from '../../components/locations/CityHeader';
import { DesignerGrid } from '../../components/locations/DesignerGrid';
import { NeighborhoodSection } from '../../components/locations/NeighborhoodSection';
import { CityFAQ } from '../../components/locations/CityFAQ';
import { citySchema } from '../../utils/schema';
import { Navbar } from '../../components/Navbar';
import { designers } from '../../data/designers';

export const CityLocationPage: React.FC = () => {
  const { state, city } = useParams<{ state: string; city: string }>();
  const location = getLocationBySlug(state || '');
  const cityData = getCityBySlug(state || '', city || '');
  
  const cityDesigners = designers.filter(d => 
    d.location.toLowerCase().includes(cityData?.name.toLowerCase() || '')
  );

  if (!location || !cityData) {
    return <div>Location not found</div>;
  }

  const schema = citySchema(location, cityData);

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Interior Designers in {cityData.name}, OR | The Design Refuge</title>
        <meta name="description" content={cityData.metaDescription} />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>

      <Navbar />

      <main>
        <CityHeader city={cityData} state={location} />
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
          <DesignerGrid designers={cityDesigners} />
          <NeighborhoodSection neighborhoods={cityData.neighborhoods} cityName={cityData.name} />
          <CityFAQ city={cityData.name} state={location.state} />
        </div>
      </main>
    </div>
  );
};