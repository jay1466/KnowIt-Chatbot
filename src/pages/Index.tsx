import React, { useState } from 'react';
import { HeroSection } from '@/components/LandingPage/HeroSection';
import { ChatWidget } from '@/components/ChatBot/ChatWidget';
import { AdminPanel } from '@/components/AdminDashboard/AdminPanel';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [currentView, setCurrentView] = useState<'landing' | 'admin'>('landing');

  return (
    <div className="relative">
      {currentView === 'landing' && (
        <>
          <HeroSection currentView={currentView} setCurrentView={setCurrentView} />
          <ChatWidget />
        </>
      )}
      
      {currentView === 'admin' && (
        <>
          <AdminPanel />
        </>
      )}
    </div>
  );
};

export default Index;
