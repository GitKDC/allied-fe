import Input from "./Input";
import IconButton from "./IconButton";
import { FiCamera } from "react-icons/fi";
import { LuScanBarcode } from "react-icons/lu";

interface Props {
  label: string;
  placeholder?: string;
  error?: string;
  register?: any;
}

export default function InputWithScan({
  label,
  placeholder,
  error,
  register,
}: Props) {
  return (
    <div>
      <label className="block text-sm text-[var(--text-secondary)] font-medium mb-1">
        {label}
      </label>

      <div className="flex gap-2">
        {/* Text Input */}
        <div className="flex-1">
          <Input
            placeholder={placeholder}
            error={error}
            {...register}
          />
        </div>

        <IconButton onClick={() => console.log("Scan clicked")}>
            <LuScanBarcode size={20} />
        </IconButton>
      </div>

      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}
