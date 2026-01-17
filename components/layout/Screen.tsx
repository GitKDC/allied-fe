"use client";

import type { ReactNode } from "react";

interface ScreenProps {
  children: ReactNode;
  className?: string;
}

export default function Screen({ children, className = "" }: ScreenProps) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div
        className={`relative w-full md:max-w-[360px] h-screen overflow-hidden bg-white ${className}`}
      >
        <div className="relative z-10 flex flex-col h-full">
          {children}
        </div>
      </div>
    </div>
  );
}
