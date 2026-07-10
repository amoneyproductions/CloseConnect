/* ============================================================================
   EVENTS & DEADLINES, shown in the "Upcoming deadlines & events" panel on
   the home view, and fed to the AI advisor.
   ----------------------------------------------------------------------------
   Seeded from USD's competition research. Dates are APPROXIMATE and shift each
   year, confirm and set exact dates before each cycle.

   Each event:
     title  – name of the deadline/event
     when   – clear timing: when to act AND the span it runs
     note   – one clear line: what it is and who it's for
     link   – where to learn more / apply (a stable USD hub is safer than a
              deep page, because USD reorganizes its site often)
     findAt – (optional) plain-language "where this lives on USD's site," shown
              under the event so a student can still find it if USD moved the page
   Listed roughly in calendar order (fall → spring).
   ============================================================================ */

window.CC_EVENTS = [
  {
    title: "Changemaker Challenge",
    when: "Fall semester, apply early in the term (around September)",
    note: "A pitch competition for ideas that make a social impact, a friendly first competition to try.",
    link: "https://www.sandiego.edu/changemaker/students/",
    findAt: "On the Changemaker Hub students page (sandiego.edu/changemaker)."
  },
  {
    title: "Fowler Business Concept Challenge",
    when: "Apply in September, the competition runs through December (final pitches in December)",
    note: "Pitch a business idea (any major welcome). The top 16 teams share $45,000 in scholarships.",
    link: "https://www.sandiego.edu/business/centers/entrepreneurship/",
    findAt: "On the Knauss School's Entrepreneurship page, or search “Fowler Business Concept Challenge” on sandiego.edu."
  },
  {
    title: "HireUSD Career & Internship Fairs",
    when: "Held twice a year, once each fall and once each spring (exact dates posted on Handshake)",
    note: "On-campus events to meet employers hiring for jobs and internships.",
    link: "https://www.sandiego.edu/careers/events/",
    findAt: "On the Career Development Center's events page; exact fair dates also post in Handshake."
  },
  {
    title: "V2 (Venture Vetting) Pitch Competition",
    when: "Spring semester, join early in the spring, final pitches near the end of spring",
    note: "USD's biggest pitch competition, finalists present to real investors for up to $25,000 in seed money.",
    link: "https://www.sandiego.edu/business/centers/entrepreneurship/",
    findAt: "Run by the Knauss School's Entrepreneurship center, or search “V2 Venture Vetting USD.”"
  },
  {
    title: "Torero Entrepreneurship Challenge (TECh)",
    when: "Spring semester, teams form and compete during the spring",
    note: "Build a tech project with a team (any major welcome) and compete for the Starpoint Award.",
    link: "https://www.sandiego.edu/engineering/student-innovation/",
    findAt: "Under the Shiley-Marcos School of Engineering's Student Innovation pages (E-Track program)."
  },
  {
    title: "Fowler Global Social Innovation Challenge (GSIC)",
    when: "Spring semester, apply in the spring, finals in May",
    note: "A global competition for student ventures tackling social or environmental problems, hosted by the Kroc School.",
    link: "https://www.sandiego.edu/cpc/gsic/",
    findAt: "Run by the Center for Peace & Commerce (sandiego.edu/cpc)."
  }
];
