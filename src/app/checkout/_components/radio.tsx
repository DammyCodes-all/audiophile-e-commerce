import React from "react";

interface RadioOptionProps {
  label: string;
  value: string;
  selected: string;
  onChange: (value: string) => void;
}

const RadioOption: React.FC<RadioOptionProps> = ({
  label,
  value,
  selected,
  onChange,
}) => {
  const isSelected = selected === value;

  return (
    <div
      onClick={() => onChange(value)}
      className={`flex items-center gap-3 w-full rounded-md border px-4 py-3 cursor-pointer transition-colors 
        ${
          isSelected
            ? "border-orange-500"
            : "border-gray-300 hover:border-orange-400"
        }`}
    >
      {/* Radio Circle */}
      <div
        className={`w-5 h-5 rounded-full border flex items-center justify-center
          ${isSelected ? "border-orange-500" : "border-gray-400"}`}
      >
        {isSelected && (
          <div className="w-2.5 h-2.5 rounded-full bg-orange-500"></div>
        )}
      </div>

      {/* Label Text */}
      <span className="font-medium text-gray-900 select-none">{label}</span>
    </div>
  );
};

export default RadioOption;
