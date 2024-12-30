import React from 'react';
import { ListingData } from '../../../types/listing';
import { FileUpload } from '../FileUpload';

interface PortfolioStepProps {
  formData: ListingData;
  updateFormData: (section: keyof ListingData, data: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

export const PortfolioStep: React.FC<PortfolioStepProps> = ({
  formData,
  updateFormData,
  onNext,
  onPrev
}) => {
  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateFormData('portfolio', {
      ...formData.portfolio,
      description: e.target.value
    });
  };

  const handleStyleChange = (style: string) => {
    const updatedStyles = formData.portfolio.style.includes(style)
      ? formData.portfolio.style.filter(s => s !== style)
      : [...formData.portfolio.style, style];
    
    updateFormData('portfolio', {
      ...formData.portfolio,
      style: updatedStyles
    });
  };

  const handleFileUpload = (urls: string[]) => {
    updateFormData('portfolio', {
      ...formData.portfolio,
      images: [...formData.portfolio.images, ...urls]
    });
  };

  const designStyles = [
    'Modern', 'Contemporary', 'Traditional', 'Transitional',
    'Minimalist', 'Industrial', 'Scandinavian', 'Bohemian',
    'Mid-Century Modern', 'Coastal', 'Farmhouse', 'Eclectic'
  ];

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-serif mb-6">Portfolio & Style</h2>

      <div className="space-y-8">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Business Description
          </label>
          <textarea
            rows={4}
            value={formData.portfolio.description}
            onChange={handleDescriptionChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-sage-500"
            placeholder="Tell us about your design philosophy and expertise..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-4">
            Design Styles
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {designStyles.map((style) => (
              <button
                key={style}
                type="button"
                onClick={() => handleStyleChange(style)}
                className={`px-4 py-2 rounded-lg border ${
                  formData.portfolio.style.includes(style)
                    ? 'bg-sage-600 text-white border-sage-600'
                    : 'border-gray-300 hover:border-sage-500'
                }`}
              >
                {style}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-4">
            Portfolio Images
          </label>
          <FileUpload onUploadComplete={handleFileUpload} />
          
          {formData.portfolio.images.length > 0 && (
            <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
              {formData.portfolio.images.map((image, index) => (
                <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                  <img
                    src={image}
                    alt={`Portfolio ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 flex justify-end space-x-4">
        <button
          type="button"
          onClick={onPrev}
          className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Back
        </button>
        <button
          type="button"
          onClick={onNext}
          className="px-6 py-2 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );
};