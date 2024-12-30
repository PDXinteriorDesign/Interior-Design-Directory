import React from 'react';
import { HomePage } from '../pages/HomePage';
import { DesignersPage } from '../pages/DesignersPage';
import { DesignerProfilePage } from '../pages/DesignerProfilePage';
import { StateLocationPage } from '../pages/locations/StateLocationPage';
import { CityLocationPage } from '../pages/locations/CityLocationPage';
import { AboutPage } from '../pages/AboutPage';
import { ContactPage } from '../pages/ContactPage';
import { DesignerResourcesPage } from '../pages/DesignerResourcesPage';
import { ListBusinessPage } from '../pages/ListBusinessPage';
import { ProfitCalculatorPage } from '../pages/ProfitCalculatorPage';
import { ArticlesPage } from '../pages/ArticlesPage';
import { BusinessTemplatesPage } from '../pages/BusinessTemplatesPage';
import { ClientIntakeFormPage } from '../pages/templates/ClientIntakeFormPage';
import { ClientAgreementPage } from '../pages/templates/ClientAgreementPage';
import { DesignGuidesPage } from '../pages/DesignGuidesPage';
import { BohemianGuidePage } from '../pages/guides/BohemianGuidePage';
import { IndustrialGuidePage } from '../pages/guides/IndustrialGuidePage';
import { MidCenturyGuidePage } from '../pages/guides/MidCenturyGuidePage';
import { GrowthStrategiesPage } from '../pages/GrowthStrategiesPage';
import { ComingSoonPage } from '../pages/ComingSoonPage';

interface RouteConfig {
  path: string;
  element: React.ReactNode;
}

export const AppRoutes: RouteConfig[] = [
  { path: '/', element: <HomePage /> },
  { path: '/designers', element: <DesignersPage /> },
  { path: '/designer/:id', element: <DesignerProfilePage /> },
  { path: '/location/:state', element: <StateLocationPage /> },
  { path: '/location/:state/:city', element: <CityLocationPage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/contact', element: <ContactPage /> },
  { path: '/for-designers', element: <DesignerResourcesPage /> },
  { path: '/list-with-us', element: <ListBusinessPage /> },
  { path: '/profit-calculator', element: <ProfitCalculatorPage /> },
  { path: '/resources/articles', element: <ArticlesPage /> },
  { path: '/resources/templates', element: <BusinessTemplatesPage /> },
  { path: '/resources/templates/client-intake-form', element: <ClientIntakeFormPage /> },
  { path: '/resources/templates/client-agreement', element: <ClientAgreementPage /> },
  { path: '/resources/guides', element: <DesignGuidesPage /> },
  { path: '/resources/guides/bohemian-chic', element: <BohemianGuidePage /> },
  { path: '/resources/guides/industrial-style', element: <IndustrialGuidePage /> },
  { path: '/resources/guides/mid-century-modern', element: <MidCenturyGuidePage /> },
  { path: '/resources/growth-strategies', element: <GrowthStrategiesPage /> },
  { path: '/community', element: <ComingSoonPage /> }
];