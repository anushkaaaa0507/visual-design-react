
import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import EventHeader from '../components/EventHeader';
import CoordinatorSection from '../components/CoordinatorSection';
import MeetingRoomList from '../components/MeetingRoomList';
import ContractorSection from '../components/ContractorSection';
import { useMediaQuery } from '../hooks/useMediaQuery';

const Index = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [showSidebar, setShowSidebar] = useState(!isMobile);

  return (
    <div className="min-h-screen animated-gradient">
      <div className="min-h-screen flex w-full">
        {/* Sidebar - Hidden on mobile by default */}
        {(!isMobile || showSidebar) && (
          <div className={`${isMobile ? 'fixed inset-0 z-50 bg-black/50' : ''}`}>
            {isMobile && (
              <div 
                className="absolute inset-0" 
                onClick={() => setShowSidebar(false)}
              />
            )}
            <div className={`${isMobile ? 'relative' : ''}`}>
              <Sidebar />
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Mobile Header */}
          {isMobile && (
            <div className="bg-event-card border-b border-event-border p-4 flex items-center justify-between">
              <button 
                onClick={() => setShowSidebar(true)}
                className="p-2 hover:bg-event-border rounded-lg transition-colors"
              >
                <div className="w-5 h-5 flex flex-col justify-between">
                  <div className="w-full h-0.5 bg-event-text"></div>
                  <div className="w-full h-0.5 bg-event-text"></div>
                  <div className="w-full h-0.5 bg-event-text"></div>
                </div>
              </button>
              <h1 className="text-lg font-semibold text-event-text">Event Management</h1>
              <div className="w-9"></div>
            </div>
          )}

          {/* Event Header */}
          <EventHeader isMobile={isMobile} />

          {/* Content Area */}
          <div className="flex-1 overflow-auto">
            {isMobile ? (
              /* Mobile Layout - Stacked */
              <div className="space-y-6">
                <CoordinatorSection isMobile={isMobile} />
                <div className="border-t border-event-border">
                  <MeetingRoomList isMobile={isMobile} />
                </div>
                <div className="border-t border-event-border">
                  <ContractorSection isMobile={isMobile} />
                </div>
              </div>
            ) : (
              /* Desktop Layout - Split */
              <div className="grid grid-cols-2 h-full">
                {/* Left Column */}
                <div className="border-r border-event-border">
                  <CoordinatorSection isMobile={isMobile} />
                  <div className="border-t border-event-border">
                    <MeetingRoomList isMobile={isMobile} />
                  </div>
                </div>

                {/* Right Column */}
                <div>
                  <ContractorSection isMobile={isMobile} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
