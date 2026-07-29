/* ============================================================================
   RESOURCE DATA, the actual list students see.
   ----------------------------------------------------------------------------
   This is the file you edit most. To add a resource, copy one block and fill
   it in. To start a new school, replace this whole list (and update data/school.js).

   Each resource has:
     name        – what it's called
     categories  – one OR MORE tags from the list below (drives the filter chips).
                   A resource can double-dip, e.g. ["Competitions"].
                   A single `category: "X"` string still works too.
     audiences   – WHO it's for: an array of any of
                     "undergrad" | "graduate" | "alumni"
                   A resource shows under a tab if its list includes that group.
                   Something for everyone lists all three.
     description – short, plain-language, student-to-student
     link        – the URL to access it
     school      – which school it belongs to (matches CC_SCHOOL.id)
     location    – (optional) building/room, shown as a small note
     verify      – (optional) true if the link/name still needs a final check
     keywords    – (optional) extra words to help matching / the AI advisor
     details     – (optional) a richer paragraph the AI can use and the card's
                   "More info" expander shows, so students don't have to click out
     links       – (optional) array of { label, url } secondary links shown in the
                   expander (e.g. a signup page, a networking platform)

   Category tags in use: Career, Entrepreneurship, Competitions, Academic Support,
                         Wellness, Engineering & CS, Community, Alumni, General
   ============================================================================ */

