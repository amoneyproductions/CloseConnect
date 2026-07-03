/* ============================================================================
   EVENTS & DEADLINES  —  time-sensitive things shown in the "Upcoming
   deadlines & events" panel and fed to the AI advisor.
   ----------------------------------------------------------------------------
   Seeded from USD's competition research. Dates are APPROXIMATE and shift each
   year — confirm and set exact dates before each cycle.

   Each event:
     title  – name of the deadline/event
     when   – short display string ("Fall", "Kickoff September · Finals December")
     note   – one plain-language line of what it is
     link   – where to learn more / apply
   Listed roughly in calendar order (fall → spring).
   ============================================================================ */

window.CC_EVENTS = [
  {
    title: "Changemaker Challenge",
    when: "Fall semester",
    note: "Social-innovation pitch competition — the first step in USD's entrepreneurship pathway.",
    link: "https://www.sandiego.edu/changemaker/students/"
  },
  {
    title: "Fowler Business Concept Challenge",
    when: "Kickoff September · Finals December",
    note: "Open to every major — top 16 teams compete for $45,000 in scholarships.",
    link: "https://www.sandiego.edu/fbcc"
  },
  {
    title: "HireUSD Career & Internship Fairs",
    when: "Fall & Spring",
    note: "Meet employers on campus. Check Handshake for the next exact date.",
    link: "https://www.sandiego.edu/careers/handshake/"
  },
  {
    title: "V2 (Venture Vetting) Pitch Competition",
    when: "Spring semester",
    note: "Campus-wide pitch competition; finalists pitch investors for up to $25,000.",
    link: "https://www.sandiego.edu/business/centers-and-institutes/entrepreneurship"
  },
  {
    title: "Torero Entrepreneurship Challenge (TECh)",
    when: "Spring semester",
    note: "Any student team with a technology component competes for the Starpoint Award.",
    link: "https://www.sandiego.edu/engineering/student-innovation/etrack-entrepreneurship-program/tech-competition/"
  },
  {
    title: "Fowler Global Social Innovation Challenge (GSIC)",
    when: "Spring (finals in May)",
    note: "Global social-venture competition hosted by USD's Kroc School of Peace Studies.",
    link: "https://www.sandiego.edu/cpc/gsic/"
  }
];
