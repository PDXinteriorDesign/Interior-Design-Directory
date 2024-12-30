import React from 'react';
import { useParams } from 'react-router-dom';
import { designers } from '../data/designers';
import { DesignerProfile } from '../components/DesignerProfile';
import { Navbar } from '../components/Navbar';
import { SEOHead } from '../components/SEOHead';
import { designerSchema } from '../utils/schema';

export const DesignerProfilePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const designer = designers.find(d => d.id === id);

  if (!designer) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Designer Not Found</h1>
            <p className="text-gray-600 mb-8">The designer you're looking for doesn't exist.</p>
            <a 
              href="/designers" 
              className="inline-flex items-center px-6 py-3 bg-coral-500 text-white rounded-lg hover:bg-coral-600 transition-colors"
            >
              Browse All Designers
            </a>
          </div>
        </div>
      </div>
    );
  }

  const schema = designerSchema(designer);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title={`${designer.name} - Interior Designer | The Design Refuge`}
        description={`${designer.name} is a professional interior designer at ${designer.company}. View portfolio, services, and contact information.`}
        schema={schema}
      />
      
      <Navbar />
      
      <main className="pt-6">
        <DesignerProfile designer={designer} />
      </main>
    </div>
  );
};