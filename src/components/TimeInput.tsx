import React from "react";

const timeUnits = [
  { id: "minutes", label: "Minutes", defaultValue: 2 },
  { id: "seconds", label: "Seconds", defaultValue: 0 },
];

export default function TimeInput() {
  return (
    <div className="flex items-end gap-x-2">
      {timeUnits.map(({ id, label, defaultValue }, index) => (
        <React.Fragment key={id}>
          <div className="flex flex-col max-w-[193px]">
            <label
              htmlFor={id}
              className="text-[18px] mb-2 font-medium text-center"
            >
              {label}
            </label>
            <input
              type="number"
              id={id}
              defaultValue={defaultValue}
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
