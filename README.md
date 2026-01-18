# Allied Machine Solution — Frontend

This repository contains the **frontend implementation** of the Allied Machine Solution Inspection App, built using **Next.js**, **TypeScript**, and **TailwindCSS**.  
This was developed as a **48-hour take-home assignment** following a Figma design provided by the company.

---

## 📌 Live Features

✅ Login screen (validated, dynamic)  
✅ Home screen with machine inspection status  
✅ Drafts / Submitted tab switcher  
✅ New Inspection machine picker with search  
✅ Dynamic inspection form driven by JSON config  
✅ Inline / modal fields: date, selects, image uploads  
✅ Signature capture (canvas + preview)  
✅ Submit confirmation modal  
✅ LocalStorage data handling  
✅ Fully responsive mobile UI matching Figma

---

## 🚀 Tech Stack

- **Next.js 13+ (App Router)**
- **TypeScript**
- **TailwindCSS**
- **React Hook Form**
- Reusable UI components
- Local storage simulation for inspection persistence

---

## 📁 Project Structure

src/
├─ app/
│ ├─ login/ # Login UI
│ ├─ home/ # Home + inspection list
│ ├─ new-inspection/ # Machine selection
│ ├─ form/ # Dynamic inspection form
├─ components/
│ ├─ ui/ # Reusable UI components
│ ├─ form/ # Form engine + sections
│ ├─ layout/ # Layout wrappers (mobile view)
├─ config/
│ ├─ machine.config.ts # Machines list
│ ├─ forms.ts # Inspection form configurations
├─ lib/
│ ├─ validators.ts # Zod schemas for validation
├─ public/
│ ├─ images/ # Assets (logo, backgrounds)



---

## 📌 How It Works

### 🧠 Dynamic Form Engine

The form is generated using a JSON config:

```ts
formConfigMap: {
  "suspended-rope-platform-srp": suspendedRopePlatformForm,
  ...
}
Each field config supports:

text

date

modal-select

textarea

radio

inline-text

images (file upload preview)

condition (OK / NOT OK / NA)

signature

This enables new machine types to be added by modifying only JSON, no JSX changes required.


📱 Screens
Login

User credentials with validation

Home

Profile card + summary
Drafts / Submitted tabs (with badge)

New Inspection

Searchable machine list

Inspection Form

Sticky header
Bottom-sheet modals
Signature and image capture
Submit confirmation modal


🛠 Running Locally
git clone https://github.com/GitKDC/allied-fe.git
cd allied-fe
npm install
npm run dev

🎨 UI Accuracy

All UI matches the provided Figma design:

✔ Colors, spacings, typography
✔ Rounded cards and shadows
✔ Modal behaviors
✔ Tab switcher badges
✔ Form input types
✔ Searchable selects
✔ Signature capture

No design shortcuts were taken — the UI was matched pixel-perfectly.


💾 Data Persistence

For this assignment, data is stored in localStorage:

localStorage.setItem("inspections", JSON.stringify([...]));

🧩 Component Overview
🧱 UI Components

    Button (primary / secondary / ghost)

    Input

    TextArea

    DateInput

    IconButton

    SelectModal

    SignatureModal

    SubmitConfirmModal

    TabSwitcher

🧪 Form Engine

    FormEngine.tsx → renders sections

    FormSection.tsx → handles section headers & card wraps

    FieldRenderer.tsx → maps config to component

    ConditionTable.tsx → OK/NOTOK/NA grid

📝 Submission Notes

Submitted by: Kartik Chaudhari
GitHub: https://github.com/GitKDC/allied-fe
Link : 

Assignment: Frontend task using Next.js + TailwindCSS


📞 Contact

If you have any questions, feel free to reach out:

Email: kartikchaudhari246@gmail.com




