import { Location } from '../../types/location';
import { california } from './california';
import { oregon } from './oregon';
import { washington } from './washington';
import { nevada } from './nevada';
import { arizona } from './arizona';

export const locations: Location[] = [
  california,
  oregon,
  washington,
  nevada,
  arizona
];

export const getLocationBySlug = (stateSlug: string) => {
  return locations.find(location => location.stateSlug === stateSlug);
};

export const getCityBySlug = (stateSlug: string, citySlug: string) => {
  const state = getLocationBySlug(stateSlug);
  return state?.cities.find(city => city.slug === citySlug);
};