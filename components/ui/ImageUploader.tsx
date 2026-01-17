"use client";

import { useRef } from "react";

interface ImageUploaderProps {
  files: File[];
  onChange: (files: File[]) => void;
}

export default function ImageUploader({ files, onChange }: ImageUploaderProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    onChange([...files, ...Array.from(e.target.files)]);
  };

  return (
    <div className="space-y-2">
      <p className="text-sm font-medium text-black">Images</p>

      <div
        onClick={() => inputRef.current?.click()}
        className="
          w-full border border-dashed border-[var(--border-default)]
          rounded-xl p-6 text-center cursor-pointer
          bg-white
        "
      >
        <p className="text-sm text-[var(--text-primary)] font-medium">
          Add Photos
        </p>
        <p className="text-xs text-gray-400">
          Upload images or videos of this Machine
        </p>
      </div>

      <input
        ref={inputRef}
        type="file"
        multiple
        hidden
        accept="image/*,video/*"
        onChange={handleSelect}
      />
    </div>
  );
}
