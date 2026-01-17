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

      case "signature":
        return (
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm text-[var(--text-secondary)] font-medium">
                {field.label}
              </p>
              {field.subLabel && (
                <p className="text-xs text-[var(--text-muted)]">
                  {field.subLabel}
                </p>
              )}
            </div>

            <button
              type="button"
              className="px-4 py-2 h-[48px] w-[138px] border border-[var(--border-default)] bg-[var-(--bg-signCard)] rounded-xl text-sm text-[var(--text-muted)] "
            >
              Sign here
            </button>
          </div>
        );


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
