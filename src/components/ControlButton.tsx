type ControlButtonProps = {
  isRunning: boolean;
  setIsRunning: (value: boolean) => void;
};

export default function ControlButton({
  isRunning,
  setIsRunning,
}: ControlButtonProps) {
  return (
    <button
      className="mt-10 w-full bg-spearmint rounded-lg font-medium py-5 text-2xl hover:bg-dark-spearmint transition-colors duration-200 cursor-pointer"
      onClick={() => setIsRunning(!isRunning)}
    >
      {isRunning ? "Pause" : "Start Timer"}
    </button>
  );
}
