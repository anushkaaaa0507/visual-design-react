
import { Star } from 'lucide-react';

interface MeetingRoomProps {
  roomNumber: number;
  positions: number;
  startDate: string;
  endDate: string;
  isSelected?: boolean;
  isMobile: boolean;
}

const MeetingRoom = ({ roomNumber, positions, startDate, endDate, isSelected = false, isMobile }: MeetingRoomProps) => {
  return (
    <div className={`bg-event-card border border-event-border rounded-lg p-4 transition-all duration-200 hover:border-event-primary cursor-pointer ${
      isSelected ? 'border-event-primary bg-gradient-to-r from-event-primary/10 to-event-secondary/10' : ''
    }`}>
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-event-text">Meeting Room {roomNumber}</h3>
        <div className="flex items-center gap-2">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-sm font-medium text-event-text">{positions} Positions</span>
        </div>
      </div>
      
      <div className={`text-sm text-event-muted ${isMobile ? 'space-y-1' : ''}`}>
        <p>Start from: {startDate} - Ends at: {endDate}</p>
      </div>
      
      {isSelected && (
        <div className="mt-3 pt-3 border-t border-event-border">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-event-primary to-event-secondary text-white text-xs font-medium">
            Selected
          </div>
        </div>
      )}
    </div>
  );
};

export default MeetingRoom;
