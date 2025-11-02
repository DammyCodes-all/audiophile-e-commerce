import React from "react";

const Input = ({
  error,
  name,
  value,
  placeholder,
  onChange,
}: {
  error?: string | null;
  name: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex flex-row justify-between items-center">
        <label htmlFor={`input-${name}`}>{name}</label>
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`border p-2 rounded-md ${
          error ? "border-red-500" : "border-theme-gray"
        }`}
      />
    </div>
  );
};

export default Input;
