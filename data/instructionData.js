/**
 * Centralized instruction data for Uphill Echarge EV Charging Guide.
 * 
 * To replace an animation:
 * 1. Place your new GIF, WebP, or MP4 file in `/public/animations/`.
 * 2. Update the `animation` path below if the filename changed.
 * 3. Or simply overwrite the existing file in `/public/animations/` with the same name.
 */

export const instructionPageMeta = {
  title: "EV Charging Instructions | Uphill Echarge",
  description:
    "Step-by-step mobile guide on how to charge your electric vehicle at Uphill Echarge stations using the PlugEasy app.",
};

export const instructionSteps = [
  {
    id: 1,
    stepNumber: 1,
    title: "Download the App",
    description:
      "Get the PlugEasy app from Google Play Store or Apple App Store on your smartphone.",
    animation: "/animations/download-app.gif",
    alt: "Animation illustrating downloading the PlugEasy charging app on smartphone",
    troubleshootingLinkText: "Not able to download the app?",
    appLinks: [
      {
        name: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.plugeasy.charge_app&hl=en_IN",
        store: "google",
      },
      {
        name: "App Store",
        url: "https://apps.apple.com/in/app/plugeasy/id1617952917",
        store: "apple",
      },
    ],
    troubleshooting: {
      id: "troubleshoot-1",
      title: "Not able to download the App",
      description:
        "Check your internet connection and free space on your phone. Search for 'PlugEasy' in Google Play or the App Store. If it still fails, restart your phone and check the store error message.",
    },
  },
  {
    id: 2,
    stepNumber: 2,
    title: "Create Your Account",
    description:
      "Open the app and register quickly with your mobile number and basic details.",
    animation: "/animations/create-account.gif",
    alt: "Animation showing user registration and profile creation in the mobile app",
    troubleshootingLinkText: "Cannot create an account?",
    troubleshooting: {
      id: "troubleshoot-2",
      title: "Cannot create an account",
      description:
        "Check that you have filled in all required details correctly. Verify that your internet connection is active and follow any message shown in the app. If you are still stuck, contact support.",
    },
  },
  {
    id: 3,
    stepNumber: 3,
    title: "Verify Your Account Using OTP",
    description:
      "Enter the 4 or 6-digit OTP sent via SMS to your registered mobile number.",
    animation: "/animations/verify-otp.gif",
    alt: "Animation demonstrating OTP verification code entry on smartphone",
    troubleshootingLinkText: "OTP has not arrived?",
    troubleshooting: {
      id: "troubleshoot-3",
      title: "OTP has not arrived",
      description:
        "Check your registered mobile number and phone signal. Look in your SMS inbox and spam messages. If available, request a new code after 60 seconds. If you still do not get a code, contact station support.",
    },
  },
  {
    id: 4,
    stepNumber: 4,
    title: "Add Money to Your Wallet",
    description:
      "Open Wallet. Add money using UPI, debit/credit card, net banking, or another preferred payment method.",
    animation: "/animations/add-wallet-money.gif",
    alt: "Animation showing adding recharge money into EV digital wallet",
    troubleshootingLinkText: "Payment did not go through?",
    troubleshooting: {
      id: "troubleshoot-4",
      title: "Payment did not go through",
      description:
        "Check your internet connection, payment details, and bank balance. Before trying again, check the payment status in your bank or UPI app to avoid paying twice. If money was debited but your wallet has not updated, contact support.",
    },
  },
  {
    id: 5,
    stepNumber: 5,
    title: "Connect the Charging Plug",
    description:
      "Choose the right connector (CCS2 / Type 2) and plug it into your EV firmly until you hear a secure click.",
    animation: "/animations/connect-charger.gif",
    alt: "Animation showing EV charging plug securely docking into the vehicle charging port",
    troubleshootingLinkText: "Charging plug does not fit?",
    troubleshooting: {
      id: "troubleshoot-5",
      title: "Charging plug does not fit",
      description:
        "Check that the connector is compatible with your EV. Push firmly into place, but do not force it. Ensure the vehicle charging flap is completely clear. Do not use damaged plugs or cables. Ask the charging station staff for assistance if needed.",
    },
  },
  {
    id: 6,
    stepNumber: 6,
    title: "Prepare Your Vehicle for Charging",
    description:
      "Switch off the vehicle ignition, ensure all doors and windows are fully closed, and lock your car.",
    animation: "/animations/prepare-vehicle.gif",
    alt: "Animation illustrating vehicle ignition off and doors securely locked",
    troubleshootingLinkText: "Not able to lock the car?",
    troubleshooting: {
      id: "troubleshoot-6",
      title: "Not able to lock the car",
      description:
        "Make sure the vehicle ignition is completely off and all doors/boot are fully closed. Ensure your smart key is outside the vehicle. If the car still will not lock, refer to your vehicle owner's manual.",
    },
  },
  {
    id: 7,
    stepNumber: 7,
    title: "Open the App and Scan the QR Code",
    description:
      "Open the PlugEasy app, tap 'Scan QR Code', scan the QR code located on the charger gun or screen, and start charging.",
    animation: "/animations/scan-qr.gif",
    alt: "Animation showing smartphone scanning the EV charger station QR code",
    troubleshootingLinkText: "Not able to scan QR code?",
    troubleshooting: {
      id: "troubleshoot-7",
      title: "Not able to scan QR code",
      description:
        "Check that the app has camera permission granted in your phone settings. Clean the camera lens, use good lighting, and keep the QR code fully inside the viewfinder. If the code is damaged or will not scan, enter the Charger ID manually in the app.",
    },
  },
];

export const supportContact = {
  phone: "+91 7302357399",
  phoneRaw: "+917302357399",
  email: "admin@uphillecharge.com",
  whatsapp: "+91 7302357399",
  whatsappUrl: "https://wa.me/917302357399?text=Hi%2C%20I%20need%20help%20with%20EV%20charging",
  hours: "24/7 Charging Support",
};

