"use client";

import EyeClosedIcon from "@/public/icons/EyeClosedIcon";
import EyeOpenIcon from "@/public/icons/EyeOpenIcon";
import { LuEyeClosed } from "react-icons/lu";
import { GoEye } from "react-icons/go";

import { forwardRef, useState } from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}
const PasswordInput = forwardRef<HTMLInputElement, Props>(
  ({ label, error, onChange, ...props }, ref) => {
    const [hasValue, setHasValue ] = useState(false)
    const [show, setShow] = useState(false);

    return (
      <div>
        <label className="block text-sm text-[var(--text-secondary)] font-medium mb-1">{label}</label>
        <div className="relative">
          <input
            ref={ref}
            type={show ? "text" : "password"}
            className={`w-full bg-white rounded-xl border border-[var(--border-default)] px-3 py-3 pr-10 text-sm
                placeholder : text-black
              ${error ? "border-red-500" : "focus:border-[var(--border-focus)] focus:outline-none"}`}
            onChange={(e)=>{
              setHasValue(e.target.value.length > 0)
              onChange?.(e);
            }}
            {...props}
          />
          <button
            type="button"
            onClick={() => setShow(!show)}
            className="absolute right-3 top-3 text-gray-400"
          >
            {hasValue && show ? <LuEyeClosed className="cursor-pointer" /> : <GoEye className="cursor-pointer"/> }
          </button>
        </div>
        {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
      </div>
    );
  }
);

PasswordInput.displayName = "PasswordInput"

export default PasswordInput;