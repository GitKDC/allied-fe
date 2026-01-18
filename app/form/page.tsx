import { Suspense } from "react";
import FormClient from "./FormClient";

export const dynamic = "force-dynamic";

export default function FormPage() {
  return (
    <Suspense fallback={<div className="p-4">Loading form…</div>}>
      <FormClient />
    </Suspense>
  );
}
