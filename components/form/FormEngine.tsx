import FormSection from "./FormSection";

export default function FormEngine({
  config,
  register,
  errors,
  watch,
  setValue,
}: any) {
  return (
    <div className="space-y-8">
      {config.map((section: any, idx: number) => (
        <FormSection
          key={idx}
          title={section.title}
          type={section.type}
          fields={section.fields}
          register={register}
          errors={errors}
          watch={watch}
          setValue={setValue}
        />
      ))}
    </div>
  );
}
