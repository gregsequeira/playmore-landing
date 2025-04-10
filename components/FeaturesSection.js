export default function FeaturesSection() {
  const features = [
    {
      title: "Automated Fixture Scheduling",
      description:
        "Easily plan & manage matches with built-in scheduling tools.",
      icon: "📅",
    },
    {
      title: "Player Profiles & Team Management",
      description: "Track player stats, availability & matchday selections.",
      icon: "👥",
    },
    {
      title: "Real-Time Notifications",
      description:
        "Get instant updates for fixtures, team changes, and match results.",
      icon: "🔔",
    },
  ];

  return (
    <div className="py-24 px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          How PlayMore Works
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Streamline your sports management with our powerful features
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 