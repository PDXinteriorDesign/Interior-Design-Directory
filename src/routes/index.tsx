import React from 'react';
import { HomePage } from '../pages/HomePage';

import { AboutPage } from '../pages/AboutPage';
import { ContactPage } from '../pages/ContactPage';
import { DesignerResourcesPage } from '../pages/DesignerResourcesPage';
import { ComingSoonPage } from '../pages/ComingSoonPage';
import { ProfitCalculatorPage } from '../pages/ProfitCalculatorPage';
import { GrowthStrategiesPage } from '../pages/GrowthStrategiesPage';
import { DesignGuidesPage } from '../pages/DesignGuidesPage';
import { BohemianGuidePage } from '../pages/guides/BohemianGuidePage';
import { IndustrialGuidePage } from '../pages/guides/IndustrialGuidePage';
import { MidCenturyGuidePage } from '../pages/guides/MidCenturyGuidePage';
import { BusinessTemplatesPage } from '../pages/BusinessTemplatesPage';
import { ClientIntakeFormPage } from '../pages/templates/ClientIntakeFormPage';
import { StateLocationPage } from '../pages/locations/StateLocationPage';
import { CityLocationPage } from '../pages/locations/CityLocationPage';
import { ArticlesPage } from '../pages/ArticlesPage';
import { ListBusinessPage } from '../pages/ListBusinessPage';
import { DesignersPage } from '../pages/DesignersPage';
import { DesignerProfilePage } from '../pages/DesignerProfilePage';



interface RouteConfig {
  path: string;
  element: React.ReactNode;
}

export const AppRoutes: RouteConfig[] = [
  { path: '/', element: <HomePage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/contact', element: <ContactPage /> },
  { path: '/for-designers', element: <DesignerResourcesPage /> },
  { path: '/community', element: <ComingSoonPage /> },
  { path: '/profit-calculator', element: <ProfitCalculatorPage /> },
  { path: '/resources/growth-strategies', element: <GrowthStrategiesPage /> },
  { path: '/resources/guides', element: <DesignGuidesPage /> },
  { path: '/resources/guides/bohemian-chic', element: <BohemianGuidePage /> },
  { path: '/resources/guides/industrial-style', element: <IndustrialGuidePage /> },
  { path: '/resources/guides/mid-century-modern', element: <MidCenturyGuidePage /> },
  { path: '/resources/templates', element: <BusinessTemplatesPage /> },
  { path: '/resources/templates/client-intake-form', element: <ClientIntakeFormPage /> },
  { path: '/location/:state', element: <StateLocationPage /> },
  { path: '/location/:state/:city', element: <CityLocationPage /> },
  { path: '/resources/articles', element: <ArticlesPage /> },
  { path: '/list-with-us', element: <ListBusinessPage /> },
  { path: '/designers', element: <DesignersPage /> },
  { path: '/designer/:id', element: <DesignerProfilePage /> },

];