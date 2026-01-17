import ConditionTable from "./ConditionTable";
import FieldRenderer from "./FieldRenderer";

interface FormSectionProps {
  title: string;
  fields: any[];
  register: any;
  errors: any;
  watch: any;
  type?: any;
  setValue: any;
}

export default function FormSection({
  title,
  fields,
  register,
  errors,
  watch,
  type,
  setValue,
}: FormSectionProps) {
  const hasConditionFields = fields.some(f => f.type === "condition");
  return (
    <div className="space-y-4">

      {/* Title Rendering */}
      {title && type === "additional-info" ? (
        <div className="flex items-center gap-3 my-4">
          <div className="flex-1 h-[1px] bg-[#D0D5DD]" />
          <p className="text-[16px] font-medium text-[#6f8f4e] whitespace-nowrap">
            {title}
          </p>
          <div className="flex-1 h-[1px] bg-[#D0D5DD]" />
        </div>
      ) : title ? (
        <h2 className="text-sm font-semibold text-black">{title}</h2>
      ) : null}

      {hasConditionFields ? (
        <ConditionTable>
          {fields.map((field) => (
            <FieldRenderer
              key={field.name}
              field={field}
              register={register}
              errors={errors}
              watch={watch}
              setValue={setValue}
            />
          ))}
        </ConditionTable>
      ) : (
        <div className="space-y-4">
          {fields.map((field) => (
            <FieldRenderer
              key={field.name}
              field={field}
              register={register}
              errors={errors}
              watch={watch}
              setValue={setValue}
            />
          ))}
        </div>
      )}
    </div>
  );
}
