import React from "react";

function Input({ type, label, value, onChange }) {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={label} className="text-lg font-semibold">
        {label}
      </label>
      <input
        type={type}
        name={label}
        id={label}
        placeholder={`Enter ${label}`}
        value={value}
        onChange={onChange}
        className="p-2 rounded-lg text-black w-full"
      />
    </div>
  );
}

export default Input;
