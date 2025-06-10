
import { ArrowLeft, Users, Calendar, Settings } from 'lucide-react';

interface EventHeaderProps {
  isMobile: boolean;
}

const EventHeader = ({ isMobile }: EventHeaderProps) => {
  return (
    <div className={`bg-event-card border-b border-event-border ${isMobile ? 'p-4' : 'p-6'}`}>
      <div className="flex items-center gap-4 mb-6">
        <button className="p-2 hover:bg-event-border rounded-lg transition-colors">
          <ArrowLeft className="w-5 h-5 text-event-text" />
        </button>
        <div>
          <h1 className="text-xl font-semibold text-event-text">Event Name</h1>
          <p className="text-sm text-event-muted">(Venue Details)</p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className={`flex ${isMobile ? 'gap-2' : 'gap-4'} border-b border-event-border`}>
        <button className="pb-3 px-2 text-sm font-medium text-event-text border-b-2 border-event-primary">
          Event Details
        </button>
        <button className="pb-3 px-2 text-sm font-medium text-event-muted hover:text-event-text transition-colors bg-gradient-to-r from-event-primary to-event-secondary px-4 py-1 rounded-t-lg">
          Assign Coordinator/Coordinator
        </button>
        <button className="pb-3 px-2 text-sm font-medium text-event-muted hover:text-event-text transition-colors">
          Session Management
        </button>
        <button className="pb-3 px-2 text-sm font-medium text-event-muted hover:text-event-text transition-colors">
          Generate SOW
        </button>
      </div>
    </div>
  );
};

export default EventHeader;
