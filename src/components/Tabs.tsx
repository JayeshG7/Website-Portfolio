interface TabsProps {
  tabs: string[];
  activeTab: string;
  onChange: (tab: string) => void;
}

export default function Tabs({ tabs, activeTab, onChange }: TabsProps) {
  return (
    <div className="border-b border-gray-600">
      <div className="flex space-x-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onChange(tab)}
            className={`
              pb-4 px-1 text-sm font-medium transition-colors relative
              ${activeTab === tab 
                ? 'text-blue-400 font-semibold' 
                : 'text-gray-400 hover:text-gray-200'}
            `}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
} 