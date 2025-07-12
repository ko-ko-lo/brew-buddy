const selection = [
  { label: "Green Tea", time: "2:00" },
  { label: "Black Tea", time: "3:00" },
  { label: "Herbal Tea", time: "5:00" },
  { label: "Fruit Tea", time: "8:00" },
];

export default function PresetSelector() {
  return (
    <div className="mt-18 flex flex-wrap gap-x-4">
      {selection.map(({ label, time }) => (
        <button
          key={label}
          className="w-[calc(50%-8px)] md:w-[calc(25%-12px)] px-2 mb-4 bg-slate text-porcelain rounded-lg py-5 text-center text-2xl font-light hover:bg-text-dark transition-colors duration-200 cursor-pointer"
        >
          <span className="font-medium block">{time}</span>
          {label}
        </button>
      ))}
    </div>
  );
}
