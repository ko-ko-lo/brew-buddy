type TimerDisplayProps = {
  time: number;
  isRunning: boolean;
};

export default function TimerDisplay({ time, isRunning }: TimerDisplayProps) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const paddedSeconds = seconds.toString().padStart(2, "0");

  return (
    <div
      key={time}
      className={`w-[333px] h-[333px] text-[80px] rounded-full flex items-center justify-center bg-citrus font-semibold text-text-dark transition-transform duration-500 ${
        isRunning ? "animate-pulse-tick" : ""
      }`}
    >
      {minutes}:{paddedSeconds}
    </div>
  );
}
