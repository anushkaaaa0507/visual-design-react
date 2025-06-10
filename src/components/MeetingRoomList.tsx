
import MeetingRoom from './MeetingRoom';

interface MeetingRoomListProps {
  isMobile: boolean;
}

const MeetingRoomList = ({ isMobile }: MeetingRoomListProps) => {
  const meetingRooms = [
    { id: 1, positions: 12, startDate: 'Jun 2022', endDate: 'Jul 2022', isSelected: true },
    { id: 2, positions: 8, startDate: 'Jun 2022', endDate: 'Jul 2023' },
    { id: 3, positions: 6, startDate: 'Jun 2022', endDate: 'Jul 2023' },
    { id: 4, positions: 12, startDate: 'Jun 2022', endDate: 'Jul 2023' },
    { id: 5, positions: 8, startDate: 'Jun 2022', endDate: 'Jul 2023' },
  ];

  return (
    <div className={`space-y-4 ${isMobile ? 'p-4' : 'p-6'}`}>
      <h2 className="text-lg font-semibold text-event-text mb-4">Assign Contractor</h2>
      
      <div className={`grid gap-4 ${isMobile ? 'grid-cols-1' : 'grid-cols-1'}`}>
        {meetingRooms.map((room) => (
          <MeetingRoom
            key={room.id}
            roomNumber={room.id}
            positions={room.positions}
            startDate={room.startDate}
            endDate={room.endDate}
            isSelected={room.isSelected}
            isMobile={isMobile}
          />
        ))}
      </div>
    </div>
  );
};

export default MeetingRoomList;
