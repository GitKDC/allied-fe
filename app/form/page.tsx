"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Screen from "@/components/layout/Screen";
import FormEngine from "@/components/form/FormEngine";
import { formConfigMap } from "@/config/forms";

export default function FormPage() {
  const router = useRouter();
  const params = useSearchParams();

  const type = params.get("type") || "";
  const formConfig = formConfigMap[type];

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  if (!formConfig) {
    return (
      <Screen>
        <div className="p-4 text-center text-red-500">
          Form not found for machine type: {type}
        </div>
      </Screen>
    );
  }

  const onSubmit = (data: any) => {
    console.log("FORM DATA:", data);
  };

  return (
    <Screen>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-4 space-y-6 overflow-y-auto"
      >
        {/* Header */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => router.back()}
            className="text-xl"
          >
            ←
          </button>
          <h1 className="font-semibold text-sm">
            {type.replace(/-/g, " ").toUpperCase()}
          </h1>
        </div>

        <FormEngine
          config={formConfig}
          register={register}
          errors={errors}
          watch={watch}
          setValue={setValue}
        />

        {/* Actions */}
        <div className="flex gap-3 pt-4">
          <button
            type="button"
            className="flex-1 border border-[var(--border-default)] rounded-xl py-3"
          >
            Draft
          </button>
          <button
            type="submit"
            className="flex-1 bg-[var(--color-primary)] text-white rounded-xl py-3"
          >
            Submit
          </button>
        </div>
      </form>
    </Screen>
  );
}
