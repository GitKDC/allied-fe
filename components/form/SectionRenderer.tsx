import FieldRenderer from "./FieldRenderer";

export default function FormSection({
  title,
  fields,
  register,
  errors,
}: any) {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-sm text-[var(--text-secondary)]">
        {title}
      </h2>

      {fields.map((field: any) => (
        <FieldRenderer
          key={field.name}
          field={field}
          register={register}
          errors={errors}
        />
      ))}
    </div>
  );
}
