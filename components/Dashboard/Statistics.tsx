import StatisticCard from "../ui/StatisticCard";

export default function Statistics() {
  return (
    <div className="grid grid-cols-4 gap-5 p-5">
      <StatisticCard />
      <StatisticCard />
      <StatisticCard />
      <StatisticCard />
    </div>
  );
}
