type TimerDisplayProps = {
  time: number;
};

export default function TimerDisplay({ time }: TimerDisplayProps) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const paddedSeconds = seconds.toString().padStart(2, "0");

  return (
    <div className="w-[333px] h-[333px] text-[80px] rounded-full flex items-center justify-center bg-citrus font-semibold text-text-dark">
      {minutes}:{paddedSeconds}
    </div>
  );
}
