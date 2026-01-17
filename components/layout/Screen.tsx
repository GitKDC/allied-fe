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
        className={`relative w-full md:max-w-[360px] h-screen overflow-y-auto bg-white ${className}`}
      >
        <div className="relative z-10 flex flex-col h-full overflow-y-auto bg-[var(--bg-card)]">
          {children}
        </div>
      </div>
    </div>
  );
}