window.CC_RESOURCES = [
  /* ---------------------------- CAREER ---------------------------- */
  {
    name: "Handshake",
    category: "Career",
    audiences: ["undergrad", "graduate", "alumni"],
    description:
      "USD’s main job and internship platform. Search roles, book career appointments, and find on-campus interviews, log in with your USD email.",
    details:
      "Beyond jobs and internships, Handshake is where you schedule career-counselor appointments, find career events and workshops, sign up for on-campus interviews, and get openings tailored to your major. Log in with your USD email via single sign-on. It connects USD students with 20,000+ employers.",
    link: "https://www.sandiego.edu/careers/handshake/",
    school: "USD"
  },
  {
    name: "Career Development Center",
    category: "Career",
    audiences: ["undergrad", "graduate", "alumni"],
    description:
      "The hub for resume help, career advising, job-search support, and employer connections. Start here if you’re not sure where to start.",
    details:
      "In Manchester Hall 101, open Monday–Friday 8:30 a.m.–5 p.m. Book a 1-on-1 appointment (in person or virtual) with a career counselor through Handshake, or use daily drop-in hours for quick questions. They help with resumes, cover letters, interview prep, the job/internship search, and career exploration, and they run the T.E.A.M. networking platform plus HireUSD events. Phone (619) 260-4654 · careers@sandiego.edu.",
    links: [
      { label: "Hours & drop-ins", url: "https://www.sandiego.edu/careers/about/hours.php" },
      { label: "T.E.A.M. networking platform", url: "https://mentoring.sandiego.edu/" }
    ],
    link: "https://www.sandiego.edu/careers/",
    school: "USD",
    location: "Manchester Hall 101"
  },
  {
    name: "Knauss Business Student Success Center",
    categories: ["Career", "Academic Support"],
    audiences: ["undergrad"],
    description:
      "Academic and career advising built for business majors, peer advisors, course planning, and business career services.",
    details:
      "For Knauss (business) students, on the 2nd floor of the Knauss Center. Offers peer advising, course and major planning, and business-specific career help in one place. TO USE: drop in or book a peer advisor for course planning, and use business career services for resume reviews and industry advising. A smart first stop before you meet your faculty advisor for registration.",
    keywords: ["business", "advising", "course planning", "peer advisor", "knauss", "career", "major"],
    link: "https://www.sandiego.edu/business/student-experience/business-student-success-center/",
    school: "USD",
    location: "Floor 2, Knauss Center for Business Education"
  },
  {
    name: "Engineering Career Readiness (CONNECT)",
    categories: ["Career"],
    audiences: ["undergrad"],
    description:
      "A dedicated career liaison and the CONNECT program for engineering and CS students to build professional skills before graduation.",
    details:
      "For engineering and CS students. A dedicated engineering career liaison plus the CONNECT program help you build professional skills, resumes, and employer relationships before graduation. TO USE: meet the engineering career liaison early (not senior year) to plan internships and co-ops, and use Handshake for postings. Pairs well with the main Career Development Center.",
    keywords: ["engineering", "computer science", "career", "connect", "internship", "co-op", "professional", "resume"],
    link: "https://www.sandiego.edu/engineering/student-resources/career-readiness/",
    school: "USD"
  },
  {
    name: "Pre-Health Advising",
    categories: ["Career", "Academic Support"],
    audiences: ["undergrad"],
    description:
      "Specialized advising for any major heading toward med school, nursing, or another health profession. Keeps you on track for the requirements.",
    details:
      "Open to ANY major, you can be a business or English major and still go pre-med. WHAT TO DO: meet with the pre-health advisor early to map the prerequisite courses (bio, chem, physics, etc.), plan for the entrance exam (MCAT/DAT and similar), and line up clinical/volunteer experience. When you apply to professional school, USD's pre-health advising helps with the committee/health-professions letter, so stay connected through junior and senior year. Book through the pre-health advising office; see the pre-medical page for the detailed track.",
    keywords: ["pre-health", "pre-med", "medical school", "nursing", "mcat", "dat", "committee letter", "prerequisites", "health professions", "advising"],
    links: [
      { label: "Pre-medical track & steps", url: "https://www.sandiego.edu/cas/student-resources/advising/pre-health/pre-medical.php" },
      { label: "Pre-health resources", url: "https://www.sandiego.edu/cas/student-resources/advising/pre-health/resources/" }
    ],
    link: "https://www.sandiego.edu/cas/student-resources/advising/pre-health/",
    school: "USD"
  },
  {
    name: "Pre-Law Advising",
    categories: ["Career", "Academic Support"],
    audiences: ["undergrad"],
    description:
      "Guidance for students planning on law school, course choices, the application timeline, and the LSAT.",
    details:
      "No 'pre-law' major required, law schools take every major, so this is about strategy. WHAT TO DO: meet the pre-law advisor to pick courses that build reading, writing, and analysis, plan your LSAT timing (and prep), and map the application timeline (letters of rec, personal statement, and applying through LSAC in the fall a year before you'd start). Ask about admissions events with USD's own School of Law. Book through the pre-law advisor via the page below.",
    keywords: ["pre-law", "law school", "lsat", "lsac", "application", "personal statement", "timeline", "advising"],
    link: "https://www.sandiego.edu/cas/student-resources/advising/pre-law.php",
    school: "USD"
  },
  {
    name: "Torero Hub",
    category: "Career",
    audiences: ["undergrad", "graduate"],
    description:
      "Your go-to for non-academic questions like financial aid, billing, and registration. Serves undergrad and grad students, with a Torero Connect Counselor to help you navigate it.",
    details:
      "The front door for anything non-academic: financial aid, billing, registration, records, and general 'who do I even ask' questions, and a Torero Connect Counselor can route you to the right office. TO USE: search the USD Knowledge Base for step-by-step answers, or visit UC 126 (walk-ins welcome) or call (619) 260-2700. Most tasks (register, pay a bill, get a transcript) start in MySanDiego under the Torero Hub tab.",
    keywords: ["torero hub", "one stop", "financial aid", "billing", "registration", "records", "help", "who do i ask"],
    links: [
      { label: "USD Knowledge Base (how-tos)", url: "https://usdkb.sandiego.edu/s/" }
    ],
    link: "https://www.sandiego.edu/torero-hub/",
    school: "USD"
  },
  {
    name: "Student Employment Center",
    category: "Career",
    audiences: ["undergrad", "graduate"],
    description:
      "On- and off-campus jobs plus Federal Work-Study info. A solid way to earn while you’re enrolled.",
    details:
      "Two kinds of on-campus jobs: Federal Work-Study (if it's part of your aid award) and regular 'casual' department jobs anyone can take, no aid needed. TO FIND A JOB: browse openings on the Student Employment pages (separate lists for work-study and non-work-study) and apply directly to the department; work-study also runs a job fair each fall. Career jobs and internships live in Handshake (sandiego.joinhandshake.com). Once hired you'll complete onboarding paperwork (I-9, etc.) before your first shift. Questions go through the Torero Hub, (619) 260-2700.",
    keywords: ["job", "on campus job", "student employment", "work study", "handshake", "hiring", "part time", "earn money", "casual worker"],
    links: [
      { label: "Federal Work-Study jobs", url: "https://www.sandiego.edu/torero-hub/financial-aid/student-employment/federal-work-study/opportunities.php" },
      { label: "Non-work-study on-campus jobs", url: "https://www.sandiego.edu/torero-hub/financial-aid/student-employment/non-federal-work-study/" },
      { label: "Handshake (jobs & internships)", url: "https://www.sandiego.edu/careers/handshake/undergraduate/" }
    ],
    link: "https://www.sandiego.edu/torero-hub/financial-aid/student-employment/",
    school: "USD"
  },

  /* ------------------------ ENTREPRENEURSHIP ------------------------ */
  {
    name: "Fowler Business Concept Challenge",
    categories: ["Competitions", "Entrepreneurship"],
    audiences: ["undergrad", "graduate"],
    description:
      "An annual pitch competition, open to all majors, undergrad and grad, where students pitch business ideas to real investors for scholarship money.",
    details:
      "Open to students from every school and major, all you need is a business idea. The top 16 teams compete for $45,000 in scholarships. It runs on an academic-year cycle: a kickoff session in September (with all submission details) and finals in early December.",
    links: [
      { label: "Fowler Business Concept Challenge (sandiego.edu/fbcc)", url: "https://www.sandiego.edu/fbcc" }
    ],
    link: "https://www.sandiego.edu/business/centers-and-institutes/entrepreneurship/fowler-business-concept-challenge.php",
    school: "USD"
  },
  {
    name: "Entrepreneurship Club",
    category: "Entrepreneurship",
    audiences: ["undergrad"],
    description:
      "A student org for anyone curious about starting things, events, speakers, and people who like building. Find it in the business student org directory.",
    details:
      "Open to anyone who likes building things, you do not need to be a business major. Expect events, guest speakers, workshops, and a community of student founders. TO JOIN: find it on the business school's student-organization directory or the campus 'Join an Org' page, then just show up to a meeting.",
    keywords: ["entrepreneur", "startup", "club", "student org", "founder", "join", "build"],
    links: [
      { label: "Join an org", url: "https://www.sandiego.edu/involvement/student-orgs/join-an-org/" }
    ],
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
    details:
      "One of the country's top-ranked SBDCs, and it's FREE and confidential, open to USD students and community founders. WHAT YOU GET: one-on-one advising on business planning, market research, pitch prep, and getting funding-ready, plus programs like the Lean Essential Sprint to test an idea fast. TO START: fill out the request on the Get Started page and you'll be matched with an advisor, no cost and no equity taken. Especially worth it if you're prepping for the Fowler Business Concept Challenge or the V2 pitch competition.",
    keywords: ["entrepreneur", "startup", "business advising", "sbdc", "the brink", "mentor", "pitch", "market research", "funding", "launch", "free advising"],
    links: [
      { label: "Get started (request free advising)", url: "https://www.sandiego.edu/sbdc/get-started.php" },
      { label: "Online resources", url: "https://www.sandiego.edu/sbdc/services/online-resources.php" }
    ],
    link: "https://www.sandiego.edu/sbdc/",
    school: "USD"
  },
  {
    name: "Student International Business Council",
    category: "Entrepreneurship",
    audiences: ["undergrad"],
    description:
      "Real international business consulting projects for credit and experience, great résumé material and a tight community.",
    details:
      "A selective student org that runs real international-business consulting projects for course credit and hands-on experience, strong resume material and a close community. TO JOIN: applications usually open at the start of the year, find SIBC on the business student-organizations page for the current process and deadline.",
    keywords: ["international business", "consulting", "sibc", "club", "credit", "experience", "join"],
    link: "https://www.sandiego.edu/business/student-experience/student-organizations/student-international-business-council.php",
    school: "USD"
  },

  /* ------------------------ ACADEMIC SUPPORT ------------------------ */
  {
    name: "Writing Center",
    category: "Academic Support",
    audiences: ["undergrad", "graduate"],
    description:
      "Free peer tutoring for any kind of academic writing, any major and any level. Bring an essay at any stage, even just an outline.",
    details:
      "Free for all students, any subject, any stage from brainstorm to final draft. TO BOOK: make an appointment online at sandiego.mywconline.com (create an account with your USD email, then pick a time); drop-ins are welcome when a slot is open. Typical hours are Mon to Wed 9 a.m. to 7 p.m., Thu 9 a.m. to 1 p.m. and 2 to 7 p.m., Fri 9 a.m. to 2 p.m. (check the site for the current term). Founders Hall 190B, (619) 260-4581, writingcenter@sandiego.edu.",
    keywords: ["writing center", "essay", "paper", "tutor", "appointment", "wconline", "proofread", "draft", "thesis"],
    links: [
      { label: "Book a session (WCOnline)", url: "https://sandiego.mywconline.com/" },
      { label: "Writing Center info", url: "https://www.sandiego.edu/cas/centers/writing-center/" }
    ],
    link: "https://www.sandiego.edu/cas/student-resources/tutoring-and-centers.php",
    school: "USD",
    location: "Founders Hall 190B"
  },
  {
    name: "Math Center",
    category: "Academic Support",
    audiences: ["undergrad"],
    description:
      "Drop-in peer tutoring for lower-level math courses. No appointment needed, just show up when you’re stuck.",
    details:
      "Free peer-to-peer tutoring for lower-division math (and often the math inside stats, econ, and science courses). No appointment, just walk in during posted hours and bring your textbook, notes, and the problems you're stuck on. Hours change each semester, so check the Mathematics Learning Center page for the current schedule. Serra Hall 310.",
    keywords: ["math", "tutor", "math center", "drop in", "calculus", "algebra", "statistics", "learning center"],
    links: [
      { label: "Math Learning Center (hours)", url: "https://www.sandiego.edu/cas/centers/math-learning-center/" }
    ],
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
    details:
      "Free drop-in peer tutoring specifically for logic courses (the symbolic/philosophy logic that trips a lot of people up). No appointment, just come to Founders Hall 160 during posted hours with your problem sets and questions. Check the tutoring-and-centers page for the current schedule.",
    keywords: ["logic", "symbolic logic", "philosophy", "tutor", "drop in", "phil"],
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
      "Academic support for 1st- and 2nd-year students, peer advising, study strategies, and help if you land on academic probation.",
    details:
      "For 1st and 2nd year students and anyone who needs an academic reset: peer advising, success coaching, and study-skill help. It is also the office that supports you on ACADEMIC PROBATION, where you meet with a coach, build a plan, and check in through the semester. GET HELP: contact the office (UC 114) for peer advising or coaching. For course tutoring, USD uses the KNACK app, log in with your USD account and book a tutor for free. To DECLARE OR CHANGE A MAJOR, meet your advising office and submit a change-of-major form (Arts & Sciences advising: Founders Hall 117, casadvising@sandiego.edu, (619) 260-4545). Center for Student Success, UC 114.",
    keywords: ["academic probation", "probation", "peer advising", "success coach", "study skills", "tutoring", "knack", "change major", "declare major", "advisor", "advising", "academic help"],
    links: [
      { label: "Course tutoring (KNACK)", url: "https://www.sandiego.edu/student-support-services/services/tutors/" },
      { label: "Academic advising drop-ins & appointments", url: "https://www.sandiego.edu/cas/student-resources/advising/college-advising-drop-in-hours.php" }
    ],
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
    details:
      "A federal TRiO program giving eligible students a support network most people don't get: dedicated academic advising, tutoring, mentoring, workshops, and sometimes grant aid and grad-school prep. WHO QUALIFIES: students who are first-generation, meet income guidelines, or have a documented disability. TO JOIN: you apply and must meet eligibility, contact the office (UC 113) to check if you qualify and start an application. Spots are limited, so reach out early.",
    keywords: ["trio", "first generation", "first gen", "low income", "disability", "advising", "mentoring", "tutoring", "support"],
    link: "https://www.sandiego.edu/student-support-services/",
    school: "USD",
    location: "UC 113"
  },

  /* --------------------------- WELLNESS --------------------------- */
  {
    name: "Disability & Learning Difference Resource Center (DLDRC)",
    categories: ["Wellness", "Academic Support"],
    audiences: ["undergrad", "graduate"],
    description:
      "Accommodations and support for students with disabilities or learning differences. They handle documentation and coordinate with your professors.",
    details:
      "For enrolled students with a documented disability or learning difference. To get set up: contact the office and submit documentation, then meet to arrange academic accommodations. They also provide disability-management support and coordinate with housing, parking, and public safety.",
    links: [
      { label: "Academic accommodations", url: "https://www.sandiego.edu/disability/services/academic-accommodations.php" },
      { label: "Documentation guidelines", url: "https://www.sandiego.edu/disability/documentation/" }
    ],
    link: "https://www.sandiego.edu/disability/",
    school: "USD"
  },
  {
    name: "Counseling Center",
    category: "Wellness",
    audiences: ["undergrad", "graduate"],
    description:
      "Free, confidential counseling for USD students, individual and group sessions, plus walk-in hours. No cost to you.",
    details:
      "Free and confidential for enrolled students, individual and group counseling, psychiatric consultation, and walk-in hours, all at no cost. TO START: call (619) 260-4655 or use walk-in hours (about 11 a.m. to 3 p.m. weekdays, later on Wednesdays when classes are in session) for a brief initial assessment, then they match you to the right care, on campus or in the community. When the office is closed, USD offers TimelyCare telehealth for after-hours support, and the on-call counselor is reachable through Public Safety at (619) 260-2222. In a crisis you can call or text 988 (Suicide & Crisis Lifeline) or text HOME to 741741. Serra Hall 300, (619) 260-4655.",
    links: [
      { label: "How to access services & hours", url: "https://www.sandiego.edu/counseling-center/services/contact-us-office-hours.php" },
      { label: "Accessing counseling services (step-by-step)", url: "https://usdkb.sandiego.edu/s/article/Accessing-Counseling-Services" }
    ],
    link: "https://www.sandiego.edu/counseling-center/",
    school: "USD",
    location: "Serra Hall 300"
  },
  {
    name: "Center for Health & Wellness Promotion",
    category: "Wellness",
    audiences: ["undergrad", "graduate"],
    description:
      "Wellness education and substance-use support, programs, prevention, and one-on-one help to keep life balanced.",
    details:
      "The prevention-and-education side of wellness, separate from medical care (Health Center) and therapy (Counseling Center). Offers programming and one-on-one coaching on stress, sleep, alcohol and other drugs, and overall balance. TO USE: drop by UC 161 or request a wellness-coaching session. Also the place to turn if you want to support a friend who's struggling.",
    keywords: ["wellness", "coaching", "stress", "sleep", "alcohol", "drugs", "substance", "prevention", "balance", "health promotion"],
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
    details:
      "On-campus medical care in Maher Hall 140 for illness, checkups, vaccines, labs, sexual and reproductive health, and more, staffed by physicians and nurse practitioners. TO BE SEEN: book through the online patient portal at mywellness.sandiego.edu (log in with your USD account) or call to schedule; same-day/urgent needs are usually handled by phone first. Bring your ID and insurance card, many visits are low or no cost and they can bill insurance for labs and medications. After hours, use the on-call advice line, and for emergencies call Public Safety (619) 260-2222 or 911. Student Health Center: Maher Hall 140.",
    keywords: ["health center", "doctor", "sick", "appointment", "patient portal", "vaccine", "labs", "insurance", "medical", "birth control", "std testing"],
    links: [
      { label: "Patient portal (book an appointment)", url: "https://mywellness.sandiego.edu/" },
      { label: "Hours & location", url: "https://www.sandiego.edu/health-center/about/hours-location.php" },
      { label: "Health Center FAQs", url: "https://www.sandiego.edu/health-center/frequently-asked-questions.php" }
    ],
    link: "https://www.sandiego.edu/health-center/",
    school: "USD",
    location: "Maher Hall 140"
  },

  /* ------------------------ ENGINEERING & CS ------------------------ */
  {
    name: "Engineering & CS Student Organizations",
    categories: ["Community"],
    audiences: ["undergrad"],
    description:
      "ACM, SHPE, the Cybersecurity Student Association, Theta Tau, SAE, and more, find your people and build projects outside of class.",
    details:
      "Clubs like ACM (computing), SHPE (Hispanic engineers), the Cybersecurity Student Association, Theta Tau (engineering fraternity), and SAE, where you build real projects and meet people in your field. TO JOIN: browse them in the Involvement directory ('Join an Org') or ask in the engineering school, most welcome newcomers any time, no experience required.",
    keywords: ["engineering", "computer science", "club", "acm", "shpe", "cybersecurity", "theta tau", "sae", "join", "project"],
    links: [
      { label: "Join an org", url: "https://www.sandiego.edu/involvement/student-orgs/join-an-org/" }
    ],
    link: "https://www.sandiego.edu/involvement/directory/",
    school: "USD"
  },
  {
    name: "Engineering Academic Advising",
    categories: ["Academic Support"],
    audiences: ["undergrad"],
    description:
      "Every engineering student is assigned a faculty advisor to help with course planning and staying on track to graduate.",
    details:
      "Every engineering student has an assigned FACULTY advisor for course planning and staying on track to graduate. TO USE: meet your advisor before each registration window to plan classes and check prerequisites, the advising page explains who your advisor is and how to reach them. For internships and career planning, pair this with Engineering Career Readiness (CONNECT).",
    keywords: ["engineering", "advising", "advisor", "course planning", "registration", "prerequisites", "graduate"],
    link: "https://www.sandiego.edu/engineering/student-resources/advising.php",
    school: "USD"
  },

  /* ----------------------------- ALUMNI ----------------------------- */
  {
    name: "USD Alumni Association",
    categories: ["Community"],
    audiences: ["alumni"],
    description:
      "Automatic lifetime membership for every USD grad, networking events, 23+ regional Torero Clubs, Homecoming, and alumni scholarships.",
    details:
      "Every USD graduate is automatically a lifetime member, no dues. The standout for networking is T.E.A.M. (Torero Employer and Alumni Mentors), USD's internal LinkedIn-style platform for connecting with alumni and students, flash mentoring (short, low-pressure sessions by phone, video, or in person), and job postings. It's integrated with LinkedIn so joining is quick. You also get a free membership card, Torero Clubs in 23+ regions, Homecoming, and alumni scholarships.",
    links: [
      { label: "T.E.A.M. networking & mentoring platform", url: "https://mentoring.sandiego.edu/" },
      { label: "USD Alumni LinkedIn group", url: "https://www.linkedin.com/groups/43872/" },
      { label: "Torero Network", url: "https://toreronetwork.sandiego.edu/" }
    ],
    link: "https://www.sandiego.edu/alumni/",
    school: "USD"
  },
  {
    name: "Alumni Career Development Benefits",
    categories: ["Career"],
    audiences: ["alumni"],
    description:
      "Grads keep free, lifelong access to career coaching, USD career events, and the Torero mentor network through the Career Development Center.",
    details:
      "As an alum you keep free, lifelong career support through the Career Development Center: limited complimentary career coaching, admission to all USD career events and fairs, and membership in T.E.A.M. (Torero Employer and Alumni Mentors) for networking and mentoring with the wider Torero community.",
    links: [
      { label: "Alumni career services", url: "https://www.sandiego.edu/careers/alumni/services.php" },
      { label: "T.E.A.M. platform", url: "https://mentoring.sandiego.edu/" }
    ],
    link: "https://www.sandiego.edu/alumni/benefits/careers/",
    school: "USD"
  },
  {
    name: "Alumni Email & Google Workspace",
    categories: ["General"],
    audiences: ["alumni"],
    description:
      "Keep your USD email and Google tools after graduation. (Exact alumni policy is worth confirming with ITS.)",
    details:
      "You keep your USD Google email and Workspace tools after you graduate, but there's a catch: you have to sign in at least once every 6 months from a desktop (mobile alone doesn't count) or the account can be deactivated. If it lapses, contact ITS. Back up anything important (files, emails) before graduation just in case.",
    keywords: ["alumni", "email", "google", "workspace", "graduate", "account", "its", "keep email"],
    link: "https://www.sandiego.edu/its/support/software/gsuite/",
    school: "USD",
    verify: true
  },
  {
    name: "Alumni Library Access",
    categories: ["Academic Support"],
    audiences: ["alumni"],
    description:
      "Borrow from Copley Library with your alumni card and tap into databases like JSTOR and HeinOnline through the Torero Network.",
    details:
      "As an alum you can still borrow from Copley Library with your alumni card and get off-campus access to select research databases (JSTOR, HeinOnline, and more) through the Torero Network. TO SET UP: register for alumni library access on the library's alumni page, then log in through the Torero Network to reach the databases.",
    keywords: ["alumni", "library", "copley", "database", "jstor", "heinonline", "borrow", "research", "torero network"],
    links: [
      { label: "Alumni benefits", url: "https://www.sandiego.edu/alumni/benefits/" }
    ],
    link: "https://www.sandiego.edu/library/services/alumni.php",
    school: "USD"
  },
  {
    name: "Alumni Discounts & Perks",
    categories: ["General"],
    audiences: ["alumni"],
    description:
      "Member savings, Bartell Hotels (15% off), the Columbia Sportswear employee store, and the USD Alumni Insurance Program.",
    details:
      "Every USD grad is a lifetime member of the Alumni Association, no dues. Perks include member savings like Bartell Hotels (15% off), the Columbia Sportswear employee store, and the USD Alumni Insurance Program, plus career and library benefits. TO USE: see the full current list on the Benefits page and grab your digital alumni membership card.",
    keywords: ["alumni", "benefits", "perks", "discounts", "savings", "insurance", "membership card", "bartell", "columbia"],
    links: [
      { label: "Benefits information", url: "https://www.sandiego.edu/alumni/benefits/benefits-information.php" },
      { label: "Alumni membership card", url: "https://www.sandiego.edu/alumni/benefits/membership-card.php" }
    ],
    link: "https://www.sandiego.edu/alumni/benefits/",
    school: "USD"
  },

  /* ----------------------------- GENERAL ----------------------------- */
  {
    name: "USD Knowledge Base",
    category: "General",
    audiences: ["undergrad", "graduate", "alumni"],
    description:
      "A searchable FAQ for almost any USD question, tech help, accounts, services. When in doubt, search here first.",
    details:
      "A searchable library of step-by-step how-to articles for almost any USD task: accounts and passwords, MySanDiego, registration, financial aid, transcripts, wifi, printing, and more, plus a central list of official forms. WHEN STUCK: search here first; it usually has the exact steps or points you to the right office.",
    keywords: ["knowledge base", "faq", "how to", "help", "tech", "password", "wifi", "account", "forms", "usdkb"],
    link: "https://usdkb.sandiego.edu/",
    school: "USD"
  },
  {
    name: "Tech Help & Accounts (ITS)",
    categories: ["General"],
    audiences: ["undergrad", "graduate", "alumni"],
    description:
      "Set up your USD account, reset a password, get on the wifi, log into Canvas, and print, plus a real help desk when tech breaks.",
    details:
      "ITS runs your USD accounts and campus tech. COMMON FIXES: claim or reset your USDOne password at my.sandiego.edu ('Register/Claim your USDOne account'); get on wifi by joining 'eduroam' with your full USD email and password; log into Canvas at canvas.sandiego.edu; print through Wepa. WHEN SOMETHING BREAKS: the ITS Help Desk handles logins, laptops, printers, and classroom tech, at (619) 260-7900 or help@sandiego.edu, Mon to Thu 7 a.m. to 6 p.m. and Fri to 5 p.m., with after-hours support too. Step-by-step guides are in the Knowledge Base.",
    keywords: ["it", "its", "tech", "help desk", "password", "reset password", "usdone", "mysandiego", "wifi", "eduroam", "canvas", "printing", "wepa", "account", "login", "email", "locked out"],
    links: [
      { label: "Claim or reset your account (USDOne)", url: "https://usdkb.sandiego.edu/s/article/USDOne-Information-and-Instructions" },
      { label: "Connect to WiFi (eduroam)", url: "https://usdkb.sandiego.edu/s/article/Connecting-to-Eduroam" },
      { label: "Log into Canvas", url: "https://usdkb.sandiego.edu/s/article/How-do-I-log-into-Canvas" },
      { label: "IT Help Desk", url: "https://usdkb.sandiego.edu/s/topic/0TO4y000000wn0bGAA/help-desk" }
    ],
    link: "https://usdkb.sandiego.edu/s/topic/0TO4y0000009PDwGAM/it-services",
    school: "USD"
  },
  {
    name: "Campus Maps & Building Hours",
    categories: ["General"],
    audiences: ["undergrad", "graduate", "alumni"],
    description:
      "Where a building is, and when it's open. The fastest way to find a room, an office, or today's hours.",
    details:
      "Not sure where a building is or whether an office is open right now? WHERE: the interactive campus map (sandiego.edu/maps) shows every building and lets you search by name. HOURS: most offices run about Monday to Friday, 8 a.m. to 5 p.m. during the semester, but hours shift during summer, breaks, and finals, so check the source. The Auxiliary Services hours page lists current hours for dining, the Torero Store, and the Mail Center in one place, and Copley Library keeps its own live hours page (it stays open late during the term). When in doubt, call the specific office, its number is on the resource here in Resourceful.",
    keywords: ["map", "maps", "where is", "location", "building", "hours", "open", "directions", "find", "room", "what time"],
    links: [
      { label: "Interactive campus map", url: "https://www.sandiego.edu/maps/" },
      { label: "Dining, store & mail hours (Auxiliary)", url: "https://www.sandiego.edu/auxiliary/hours/services.php" },
      { label: "Copley Library hours", url: "https://www.sandiego.edu/library/visit/hours.php" }
    ],
    link: "https://www.sandiego.edu/maps/",
    school: "USD"
  },
  {
    name: "Torero Dining & Meal Plans",
    categories: ["General"],
    audiences: ["undergrad", "graduate"],
    description:
      "Where to eat on campus, how meal plans and Dining Dollars work, and how to buy or change a plan.",
    details:
      "Campus dining runs on your Torero ID or the MyUSD Mobile app. MEAL PLANS: buy or change one online through MySanDiego (My Torero Services), plans are tax-free, and Dining Dollars roll from fall to spring but expire at the end of spring. Meal plans start at dinner the night before undergraduate classes begin. Where to eat, menus, and each venue's hours are on the dining site and the Auxiliary Services hours page. Questions go to Dining Services.",
    keywords: ["dining", "food", "meal plan", "dining dollars", "eat", "torero cash", "cafeteria", "hours", "campus cash", "restaurant"],
    links: [
      { label: "Dining venues & menus", url: "https://www.sandiego.edu/dining/" },
      { label: "Current dining hours", url: "https://www.sandiego.edu/auxiliary/hours/services.php" }
    ],
    link: "https://www.sandiego.edu/dining/",
    school: "USD"
  },
  {
    name: "Torero ID & Campus Card",
    categories: ["General"],
    audiences: ["undergrad", "graduate"],
    description:
      "Your Torero ID card, get one, replace a lost one, add Campus Cash, and use it for dining, printing, and building access.",
    details:
      "Your Torero ID is your key to campus: building and residence-hall access, meal plans, Campus Cash, printing, and the library. LOST OR DAMAGED CARD: report it and get a replacement through Campus Card Services (a fee usually applies). ADD MONEY: load Campus Cash online to spend at dining and the Torero Store. New students get their first card at the start of the year. See the Campus Card site for how-tos and the office's current hours.",
    keywords: ["id", "torero id", "campus card", "one card", "lost id", "replace id", "campus cash", "building access", "printing", "card"],
    links: [
      { label: "Campus Card Services", url: "https://www.sandiego.edu/campus-card/" },
      { label: "Torero ID cards (get/replace)", url: "https://www.sandiego.edu/campus-card/services/university-id-cards.php" }
    ],
    link: "https://www.sandiego.edu/campus-card/",
    school: "USD"
  },
  {
    name: "Torero Store (Bookstore)",
    categories: ["General"],
    audiences: ["undergrad", "graduate", "alumni"],
    description:
      "Textbooks and course materials, plus USD gear, supplies, and tech. Buy, rent, or find what a class requires.",
    details:
      "The Torero Store is USD's bookstore for required course materials (buy or rent, new or used), school supplies, laptops and tech, and Torero apparel and gifts. TO FIND YOUR BOOKS: look up your courses on the store site to see exactly what each class requires. Order online for pickup or shipping. Store hours are on the store site and the Auxiliary Services hours page.",
    keywords: ["bookstore", "torero store", "textbooks", "course materials", "books", "rent", "supplies", "merch", "gear", "laptop"],
    links: [
      { label: "Torero Store (books & gear)", url: "https://www.usdtorerostores.com/" },
      { label: "Store hours (Auxiliary)", url: "https://www.sandiego.edu/auxiliary/hours/services.php" }
    ],
    link: "https://www.usdtorerostores.com/",
    school: "USD"
  },
  {
    name: "Mail Center",
    categories: ["General"],
    audiences: ["undergrad", "graduate"],
    description:
      "Get your packages and mail on campus. Where to pick up, your mailing address, and hours.",
    details:
      "The Mail Center handles student mail and packages. You'll get a notification when a package arrives, then pick it up with your Torero ID. Open about Monday to Friday, 8 a.m. to 5 p.m. (confirm current hours on the Auxiliary Services page). Not sure of your campus mailing address or how to have something shipped to you? The Mail Center site has the format and details. mailcenter@sandiego.edu, (619) 260-2204.",
    keywords: ["mail", "package", "mailroom", "mail center", "shipping", "address", "pickup", "amazon", "delivery"],
    links: [
      { label: "Mail Center (address & pickup)", url: "https://www.sandiego.edu/mail-center/" },
      { label: "Mail Center hours (Auxiliary)", url: "https://www.sandiego.edu/auxiliary/hours/services.php" }
    ],
    link: "https://www.sandiego.edu/mail-center/",
    school: "USD"
  },
  {
    name: "Title IX Office",
    categories: ["Wellness", "General"],
    audiences: ["undergrad", "graduate"],
    description:
      "Report or get support for sex discrimination, sexual misconduct, harassment, or relationship violence, and understand your options.",
    details:
      "The Title IX Office handles reports of sex discrimination, sexual misconduct, sexual harassment, and relationship violence, and can put supportive measures in place (like academic or housing accommodations) whether or not you file a formal complaint. FILING IS YOUR CHOICE: a report gives the office notice so they can offer help; a complaint asks them to start a process. For confidential support first, CARE (Campus Assault Resources & Education) advocates are free and do not trigger a report. In an emergency, call Public Safety at (619) 260-2222 or 911. Title IX Office: Maher Hall 101, TitleIX@sandiego.edu, (619) 260-4594.",
    keywords: ["title ix", "title 9", "sexual misconduct", "sexual assault", "harassment", "discrimination", "relationship violence", "report", "accommodations", "care", "safety"],
    links: [
      { label: "Title IX (reporting & options)", url: "https://www.sandiego.edu/titleix/" },
      { label: "Confidential support (CARE)", url: "https://www.sandiego.edu/care/" }
    ],
    link: "https://www.sandiego.edu/titleix/",
    school: "USD",
    location: "Maher Hall 101"
  },
  {
    name: "LGBTQ+ & Allies Commons",
    categories: ["Community", "Wellness"],
    audiences: ["undergrad", "graduate"],
    description:
      "A home base and community for LGBTQ+ students and allies, with programs, support, and a space to belong.",
    details:
      "One of USD's cultural commons and a welcoming space for LGBTQ+ students and allies. Come by to hang out, join programs and student orgs, find support and resources, or just have a place where you belong. On the cultural-commons floor of the Student Life Pavilion (4th floor), alongside the other identity commons. See the site for hours and current programming.",
    keywords: ["lgbtq", "lgbtq+", "queer", "gay", "trans", "pride", "gender", "sexuality", "commons", "belonging", "community", "allies"],
    link: "https://www.sandiego.edu/lgbtq/",
    school: "USD",
    location: "Student Life Pavilion, 4th floor"
  },
  {
    name: "Women's Commons",
    categories: ["Community", "Wellness"],
    audiences: ["undergrad", "graduate"],
    description:
      "A space and community centered on women and gender equity, with programs, support, and connection.",
    details:
      "A cultural commons focused on women, gender equity, and empowerment, and open to all students. Drop in for community, programming, mentorship, and support, or to get involved with related student orgs. On the cultural-commons floor of the Student Life Pavilion (4th floor). Check the site for hours and events.",
    keywords: ["women", "womens commons", "gender", "equity", "feminism", "commons", "belonging", "community", "support"],
    link: "https://www.sandiego.edu/womens-commons/",
    school: "USD",
    location: "Student Life Pavilion, 4th floor"
  },
  {
    name: "Black Student Resource Commons (BSRC)",
    categories: ["Community", "Academic Support"],
    audiences: ["undergrad", "graduate"],
    description:
      "A home base for Black students, with community, mentorship, academic support, and a space to belong.",
    details:
      "The BSRC is a community and support space centered on Black students at USD. It offers mentorship, connection to Black student organizations, academic and personal support, and programming throughout the year, and it's open to all who want to engage. On the cultural-commons floor of the Student Life Pavilion (4th floor). See the site for hours and how to get involved.",
    keywords: ["black", "bsrc", "african american", "black student", "mentorship", "commons", "belonging", "community", "support", "identity"],
    link: "https://www.sandiego.edu/bsrc/",
    school: "USD",
    location: "Student Life Pavilion, 4th floor"
  },
  {
    name: "One Stop Student Center (Torero Hub)",
    category: "General",
    audiences: ["undergrad", "graduate"],
    description:
      "Financial aid, the registrar, and student accounts in one place, now part of the Torero Hub. Where you go to register, add/drop, get transcripts, and check your degree progress.",
    details:
      "The Torero Hub (UC 126) combines the Registrar, Financial Aid, and Student Accounts; most tasks start at my.sandiego.edu under the Torero Hub tab. ADD / DROP a class: register during your assigned window; once it closes, email torerohub@sandiego.edu to request the change. DEGREE PROGRESS: use Degree Works, your live audit of what's done and what's left. TRANSCRIPT: order through the Registrar (about $10). Enrollment verification, name changes, and graduation applications all live under Student Records. The USD Knowledge Base has step-by-step articles for almost everything. Torero Hub, UC 126, (619) 260-2700, torerohub@sandiego.edu.",
    keywords: ["registrar", "register", "add drop", "add/drop", "withdraw", "transcript", "degree works", "graduation", "apply to graduate", "enrollment verification", "student records", "one stop", "torero hub", "mysandiego"],
    links: [
      { label: "All Torero Hub forms (central list)", url: "https://usdkb.sandiego.edu/s/topic/0TO4y0000009PEnGAM/forms" },
      { label: "Registration (add/drop) & tips", url: "https://www.sandiego.edu/torero-hub/registration/" },
      { label: "Degree Works (degree audit)", url: "https://www.sandiego.edu/torero-hub/registration/degree-works.php" },
      { label: "Apply for graduation", url: "https://www.sandiego.edu/torero-hub/graduation/" },
      { label: "Student records (transcripts, verification)", url: "https://www.sandiego.edu/torero-hub/student-records/" },
      { label: "Academic calendar & deadlines", url: "https://www.sandiego.edu/academics/academic-calendars.php" },
      { label: "USD Knowledge Base (step-by-step how-tos)", url: "https://usdkb.sandiego.edu/s/" }
    ],
    link: "https://www.sandiego.edu/torero-hub/",
    school: "USD",
    location: "Hahn UC 126"
  },
  {
    name: "Clubs, Orgs & Learning Communities",
    category: "General",
    audiences: ["undergrad", "graduate"],
    description:
      "The full directory of USD student organizations across every interest. The fastest way to find your community.",
    details:
      "The full directory of USD clubs and organizations across every interest, the fastest way to find your people. TO JOIN: browse the Involvement directory, use 'Join an Org' to see how each one signs up, and go to a meeting, new members are welcome year-round (the involvement fair each fall is a great entry point). Want to start one that doesn't exist yet? Register a new org through Student Activities & Involvement.",
    keywords: ["clubs", "organizations", "orgs", "involvement", "community", "join", "start a club", "directory", "learning communities"],
    links: [
      { label: "Join an org", url: "https://www.sandiego.edu/involvement/student-orgs/join-an-org/" },
      { label: "Student orgs (start one)", url: "https://www.sandiego.edu/involvement/student-orgs/" }
    ],
    link: "https://www.sandiego.edu/involvement/directory/",
    school: "USD"
  },

  /* --------------------------- COMPETITIONS --------------------------- */
  {
    name: "V2 (Venture Vetting) Pitch Competition",
    categories: ["Competitions", "Entrepreneurship"],
    audiences: ["undergrad", "graduate"],
    description:
      "USD’s campus-wide pitch competition. Hundreds join the V2 Learning Series, and 10 finalists pitch real angel investors for up to $25,000 in seed money.",
    details:
      "USD's campus-wide pitch competition, open to any student with an idea (not just business majors). Hundreds join the V2 Learning Series workshops, and about 10 finalists pitch real angel investors for up to $25,000 in seed funding. TO ENTER: watch for the application each year through the Knauss School and the Entrepreneurship & Innovation Catalyzer, and sharpen your pitch through the Learning Series and free advising at The Brink SBDC.",
    keywords: ["v2", "venture vetting", "pitch", "competition", "startup", "seed money", "investors", "entrepreneur", "funding"],
    link: "https://www.sandiego.edu/business/",
    school: "USD"
  },
  {
    name: "Fowler Global Social Innovation Challenge (GSIC)",
    categories: ["Competitions", "Entrepreneurship"],
    audiences: ["undergrad", "graduate"],
    description:
      "A global competition for student social entrepreneurs building ventures around the UN Sustainable Development Goals. Hosted by USD’s Kroc School, with funding and mentorship on the line.",
    keywords: ["interdisciplinary", "team up", "connect", "competition", "pitch", "startup", "social impact", "global"],
    details:
      "Run by USD's Kroc School of Peace Studies: student teams build ventures aligned with the UN Sustainable Development Goals, get mentorship, and compete for funding. Over the years it has drawn 3,000+ students from 25+ countries. Open to undergrad and grad students, a strong fit if your idea has a social or environmental mission.",
    link: "https://www.sandiego.edu/cpc/gsic/",
    school: "USD"
  },
  {
    name: "Torero Entrepreneurship Challenge (TECh)",
    categories: ["Competitions", "Entrepreneurship"],
    audiences: ["undergrad", "graduate"],
    description:
      "A tech-innovation competition open to any USD student team with a technology component, any major, any program. Build a team and compete for the Starpoint Award.",
    keywords: ["interdisciplinary", "team up", "engineering", "computer science", "technology", "competition", "startup", "cross-major"],
    details:
      "Part of the engineering E-Track program: any USD student team with a technology component can enter, regardless of major, and compete for the Starpoint Award with mentoring along the way. This is the one to look at if you want to pair a non-technical idea (like a marketing or business concept) with engineering and CS students to actually build it.",
    link: "https://www.sandiego.edu/engineering/student-innovation/etrack-entrepreneurship-program/tech-competition/",
    school: "USD"
  },
  {
    name: "Baja SAE, Torero Racing",
    categories: ["Competitions", "Entrepreneurship"],
    audiences: ["undergrad"],
    description:
      "Design, build, and race an off-road vehicle with USD’s Torero Racing team, competing against schools worldwide. Hands-on engineering teamwork all year.",
    details:
      "Design, build, and race an off-road vehicle with USD's Torero Racing team, competing against schools worldwide, real machining, fabrication, and teamwork all year. TO JOIN: reach out through the Baja SAE / student-innovation page; open to students who want hands-on experience, not only mechanical-engineering majors (they need people for business, media, and logistics too).",
    keywords: ["baja", "sae", "torero racing", "engineering", "build", "race", "team", "hands on", "makerspace"],
    link: "https://www.sandiego.edu/engineering/student-innovation/sae-baja/",
    school: "USD"
  },

  /* ------------------ BUILD / TEAM-UP / INNOVATION HUBS ------------------ */
  {
    name: "Entrepreneurship & Innovation Catalyzer",
    category: "Entrepreneurship",
    audiences: ["undergrad", "graduate"],
    description:
      "Home base for student founders in the Knauss Center, a startup incubator and makerspace that runs the V2 competition, the Torero Ventures Lab, and more.",
    details:
      "The home base for student founders in the Knauss Center, an incubator and makerspace that runs the V2 pitch competition, the Torero Ventures Lab, and other founder programs. TO USE: stop in to work on your venture, join a program, or get connected to mentors and The Brink SBDC. A great starting point if you have an idea and don't know step one.",
    keywords: ["entrepreneur", "startup", "incubator", "catalyzer", "founder", "v2", "ventures lab", "makerspace", "mentor"],
    link: "https://www.sandiego.edu/business/",
    school: "USD"
  },
  {
    name: "Changemaker Hub",
    category: "Entrepreneurship",
    audiences: ["undergrad", "graduate"],
    description:
      "USD’s home for social innovation, changemaker courses, designated clubs, scholarships, and the fall Changemaker Challenge. A great place to find teammates for impact projects.",
    details:
      "USD's home base for social innovation and impact projects, and one of the best places on campus to find teammates across different majors. WAYS TO GET INVOLVED: join the Changemaker Student Committee, work or hang out at The Hive (the student changemaker space), take changemaker-designated courses, or enter a challenge, the Changemaker Challenge, the Global Social Innovation Challenge, or the V2 pitch competition. Start on the Students page to see what's open right now.",
    keywords: ["team up", "connect", "interdisciplinary", "social impact", "community", "competition", "collaborate", "changemaker", "the hive", "social innovation", "get involved"],
    links: [
      { label: "The Hive (student space)", url: "https://www.sandiego.edu/changemaker/students/the-hive/" },
      { label: "Changemaker Student Committee", url: "https://www.sandiego.edu/changemaker/students/changemaker-student-committee.php" }
    ],
    link: "https://www.sandiego.edu/changemaker/students/",
    school: "USD"
  },
  {
    name: "Engineering Student Innovation & Makerspaces",
    categories: ["Entrepreneurship"],
    audiences: ["undergrad", "graduate"],
    description:
      "Prototyping labs and makerspaces, including Donald’s Garage and the Belanich Engineering Center, plus the E-Track program, where students build and test real projects together.",
    details:
      "Prototyping labs and makerspaces (Donald's Garage, the Belanich Engineering Center) plus the E-Track program where students build and test real projects. TO USE: complete any required safety and tool training first, then book time or drop in to use the equipment; ask the engineering student-innovation office about access, hours, and how to join E-Track.",
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
      "The office and community hub for grad and law students, programs, events, and advocacy, based at the Graduate & Law Student Commons.",
    details:
      "Your home base as a grad or law student, at the Graduate & Law Student Commons (SLP 401). WHAT THEY DO: social and professional events, a lounge and study space, advocacy for grad-student needs, and a front door to the grad-specific services you might not know exist (grad academic support, the SOLES writing center, wellness). If you're new or feeling disconnected from a mostly-undergrad campus, start here to plug into your people. SLP 401.",
    keywords: ["graduate", "grad student", "law student", "grad life", "commons", "events", "community", "advocacy"],
    links: [
      { label: "Grad student services & support", url: "https://www.sandiego.edu/grad-life/student-services/" }
    ],
    link: "https://www.sandiego.edu/grad-life/",
    school: "USD",
    location: "Graduate & Law Student Commons, SLP 401"
  },
  {
    name: "Graduate Academic Support",
    category: "Academic Support",
    audiences: ["graduate"],
    description:
      "Academic support and referrals gathered for grad students in one place, from the Graduate & Law Student Handbook to accommodations, tutoring, and food assistance.",
    details:
      "A one-stop roundup of academic support for grad students, pulled from the Graduate & Law Student Handbook: tutoring, the SOLES graduate writing center, accommodations (through the Disability office), and basic-needs help like the food pantry. TO USE: start here to find the right grad-specific service, then book directly with it. Handy when you're not sure a resource even applies to grad students, most do.",
    keywords: ["graduate", "grad student", "academic support", "tutoring", "writing", "accommodations", "handbook", "referral"],
    link: "https://www.sandiego.edu/grad-life/student-services/academic-support.php",
    school: "USD"
  },
  {
    name: "SOLES Graduate Writing Center",
    category: "Academic Support",
    audiences: ["graduate"],
    description:
      "Free writing coaching, workshops, and one-on-one sessions built for grad students, online or on campus, so busy schedules aren’t a barrier.",
    details:
      "Free writing coaching built for grad students, online or on campus, so distance and busy schedules aren't a barrier. Coaches give feedback on grad-level writing (papers, theses, dissertations) and run workshops on style, structure, and citations. TO BOOK: schedule online at sandiego.mywconline.com, or call (619) 260-4581 or email writingcenter@sandiego.edu.",
    keywords: ["graduate", "writing", "coaching", "thesis", "dissertation", "soles", "appointment", "wconline", "workshop"],
    links: [
      { label: "Book a session (WCOnline)", url: "https://sandiego.mywconline.com/" }
    ],
    link: "https://www.sandiego.edu/soles/students-and-alumni/current-students/writing-center.php",
    school: "USD"
  },
  {
    name: "Law Career & Professional Development",
    category: "Career",
    audiences: ["graduate"],
    description:
      "Career coaching, interview prep, and the exclusive #HireUSDLaw job board for USD School of Law students.",
    details:
      "Career services built specifically for USD Law students: one-on-one coaching, resume and interview prep, and the exclusive #HireUSDLaw job board. TO USE: book a coaching appointment through Law Careers early, legal employers recruit on law-school timelines (often a year ahead), and check #HireUSDLaw for postings and on-campus interviews.",
    keywords: ["law", "career", "legal", "job", "interview", "coaching", "hireusdlaw", "professional development"],
    link: "https://www.sandiego.edu/law/careers/students/services/",
    school: "USD"
  },
  {
    name: "Law Academic Success & Bar Programs",
    category: "Academic Support",
    audiences: ["graduate"],
    description:
      "Bar-exam prep strategy sessions, the 1L Fellows mentorship program, and academic improvement plans for USD law students.",
    details:
      "Academic support for law students plus bar-exam prep. Offers the 1L Fellows program (paired with a successful upper-year mentor for guidance and tutoring), course-specific study sessions, individual academic plans, and bar-prep strategy meetings that cover timelines, the MPRE, and the moral-character application. TO USE: connect through the Academic Success & Bar Programs office, especially during 1L year and as you approach the bar exam.",
    keywords: ["law", "bar exam", "academic success", "1l", "fellows", "mentor", "mpre", "study", "bar prep"],
    link: "https://www.sandiego.edu/law/student-affairs/bar-programs/",
    school: "USD"
  },
  {
    name: "Law Student Support & Wellness",
    category: "Wellness",
    audiences: ["graduate"],
    description:
      "Wellness programs, accommodations, and parental resources tailored to the realities of law school, through USD Law Student Affairs.",
    details:
      "Support tailored to the realities of law school, through USD Law Student Affairs: wellness programming, academic accommodations, and parent/caregiver resources. TO USE: reach out to Law Student Affairs for support or to set up accommodations. The campus Counseling Center is also free to law students, and in a crisis you can call or text 988.",
    keywords: ["law", "wellness", "accommodations", "support", "student affairs", "counseling", "mental health", "parent"],
    link: "https://www.sandiego.edu/law/student-affairs/student-support/",
    school: "USD"
  },

  /* ------------------ COMMUNITY & INVOLVEMENT ------------------ */
  {
    name: "Mulvaney Center for Community, Awareness & Social Action",
    categories: ["Community"],
    audiences: ["undergrad", "graduate"],
    description:
      "USD's hub for community engagement and service-learning, volunteer, join community-based programs, and connect classroom learning to real social change.",
    details:
      "Part of the Changemaker Hub. Runs course-based service-learning across ~150 classes with 130+ community partners, plus programs like the Youth Engagement Initiative (tutoring K–12 in Linda Vista) and the MICAH summer fellowship. A great way to get involved off campus and build leadership.",
    keywords: ["volunteer", "community", "service", "social justice", "get involved"],
    link: "https://www.sandiego.edu/mccasa/",
    school: "USD",
    location: "Student Life Pavilion, 3rd floor"
  },
  {
    name: "United Front Multicultural Commons",
    categories: ["Community"],
    audiences: ["undergrad", "graduate"],
    description:
      "Home for USD's multicultural student community, cultural student orgs, programming, and identity resource centers on the 4th floor of the Student Life Pavilion.",
    details:
      "Houses the Black Student Resource Center, the Women's Commons (with a lactation room), and the LGBTQ+ Commons, plus Safe Space Allies training. A welcoming place to find community and support around identity.",
    keywords: ["multicultural", "identity", "LGBTQ", "black student", "women", "diversity", "belonging"],
    link: "https://www.sandiego.edu/united-front/",
    school: "USD",
    location: "Student Life Pavilion, 4th floor (SLP 418)"
  },
  {
    name: "Campus Recreation",
    categories: ["Community", "Wellness"],
    audiences: ["undergrad", "graduate"],
    description:
      "Intramural leagues, sport clubs, fitness and group classes, and outdoor adventures, 30+ rec classes each semester, open to all skill levels.",
    details:
      "Your Torero ID gets you into the gym and group fitness for free. INTRAMURALS: create a free account on IMLeagues (campusrecreation.sandiego.edu/IMLeague) to join or start a team, most sports run in short seasons each semester. REC CLASSES: browse and register for credit and non-credit classes (surf, scuba, yoga, and more) on the Recreation Classes page. SPORT CLUBS & OUTDOOR ADVENTURES: sign up through their pages for competitive clubs or guided trips. Questions: (619) 260-4533, campusrecreation@sandiego.edu.",
    keywords: ["intramural", "fitness", "gym", "sports", "recreation", "outdoor", "community", "imleagues", "group fitness", "rec class", "sport club"],
    links: [
      { label: "Intramurals (IMLeagues sign-up)", url: "https://campusrecreation.sandiego.edu/IMLeague" },
      { label: "Recreation classes (register)", url: "https://www.sandiego.edu/campus-recreation/recreation-classes/" },
      { label: "Memberships & access", url: "https://www.sandiego.edu/campus-recreation/about/memberships.php" }
    ],
    link: "https://www.sandiego.edu/campus-recreation/",
    school: "USD",
    location: "Jenny Craig Pavilion & Sports Center"
  },
  {
    name: "Changemaker Design Lab",
    categories: ["Entrepreneurship", "Community"],
    audiences: ["undergrad", "graduate"],
    description:
      "A hands-on program where student teams use human-centered design to tackle real social-justice challenges on campus, and pitch fundable solutions.",
    details:
      "A nine-week experience: teams research a social-change topic, co-create solutions with people who have lived experience, and present at an end-of-semester showcase. Participants receive a $600 stipend, and promising ideas get funding to pilot the next semester.",
    keywords: ["design thinking", "social innovation", "team", "stipend", "changemaker", "interdisciplinary"],
    link: "https://www.sandiego.edu/changemaker/ideas-into-action/design-lab.php",
    school: "USD"
  },

  /* ------------------ MORE ACADEMIC SUPPORT ------------------ */
  {
    name: "Office of Undergraduate Research",
    categories: ["Research"],
    audiences: ["undergrad"],
    description:
      "Do research or creative work with a faculty mentor, and get funded for it. USD runs two paid summer programs, STAR and BURST, plus support to present your work.",
    details:
      "You don't need to be a senior or a science major to do research. HOW TO GET STARTED: find a faculty member whose work interests you (check department pages or ask a professor you like) and ask to get involved, then apply for funding through the Office of Undergraduate Research (OUR). The two summer funding programs are BURST (for students new to research) and STAR (for students with more experience, and most creative-works projects); both are a full-time 10-week summer project with a USD faculty mentor, with a $6,000 student stipend, up to $500 in supplies, and a 50% summer housing discount. You need a faculty mentor lined up before you apply, and applications run on an annual cycle that closes months before summer, so check the dates early. New to it all? Start on the Prospective Students page, or drop into OUR office hours in Maher Hall 252.",
    keywords: ["research", "faculty", "star", "burst", "creative works", "lab", "grant", "conference", "mentor", "funding", "get involved", "stipend", "summer research"],
    links: [
      { label: "STAR & BURST summer research", url: "https://www.sandiego.edu/ugresearch/students/star-burst.php" },
      { label: "New to research? Start here", url: "https://www.sandiego.edu/ugresearch/prospective-students/" }
    ],
    link: "https://www.sandiego.edu/ugresearch/",
    school: "USD",
    location: "Maher Hall 252"
  },
  {
    name: "STAR & BURST Summer Research",
    categories: ["Research"],
    audiences: ["undergrad"],
    description:
      "USD's two paid summer research programs. Spend 10 weeks on a research or creative-works project with a faculty mentor and earn a $6,000 stipend.",
    details:
      "STAR and BURST are USD's summer undergraduate research funding programs, run by the Office of Undergraduate Research. BURST (Beginning Undergraduate Research Student Training) is for students new to research; STAR (Summer Training in Advanced Research) is for students with more experience, and is usually the better fit for creative-works projects. Both are a full-time, 10-week summer project (40 hours a week) with a USD faculty mentor. Awardees get a $6,000 stipend, up to $500 in supplies, and a 50% discount on summer campus housing. HOW TO APPLY: (1) line up a faculty mentor first, this is required; (2) choose STAR or BURST with your mentor using the 'STAR or BURST?' guidance; (3) submit the application, for BURST the mentor writes most of it, for STAR the student writes the project statement. Applications run on an annual cycle and close months before summer, so start early. Questions? OUR holds office hours in Maher Hall 252.",
    keywords: ["star", "burst", "summer research", "research funding", "stipend", "faculty mentor", "creative works", "undergraduate research", "paid research", "our"],
    links: [
      { label: "STAR & BURST overview", url: "https://www.sandiego.edu/ugresearch/students/star-burst.php" },
      { label: "STAR guidelines", url: "https://www.sandiego.edu/ugresearch/students/star-scholars.php" },
      { label: "BURST guidelines", url: "https://www.sandiego.edu/ugresearch/students/burst-scholars.php" }
    ],
    link: "https://www.sandiego.edu/ugresearch/students/star-burst.php",
    school: "USD",
    location: "Maher Hall 252"
  },
  {
    name: "Institutional Review Board (IRB)",
    categories: ["Research"],
    audiences: ["undergrad", "graduate"],
    description:
      "If your research involves people (surveys, interviews, experiments), you need IRB approval before you collect data. This is where the forms and training live.",
    details:
      "Any research with human participants, surveys, interviews, focus groups, or experiments, must be reviewed and approved by USD's Institutional Review Board (IRB) BEFORE you collect any data. HOW IT WORKS: (1) Talk to your faculty advisor first; a student application is a collaboration with them. (2) Complete the required CITI human-subjects training (link on the IRB site). (3) Get access to Cayuse, USD's IRB application system: if it's your first time, fill out the first-time-researcher form on the IRB 'Getting Started' page with your USD email, then allow up to a week for your account. (4) Submit your application in Cayuse. To open it, log in to MySanDiego, go to MyAcademics, search 'Cayuse IRB', and click the Cayuse IRB link, that takes you to the Cayuse site where you create, complete, and submit your application. There are four review levels, Not-Human-Subjects, Exempt, Expedited, and Full, based on your study's risk. WHERE THE FORMS ARE: the IRB Forms page has every template, and the Submission Guides page walks you through each step. Questions: irb@sandiego.edu.",
    keywords: ["irb", "institutional review board", "human subjects", "research ethics", "cayuse", "citi training", "survey", "interview", "consent", "thesis", "dissertation", "research approval", "forms"],
    links: [
      { label: "IRB forms", url: "https://www.sandiego.edu/irb/forms/" },
      { label: "Getting started (first-time researchers)", url: "https://www.sandiego.edu/irb/getting-started/" },
      { label: "Submission guides", url: "https://www.sandiego.edu/irb/submission-guides.php" }
    ],
    link: "https://www.sandiego.edu/irb/",
    school: "USD"
  },
  {
    name: "Copley Library, Research Help",
    categories: ["Research", "Academic Support"],
    audiences: ["undergrad", "graduate"],
    description:
      "Get research help from a librarian by chat, text, or email, with 24/7 after-hours chat, plus subject specialists and 190+ research databases.",
    details:
      "Use the Ask-A-Librarian link on the library homepage for quick help, or book a session with a subject specialist for in-depth, discipline-specific research. Copley holds 180,000+ e-books and 190+ databases. The building has quiet and group study spaces and stays open late during the term, check the live hours page before a late-night visit. (619) 260-4799.",
    keywords: ["library", "research", "librarian", "database", "citation", "sources", "copley", "study space", "hours", "quiet"],
    links: [
      { label: "Library hours", url: "https://www.sandiego.edu/library/visit/hours.php" },
      { label: "Study spaces", url: "https://www.sandiego.edu/library/visit/spaces.php" }
    ],
    link: "https://www.sandiego.edu/library/services/research-help-and-tools.php",
    school: "USD",
    location: "Copley Library"
  },
  {
    name: "National Fellowships Office",
    categories: ["Career", "Academic Support"],
    audiences: ["undergrad", "graduate"],
    description:
      "Advising to help you win nationally competitive fellowships and scholarships, funding for grad school, research, and teaching abroad (think Fulbright).",
    details:
      "Fellowships fund graduate study, research, English teaching abroad, and language study; some also recognize undergrad research or public service. Deadlines fall throughout the year and some need a campus endorsement, so start early. Email nationalfellowships@sandiego.edu · BEC 117.",
    keywords: ["fellowship", "fulbright", "scholarship", "grant", "research", "study abroad", "grad school"],
    link: "https://www.sandiego.edu/cas/student-resources/scholarships/fellowships.php",
    school: "USD",
    location: "BEC 117"
  },

  /* ------------------ MORE WELLNESS / BASIC NEEDS ------------------ */
  {
    name: "USD Food Pantry",
    categories: ["Wellness"],
    audiences: ["undergrad", "graduate"],
    description:
      "Free food, fresh produce, hygiene supplies, and a Torero Closet for any student who needs them, no questions asked.",
    details:
      "In Hahn University Center 116, the pantry stocks groceries, fresh produce, dairy and protein, plus school supplies, hygiene items, and laundry detergent. Part of USD's effort to end student food insecurity.",
    keywords: ["food", "pantry", "basic needs", "hygiene", "insecurity", "free", "help", "hungry"],
    link: "https://www.sandiego.edu/food-pantry/",
    school: "USD",
    location: "Hahn University Center 116"
  },
  {
    name: "CARE, Campus Assault Resources & Education",
    categories: ["Wellness"],
    audiences: ["undergrad", "graduate"],
    description:
      "Free, confidential advocates for anyone affected by sexual assault, harassment, or relationship violence, support, options, and help navigating reporting.",
    details:
      "CARE advocates offer confidential support and can walk you through your options and resources, whether or not you choose to report. All CARE/Wellness services are free for enrolled students. If you or a friend needs help, start here.",
    keywords: ["assault", "violence", "harassment", "advocate", "confidential", "safety", "title ix", "support"],
    link: "https://www.sandiego.edu/care/get-help.php",
    school: "USD",
    location: "University Center 161"
  },

  /* ------------------ GLOBAL & POPULATION-SPECIFIC ------------------ */
  {
    name: "Study Abroad (International Center)",
    categories: ["General"],
    audiences: ["undergrad", "graduate"],
    description:
      "USD ranks #1 in the nation for study abroad, 75+ programs in 44 countries, many led by USD faculty, across every major.",
    details:
      "Apply and track every form and deadline in Via, the study abroad portal. TRANSFER CREDIT: each program has a Pre-Approved Course List of classes that transfer to USD automatically (on the 'Academics Abroad, Semester' page, under 'Transfer Evaluation Process'). If your course isn't listed, submit the Transfer Evaluation Request Form (linked there) before you leave, it can take months. Meet with both your USD advisor and your Study Abroad Manager before the deadline. DEADLINES: apps are due months ahead (fall around Feb to Mar, spring and intersession around mid-Sept), and that is also the need-based scholarship deadline; Spain and Italy have earlier mandatory visa workshops. Short-term 3 to 4 week faculty-led programs run in Intersession and Summer. International Center, Serra Hall 201, (619) 260-4598.",
    keywords: ["study abroad", "international", "global", "travel", "madrid", "semester abroad", "course approval", "pre-approved course list", "transfer evaluation", "credit transfer", "change schedule", "not pre-approved", "form", "petition", "syllabus"],
    links: [
      { label: "Academics Abroad, Semester (Transfer Evaluation Process tab)", url: "https://www.sandiego.edu/international/study-abroad/academics-abroad/semester.php" },
      { label: "Transfer Evaluation Request Form", url: "https://docs.google.com/forms/d/e/1FAIpQLScF9pB8B8vZ1_dIKYEy9n4wAVZEn25fxBuuoUsxO4cSFboaDw/viewform" },
      { label: "Short-term programs (Intersession & Summer)", url: "https://www.sandiego.edu/international/study-abroad/programs/short-term-opportunities.php" },
      { label: "Apply & track deadlines (Via portal)", url: "https://www.sandiego.edu/international/study-abroad/my-application.php" },
      { label: "Study abroad policies", url: "https://www.sandiego.edu/international/study-abroad/policies.php" }
    ],
    link: "https://www.sandiego.edu/international/study-abroad/",
    school: "USD",
    location: "Serra Hall 201"
  },
  {
    name: "Office of International Students & Scholars (OISS)",
    categories: ["General"],
    audiences: ["undergrad", "graduate"],
    description:
      "Visa and immigration support for international students, F-1/J-1 status, work authorization, orientation, and help settling into life at USD.",
    details:
      "OISS helps you maintain your visa status, understand employment options (like OPT/CPT), and navigate university life, with orientation and compliance workshops. international@sandiego.edu · (619) 260-4598.",
    keywords: ["international", "visa", "f-1", "j-1", "immigration", "opt", "cpt", "status"],
    link: "https://www.sandiego.edu/international/oiss/",
    school: "USD",
    location: "Serra Hall 315"
  },
  {
    name: "Military & Veterans Program",
    categories: ["General"],
    audiences: ["undergrad", "graduate"],
    description:
      "Support for military-connected students and veterans, VA education benefits, ROTC, and community through the Epstein Family Military Center.",
    details:
      "Home base for veterans and military-connected students, benefits help, community, and a place to study. USING VA BENEFITS (GI Bill, etc.): you must submit a Request to Certify every semester so USD's Campus Certifying Official can report your enrollment to the VA, this is the step that releases your funding. Provide your Certificate of Eligibility (COE) by the first day of class, and tell the certifying official within a week if your credit load or eligibility changes. USD is also Yellow Ribbon and pre-posts Post-9/11 / Yellow Ribbon amounts to your account each term. Questions: Epstein Family Military Center.",
    keywords: ["veteran", "military", "va", "benefits", "rotc", "gi bill", "service member", "certify", "yellow ribbon", "post 9/11", "certificate of eligibility"],
    links: [
      { label: "VA educational benefits", url: "https://www.sandiego.edu/military/benefits-administration/" },
      { label: "Request to Certify (each semester)", url: "https://www.sandiego.edu/military/benefits-administration/request-to-certify.php" }
    ],
    link: "https://www.sandiego.edu/military/",
    school: "USD"
  },
  {
    name: "Parking & Mobility Services",
    categories: ["General"],
    audiences: ["undergrad", "graduate"],
    description:
      "Parking permits, where to park, citations and appeals, plus shuttles and other ways to get around USD.",
    details:
      "Runs campus parking and transportation. TO PARK you need a permit: buy an E-Permit through My Parking Account and register your license plate, your plate IS your permit (enforcement scans plates, no hangtag). Rates change yearly (recently about $395 a year or $220 a semester), so check the current rate first. Park only in marked student lots and read the Rules & Regulations so you don't get ticketed. GOT A CITATION: pay or appeal it online through My Parking Account by the deadline on the ticket. Prefer no permit? Ask about the tram and shuttle options. Details on the student parking page and FAQ.",
    keywords: ["parking", "permit", "car", "citation", "ticket", "appeal", "commuter", "e-permit", "license plate", "shuttle", "tram", "mobility", "where to park"],
    links: [
      { label: "Student parking info", url: "https://www.sandiego.edu/mobility-services/parking/parking-information/students.php" },
      { label: "Buy an E-Permit (My Parking Account)", url: "https://www.sandiego.edu/mobility-services/parking/online-services/purchase-e-permit.php" },
      { label: "Rules & regulations", url: "https://www.sandiego.edu/mobility-services/parking/parking-information/general-parking-information.php" },
      { label: "Parking FAQ", url: "https://www.sandiego.edu/mobility-services/parking/faq.php" }
    ],
    link: "https://www.sandiego.edu/mobility-services/parking/",
    school: "USD"
  },
  {
    name: "Undocumented Student Resources",
    categories: ["General"],
    audiences: ["undergrad", "graduate"],
    description:
      "A central place for undocumented and DACA students, support, legal information, scholarships, and staff who can help you navigate USD confidentially.",
    details:
      "Gathers financial aid and scholarship options, legal resources (including the Law School's guides), and campus contacts for undocumented and DACAmented students. A confidential starting point if you have questions about your situation.",
    keywords: ["undocumented", "daca", "immigration", "support", "dreamer", "confidential"],
    link: "https://www.sandiego.edu/undocumented/",
    school: "USD"
  },
  {
    name: "Department of Public Safety",
    categories: ["General"],
    audiences: ["undergrad", "graduate"],
    description:
      "Campus safety around the clock, request a free safety escort, use blue-light emergency phones, and reach dispatch anytime.",
    details:
      "Call (619) 260-7777 for non-emergency help or a safety escort across campus. Over 100 blue-light phones auto-dial campus emergency dispatch. Public Safety handles patrols, emergencies, and lost-and-found.",
    keywords: ["safety", "escort", "emergency", "public safety", "blue light", "security"],
    link: "https://www.sandiego.edu/safety/",
    school: "USD",
    location: "Hughes Administration Center 150"
  },
  {
    name: "Torero Renaissance Scholars",
    categories: ["Community", "Academic Support"],
    audiences: ["undergrad"],
    description:
      "Support and community for current and former foster-youth students, mentoring, resources, and a team dedicated to helping you thrive and graduate.",
    details:
      "Partnered with the Mulvaney Center, TRS boosts enrollment and retention for foster-youth students with a dedicated support team, year-round programming, and connections to campus resources.",
    keywords: ["foster youth", "support", "retention", "mentoring", "community", "first gen"],
    link: "https://www.sandiego.edu/torero-renaissance-scholars/",
    school: "USD"
  },
  {
    name: "Honors Program",
    categories: ["Academic Support"],
    audiences: ["undergrad"],
    description:
      "An interdisciplinary honors track, small seminar classes, research alongside faculty, and an Honors Diploma. Open by application.",
    details:
      "Established in 1979, the program offers innovative honors courses, undergraduate research, and community engagement. Honors graduates earn an Honors Diploma and receive their degree first at Commencement.",
    keywords: ["honors", "research", "seminar", "interdisciplinary", "academic"],
    link: "https://www.sandiego.edu/honors/",
    school: "USD"
  },
  {
    name: "Associated Students (Student Government & Involvement)",
    categories: ["Community"],
    audiences: ["undergrad"],
    description:
      "USD's student government, it represents students, funds student organizations, and runs campus events and programming. A direct way to lead and get involved.",
    details:
      "Beyond elections and events, ASG is how most students get two things: CLUBS and MONEY. TO START A CLUB: register a new student organization through Student Activities & Involvement (the Student Orgs page has the steps and a list of existing clubs to join). TO FUND A CLUB EVENT: you'll usually complete an Event Venue Request (EvR) first, then submit a funding request to the ASG budget committee, every form is on the finance Forms page. ASG also gives Academic Grants to help you attend a conference or present research. Help: Involvement Consultants, SLP 308, (619) 260-4802, usdinvolvement@gmail.com.",
    keywords: ["student government", "involvement", "leadership", "clubs", "events", "programming", "start a club", "funding", "budget", "academic grant", "asg"],
    links: [
      { label: "Start or find a club (Student Orgs)", url: "https://www.sandiego.edu/involvement/student-orgs/" },
      { label: "Funding request forms", url: "https://www.sandiego.edu/associated-student-government/finance/forms.php" },
      { label: "Academic grants (conferences)", url: "https://www.sandiego.edu/associated-student-government/academic-grants.php" }
    ],
    link: "https://www.sandiego.edu/associated-students/",
    school: "USD",
    location: "Student Life Pavilion, SLP 308"
  },
  {
    name: "COMPASS, Career Readiness (Arts & Sciences)",
    categories: ["Career"],
    audiences: ["undergrad"],
    description:
      "Career and major exploration built for College of Arts & Sciences students, figure out your path and connect your major to a career.",
    details:
      "COMPASS is the College of Arts & Sciences career-readiness program, and it's a graduation requirement for CAS undergrads, so it's worth starting early instead of scrambling senior year. HOW IT WORKS: your Career Readiness Portal turns on in MySanDiego about 3 to 4 weeks after you declare your major; log in there to work through the milestones (self-assessment, resume, exploring careers, gaining experience). Pair it with the Career Development Center for resume reviews and Handshake. Questions: careers@sandiego.edu, (619) 260-4654.",
    keywords: ["career", "major exploration", "arts and sciences", "compass", "advising", "career readiness", "graduation requirement", "portal"],
    links: [
      { label: "Career readiness (CAS)", url: "https://www.sandiego.edu/cas/student-resources/career-readiness/" }
    ],
    link: "https://www.sandiego.edu/cas/student-resources/career-readiness/compass.php",
    school: "USD"
  },
  {
    name: "Torero Ventures Lab",
    categories: ["Entrepreneurship"],
    audiences: ["undergrad", "graduate"],
    description:
      "A hands-on, interdisciplinary class (business + engineering) where you test a real business idea, customer discovery, prototyping, and building a founding team.",
    details:
      "A 4-unit class co-taught by business and engineering faculty, open to juniors, seniors, and grad students from any major. You get in through a competitive pitch in the spring, then take the class the following fall with faculty and mentor support. Capped at 25 students; instructor consent required.",
    keywords: ["startup", "prototype", "team", "interdisciplinary", "venture", "build", "engineering", "business"],
    link: "https://www.sandiego.edu/business/centers/entrepreneurship/torero-ventures-lab.php",
    school: "USD"
  },

  /* ------------------ ALUMNI COMMUNITY & OPPORTUNITIES ------------------ */
  {
    name: "Regional Torero Clubs",
    categories: ["Community"],
    audiences: ["alumni"],
    description:
      "Local USD alumni chapters, 23+ regional clubs (San Diego, LA, NYC, Seattle, DC, Phoenix, Denver and more) that host events and networking wherever you land. No dues to join.",
    details:
      "Each club has its own president and committee running events, meetups, and game-watch parties. It's the easiest way to stay connected to USD and meet fellow Toreros in your city, whether you're across the country or across town.",
    keywords: ["alumni", "networking", "chapter", "city", "community", "torero club", "events", "affinity"],
    link: "https://www.sandiego.edu/alumni/communities/regional-torero-clubs/",
    school: "USD"
  },
  {
    name: "Homecoming & Reunions",
    categories: ["Community"],
    audiences: ["alumni"],
    description:
      "USD's annual Homecoming & Family Weekend, class reunions, a tailgate and football game, alumni events, and a special Mass each fall. Come back and reconnect.",
    details:
      "The big yearly gathering of the whole Torero community. Young alumni (grads within about the last decade) get discounted pricing. A great excuse to see classmates and campus again.",
    keywords: ["homecoming", "reunion", "alumni", "event", "community", "family weekend", "tailgate"],
    link: "https://www.sandiego.edu/alumni/events/homecoming-and-reunions/",
    school: "USD"
  },
  {
    name: "Alumni Volunteering & Giving Back",
    categories: ["Community"],
    audiences: ["alumni"],
    description:
      "Ways to stay involved as an alum, mentor current students, sit on panels, join a club committee, or give back through the Alumni Association.",
    details:
      "The Alumni Association engages grads through four pillars: communication, experience, philanthropy, and volunteerism. You can apply to be an alumni mentor, volunteer for events and panels, or support students through class giving and scholarships.",
    keywords: ["alumni", "volunteer", "mentor", "give back", "get involved", "community", "philanthropy"],
    link: "https://www.sandiego.edu/alumni/about/",
    school: "USD"
  },
  {
    name: "SOLES Alumni Travel Programs",
    categories: ["Community"],
    audiences: ["alumni", "graduate"],
    description:
      "Cross-cultural, educational travel experiences for alumni of USD's School of Leadership and Education Sciences, see the world with fellow Toreros.",
    details:
      "Run by SOLES's Global Center, these alumni trips build cultural intelligence and a commitment to positive global change. A niche but memorable way for SOLES grads to keep learning and stay connected.",
    keywords: ["alumni", "travel", "global", "soles", "education", "community", "lifelong learning"],
    link: "https://www.sandiego.edu/soles/centers-and-institutes/global-center/alumni-global-experience.php",
    school: "USD"
  },

  /* ------------------ SPIRITUAL LIFE, COMMUNITY & CAMPUS LIFE ------------------ */
  {
    name: "University Ministry",
    categories: ["Community", "Wellness"],
    audiences: ["undergrad", "graduate"],
    description:
      "USD's spiritual and faith life, Mass, prayer, retreats, and faith-sharing groups. A Catholic university that genuinely welcomes every background and faith tradition.",
    details:
      "Beyond weekly Mass, University Ministry runs retreats like the Search Retreat (a phone-free weekend in the Julian mountains) and the Silent Retreat, plus interfaith programming and service. Students of all faiths, and those still figuring it out, are welcome.",
    keywords: ["ministry", "faith", "spiritual", "retreat", "mass", "religion", "community", "catholic", "interfaith"],
    link: "https://www.sandiego.edu/ministry/",
    school: "USD",
    location: "University Center 238"
  },
  {
    name: "Fraternity & Sorority Life",
    categories: ["Community"],
    audiences: ["undergrad"],
    description:
      "USD's Greek community, around 2,000 students across 17 chapters, built around service, leadership, and belonging. Recruitment happens each year.",
    details:
      "Nine sororities and eight fraternities across the Panhellenic, Interfraternity, and Multicultural Greek Councils. Greek Week and philanthropy events are highlights, and it's a big way to find community and leadership on campus.",
    keywords: ["greek", "fraternity", "sorority", "community", "recruitment", "leadership", "belonging"],
    link: "https://www.sandiego.edu/fraternity-sorority-life/",
    school: "USD",
    location: "Student Life Pavilion, 3rd floor"
  },
  {
    name: "Torero Closet (Professional Attire)",
    categories: ["Career"],
    audiences: ["undergrad", "graduate"],
    description:
      "Borrow free professional clothing for interviews, career fairs, and new jobs, no price tags, just help looking the part.",
    details:
      "Stocked with donated professional outfits, the closet lets you pick interview-ready attire for free, with volunteers to help you find the right fit. Ask the Career Development Center for current hours and access.",
    keywords: ["clothing", "interview", "professional", "attire", "career", "closet", "free", "suit"],
    link: "https://www.sandiego.edu/careers/",
    school: "USD"
  },
  {
    name: "USD Law Legal Clinics",
    categories: ["Academic Support"],
    audiences: ["graduate"],
    description:
      "Represent real clients in real cases as a law student, 14 clinics providing free legal services to San Diegans while you build practice-ready skills.",
    details:
      "One of the nation's most extensive clinical programs (since 1971). Clinics span areas like housing rights and immigration; you handle intake, interviewing, and representation under supervising attorneys, and graduate practice-ready.",
    keywords: ["law", "legal", "clinic", "pro bono", "experience", "practice", "advocacy", "externship"],
    link: "https://www.sandiego.edu/law/clinics/",
    school: "USD"
  },
  {
    name: "Residential Life & Housing",
    categories: ["Community", "General"],
    audiences: ["undergrad"],
    description:
      "On-campus housing and residential education, from finding your hall and roommate to the programs and support that make where you live a community.",
    details:
      "Handles applications, room selection, roommates, and room changes. APPLY: complete the housing application and contract for your term through Residential Life's apply page, and watch the deadlines, your application time affects your room-selection slot. ROOMMATES: use roommate-matching to request specific people before selection. WANT TO MOVE: submit a Room Change Request within the posted window. MAINTENANCE: report anything broken with a work-order request. Applications, contracts, and e-forms are on the Applications & Forms page, and the FAQ answers most questions.",
    keywords: ["housing", "dorm", "residence", "roommate", "residential", "living", "community", "apply", "room change", "maintenance", "contract", "room selection"],
    links: [
      { label: "Apply for housing", url: "https://www.sandiego.edu/residential-life/apply/" },
      { label: "Applications, contracts & e-forms", url: "https://www.sandiego.edu/residential-life/apply/applications-and-forms.php" },
      { label: "Room change request process", url: "https://www.sandiego.edu/residential-life/residential-resources/room-change-request-process.php" },
      { label: "Housing FAQs", url: "https://www.sandiego.edu/residential-life/faqs/" }
    ],
    link: "https://www.sandiego.edu/residential-life/",
    school: "USD"
  },
  {
    name: "Living Learning Communities",
    categories: ["Community", "Academic Support"],
    audiences: ["undergrad"],
    description:
      "Live and study alongside students who share an interest, themed communities for first-year and transfer students that blend residence life with academics.",
    details:
      "Themed residential communities where first-year and transfer students live together and share academic and social programming around a common interest. It's one of the easiest ways to make friends fast. TO JOIN: choose an LLC as part of your housing application, there's usually a short interest question and a deadline, and spots are limited, so apply early.",
    links: [
      { label: "Apply for housing (choose an LLC)", url: "https://www.sandiego.edu/residential-life/apply/" }
    ],
    keywords: ["living learning", "llc", "first year", "transfer", "community", "residence", "themed"],
    link: "https://www.sandiego.edu/learning-communities/llc/",
    school: "USD"
  },
  {
    name: "Outdoor Adventures",
    categories: ["Community", "Wellness"],
    audiences: ["undergrad", "graduate"],
    description:
      "Get outside with USD, hikes, overnight trips, rec classes, and the Pre-Orientation Adventure, all focused on adventure, leadership, and making friends.",
    details:
      "Local day trips, regional and international outings, and gear for rent. The Pre-Orientation Adventure helps incoming students make friends before classes even start. Great for stress relief and community.",
    keywords: ["outdoor", "adventure", "hiking", "trips", "recreation", "nature", "community", "gear"],
    link: "https://www.sandiego.edu/outdoor-adventures/",
    school: "USD"
  },

  /* ------------------ CAMPUS LIFE, MONEY & MORE ------------------ */
  {
    name: "Torero Program Board",
    categories: ["Community"],
    audiences: ["undergrad"],
    description:
      "The student board behind USD's big campus events, Welcome Week, OLÉ! Weekend, concerts, and more. Free fun that's already covered by your student activity fee.",
    details:
      "TPB programs large-scale events for the whole student body and is part of the student government structure. Get involved to help plan events, or just show up and enjoy them.",
    keywords: ["events", "activities", "concerts", "programming", "fun", "community", "welcome week", "tpb"],
    link: "https://www.sandiego.edu/torero-program-board/",
    school: "USD"
  },
  {
    name: "Financial Aid & Scholarships",
    categories: ["General"],
    audiences: ["undergrad", "graduate"],
    description:
      "Grants, scholarships, work-study, and loans, how to apply (FAFSA or the Dream Act app), check your aid, appeal an award, and find money for school.",
    details:
      "USD awards $160M+ in aid a year and 75%+ of undergrads get some. Merit scholarships are usually automatic at admission; need-based aid uses the FAFSA (USD code 010395) or the CA/USD Dream Act Application, filed every year by the priority deadline. ACCEPT your aid at my.sandiego.edu, Torero Hub, Financial Aid, and clear any 'Financial Aid Requirements' (missing documents hold up your money). APPEAL a changed situation or a short award through MySanDiego under Financial Aid Requirements (about 3 to 4 weeks). If you lose aid over grades (SAP), submit the SAP Appeal form, plan, and letter. Financial Aid, UC 126, (619) 260-2700, usdofas@sandiego.edu.",
    keywords: ["financial aid", "scholarship", "fafsa", "grant", "loan", "work study", "money", "tuition", "dream act", "appeal", "sap", "satisfactory academic progress", "special circumstances", "deadline", "verification"],
    links: [
      { label: "How to appeal your aid (appeal types)", url: "https://www.sandiego.edu/torero-hub/financial-aid/appeal-types.php" },
      { label: "Federal Work-Study student guide", url: "https://www.sandiego.edu/torero-hub/financial-aid/student-employment/federal-work-study/student-guide.php" },
      { label: "Financial aid checklist (what's still needed)", url: "https://usdkb.sandiego.edu/s/article/Completing-My-Financial-Aid-Application-Checklist" }
    ],
    link: "https://www.sandiego.edu/torero-hub/financial-aid/",
    school: "USD",
    location: "Hahn UC 126 (Torero Hub)"
  },
  {
    name: "Student Wellness Center (Palomar Health)",
    categories: ["Wellness"],
    audiences: ["undergrad", "graduate"],
    description:
      "A newer on-campus wellness center run with Palomar Health, convenient medical care and wellness services that complement the Student Health Center.",
    details:
      "A newer three-story wellness center built with Palomar Health, designed to connect physical activity, nutrition, mental health, and a sense of belonging in one place. Houses group fitness, recreation programs, counseling, and health-and-wellness programming, complementing the Student Health Center (medical care) and Counseling Center (therapy). TO USE: drop in with your Torero ID and check the center's page for current hours and how to sign up for classes and programs.",
    keywords: ["wellness", "health", "medical", "clinic", "care", "palomar", "sick"],
    link: "https://www.sandiego.edu/wellness/wellness-center/",
    school: "USD"
  }
];
