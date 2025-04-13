interface CategoryPillsProps {
  categories: {
    id: string;
    label: string;
    color: string;
  }[];
  activeCategory: string;
  onChange: (category: string) => void;
}

const colorClasses = {
  blue: 'bg-blue-500 text-white hover:bg-blue-600',
  purple: 'bg-purple-500 text-white hover:bg-purple-600',
  orange: 'bg-[#E84A27] text-white hover:bg-[#E84A27]/90',
  gray: 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-200'
};

export default function CategoryPills({ categories, activeCategory, onChange }: CategoryPillsProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onChange(category.id)}
          className={`
            px-6 py-2 rounded-full text-sm font-medium transition-all
            ${activeCategory === category.id 
              ? colorClasses[category.color as keyof typeof colorClasses]
              : 'bg-gray-800/50 text-gray-400 hover:bg-gray-800 hover:text-gray-200'
            }
          `}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
} 