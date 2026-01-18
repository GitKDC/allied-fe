"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Screen from "@/components/layout/Screen";
import MachineSearch from "@/components/inspection/MachineSearch";
import MachineList from "@/components/inspection/MachineList";
import { machines } from "@/config/machine.config";
import { MdOutlineArrowBackIos } from "react-icons/md";

export default function NewInspectionPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const filteredMachines = machines.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (id: string) => {
    router.push(`/form?type=${id}`);
  };

  return (
    <Screen>
      <div className="p-4 space-y-4">
        {/* Header */}
        <div className="flex items-center gap-2">
          <button onClick={() => router.back()} className="text-xl">
            <MdOutlineArrowBackIos />
          </button>
          <h1 className="font-semibold text-sm">New Inspection</h1>
        </div>

        {/* Search */}
        <MachineSearch value={search} onChange={setSearch} />
      </div>
       {/* Machine List */}
        <MachineList machines={filteredMachines} onSelect={handleSelect} />
    </Screen>
  );
}


