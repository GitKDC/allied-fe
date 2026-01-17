"use client";

import Input from "@/components/ui/Input";
import PasswordInput from "@/components/ui/PasswordInput";

export default function FormRenderer({
  fields,
  register,
  errors,
}: any) {
  return (
    <div className="space-y-4">
      {fields.map((field: any) => {
        if (field.type === "password") {
          return (
            <PasswordInput
              key={field.name}
              label={field.label}
              placeholder={field.placeholder}
              error={errors[field.name]?.message}
              required={field.required}
              {...register(field.name)}
            />
          );
        }

        return (
          <Input
            key={field.name}
            label={field.label}
            placeholder={field.placeholder}
            error={errors[field.name]?.message}
            required={field.required}
            {...register(field.name)}
          />
        );
      })}
    </div>
  );
}
