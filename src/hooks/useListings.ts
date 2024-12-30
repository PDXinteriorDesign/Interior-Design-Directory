import { useState, useEffect } from 'react';
import { getListings } from '../lib/firebase/listings';
import { initializePersistence } from '../lib/firebase/persistence';
import { ListingData } from '../types/listing';

interface UseListingsProps {
  status?: string;
  location?: string;
}

export const useListings = ({ status, location }: UseListingsProps = {}) => {
  const [listings, setListings] = useState<(ListingData & { id: string })[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        setLoading(true);
        // Initialize persistence before fetching data
        await initializePersistence();
        const data = await getListings({ status, location });
        setListings(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching listings:', err);
        setError('Failed to fetch listings. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, [status, location]);

  return { listings, loading, error };
};