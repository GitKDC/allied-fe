"use client";

import type { ReactNode } from "react";

interface MobViewProps {
  children: ReactNode;
  className?: string;
}

export default function MobView({ children, className = "" }: MobViewProps) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div
        className={`relative w-full md:max-w-[360px] h-[800px] overflow-hidden bg-white ${className}`}
      >
        <div className="relative z-10 flex flex-col h-full">
          {children}
        </div>
      </div>
    </div>
  );
}
