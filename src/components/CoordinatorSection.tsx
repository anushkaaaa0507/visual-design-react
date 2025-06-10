
import { Plus, ChevronDown } from 'lucide-react';

interface CoordinatorSectionProps {
  isMobile: boolean;
}

const CoordinatorSection = ({ isMobile }: CoordinatorSectionProps) => {
  return (
    <div className={`space-y-6 ${isMobile ? 'p-4' : 'p-6'}`}>
      {/* Assign Coordinator */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-event-text">Assign Coordinator</h2>
        
        <div className="relative">
          <select className="w-full bg-event-card border border-event-border rounded-lg px-4 py-3 text-event-text appearance-none focus:ring-2 focus:ring-event-primary focus:border-transparent transition-all">
            <option>Search Coordinator</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-event-muted pointer-events-none" />
        </div>

        <button className="flex items-center gap-2 text-sm text-event-primary hover:text-event-secondary transition-colors">
          <Plus className="w-4 h-4" />
          Add New Coordinator
        </button>
      </div>

      {/* Event Details */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-event-text">Event Name <span className="text-event-muted">(Venue Here)</span></h2>
        
        <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-4`}>
          <div>
            <label className="block text-sm text-event-muted mb-2">Start</label>
            <input 
              type="text" 
              value="12-12-2023" 
              className="w-full bg-event-card border border-event-border rounded-lg px-4 py-3 text-event-text focus:ring-2 focus:ring-event-primary focus:border-transparent transition-all"
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm text-event-muted mb-2">Ends</label>
            <input 
              type="text" 
              value="15-12-2023" 
              className="w-full bg-event-card border border-event-border rounded-lg px-4 py-3 text-event-text focus:ring-2 focus:ring-event-primary focus:border-transparent transition-all"
              readOnly
            />
          </div>
        </div>

        <div>
          <label className="block text-sm text-event-muted mb-2">Venue Address</label>
          <input 
            type="text" 
            value="Some Location 12, Name Here, City, State" 
            className="w-full bg-event-card border border-event-border rounded-lg px-4 py-3 text-event-text focus:ring-2 focus:ring-event-primary focus:border-transparent transition-all"
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default CoordinatorSection;
