import StatCard from "./StatCard";

const stats = [
  {
    number: "2450+",
    title: "Sessions Served",
  },
  {
    number: "5",
    title: "EV Stations",
  },
  {
    number: "18,860 kg",
    title: "CO2 Emission preserved",
  },
];

const Stats = () => {
  return (
    <div className="mt-12 md:mt-20">
      <div className="bg-white/[0.04] border border-white/10 rounded-2xl md:rounded-[28px] px-4 sm:px-6 md:px-10 py-6 sm:py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-10">
          {stats.map((item, index) => (
            <div
              key={index}
              className={`
                lg:border-r lg:border-white/20
                ${index === stats.length - 1 ? "lg:border-r-0" : ""}
              `}
            >
              <StatCard number={item.number} title={item.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;

