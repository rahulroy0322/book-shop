import type { FC } from 'react';

import BrowseSection from '@/components/app/home/browseSection';
import HeroSection from '@/components/app/home/heroSection';
import ShowCaseSection from '@/components/app/home/showCaseSection';
import TrandingSection from '@/components/app/home/trandingSection';

const HomePage: FC = () => {
  return (
    <div className="space-y-4">
      <HeroSection />
      <TrandingSection />
      <ShowCaseSection />
      <BrowseSection />
    </div>
  );
};

export default HomePage;
