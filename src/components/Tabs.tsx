interface TabsProps {
  tabs: string[];
  activeTab: string;
  onChange: (tab: string) => void;
}

export default function Tabs({ tabs, activeTab, onChange }: TabsProps) {
  const getTabColor = (tab: string) => {
    switch (tab) {
      case "CS Projects":
        return "bg-blue-600 text-white";
      case "Data Analytics":
        return "bg-purple-600 text-white";
      case "Advertising Projects":
        return "bg-[#E84A27] text-white";
      default:
        return "bg-gray-800 text-gray-400";
    }
  };

  const getHoverColor = (tab: string) => {
    switch (tab) {
      case "CS Projects":
        return "hover:bg-blue-700";
      case "Data Analytics":
        return "hover:bg-purple-700";
      case "Advertising Projects":
        return "hover:bg-[#E84A27]/90";
      default:
        return "hover:bg-gray-700";
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`
            rounded-full px-6 py-2 text-sm font-medium tracking-wide transition-all
            ${activeTab === tab 
              ? getTabColor(tab)
              : `bg-gray-800 text-gray-400 ${getHoverColor(tab)} hover:text-gray-200`
            }
          `}
        >
          {tab}
        </button>
      ))}
    </div>
  );
} 