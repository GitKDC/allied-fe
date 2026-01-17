"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import HeroHeader from "@/components/layout/HeroHeader";
import SearchBar from "@/components/home/SearchBar";
import TabSwitcher from "@/components/home/TabSwitcher";
import InspectionList from "@/components/home/InspectionList";
import Button from "@/components/ui/Button";
import { homeConfig } from "@/config/home.config";
import Screen from "@/components/layout/Screen";
import ProfileSummaryCard from "@/components/home/ProfileSummaryCard";

export default function HomePage() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("drafts");

  return (
    <Screen>
         <div className="bg-[var(--bg-card)] h-screen">
      <HeroHeader
        background="/images/homebg.png"
        title="Allied Mechanical Solution"
      >
        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Search"
        />
      </HeroHeader>

      <div className="px-4 relative z-20 space-y-4 -mt-30">
        <ProfileSummaryCard
            user={homeConfig.user}
            stats={homeConfig.stats}
        />

        <Button onClick={() => router.push(homeConfig.action.route)}>
          {homeConfig.action.label}
        </Button>

        <TabSwitcher
          tabs={homeConfig.tabs}
          active={activeTab}
          onChange={setActiveTab}
        />

        <InspectionList data={homeConfig.drafts} />
      </div>
    </div>
    </Screen>
   
  );
}
