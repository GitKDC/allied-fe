"use client";

import { useRef, useEffect } from "react";

interface SignatureModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (data: string) => void;
}

export default function SignatureModal({ open, onClose, onSave }: SignatureModalProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const drawing = useRef(false);

  useEffect(() => {
    if (!open) return;
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
  }, [open]);

  const startDraw = (e: any) => {
    drawing.current = true;
    draw(e);
  };

  const endDraw = () => {
    drawing.current = false;
  };

  const draw = (e: any) => {
    if (!drawing.current) return;
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const rect = canvas.getBoundingClientRect();
    const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
    const y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const handleSave = () => {
    const canvas = canvasRef.current!;
    onSave(canvas.toDataURL());
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-[90%] max-w-[340px] bg-white rounded-2xl p-4 relative">

        {/* Header */}
        <div className="flex justify-between items-center mb-3">
          <p className="font-medium text-sm">Sign here</p>
          <button onClick={onClose} className="text-xl">✕</button>
        </div>

        {/* Canvas */}
        <div className="bg-[var(--bg-app)] rounded-xl overflow-hidden">
          <canvas
            ref={canvasRef}
            width={300}
            height={320}
            className="touch-none"
            onMouseDown={startDraw}
            onMouseMove={draw}
            onMouseUp={endDraw}
            onMouseLeave={endDraw}
            onTouchStart={startDraw}
            onTouchMove={draw}
            onTouchEnd={endDraw}
          />
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-4">
          <button
            onClick={clearCanvas}
            className="flex-1 border border-[var(--border-default)] rounded-xl py-2 text-lg"
          >
            ✕
          </button>

          <button
            onClick={handleSave}
            className="flex-1 bg-[var(--color-primary)] text-white rounded-xl py-2 text-lg"
          >
            ✓
          </button>
        </div>
      </div>
    </div>
  );
}
