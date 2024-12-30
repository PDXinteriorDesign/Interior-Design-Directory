import { 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  where, 
  orderBy,
  QueryConstraint
} from 'firebase/firestore';
import { db } from './config';
import { ListingData } from '../../types/listing';

const LISTINGS_COLLECTION = 'listings';

export const createListing = async (data: ListingData) => {
  try {
    const docRef = await addDoc(collection(db, LISTINGS_COLLECTION), {
      ...data,
      status: 'pending',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });
    return docRef.id;
  } catch (error) {
    console.error('Error creating listing:', error);
    throw error;
  }
};

export const getListings = async (filters?: { status?: string; location?: string }) => {
  try {
    const constraints: QueryConstraint[] = [];
    const listingsRef = collection(db, LISTINGS_COLLECTION);

    if (filters?.status) {
      constraints.push(where('status', '==', filters.status));
    }
    
    if (filters?.location) {
      constraints.push(where('businessInfo.location', '==', filters.location));
    }
    
    constraints.push(orderBy('createdAt', 'desc'));
    
    const q = query(listingsRef, ...constraints);
    const snapshot = await getDocs(q);
    
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error getting listings:', error);
    throw error;
  }
};