type SkillCategory = {
  name: string;
  skills: {
    name: string;
    icon: string;
  }[];
};

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    // Add your skill categories here
  ];

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-12">Skills & Technologies</h1>
        <div className="space-y-12">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h2 className="text-2xl font-semibold mb-6">{category.name}</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {category.skills.map((skill, i) => (
                  <div key={i} className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="w-12 h-12 mb-3">
                      {/* Add your icon component or img here */}
                    </div>
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

