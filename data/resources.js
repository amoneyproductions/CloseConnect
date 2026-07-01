/* ============================================================================
   RESOURCE DATA  —  the actual list students see.
   ----------------------------------------------------------------------------
   This is the file you edit most. To add a resource, copy one block and fill
   it in. To start a new school, replace this whole list (and update data/school.js).

   Each resource has:
     name        – what it's called
     category    – one tag from the list below (drives the category filter)
     audiences   – WHO it's for: an array of any of
                     "undergrad" | "graduate" | "alumni"
                   A resource shows under a tab if its list includes that group.
                   Something for everyone lists all three.
     description – short, plain-language, student-to-student
     link        – the URL to access it
     school      – which school it belongs to (matches CC_SCHOOL.id)
     location    – (optional) building/room, shown as a small note
     verify      – (optional) true if the link/name still needs a final check
     keywords    – (optional) extra words to help the "ask" search match a
                   student's question (concepts not already in the description,
                   e.g. "team up", "interdisciplinary", "computer science")

   Category tags in use: Career, Entrepreneurship, Competitions, Academic Support,
                         Wellness, Engineering & CS, Alumni, General
   ============================================================================ */

window.CC_RESOURCES = [
  /* ---------------------------- CAREER ---------------------------- */
  {
    name: "Handshake",
    category: "Career",
    audiences: ["undergrad", "graduate", "alumni"],
    description:
      "USD’s main job and internship platform. Search roles, book career appointments, and find on-campus interviews — log in with your USD email.",
    link: "https://www.sandiego.edu/careers/handshake/",
    school: "USD"
  },
  {
    name: "Career Development Center",
    category: "Career",
    audiences: ["undergrad", "graduate", "alumni"],
    description:
      "The hub for resume help, career advising, job-search support, and employer connections. Start here if you’re not sure where to start.",
    link: "https://www.sandiego.edu/careers/",
    school: "USD"
  },
  {
    name: "Knauss Business Student Success Center",
    category: "Career",
    audiences: ["undergrad"],
    description:
      "Academic and career advising built for business majors — peer advisors, course planning, and business career services.",
    link: "https://www.sandiego.edu/business/student-experience/business-student-success-center/",
    school: "USD",
    location: "Floor 2, Knauss Center for Business Education"
  },
  {
    name: "Engineering Career Readiness (CONNECT)",
    category: "Career",
    audiences: ["undergrad"],
    description:
      "A dedicated career liaison and the CONNECT program for engineering and CS students to build professional skills before graduation.",
    link: "https://www.sandiego.edu/engineering/student-resources/career-readiness/",
    school: "USD"
  },
  {
    name: "Pre-Health Advising",
    category: "Career",
    audiences: ["undergrad"],
    description:
      "Specialized advising for any major heading toward med school, nursing, or another health profession. Keeps you on track for the requirements.",
    link: "https://www.sandiego.edu/cas/student-resources/advising/pre-health/",
    school: "USD"
  },
  {
    name: "Pre-Law Advising",
    category: "Career",
    audiences: ["undergrad"],
    description:
      "Guidance for students planning on law school — course choices, the application timeline, and the LSAT.",
    link: "https://www.sandiego.edu/cas/student-resources/advising/pre-law.php",
    school: "USD"
  },
  {
    name: "Torero Hub",
    category: "Career",
    audiences: ["undergrad", "graduate"],
    description:
      "Your go-to for non-academic questions like financial aid, billing, and registration. Serves undergrad and grad students, with a Torero Connect Counselor to help you navigate it.",
    link: "https://www.sandiego.edu/torero-hub/",
    school: "USD"
  },
  {
    name: "Student Employment Center",
    category: "Career",
    audiences: ["undergrad", "graduate"],
    description:
      "On- and off-campus jobs plus Federal Work-Study info. A solid way to earn while you’re enrolled.",
    link: "https://www.sandiego.edu/torero-hub/financial-aid/student-employment/",
    school: "USD"
  },

  /* ------------------------ ENTREPRENEURSHIP ------------------------ */
  {
    name: "Fowler Business Concept Challenge",
    category: "Competitions",
    audiences: ["undergrad", "graduate"],
    description:
      "An annual pitch competition — open to all majors, undergrad and grad — where students pitch business ideas to real investors for scholarship money.",
    link: "https://www.sandiego.edu/business/centers/entrepreneurship/fowler-business-concept-challenge.php",
    school: "USD"
  },
  {
    name: "Entrepreneurship Club",
    category: "Entrepreneurship",
    audiences: ["undergrad"],
    description:
      "A student org for anyone curious about starting things — events, speakers, and people who like building. Find it in the business student org directory.",
    link: "https://www.sandiego.edu/business/student-experience/student-organizations/",
    school: "USD",
    verify: true
  },
  {
    name: "The Brink SBDC",
    category: "Entrepreneurship",
    audiences: ["undergrad", "graduate"],
    description:
      "USD’s innovation hub and San Diego’s top-ranked accelerator. Programs like the Lean Essential Sprint help aspiring founders test and launch their ideas with real mentorship.",
    link: "https://www.sandiego.edu/sbdc/",
    school: "USD"
  },
  {
    name: "Student International Business Council",
    category: "Entrepreneurship",
    audiences: ["undergrad"],
    description:
      "Real international business consulting projects for credit and experience — great résumé material and a tight community.",
    link: "https://www.sandiego.edu/business/student-experience/student-organizations/student-international-business-council.php",
    school: "USD"
  },

  /* ------------------------ ACADEMIC SUPPORT ------------------------ */
  {
    name: "Writing Center",
    category: "Academic Support",
    audiences: ["undergrad", "graduate"],
    description:
      "Free peer tutoring for any kind of academic writing, any major and any level. Bring an essay at any stage — even just an outline.",
    link: "https://www.sandiego.edu/cas/student-resources/tutoring-and-centers.php",
    school: "USD",
    location: "Founders Hall 190B"
  },
  {
    name: "Math Center",
    category: "Academic Support",
    audiences: ["undergrad"],
    description:
      "Drop-in peer tutoring for lower-level math courses. No appointment needed — just show up when you’re stuck.",
    link: "https://www.sandiego.edu/cas/math/tutoring.php",
    school: "USD",
    location: "Serra Hall 310"
  },
  {
    name: "Logic Center",
    category: "Academic Support",
    audiences: ["undergrad"],
    description:
      "Peer tutoring specifically for logic courses. A lifesaver if symbolic logic isn’t clicking.",
    link: "https://www.sandiego.edu/cas/student-resources/tutoring-and-centers.php",
    school: "USD",
    location: "Founders Hall 160",
    verify: true
  },
  {
    name: "Center for Student Success",
    category: "Academic Support",
    audiences: ["undergrad"],
    description:
      "Academic support for 1st- and 2nd-year students — peer advising, study strategies, and help if you land on academic probation.",
    link: "https://www.sandiego.edu/center-student-success/",
    school: "USD",
    location: "UC 114"
  },
  {
    name: "TRiO Student Support Services",
    category: "Academic Support",
    audiences: ["undergrad"],
    description:
      "A federally funded program with extra academic support, advising, and mentoring for eligible first-gen, low-income, or disabled students.",
    link: "https://www.sandiego.edu/student-support-services/",
    school: "USD",
    location: "UC 113"
  },

  /* --------------------------- WELLNESS --------------------------- */
  {
    name: "Disability & Learning Difference Resource Center (DLDRC)",
    category: "Wellness",
    audiences: ["undergrad", "graduate"],
    description:
      "Accommodations and support for students with disabilities or learning differences. They handle documentation and coordinate with your professors.",
    link: "https://www.sandiego.edu/disability/",
    school: "USD"
  },
  {
    name: "Counseling Center",
    category: "Wellness",
    audiences: ["undergrad", "graduate"],
    description:
      "Free, confidential counseling for USD students — individual and group sessions, plus walk-in hours. No cost to you.",
    link: "https://www.sandiego.edu/counseling-center/",
    school: "USD",
    location: "Serra Hall 300"
  },
  {
    name: "Center for Health & Wellness Promotion",
    category: "Wellness",
    audiences: ["undergrad", "graduate"],
    description:
      "Wellness education and substance-use support — programs, prevention, and one-on-one help to keep life balanced.",
    link: "https://www.sandiego.edu/health-wellness/",
    school: "USD",
    location: "UC 161"
  },
  {
    name: "Student Health Center",
    category: "Wellness",
    audiences: ["undergrad", "graduate"],
    description:
      "On-campus medical care for everyday illness, checkups, and more. Close, convenient, and built for students.",
    link: "https://www.sandiego.edu/health-center/",
    school: "USD",
    location: "Maher Hall 140"
  },

  /* ------------------------ ENGINEERING & CS ------------------------ */
  {
    name: "Engineering & CS Student Organizations",
    category: "Engineering & CS",
    audiences: ["undergrad"],
    description:
      "ACM, SHPE, the Cybersecurity Student Association, Theta Tau, SAE, and more — find your people and build projects outside of class.",
    link: "https://www.sandiego.edu/involvement/directory/",
    school: "USD"
  },
  {
    name: "Engineering Academic Advising",
    category: "Engineering & CS",
    audiences: ["undergrad"],
    description:
      "Every engineering student is assigned a faculty advisor to help with course planning and staying on track to graduate.",
    link: "https://www.sandiego.edu/engineering/student-resources/advising.php",
    school: "USD"
  },

  /* ----------------------------- ALUMNI ----------------------------- */
  {
    name: "USD Alumni Association",
    category: "Alumni",
    audiences: ["alumni"],
    description:
      "Automatic lifetime membership for every USD grad — networking events, 23+ regional Torero Clubs, Homecoming, and alumni scholarships.",
    link: "https://www.sandiego.edu/alumni/",
    school: "USD"
  },
  {
    name: "Alumni Career Development Benefits",
    category: "Alumni",
    audiences: ["alumni"],
    description:
      "Grads keep free, lifelong access to career coaching, USD career events, and the Torero mentor network through the Career Development Center.",
    link: "https://www.sandiego.edu/alumni/benefits/careers/",
    school: "USD"
  },
  {
    name: "Alumni Email & Google Workspace",
    category: "Alumni",
    audiences: ["alumni"],
    description:
      "Keep your USD email and Google tools after graduation. (Exact alumni policy is worth confirming with ITS.)",
    link: "https://www.sandiego.edu/its/support/software/gsuite/",
    school: "USD",
    verify: true
  },
  {
    name: "Alumni Library Access",
    category: "Alumni",
    audiences: ["alumni"],
    description:
      "Borrow from Copley Library with your alumni card and tap into databases like JSTOR and HeinOnline through the Torero Network.",
    link: "https://www.sandiego.edu/library/services/alumni.php",
    school: "USD"
  },
  {
    name: "Alumni Discounts & Perks",
    category: "Alumni",
    audiences: ["alumni"],
    description:
      "Member savings — Bartell Hotels (15% off), the Columbia Sportswear employee store, and the USD Alumni Insurance Program.",
    link: "https://www.sandiego.edu/alumni/benefits/",
    school: "USD"
  },

  /* ----------------------------- GENERAL ----------------------------- */
  {
    name: "USD Knowledge Base",
    category: "General",
    audiences: ["undergrad", "graduate", "alumni"],
    description:
      "A searchable FAQ for almost any USD question — tech help, accounts, services. When in doubt, search here first.",
    link: "https://usdkb.sandiego.edu/",
    school: "USD"
  },
  {
    name: "One Stop Student Center",
    category: "General",
    audiences: ["undergrad", "graduate"],
    description:
      "Financial aid, the registrar, and student accounts in one place — now part of the Torero Hub.",
    link: "https://www.sandiego.edu/torero-hub/",
    school: "USD"
  },
  {
    name: "Clubs, Orgs & Learning Communities",
    category: "General",
    audiences: ["undergrad", "graduate"],
    description:
      "The full directory of USD student organizations across every interest. The fastest way to find your community.",
    link: "https://www.sandiego.edu/involvement/directory/",
    school: "USD"
  },

  /* --------------------------- COMPETITIONS --------------------------- */
  {
    name: "V2 (Venture Vetting) Pitch Competition",
    category: "Competitions",
    audiences: ["undergrad", "graduate"],
    description:
      "USD’s campus-wide pitch competition. Hundreds join the V2 Learning Series, and 10 finalists pitch real angel investors for up to $25,000 in seed money.",
    link: "https://www.sandiego.edu/business/centers-and-institutes/entrepreneurship/",
    school: "USD",
    verify: true
  },
  {
    name: "Fowler Global Social Innovation Challenge (GSIC)",
    category: "Competitions",
    audiences: ["undergrad", "graduate"],
    description:
      "A global competition for student social entrepreneurs building ventures around the UN Sustainable Development Goals. Hosted by USD’s Kroc School, with funding and mentorship on the line.",
    keywords: ["interdisciplinary", "team up", "connect", "competition", "pitch", "startup", "social impact", "global"],
    link: "https://www.sandiego.edu/cpc/gsic/",
    school: "USD"
  },
  {
    name: "Torero Entrepreneurship Challenge (TECh)",
    category: "Competitions",
    audiences: ["undergrad", "graduate"],
    description:
      "A tech-innovation competition open to any USD student team with a technology component — any major, any program. Build a team and compete for the Starpoint Award.",
    keywords: ["interdisciplinary", "team up", "engineering", "computer science", "technology", "competition", "startup", "cross-major"],
    link: "https://www.sandiego.edu/engineering/student-innovation/etrack-entrepreneurship-program/tech-competition/",
    school: "USD"
  },
  {
    name: "Baja SAE — Torero Racing",
    category: "Competitions",
    audiences: ["undergrad"],
    description:
      "Design, build, and race an off-road vehicle with USD’s Torero Racing team, competing against schools worldwide. Hands-on engineering teamwork all year.",
    link: "https://www.sandiego.edu/engineering/student-innovation/sae-baja/",
    school: "USD"
  },

  /* ------------------ BUILD / TEAM-UP / INNOVATION HUBS ------------------ */
  {
    name: "Entrepreneurship & Innovation Catalyzer",
    category: "Entrepreneurship",
    audiences: ["undergrad", "graduate"],
    description:
      "Home base for student founders in the Knauss Center — a startup incubator and makerspace that runs the V2 competition, the Torero Ventures Lab, and more.",
    link: "https://www.sandiego.edu/business/centers-and-institutes/entrepreneurship/",
    school: "USD"
  },
  {
    name: "Changemaker Hub",
    category: "Entrepreneurship",
    audiences: ["undergrad", "graduate"],
    description:
      "USD’s home for social innovation — changemaker courses, designated clubs, scholarships, and the fall Changemaker Challenge. A great place to find teammates for impact projects.",
    keywords: ["team up", "connect", "interdisciplinary", "social impact", "community", "competition", "collaborate"],
    link: "https://www.sandiego.edu/changemaker/students/",
    school: "USD"
  },
  {
    name: "Engineering Student Innovation & Makerspaces",
    category: "Engineering & CS",
    audiences: ["undergrad", "graduate"],
    description:
      "Prototyping labs and makerspaces — including Donald’s Garage and the Belanich Engineering Center — plus the E-Track program, where students build and test real projects together.",
    keywords: ["engineering", "computer science", "build", "prototype", "team up", "technology", "project", "collaborate"],
    link: "https://www.sandiego.edu/engineering/student-innovation/",
    school: "USD"
  },

  /* ----------------------- GRADUATE-SPECIFIC ----------------------- */
  {
    name: "Graduate Student Life",
    category: "General",
    audiences: ["graduate"],
    description:
      "The office and community hub for grad and law students — programs, events, and advocacy, based at the Graduate & Law Student Commons.",
    link: "https://www.sandiego.edu/grad-life/",
    school: "USD",
    location: "Graduate & Law Student Commons, SLP 401"
  },
  {
    name: "Graduate Academic Support",
    category: "Academic Support",
    audiences: ["graduate"],
    description:
      "Academic support and referrals gathered for grad students in one place — from the Graduate & Law Student Handbook to accommodations, tutoring, and food assistance.",
    link: "https://www.sandiego.edu/grad-life/student-services/academic-support.php",
    school: "USD"
  },
  {
    name: "SOLES Graduate Writing Center",
    category: "Academic Support",
    audiences: ["graduate"],
    description:
      "Free writing coaching, workshops, and one-on-one sessions built for grad students — online or on campus, so busy schedules aren’t a barrier.",
    link: "https://www.sandiego.edu/soles/students-and-alumni/current-students/writing-center.php",
    school: "USD"
  },
  {
    name: "Law Career & Professional Development",
    category: "Career",
    audiences: ["graduate"],
    description:
      "Career coaching, interview prep, and the exclusive #HireUSDLaw job board for USD School of Law students.",
    link: "https://www.sandiego.edu/law/careers/students/services/",
    school: "USD"
  },
  {
    name: "Law Academic Success & Bar Programs",
    category: "Academic Support",
    audiences: ["graduate"],
    description:
      "Bar-exam prep strategy sessions, the 1L Fellows mentorship program, and academic improvement plans for USD law students.",
    link: "https://www.sandiego.edu/law/student-affairs/bar-programs/",
    school: "USD"
  },
  {
    name: "Law Student Support & Wellness",
    category: "Wellness",
    audiences: ["graduate"],
    description:
      "Wellness programs, accommodations, and parental resources tailored to the realities of law school, through USD Law Student Affairs.",
    link: "https://www.sandiego.edu/law/student-affairs/student-support/",
    school: "USD"
  }
];
