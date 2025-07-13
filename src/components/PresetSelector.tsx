const selection = [
  { label: "Green Tea", time: 120, timeDisplayed: "2:00" },
  { label: "Black Tea", time: 180, timeDisplayed: "3:00" },
  { label: "Herbal Tea", time: 300, timeDisplayed: "5:00" },
  { label: "Fruit Tea", time: 480, timeDisplayed: "8:00" },
];

type PresetSelectorProbs = {
  setTime: (value: number) => void;
};

export default function PresetSelector({ setTime }: PresetSelectorProbs) {
  return (
    <div className="mt-18 flex flex-wrap gap-x-4">
      {selection.map(({ label, time, timeDisplayed }) => (
        <button
          key={label}
          onClick={() => setTime(time)}
          className="w-[calc(50%-8px)] md:w-[calc(25%-12px)] px-2 mb-4 bg-slate text-porcelain rounded-lg py-5 text-center text-2xl font-light hover:bg-text-dark transition-colors duration-200 cursor-pointer"
        >
          <span className="font-medium block">{timeDisplayed}</span>
          {label}
        </button>
      ))}
    </div>
  );
}
