"use client";

export default function SubmitConfirmModal({
  open,
  onClose,
  onConfirm,
}: {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white w-[90%] max-w-[300px] rounded-2xl p-4">
        <p className="text-sm font-semibold mb-2">Submit Inspection?</p>
        <p className="text-xs text-gray-600 mb-4">
          Once submitted, this inspection cannot be edited. Make sure all
          information is complete and accurate.
        </p>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 border border-[var(--border-default)] rounded-xl py-2 text-sm"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 bg-[var(--color-primary)] text-white rounded-xl py-2 text-sm"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
