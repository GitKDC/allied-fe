export const suspendedRopePlatformForm = [
  // SECTION 1
  {
    title: "Physical Inspection and Load Testing",
    fields: [
      {
        name: "equipmentId",
        label: "Equipment Id",
        type: "text",
        placeholder: "Enter the Equipment Id",
        required: true,
        icon: "scan",
      },
      {
        name: "inspectionDate",
        label: "Date of Inspection",
        type: "date",
        placeholder: "Select Date",
        required: true,
      },
      {
        name: "occupierName",
        label: "Occupier’s Name",
        type: "modal-select",
        placeholder: "Select Occupier",
        required: true,
        options: [
          "C Z Company",
          "Romell Realtor Developers LLP",
          "3D Megastructure PVT LTD",
          "JK Construction",
          "JK Developers",
          "JK Enterprises",
        ],
      },
      {
        name: "site",
        label: "Site",
        type: "modal-select",
        placeholder: "Select Site",
        required: true,
        options: [
          "Koramangala",
          "Whitefield",
          "Indiranagar",
          "Electronic City",
          "Yelahanka",
        ],
      },
      {
        name: "siteAddress",
        label: "Site Address",
        type: "textarea",
        placeholder: "House/Flat No., Building name, Street",
        required: true,
      },
      {
        name: "location",
        label: "Location",
        type: "text",
        placeholder: "Enter Location",
        required: true,
      },
      {
        name: "clientName",
        label: "Client Name",
        type: "text",
        placeholder: "Enter Client Name",
        required: true,
      },
      {
        name: "serialNo",
        label: "Serial No.",
        type: "text",
        placeholder: "SP20042024",
        required: true,
      },
      {
        name: "make",
        label: "Make",
        type: "text",
        placeholder: "Make",
        required: true,
      },
      {
        name: "model",
        label: "Model",
        type: "text",
        placeholder: "ZPL800",
        required: true,
      },
      {
        name: "manufacturingDate",
        label: "Manufacturing Date",
        type: "date",
        placeholder: "Select Date",
        required: true,
      },
    ],
  },

  // SECTION 2
  {
    title: "",
    fields: [
      {
        name: "operationType",
        label: "Operations",
        type: "radio",
        required: true,
        options: [
          { label: "Manually", value: "manual" },
          { label: "Remote", value: "remote" },
        ],
      },
      {
        name: "workingHeight",
        label: "Working Height",
        type: "inline-text",
        placeholder: "Enter Height",
      },
      {
        name: "platformLength",
        label: "Platform Length",
        type: "inline-text",
        placeholder: "Enter Length",
      },
      {
        name: "ropeDiameter",
        label: "Hoist & Safety Rope Diameter in MM",
        type: "inline-text",
        placeholder: "Enter in mm",
      },
      {
        name: "counterWeight",
        label: "Counter Weight in KG",
        type: "inline-text",
        placeholder: "Enter in Kg",
      },
      {
        name: "safetyLockNo",
        label: "Safety Lock Number",
        type: "inline-text",
        placeholder: "Enter Sr. Number",
      },
      {
        name: "lastTestDate",
        label: "Last Date of Testing",
        type: "inline-text",
        placeholder: "Enter Date",
      },
      {
        name: "loadTest",
        label: "Load Test in KG",
        type: "inline-text",
        placeholder: "Enter in Kg",
      },
      {
        name: "swl",
        label: "SWL",
        type: "inline-text",
      },
      {
        name: "distanceRight",
        label: "Distance Between Two Column-Right",
        type: "inline-text",
        placeholder: "Enter Distance",
      },
      {
        name: "overhangRight",
        label: "Overhang-Right",
        type: "inline-text",
      },
      {
        name: "swlRight",
        label: "SWL-Right Mechanism",
        type: "inline-text",
      },
      {
        name: "distanceLeft",
        label: "Distance Between Two Column-Left",
        type: "inline-text",
        placeholder: "Enter Distance",
      },
    ],
  },

  // SECTION 3 (this is where OK / NOT OK / NA header appears)
  {
    title: "",
    type: "condition-table",   // 👈 only here
    fields: [
      { name: "hoistWireRope", label: "Condition of Hoist Wire Rope", type: "condition" },
      { name: "safetyWireRope", label: "Condition of Safety Wire Rope", type: "condition" },
      { name: "extensionPlatform", label: "Extension Platform", type: "condition" },
      { name: "overTravelLimit", label: "Over Travel / Over Hoist Limit Switch", type: "condition" },
      { name: "stopperPlate", label: "Stopper Plate on Safety Rope", type: "condition" },
      { name: "workPlatform", label: "Condition of Work Platform", type: "condition" },
      { name: "guardRails", label: "Top Rail, Mid Rail, Toe Guard", type: "condition" },
      { name: "nonSkidSurface", label: "Non Skid Surface Of Work Platform", type: "condition" },
      { name: "electricalPanel", label: "Check Condition Of Electrical Panel & Cable", type: "condition" },
    ],
  },

  // SECTION 4
  {
    title: "",
    fields: [
      {
        name: "remark",
        label: "Remark",
        type: "textarea",
        placeholder: "Enter your extra remarks here",
      },
    ],
  },

//SECTION 5 
  {
  title: "",
  fields: [
    {
      name: "images",
      type: "images",
    },
  ],
},

{
  title: "Additional Information",
  type: "additional-info",
  fields: [
    { name: "inspectionBy", label: "Inspection By", subLabel: "(Signature of Inspector)", type: "signature" },

    {
      name: "witnessName",
      label: "Witness Name",
      type: "text",
      placeholder: "Enter Witness Name",
    },
    {
      name: "witnessContact",
      label: "Witness Contact Number",
      type: "text",
      placeholder: "Enter Witness Number",
    },

    { name: "witnessSignature", label: "Witness By", subLabel: "(Signature of Witness)", type: "signature" },

    {
      name: "occupierRepName",
      label: "Occupier’s Representative Name",
      type: "text",
      placeholder: "Enter Witness Name",
    },
    {
      name: "occupierRepContact",
      label: "Occupier’s Representative Contact Number",
      type: "text",
      placeholder: "Enter Witness Number",
    },

    { name: "occupierRepSign", label: "Occupier’s Rep.", subLabel: "(Signature of Occupier)", type: "signature" },

    {
      name: "sendReport",
      label: "Send Report to (Email-Id)",
      type: "text",
      placeholder: "Enter Email Id",
    },
  ],
}

];
