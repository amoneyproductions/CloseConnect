/* ============================================================================
   RESOURCE DATA  —  the actual list students see.
   ----------------------------------------------------------------------------
   This is the file you edit most. To add a resource, copy one block and fill
   it in. To start a new school, replace this whole list (and update data/school.js).

   Each resource has:
     name        – what it's called
     category    – one tag from the list below (drives the category filter)
     audience    – "undergrad" | "grad_alumni" | "both"  (drives the three tabs)
     description – short, plain-language, student-to-student
     link        – the URL to access it
     school      – which school it belongs to (matches CC_SCHOOL.id)
     location    – (optional) building/room, shown as a small note
     verify      – (optional) true if the link/name still needs a final check

   Category tags in use: Career, Entrepreneurship, Academic Support,
                         Wellness, Engineering & CS, Alumni, General
   ============================================================================ */

window.CC_RESOURCES = [
  /* ---------------------------- CAREER ---------------------------- */
  {
    name: "Handshake",
    category: "Career",
    audience: "both",
    description:
      "USD’s main job and internship platform. Search roles, book career appointments, and find on-campus interviews — log in with your USD email.",
    link: "https://www.sandiego.edu/careers/handshake/",
    school: "USD"
  },
  {
    name: "Career Development Center",
    category: "Career",
    audience: "both",
    description:
      "The hub for resume help, career advising, job-search support, and employer connections. Start here if you’re not sure where to start.",
    link: "https://www.sandiego.edu/careers/",
    school: "USD"
  },
  {
    name: "Knauss Business Student Success Center",
    category: "Career",
    audience: "undergrad",
    description:
      "Academic and career advising built for business majors — peer advisors, course planning, and business career services.",
    link: "https://www.sandiego.edu/business/student-experience/business-student-success-center/",
    school: "USD",
    location: "Floor 2, Knauss Center for Business Education"
  },
  {
    name: "Engineering Career Readiness (CONNECT)",
    category: "Career",
    audience: "undergrad",
    description:
      "A dedicated career liaison and the CONNECT program for engineering and CS students to build professional skills before graduation.",
    link: "https://www.sandiego.edu/engineering/student-resources/career-readiness/",
    school: "USD"
  },
  {
    name: "Pre-Health Advising",
    category: "Career",
    audience: "undergrad",
    description:
      "Specialized advising for any major heading toward med school, nursing, or another health profession. Keeps you on track for the requirements.",
    link: "https://www.sandiego.edu/cas/student-resources/advising/pre-health/",
    school: "USD"
  },
  {
    name: "Pre-Law Advising",
    category: "Career",
    audience: "undergrad",
    description:
      "Guidance for students planning on law school — course choices, the application timeline, and the LSAT.",
    link: "https://www.sandiego.edu/cas/student-resources/advising/pre-law.php",
    school: "USD"
  },
  {
    name: "Torero Hub",
    category: "Career",
    audience: "undergrad",
    description:
      "Your go-to for non-academic questions like financial aid, billing, and registration. Every student gets a Torero Connect Counselor (TCC) to help navigate it.",
    link: "https://www.sandiego.edu/torero-hub/",
    school: "USD"
  },
  {
    name: "Student Employment Center",
    category: "Career",
    audience: "undergrad",
    description:
      "On- and off-campus jobs plus Federal Work-Study info. A solid way to earn while you’re enrolled.",
    link: "https://www.sandiego.edu/torero-hub/financial-aid/student-employment/",
    school: "USD"
  },

  /* ------------------------ ENTREPRENEURSHIP ------------------------ */
  {
    name: "Fowler Business Concept Challenge",
    category: "Entrepreneurship",
    audience: "both",
    description:
      "An annual pitch competition — open to all majors, undergrad and grad — where students pitch business ideas to real investors for scholarship money.",
    link: "https://www.sandiego.edu/business/centers/entrepreneurship/fowler-business-concept-challenge.php",
    school: "USD"
  },
  {
    name: "Entrepreneurship Club",
    category: "Entrepreneurship",
    audience: "undergrad",
    description:
      "A student org for anyone curious about starting things — events, speakers, and people who like building. Find it in the business student org directory.",
    link: "https://www.sandiego.edu/business/student-experience/student-organizations/",
    school: "USD",
    verify: true
  },
  {
    name: "Brink Consulting",
    category: "Entrepreneurship",
    audience: "undergrad",
    description:
      "Hands-on consulting and venture support for student founders. (Name and current link still being confirmed — check before relying on it.)",
    link: "https://www.sandiego.edu/business/centers/entrepreneurship/",
    school: "USD",
    verify: true
  },
  {
    name: "Student International Business Council",
    category: "Entrepreneurship",
    audience: "undergrad",
    description:
      "Real international business consulting projects for credit and experience — great résumé material and a tight community.",
    link: "https://www.sandiego.edu/business/student-experience/student-organizations/student-international-business-council.php",
    school: "USD"
  },

  /* ------------------------ ACADEMIC SUPPORT ------------------------ */
  {
    name: "Writing Center",
    category: "Academic Support",
    audience: "both",
    description:
      "Free peer tutoring for any kind of academic writing, any major. Bring an essay at any stage — even just an outline.",
    link: "https://www.sandiego.edu/cas/student-resources/tutoring-and-centers.php",
    school: "USD",
    location: "Founders Hall 190B"
  },
  {
    name: "Math Center",
    category: "Academic Support",
    audience: "undergrad",
    description:
      "Drop-in peer tutoring for lower-level math courses. No appointment needed — just show up when you’re stuck.",
    link: "https://www.sandiego.edu/cas/math/tutoring.php",
    school: "USD",
    location: "Serra Hall 310"
  },
  {
    name: "Logic Center",
    category: "Academic Support",
    audience: "undergrad",
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
    audience: "undergrad",
    description:
      "Academic support for 1st- and 2nd-year students — peer advising, study strategies, and help if you land on academic probation.",
    link: "https://www.sandiego.edu/center-student-success/",
    school: "USD",
    location: "UC 114"
  },
  {
    name: "TRiO Student Support Services",
    category: "Academic Support",
    audience: "undergrad",
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
    audience: "both",
    description:
      "Accommodations and support for students with disabilities or learning differences. They handle documentation and coordinate with your professors.",
    link: "https://www.sandiego.edu/disability/",
    school: "USD"
  },
  {
    name: "Counseling Center",
    category: "Wellness",
    audience: "both",
    description:
      "Free, confidential counseling for USD students — individual and group sessions, plus walk-in hours. No cost to you.",
    link: "https://www.sandiego.edu/counseling-center/",
    school: "USD",
    location: "Serra Hall 300"
  },
  {
    name: "Center for Health & Wellness Promotion",
    category: "Wellness",
    audience: "both",
    description:
      "Wellness education and substance-use support — programs, prevention, and one-on-one help to keep life balanced.",
    link: "https://www.sandiego.edu/health-wellness/",
    school: "USD",
    location: "UC 161"
  },
  {
    name: "Student Health Center",
    category: "Wellness",
    audience: "both",
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
    audience: "undergrad",
    description:
      "ACM, SHPE, the Cybersecurity Student Association, Theta Tau, SAE, and more — find your people and build projects outside of class.",
    link: "https://www.sandiego.edu/involvement/directory/",
    school: "USD"
  },
  {
    name: "Engineering Academic Advising",
    category: "Engineering & CS",
    audience: "undergrad",
    description:
      "Every engineering student is assigned a faculty advisor to help with course planning and staying on track to graduate.",
    link: "https://www.sandiego.edu/engineering/student-resources/advising.php",
    school: "USD"
  },

  /* ----------------------------- ALUMNI ----------------------------- */
  {
    name: "USD Alumni Association",
    category: "Alumni",
    audience: "grad_alumni",
    description:
      "Automatic lifetime membership for every USD grad — networking events, 23+ regional Torero Clubs, Homecoming, and alumni scholarships.",
    link: "https://www.sandiego.edu/alumni/",
    school: "USD"
  },
  {
    name: "Alumni Career Development Benefits",
    category: "Alumni",
    audience: "grad_alumni",
    description:
      "Grads keep free, lifelong access to career coaching, USD career events, and the Torero mentor network through the Career Development Center.",
    link: "https://www.sandiego.edu/alumni/benefits/careers/",
    school: "USD"
  },
  {
    name: "Alumni Email & Google Workspace",
    category: "Alumni",
    audience: "grad_alumni",
    description:
      "Keep your USD email and Google tools after graduation. (Exact alumni policy is worth confirming with ITS.)",
    link: "https://www.sandiego.edu/its/support/software/gsuite/",
    school: "USD",
    verify: true
  },
  {
    name: "Alumni Library Access",
    category: "Alumni",
    audience: "grad_alumni",
    description:
      "Borrow from Copley Library with your alumni card and tap into databases like JSTOR and HeinOnline through the Torero Network.",
    link: "https://www.sandiego.edu/library/services/alumni.php",
    school: "USD"
  },
  {
    name: "Alumni Discounts & Perks",
    category: "Alumni",
    audience: "grad_alumni",
    description:
      "Member savings — Bartell Hotels (15% off), the Columbia Sportswear employee store, and the USD Alumni Insurance Program.",
    link: "https://www.sandiego.edu/alumni/benefits/",
    school: "USD"
  },

  /* ----------------------------- GENERAL ----------------------------- */
  {
    name: "USD Knowledge Base",
    category: "General",
    audience: "both",
    description:
      "A searchable FAQ for almost any USD question — tech help, accounts, services. When in doubt, search here first.",
    link: "https://usdkb.sandiego.edu/",
    school: "USD"
  },
  {
    name: "One Stop Student Center",
    category: "General",
    audience: "both",
    description:
      "Financial aid, the registrar, and student accounts in one place — now part of the Torero Hub.",
    link: "https://www.sandiego.edu/torero-hub/",
    school: "USD"
  },
  {
    name: "Clubs, Orgs & Learning Communities",
    category: "General",
    audience: "both",
    description:
      "The full directory of USD student organizations across every interest. The fastest way to find your community.",
    link: "https://www.sandiego.edu/involvement/directory/",
    school: "USD"
  }
];
