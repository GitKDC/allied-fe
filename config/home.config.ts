export const homeConfig = {
  user: {
    name: "Vir Maheta",
    role: "Inspection Engineer",
    avatar: "/images/user.png",
  },

  stats: [
    { label: "Completed", value: 2 },
    { label: "In Progress", value: 2 },
    { label: "Total", value: 4 },
  ],

  action: {
    label: "Start New Inspection",
    route: "/form",
  },

  tabs: [
    { id: "drafts", label: "Drafts", count: 4 },
    { id: "submitted", label: "Submitted", count: 0 },
  ],
};
