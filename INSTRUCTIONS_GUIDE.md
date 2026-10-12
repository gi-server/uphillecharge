# How to Update & Maintain the EV Charging Instructions Page

This guide explains how to replace animations, edit step texts, update troubleshooting solutions, or add new steps without editing React components.

---

## 📁 Key File Locations

- **Instruction & Troubleshooting Data:** [`data/instructionData.js`](file:///home/mayank/Documents/intern/uphill/uphillecharge/data/instructionData.js)
- **Animation Media Assets:** [`public/animations/`](file:///home/mayank/Documents/intern/uphill/uphillecharge/public/animations/)
- **Instructions Page Route:** [`app/instructions/page.jsx`](file:///home/mayank/Documents/intern/uphill/uphillecharge/app/instructions/page.jsx)
- **Scoped Styles:** [`app/instructions/instructions.module.css`](file:///home/mayank/Documents/intern/uphill/uphillecharge/app/instructions/instructions.module.css)

---

## 1. How to Replace an Animation (No Code Changes Needed!)

All step animations are loaded from `/public/animations/`.

### Option A: Replace while keeping the same filename (Zero code edits)
1. Prepare your new `.gif`, `.webp`, or `.png` file.
2. Name it with the corresponding step filename:
   - Step 1: `download-app.gif`
   - Step 2: `create-account.gif`
   - Step 3: `verify-otp.gif`
   - Step 4: `add-wallet-money.gif`
   - Step 5: `connect-charger.gif`
   - Step 6: `prepare-vehicle.gif`
   - Step 7: `scan-qr.gif`
3. Drag & drop or copy the file into [`public/animations/`](file:///home/mayank/Documents/intern/uphill/uphillecharge/public/animations/).
4. Refresh your browser! The new animation displays immediately.

### Option B: Using a different filename or format
1. Place your file in [`public/animations/`](file:///home/mayank/Documents/intern/uphill/uphillecharge/public/animations/) (e.g. `my-custom-step1.gif` or `download.webp`).
2. Open [`data/instructionData.js`](file:///home/mayank/Documents/intern/uphill/uphillecharge/data/instructionData.js).
3. Find the step and update the `animation` property:
   ```javascript
   {
     id: 1,
     title: "Download the App",
     animation: "/animations/my-custom-step1.gif", // <-- update path here
     ...
   }
   ```

---

## 2. How to Edit Step Titles, Descriptions, or Troubleshooting

Open [`data/instructionData.js`](file:///home/mayank/Documents/intern/uphill/uphillecharge/data/instructionData.js) and simply edit the text fields:

```javascript
{
  id: 3,
  stepNumber: 3,
  title: "Verify Your Account Using OTP",       // <-- Change step title
  description: "Enter the OTP sent via SMS...", // <-- Change description
  troubleshootingLinkText: "OTP has not arrived?",
  troubleshooting: {
    id: "troubleshoot-3",
    title: "OTP has not arrived",               // <-- Change issue title
    description: "Check your phone signal...",  // <-- Change solution text
  },
}
```

---

## 3. How to Add a New Step or Reorder Steps

To add an 8th step or change the order:
1. Open [`data/instructionData.js`](file:///home/mayank/Documents/intern/uphill/uphillecharge/data/instructionData.js).
2. Append or move an item in the `instructionSteps` array:
   ```javascript
   {
     id: 8,
     stepNumber: 8,
     title: "Monitor Live Charging Status",
     description: "Watch your live charging percentage, power output, and time remaining in the app.",
     animation: "/animations/monitor-charging.gif",
     alt: "Animation showing charging progress screen in mobile app",
     troubleshootingLinkText: "Charging percentage not updating?",
     troubleshooting: {
       id: "troubleshoot-8",
       title: "Charging status not updating",
       description: "Pull down to refresh the app screen or re-open the app.",
     },
   }
   ```
3. Place `monitor-charging.gif` into [`public/animations/`](file:///home/mayank/Documents/intern/uphill/uphillecharge/public/animations/).
4. Done! The component loops through the configuration automatically and renders step numbers, cards, links, and troubleshooting entries without needing any React component edits.

---

## 4. How to Update 24/7 Support Contacts

In [`data/instructionData.js`](file:///home/mayank/Documents/intern/uphill/uphillecharge/data/instructionData.js), modify the `supportContact` object:
```javascript
export const supportContact = {
  phone: "+91 7302357399",
  phoneRaw: "+917302357399",
  email: "admin@uphillecharge.com",
  whatsapp: "+91 7302357399",
  whatsappUrl: "https://wa.me/917302357399?text=Hi%2C%20I%20need%20help%20with%20EV%20charging",
  hours: "24/7 Charging Support",
};
```

