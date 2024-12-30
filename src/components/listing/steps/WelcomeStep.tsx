import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

export const WelcomeStep: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <h1 className="text-3xl font-serif mb-6">Join The Design Refuge Directory</h1>
      <p className="text-xl text-gray-600 mb-12">
        Showcase your design business to thousands of potential clients
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-12 text-left">
        <div className="bg-sage-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">What You Get</h3>
          <ul className="space-y-3">
            {[
              'Professional profile page',
              'Portfolio showcase',
              'Client review system',
              'Direct inquiries',
              'SEO optimization',
              'Location-based visibility'
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <Check className="w-5 h-5 text-sage-600 mr-2 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-sage-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Simple Process</h3>
          <ul className="space-y-3">
            {[
              'Fill in your business details',
              'Upload your best work',
              'Set your service areas',
              'Review your profile',
              'Complete payment',
              'Go live instantly'
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <ArrowRight className="w-5 h-5 text-sage-600 mr-2 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-sage-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-2">Annual Listing Fee: $99</h3>
        <p className="text-gray-600">Invest in your business growth</p>
      </div>

      <button
        onClick={onNext}
        className="inline-flex items-center px-6 py-3 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-colors"
      >
        Get Started
        <ArrowRight className="w-5 h-5 ml-2" />
      </button>
    </div>
  );
};