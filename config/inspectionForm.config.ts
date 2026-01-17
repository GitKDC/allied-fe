// config/inspectionForm.config.ts
export const inspectionForm = [
  {
    section: "Physical Inspection",
    fields: [
      { name: "equipmentId", label: "Equipment Id", type: "text", required: true },
      { name: "inspectionDate", label: "Date of Inspection", type: "date", required: true },
      { name: "occupier", label: "Occupiers Name", type: "select", options: [] },
    ],
  },
];
