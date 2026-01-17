import Input from "@/components/ui/Input";
import TextArea from "@/components/ui/TextArea";
import Select from "@/components/ui/Select";
import DateInput from "@/components/ui/DateInput";
import IconButton from "@/components/ui/IconButton";
import SelectInput from "../ui/SelectInput";
import RadioGroup from "../ui/RadioGroup";
import InlineInput from "@/components/ui/InlineInput";
import ConditionRow from "./ConditionRow";
import ImageUploader from "../ui/ImageUploader";
import SignatureButton from "../ui/SignatureButton";
import { useState } from "react";
import SignatureModal from "../ui/SignatureModal";


export default function FieldRenderer({
  field,
  register,
  errors,
  watch,
  setValue,
}: any) {
  const commonProps = {
    label: field.label,
    placeholder: field.placeholder,
    required: field.required,
    error: errors[field.name]?.message,
  };

  switch (field.type) {
    case "textarea":
      return <TextArea {...commonProps} {...register(field.name)} />;

    case "select":
      return <Select {...commonProps} {...register(field.name)} />;

    case "date":
      return (
        <DateInput
          label={field.label}
          required={field.required}
          value={watch(field.name)}
          onChange={(v: string) => setValue(field.name, v)}
          error={errors[field.name]?.message}
        />
      );
    case "modal-select":
      return (
        <SelectInput
          label={field.label}
          required={field.required}
          value={watch(field.name)}
          placeholder={field.placeholder}
          options={field.options}
          error={errors[field.name]?.message}
          onChange={(v) => setValue(field.name, v)}
        />
      );

      
      case "radio":
        return (
          <RadioGroup
            label={field.label}
            required={field.required}
            value={watch(field.name)}
            options={field.options}
            onChange={(v) => setValue(field.name, v)}
          />
        );

      case "inline-text":
        return (
          <InlineInput
            label={field.label}
            placeholder={field.placeholder}
            {...register(field.name)}
          />
        );

        case "condition":
          return (
            <ConditionRow
              label={field.label}
              value={watch(field.name)}
              onChange={(v) => setValue(field.name, v)}
            />
          );

        case "images":
        return (
          <ImageUploader
            files={watch(field.name) || []}
            onChange={(files) => setValue(field.name, files)}
          />
        );


      case "signature": {
        const [open, setOpen] = useState(false);
        const value = watch(field.name); // this will be the saved base64 image

        return (
          <>
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm text-[var(--text-secondary)] font-medium">
                  {field.label}
                </p>
                {field.subLabel && (
                  <p className="text-xs text-black">
                    {field.subLabel}
                  </p>
                )}
              </div>

              {/* Signature Box */}
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="
                  w-[140px] h-[48px]
                  border border-[var(--border-default)]
                  rounded-xl bg-white
                  flex items-center justify-center
                  overflow-hidden
                "
              >
                {value ? (
                  <img
                    src={value}
                    alt="signature"
                    className="max-h-full object-contain"
                  />
                ) : (
                  <span className="text-sm text-[var(--text-muted)]">
                    Sign here
                  </span>
                )}
              </button>
            </div>

            <SignatureModal
              open={open}
              onClose={() => setOpen(false)}
              onSave={(data) => {
                setValue(field.name, data);
                setOpen(false);
              }}
            />
          </>
        );
      }



    default:
      return (
        <Input
          {...commonProps}
          {...register(field.name)}
          rightIcon={field.icon === "scan" ? <IconButton /> : null}
        />
      );
  }
}
