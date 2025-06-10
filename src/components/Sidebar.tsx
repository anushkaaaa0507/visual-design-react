
import { ChevronLeft, Users, Calendar, Settings, User, FileText, LogOut } from 'lucide-react';
import { useState } from 'react';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeItem, setActiveItem] = useState('Events');

  const menuItems = [
    { name: 'New Segments', icon: FileText, hasSubMenu: false },
    { name: 'Estimate', icon: Calendar, hasSubMenu: false },
    { name: 'Events', icon: Calendar, hasSubMenu: true },
    { name: 'Portal Requests', icon: User, hasSubMenu: false },
  ];

  const sections = [
    { name: 'Positions', items: [] },
    { name: 'Contractors', items: [] },
    { name: 'Users', items: ['Admin', 'Clients', 'Coordinators'] },
    { name: 'Profile', items: [] },
  ];

  return (
    <div className={`${isExpanded ? 'w-64' : 'w-16'} bg-event-card border-r border-event-border transition-all duration-300 flex flex-col h-screen`}>
      {/* Header */}
      <div className="p-4 border-b border-event-border flex items-center justify-between">
        {isExpanded && (
          <h2 className="text-event-text font-semibold">React Assignment</h2>
        )}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-1 rounded-lg hover:bg-event-border transition-colors"
        >
          <ChevronLeft className={`w-5 h-5 text-event-muted transition-transform ${!isExpanded ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {/* Menu Items */}
      <div className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.name}
            onClick={() => setActiveItem(item.name)}
            className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${
              activeItem === item.name
                ? 'bg-gradient-to-r from-event-primary to-event-secondary text-white'
                : 'text-event-muted hover:text-event-text hover:bg-event-border'
            }`}
          >
            <item.icon className="w-5 h-5 flex-shrink-0" />
            {isExpanded && (
              <>
                <span className="text-sm font-medium">{item.name}</span>
                {item.hasSubMenu && activeItem === item.name && (
                  <ChevronLeft className="w-4 h-4 ml-auto rotate-90" />
                )}
              </>
            )}
          </button>
        ))}

        {/* Sections */}
        {isExpanded && (
          <div className="space-y-4 mt-6">
            {sections.map((section) => (
              <div key={section.name}>
                <h3 className="text-event-muted text-xs font-semibold uppercase tracking-wider mb-2">
                  {section.name}
                </h3>
                {section.items.map((subItem) => (
                  <button
                    key={subItem}
                    className="w-full text-left p-2 text-sm text-event-muted hover:text-event-text hover:bg-event-border rounded-lg transition-colors"
                  >
                    {subItem}
                  </button>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Logout */}
      <div className="p-4 border-t border-event-border">
        <button className="w-full flex items-center gap-3 p-3 text-event-muted hover:text-event-text hover:bg-event-border rounded-lg transition-colors">
          <LogOut className="w-5 h-5 flex-shrink-0" />
          {isExpanded && <span className="text-sm">Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
