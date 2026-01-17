"use client";

import { useRef } from "react";

interface ImageUploaderProps {
  files: File[];
  onChange: (files: File[]) => void;
  max?: number;
}

export default function ImageUploader({
  files,
  onChange,
  max = 5,
}: ImageUploaderProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const selected = Array.from(e.target.files);
    const updated = [...files, ...selected].slice(0, max);
    onChange(updated);
  };

  return (
    <div className="space-y-2">
      {/* Title + Counter */}
      <div className="flex justify-between items-center">
        <p className="text-sm font-medium text-black">Images</p>
        <span className="text-xs bg-gray-100 px-2 py-1 rounded-md">
          {files.length}/{max}
        </span>
      </div>

      {/* Upload Box */}
      <div className="bg-white rounded-xl shadow-sm p-3">
        <div className="flex gap-2">
          {/* Main Image */}
          {files[0] && (
            <div className="w-20 h-20 rounded-lg overflow-hidden border">
              <img
                src={URL.createObjectURL(files[0])}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Small thumbnails */}
          {files.slice(1, 3).map((file, idx) => (
            <div
              key={idx}
              className="w-12 h-12 rounded-lg overflow-hidden border"
            >
              <img
                src={URL.createObjectURL(file)}
                className="w-full h-full object-cover"
              />
            </div>
          ))}

          {/* Add Button */}
          {files.length < max && (
            <div
              onClick={() => inputRef.current?.click()}
              className="w-12 h-12 rounded-lg border border-dashed flex items-center justify-center cursor-pointer text-gray-400"
            >
              +
            </div>
          )}
        </div>
      </div>

      <input
        ref={inputRef}
        type="file"
        hidden
        multiple
        accept="image/*"
        onChange={handleSelect}
      />
    </div>
  );
}
