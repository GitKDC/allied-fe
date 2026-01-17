"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginFormData } from "@/lib/validators";
import { loginFormConfig } from "@/config/login.config";
import FormRenderer from "@/components/form/FormRenderer";
import Button from "@/components/ui/Button";
import MobView from "@/components/layout/Screen";

export default function LoginPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    await new Promise((res) => setTimeout(res, 1000));
    router.push("/home");
  };

  return (
    <MobView>
      <div className="items-center justify-center min-h-screen px-4">
        <div className="flex mt-25 justify-center mb-4">
          <img src="/images/allied.png" className="h-[81px] w-[141px]" />
        </div>

        <div className="w-full max-w-sm bg-[var(--bg-card)] rounded-2xl p-6 shadow-sm">
          <h1 className="text-xl font-inter font-semibold text-center text-[var(--text-primary)]">
            Sign In
          </h1>
          <p className="text-sm font-inter font-medium text-center text-[#4d4d4d] mb-6">
            Enter your employee credentials
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <FormRenderer
              fields={loginFormConfig}
              register={register}
              errors={errors}
            />

            <Button disabled={isSubmitting}>
              {isSubmitting ? "Signing in..." : "Sign In"}
            </Button>
          </form>
        </div>

        <p className="mt-25 text-center text-xs text-[#4d4d4d]">
          © 2026 Allied Machine Solutions
        </p>
      </div>
    </MobView>
  );
}
