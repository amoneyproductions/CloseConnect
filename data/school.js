/* ============================================================================
   SCHOOL CONFIG, edit this file to set up a new school.
   ----------------------------------------------------------------------------
   Everything that is specific to one school lives here: its name, tagline,
   colors, and logo text. Nothing about "USD" is hard-coded anywhere else, so
   to launch CloseConnect for a different university you only touch this file
   and data/resources.js.
   ============================================================================ */

window.CC_SCHOOL = {
  // The "id" is the value stored on every resource's `school` field.
  // It ties a school's config to its resources.
  id: "USD",

  // Display name shown in the header and page title.
  name: "University of San Diego",

  // Short name / nickname used in tight spaces and friendly copy.
  shortName: "USD",

  // One welcoming line under the title. Keep it warm and student-to-student.
  tagline: "Everything USD. One place.",

  // A second, smaller line of intro copy.
  intro:
    "Every USD resource in one place, from tutoring and career help to funding and wellness. Find yours in seconds.",

  // Colors. Swap these for another school's palette later.
  // Defaults are USD's deep blue with a friendly lighter blue accent.
  colors: {
    primary: "#0a3a66",      // headers, logo, primary accents (softened USD navy)
    accent: "#2b6cb0",       // links, active states (friendly blue)
    accentSoft: "#e9f1f9",   // soft fills / active tab background
    bg: "#f1efe6",           // page background (eggshell)
    card: "#ffffff",         // card background
    text: "#232a31",         // body text (warm dark)
    muted: "#5f6b78"         // secondary text
  },

  // Logo is plain text by default (no image needed to launch a new school).
  // To use an image instead, set logoImage to a file path and it will be used.
  logoText: "Resourceful",
  logoImage: null,

  // Footer note. Good place for a "who made this / feedback" line.
  footerNote:
    "Resourceful is an independent guide to everything USD. Spot a broken link or a resource we’re missing? Let us know, this list grows with your help.",

  // AI advisor daily question limit per visitor (cost control while unlicensed).
  // Flip aiUnlimited to true, e.g. once the school licenses CloseConnect, to
  // remove the cap entirely. aiDailyLimit is the number of questions per day.
  aiDailyLimit: 10,
  aiUnlimited: false,

  // Owner unlock (unlimited questions for YOU only):
  // Visit the site once with ?owner=YOUR_SECRET to store the key in this browser;
  // visit with ?owner=off to remove it. For TRUE unlimited access, that secret must
  // match the OWNER_KEY environment variable set in Netlify (the server checks it and
  // skips the daily limit). Keep the Netlify OWNER_KEY private, that is what makes it
  // yours alone; everyone else stays capped at aiDailyLimit.
  ownerKey: "amoney-unlimited"
};
