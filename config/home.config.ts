export const homeConfig = {
  hero: {
    background: "/images/home-bg.png",
    title: "Allied Mechanical Solution",
  },

  user: {
    name: "Vir Maheta",
    role: "Inspection Engineer",
    avatar: "/images/engineer.png",
  },

  stats: [
    { label: "Completed", value: 2 },
    { label: "In Progress", value: 2 },
    { label: "Total", value: 4 },
  ],

  action: {
    label: "Start New Inspection",
    route: "/new-inspection",
  },

  tabs: [
    { id: "drafts", label: "Drafts", count: 4 },
    { id: "submitted", label: "Submitted", count: 0 },
  ],

  drafts: [
    {
      id: 1,
      machine: "Bar Cutting Machine",
      address: "456, Koramangala, Bangalore - 560034",
      client: "Reliance Industry",
      date: "Dec 12, 2025",
    },
    {
      id: 2,
      machine: "Bar Cutting Machine",
      address: "456, Koramangala, Bangalore - 560034",
      client: "Reliance Industry",
      date: "Dec 12, 2025",
    },
    {
      id: 3,
      machine: "Bar Cutting Machine",
      address: "456, Koramangala, Bangalore - 560034",
      client: "Reliance Industry",
      date: "Dec 12, 2025",
    },
 
   
  ],
};
