import React from 'react';
import { Phone, Mail, Globe, MapPin, Clock, Award, ArrowLeft } from 'lucide-react';
import { Designer } from '../types';
import { Link } from 'react-router-dom';
import { getStyleColor } from '../utils/styles';

interface DesignerProfileProps {
  designer: Designer;
}

export const DesignerProfile: React.FC<DesignerProfileProps> = ({ designer }) => {
  const mainStyle = designer.specialty[0];
  const styleColor = getStyleColor(mainStyle);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="mb-8">
        <Link 
          to="/designers"
          className="inline-flex items-center text-gray-600 hover:text-coral-500 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to All Designers
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className={`relative h-[400px] rounded-xl overflow-hidden mb-8 border-t-4 ${styleColor.border}`}>
            <img
              src={designer.coverImage}
              alt={designer.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
            <div className="flex items-center mb-6">
              <img
                src={designer.profileImage}
                alt={designer.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-white mr-4"
              />
              <div>
                <h1 className="text-3xl font-bold mb-1">{designer.name}</h1>
                <h2 className="text-xl text-gray-600">{designer.company}</h2>
              </div>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">{designer.description}</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-gray-500 mr-2" />
                <span>{designer.location}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-gray-500 mr-2" />
                <span>{designer.experience} Years</span>
              </div>
              <div className="flex items-center">
                <Award className="w-5 h-5 text-gray-500 mr-2" />
                <span>{designer.rating} Rating</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
            <h3 className="text-xl font-semibold mb-4">Portfolio</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {designer.portfolioImages.map((image, index) => (
                <div key={index} className="relative aspect-square rounded-lg overflow-hidden group">
                  <img
                    src={image}
                    alt={`Portfolio ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-xl p-6 shadow-lg sticky top-4">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <a
                href={`tel:${designer.contact.phone}`}
                className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
              >
                <Phone className="w-5 h-5 text-coral-500 mr-3" />
                <span className="group-hover:text-coral-500 transition-colors">{designer.contact.phone}</span>
              </a>
              <a
                href={`mailto:${designer.contact.email}`}
                className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
              >
                <Mail className="w-5 h-5 text-coral-500 mr-3" />
                <span className="group-hover:text-coral-500 transition-colors">{designer.contact.email}</span>
              </a>
              <a
                href={`https://${designer.contact.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
              >
                <Globe className="w-5 h-5 text-coral-500 mr-3" />
                <span className="group-hover:text-coral-500 transition-colors">{designer.contact.website}</span>
              </a>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4">Services</h3>
              <div className="space-y-2">
                {designer.services.map((service, index) => (
                  <div
                    key={index}
                    className="p-2 bg-gray-50 rounded-lg text-gray-700"
                  >
                    {service}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4">Specialties</h3>
              <div className="flex flex-wrap gap-2">
                {designer.specialty.map((spec, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 rounded-full text-sm ${getStyleColor(spec).badge}`}
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};