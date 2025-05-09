import { LuShield, LuSettings, LuLock, LuLightbulb } from "react-icons/lu";

const features = [
  { icon: <LuShield size={36} />, title: "Продвинутые технологии" },
  { icon: <LuSettings size={36} />, title: "Гибкая настройка" },
  { icon: <LuLock size={36} />, title: "Безопасность и контроль" },
  { icon: <LuLightbulb size={36} />, title: "Энергоэффективно" },
];

export default function FeatureList() {
  return (
    <section className="mt-16 mb-16">
      <h2 className="text-2xl font-semibold mb-8">Особенности</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {features.map((f) => (
          <div
            key={f.title}
            className="flex flex-col items-center bg-gray-50 rounded-2xl shadow-sm p-6 transition hover:shadow-md"
          >
            <span className="mb-3 text-gray-900">{f.icon}</span>
            <span className="text-center text-gray-700 text-base font-medium">{f.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
} 