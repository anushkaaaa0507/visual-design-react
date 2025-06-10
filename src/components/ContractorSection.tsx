
interface ContractorSectionProps {
  isMobile: boolean;
}

const ContractorSection = ({ isMobile }: ContractorSectionProps) => {
  const positions = [
    { camera: 'Camera (Video)', time: '8 am - 7 pm', info: 'LP default', quantity: 20 },
    { camera: 'Camera (Video)', time: '8 am - 7 pm', info: 'LP default', quantity: 20 },
    { camera: 'Camera (Video)', time: '9 am - 7 pm', info: 'LP default', quantity: 20 },
    { camera: 'Camera (Video)', time: '8 am - 7 pm', info: 'LP default', quantity: 20 },
    { camera: 'Camera (Video)', time: '8 am - 7 pm', info: 'LP default', quantity: 20 },
    { camera: 'Camera (Video)', time: '8 am - 7 pm', info: 'LP default', quantity: 20 },
    { camera: 'Camera (Video)', time: '8 am - 7 pm', info: 'LP default', quantity: 20 },
  ];

  return (
    <div className={`space-y-6 ${isMobile ? 'p-4' : 'p-6'}`}>
      <h2 className="text-lg font-semibold text-event-text">Assign Contractor</h2>

      {/* Positions Table */}
      <div className="bg-event-card border border-event-border rounded-lg overflow-hidden">
        <div className={`${isMobile ? 'overflow-x-auto' : ''}`}>
          <table className="w-full">
            <thead className="bg-event-border/50">
              <tr>
                <th className="text-left p-4 text-sm font-medium text-event-text">Positions</th>
                <th className="text-left p-4 text-sm font-medium text-event-text">Time</th>
                <th className="text-left p-4 text-sm font-medium text-event-text">Info</th>
                <th className="text-left p-4 text-sm font-medium text-event-text">Quantity</th>
                <th className="text-left p-4 text-sm font-medium text-event-text"></th>
              </tr>
            </thead>
            <tbody>
              {positions.map((position, index) => (
                <tr key={index} className="border-t border-event-border">
                  <td className="p-4 text-sm text-event-text">{position.camera}</td>
                  <td className="p-4 text-sm text-event-muted">{position.time}</td>
                  <td className="p-4 text-sm text-event-muted">{position.info}</td>
                  <td className="p-4 text-sm text-event-muted">{position.quantity}</td>
                  <td className="p-4">
                    <select className="bg-event-card border border-event-border rounded px-3 py-1 text-sm text-event-text">
                      <option>Select Contractor</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ContractorSection;
