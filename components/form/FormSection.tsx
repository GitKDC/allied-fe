import ConditionTable from "./ConditionTable";
import FieldRenderer from "./FieldRenderer";

export default function FormSection({
  title,
  fields,
  register,
  errors,
  watch,
  type,
  setValue,
}: any) {

  const content = (
    <>
      {/* Title Rendering */}
      {title && type === "additional-info" ? (
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-1 h-[1px] bg-[var(--border-default)]" />
          <p className="text-[15px] font-medium text-[var(--color-primary)] whitespace-nowrap">
            {title}
          </p>
          <div className="flex-1 h-[1px] bg-[var(--border-default)]" />
        </div>
      ) : title ? (
        <h2 className="text-sm font-semibold text-black">{title}</h2>
      ) : null}

      {/* Fields */}
      {type === "condition-table" ? (
        <ConditionTable>
          {fields.map((field: any) => (
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
          {fields.map((field: any) => (
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
    </>
  );


  if (type === "additional-info") {
    return (
      <div className="bg-white rounded-2xl shadow-md p-4 space-y-4">
        {content}
      </div>
    );
  }

  // Normal section
  return (
    <div className="space-y-4">
      {content}
    </div>
  );
}
