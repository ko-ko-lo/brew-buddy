import React from "react";

const timeUnits = [
  { id: "minutes", label: "Minutes" },
  { id: "seconds", label: "Seconds" },
];

type TimeInputProps = {
  time: number;
  setTime: (value: number) => void;
  setIsRunning: (value: boolean) => void;
};

export default function TimeInput({
  time,
  setTime,
  setIsRunning,
}: TimeInputProps) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [inputValues, setInputValues] = React.useState({
    minutes: minutes.toString().padStart(2, "0"),
    seconds: seconds.toString().padStart(2, "0"),
  });

  // The function takes two parameters:
  // event trigger when an <input> changed &
  // a string that tells which field is being changed
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    // Convert the Input Value to a Number - if the value is NaN, it defaults to 0
    let value = parseInt(e.target.value, 10) || 0;

    // Prevent negative numbers manually
    value = Math.max(0, value);

    const clamped = Math.min(value, 59);

    if (id === "minutes") {
      setTime(clamped * 60 + seconds);
    } else {
      setTime(minutes * 60 + clamped);
    }
  };

  return (
    <div className="flex items-end gap-x-2">
      {timeUnits.map(({ id, label }, index) => (
        <React.Fragment key={id}>
          <div className="flex flex-col flex-1">
            <label
              htmlFor={id}
              className="text-[18px] mb-2 font-medium text-center"
            >
              {label}
            </label>
            <input
              type="number"
              pattern="[0-9]*"
              inputMode="numeric"
              value={inputValues[id as "minutes" | "seconds"]}
              onKeyDown={(e) => {
                const allowedKeys = [
                  "Backspace",
                  "Tab",
                  "ArrowLeft",
                  "ArrowRight",
                  "Delete",
                ];

                if (!/[0-9]/.test(e.key) && !allowedKeys.includes(e.key)) {
                  e.preventDefault();
                }
              }}
              id={id}
              min={0}
              max={id === "seconds" ? 59 : 99}
              onChange={(e) => {
                handleChange(e, id);
                setIsRunning(false);

                let value = e.target.value;

                // Limit to 2 digits
                if (value.length > 2) {
                  value = value.slice(0, 2);
                }

                // Update input state
                setInputValues((prev) => ({ ...prev, [id]: clampedValue }));

                const numericValue = parseInt(value, 10) || 0;
                const clampedValue = Math.min(
                  numericValue,
                  id === "seconds" ? 59 : 99
                );

                const updatedTime =
                  id === "seconds"
                    ? minutes * 60 + clampedValue
                    : clampedValue * 60 + seconds;

                setTime(updatedTime);
                setIsRunning(false);
              }}
              className="rounded-lg border-[2px] border-light-slate text-[32px] p-2 text-center max-h-[77px] focus:outline-none focus:ring-2 focus:ring-light-slate"
            />
          </div>

          {/* Colon after the first input only */}
          {index === 0 && (
            <div className="flex items-center text-[32px] font-medium mb-3">
              :
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
