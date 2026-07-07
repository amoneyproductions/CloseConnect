/* ============================================================================
   RESOURCE DATA  —  the actual list students see.
   ----------------------------------------------------------------------------
   This is the file you edit most. To add a resource, copy one block and fill
   it in. To start a new school, replace this whole list (and update data/school.js).

   Each resource has:
     name        – what it's called
     categories  – one OR MORE tags from the list below (drives the filter chips).
                   A resource can double-dip, e.g. ["Competitions", "Engineering & CS"].
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
      "USD’s main job and internship platform. Search roles, book career appointments, and find on-campus interviews — log in with your USD email.",
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
    school: "USD"
  },
  {
    name: "Knauss Business Student Success Center",
    categories: ["Career", "Academic Support"],
    audiences: ["undergrad"],
    description:
      "Academic and career advising built for business majors — peer advisors, course planning, and business career services.",
    link: "https://www.sandiego.edu/business/student-experience/business-student-success-center/",
    school: "USD",
    location: "Floor 2, Knauss Center for Business Education"
  },
  {
    name: "Engineering Career Readiness (CONNECT)",
    categories: ["Career", "Engineering & CS"],
    audiences: ["undergrad"],
    description:
      "A dedicated career liaison and the CONNECT program for engineering and CS students to build professional skills before graduation.",
    link: "https://www.sandiego.edu/engineering/student-resources/career-readiness/",
    school: "USD"
  },
  {
    name: "Pre-Health Advising",
    categories: ["Career", "Academic Support"],
    audiences: ["undergrad"],
    description:
      "Specialized advising for any major heading toward med school, nursing, or another health profession. Keeps you on track for the requirements.",
    link: "https://www.sandiego.edu/cas/student-resources/advising/pre-health/",
    school: "USD"
  },
  {
    name: "Pre-Law Advising",
    categories: ["Career", "Academic Support"],
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
    categories: ["Competitions", "Entrepreneurship"],
    audiences: ["undergrad", "graduate"],
    description:
      "An annual pitch competition — open to all majors, undergrad and grad — where students pitch business ideas to real investors for scholarship money.",
    details:
      "Open to students from every school and major — all you need is a business idea. The top 16 teams compete for $45,000 in scholarships. It runs on an academic-year cycle: a kickoff session in September (with all submission details) and finals in early December.",
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
      "Free, confidential counseling for USD students — individual and group sessions, plus walk-in hours. No cost to you.",
    details:
      "Free and confidential for enrolled students — individual and group counseling, psychiatric consultation, and walk-in hours, all at no cost. When the office is closed, USD offers TimelyCare telehealth for after-hours support. In a crisis you can call or text 988 (Suicide & Crisis Lifeline) or text HOME to 741741. Front desk: (619) 260-4655.",
    links: [
      { label: "How to access services & hours", url: "https://www.sandiego.edu/counseling-center/services/contact-us-office-hours.php" }
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
    categories: ["Engineering & CS", "Academic Support"],
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
    details:
      "Every USD graduate is automatically a lifetime member — no dues. The standout for networking is T.E.A.M. (Torero Employer and Alumni Mentors), USD's internal LinkedIn-style platform for connecting with alumni and students, flash mentoring (short, low-pressure sessions by phone, video, or in person), and job postings. It's integrated with LinkedIn so joining is quick. You also get a free membership card, Torero Clubs in 23+ regions, Homecoming, and alumni scholarships.",
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
    category: "Alumni",
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
    categories: ["Competitions", "Entrepreneurship"],
    audiences: ["undergrad", "graduate"],
    description:
      "USD’s campus-wide pitch competition. Hundreds join the V2 Learning Series, and 10 finalists pitch real angel investors for up to $25,000 in seed money.",
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
      "Run by USD's Kroc School of Peace Studies: student teams build ventures aligned with the UN Sustainable Development Goals, get mentorship, and compete for funding. Over the years it has drawn 3,000+ students from 25+ countries. Open to undergrad and grad students — a strong fit if your idea has a social or environmental mission.",
    link: "https://www.sandiego.edu/cpc/gsic/",
    school: "USD"
  },
  {
    name: "Torero Entrepreneurship Challenge (TECh)",
    categories: ["Competitions", "Engineering & CS", "Entrepreneurship"],
    audiences: ["undergrad", "graduate"],
    description:
      "A tech-innovation competition open to any USD student team with a technology component — any major, any program. Build a team and compete for the Starpoint Award.",
    keywords: ["interdisciplinary", "team up", "engineering", "computer science", "technology", "competition", "startup", "cross-major"],
    details:
      "Part of the engineering E-Track program: any USD student team with a technology component can enter, regardless of major, and compete for the Starpoint Award with mentoring along the way. This is the one to look at if you want to pair a non-technical idea (like a marketing or business concept) with engineering and CS students to actually build it.",
    link: "https://www.sandiego.edu/engineering/student-innovation/etrack-entrepreneurship-program/tech-competition/",
    school: "USD"
  },
  {
    name: "Baja SAE — Torero Racing",
    categories: ["Competitions", "Engineering & CS", "Entrepreneurship"],
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
    link: "https://www.sandiego.edu/business/",
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
    categories: ["Engineering & CS", "Entrepreneurship"],
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
  },

  /* ------------------ COMMUNITY & INVOLVEMENT ------------------ */
  {
    name: "Mulvaney Center for Community, Awareness & Social Action",
    categories: ["Community"],
    audiences: ["undergrad", "graduate"],
    description:
      "USD's hub for community engagement and service-learning — volunteer, join community-based programs, and connect classroom learning to real social change.",
    details:
      "Part of the Changemaker Hub. Runs course-based service-learning across ~150 classes with 130+ community partners, plus programs like the Youth Engagement Initiative (tutoring K–12 in Linda Vista) and the MICAH summer fellowship. A great way to get involved off campus and build leadership.",
    keywords: ["volunteer", "community", "service", "social justice", "get involved"],
    link: "https://www.sandiego.edu/mccasa/",
    school: "USD"
  },
  {
    name: "United Front Multicultural Commons",
    categories: ["Community"],
    audiences: ["undergrad", "graduate"],
    description:
      "Home for USD's multicultural student community — cultural student orgs, programming, and identity resource centers on the 4th floor of the Student Life Pavilion.",
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
      "Intramural leagues, sport clubs, fitness and group classes, and outdoor adventures — 30+ rec classes each semester, open to all skill levels.",
    keywords: ["intramural", "fitness", "gym", "sports", "recreation", "outdoor", "community"],
    link: "https://www.sandiego.edu/campus-recreation/",
    school: "USD"
  },
  {
    name: "Changemaker Design Lab",
    categories: ["Entrepreneurship", "Community"],
    audiences: ["undergrad", "graduate"],
    description:
      "A hands-on program where student teams use human-centered design to tackle real social-justice challenges on campus — and pitch fundable solutions.",
    details:
      "A nine-week experience: teams research a social-change topic, co-create solutions with people who have lived experience, and present at an end-of-semester showcase. Participants receive a $600 stipend, and promising ideas get funding to pilot the next semester.",
    keywords: ["design thinking", "social innovation", "team", "stipend", "changemaker", "interdisciplinary"],
    link: "https://www.sandiego.edu/changemaker/ideas-into-action/design-lab.php",
    school: "USD"
  },

  /* ------------------ MORE ACADEMIC SUPPORT ------------------ */
  {
    name: "Office of Undergraduate Research",
    categories: ["Academic Support"],
    audiences: ["undergrad"],
    description:
      "Find and get funded for research with faculty — including the Summer Undergraduate Research Experience (SURE) and travel grants to present your work.",
    keywords: ["research", "faculty", "sure", "lab", "grant", "conference"],
    link: "https://www.sandiego.edu/ugresearch/",
    school: "USD"
  },
  {
    name: "Copley Library — Research Help",
    categories: ["Academic Support"],
    audiences: ["undergrad", "graduate"],
    description:
      "Get research help from a librarian by chat, text, or email — with 24/7 after-hours chat — plus subject specialists and 190+ research databases.",
    details:
      "Use the Ask-A-Librarian link on the library homepage for quick help, or book a session with a subject specialist for in-depth, discipline-specific research. Copley holds 180,000+ e-books and 190+ databases. (619) 260-4799.",
    keywords: ["library", "research", "librarian", "database", "citation", "sources", "copley"],
    link: "https://www.sandiego.edu/library/services/research-help-and-tools.php",
    school: "USD"
  },
  {
    name: "National Fellowships Office",
    categories: ["Career", "Academic Support"],
    audiences: ["undergrad", "graduate"],
    description:
      "Advising to help you win nationally competitive fellowships and scholarships — funding for grad school, research, and teaching abroad (think Fulbright).",
    details:
      "Fellowships fund graduate study, research, English teaching abroad, and language study; some also recognize undergrad research or public service. Deadlines fall throughout the year and some need a campus endorsement, so start early. Email nationalfellowships@sandiego.edu · BEC 117.",
    keywords: ["fellowship", "fulbright", "scholarship", "grant", "research", "study abroad", "grad school"],
    link: "https://www.sandiego.edu/cas/student-resources/scholarships/fellowships.php",
    school: "USD"
  },

  /* ------------------ MORE WELLNESS / BASIC NEEDS ------------------ */
  {
    name: "USD Food Pantry",
    categories: ["Wellness"],
    audiences: ["undergrad", "graduate"],
    description:
      "Free food, fresh produce, hygiene supplies, and a Torero Closet for any student who needs them — no questions asked.",
    details:
      "In Hahn University Center 116, the pantry stocks groceries, fresh produce, dairy and protein, plus school supplies, hygiene items, and laundry detergent. Part of USD's effort to end student food insecurity.",
    keywords: ["food", "pantry", "basic needs", "hygiene", "insecurity", "free", "help", "hungry"],
    link: "https://www.sandiego.edu/food-pantry/",
    school: "USD",
    location: "Hahn University Center 116"
  },
  {
    name: "CARE — Campus Assault Resources & Education",
    categories: ["Wellness"],
    audiences: ["undergrad", "graduate"],
    description:
      "Free, confidential advocates for anyone affected by sexual assault, harassment, or relationship violence — support, options, and help navigating reporting.",
    details:
      "CARE advocates offer confidential support and can walk you through your options and resources, whether or not you choose to report. All CARE/Wellness services are free for enrolled students. If you or a friend needs help, start here.",
    keywords: ["assault", "violence", "harassment", "advocate", "confidential", "safety", "title ix", "support"],
    link: "https://www.sandiego.edu/care/get-help.php",
    school: "USD"
  },

  /* ------------------ GLOBAL & POPULATION-SPECIFIC ------------------ */
  {
    name: "Study Abroad (International Center)",
    categories: ["General"],
    audiences: ["undergrad", "graduate"],
    description:
      "USD ranks #1 in the nation for study abroad — 75+ programs in 44 countries, many led by USD faculty, across every major.",
    details:
      "The International Center (Serra Hall 201) is your one-stop shop for going abroad, from a full semester to short faculty-led trips — USD even has its own Madrid Center. Browse programs and start an application through the International Center.",
    keywords: ["study abroad", "international", "global", "travel", "madrid", "semester abroad"],
    link: "https://www.sandiego.edu/international/study-abroad/",
    school: "USD",
    location: "Serra Hall 201"
  },
  {
    name: "Office of International Students & Scholars (OISS)",
    categories: ["General"],
    audiences: ["undergrad", "graduate"],
    description:
      "Visa and immigration support for international students — F-1/J-1 status, work authorization, orientation, and help settling into life at USD.",
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
      "Support for military-connected students and veterans — VA education benefits, ROTC, and community through the Epstein Family Military Center.",
    keywords: ["veteran", "military", "va", "benefits", "rotc", "gi bill", "service member"],
    link: "https://www.sandiego.edu/military/",
    school: "USD"
  },
  {
    name: "Undocumented Student Resources",
    categories: ["General"],
    audiences: ["undergrad", "graduate"],
    description:
      "A central place for undocumented and DACA students — support, legal information, scholarships, and staff who can help you navigate USD confidentially.",
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
      "Campus safety around the clock — request a free safety escort, use blue-light emergency phones, and reach dispatch anytime.",
    details:
      "Call (619) 260-7777 for non-emergency help or a safety escort across campus. Over 100 blue-light phones auto-dial campus emergency dispatch. Public Safety handles patrols, emergencies, and lost-and-found.",
    keywords: ["safety", "escort", "emergency", "public safety", "blue light", "security"],
    link: "https://www.sandiego.edu/safety/",
    school: "USD"
  },
  {
    name: "Torero Renaissance Scholars",
    categories: ["Community", "Academic Support"],
    audiences: ["undergrad"],
    description:
      "Support and community for current and former foster-youth students — mentoring, resources, and a team dedicated to helping you thrive and graduate.",
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
      "An interdisciplinary honors track — small seminar classes, research alongside faculty, and an Honors Diploma. Open by application.",
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
      "USD's student government — it represents students, funds student organizations, and runs campus events and programming. A direct way to lead and get involved.",
    keywords: ["student government", "involvement", "leadership", "clubs", "events", "programming"],
    link: "https://www.sandiego.edu/associated-students/",
    school: "USD"
  },
  {
    name: "COMPASS — Career Readiness (Arts & Sciences)",
    categories: ["Career"],
    audiences: ["undergrad"],
    description:
      "Career and major exploration built for College of Arts & Sciences students — figure out your path and connect your major to a career.",
    keywords: ["career", "major exploration", "arts and sciences", "compass", "advising"],
    link: "https://www.sandiego.edu/cas/student-resources/career-readiness/compass.php",
    school: "USD"
  },
  {
    name: "Torero Ventures Lab",
    categories: ["Entrepreneurship", "Engineering & CS"],
    audiences: ["undergrad", "graduate"],
    description:
      "A hands-on, interdisciplinary class (business + engineering) where you test a real business idea — customer discovery, prototyping, and building a founding team.",
    details:
      "A 4-unit class co-taught by business and engineering faculty, open to juniors, seniors, and grad students from any major. You get in through a competitive pitch in the spring, then take the class the following fall with faculty and mentor support. Capped at 25 students; instructor consent required.",
    keywords: ["startup", "prototype", "team", "interdisciplinary", "venture", "build", "engineering", "business"],
    link: "https://www.sandiego.edu/business/centers/entrepreneurship/torero-ventures-lab.php",
    school: "USD"
  }
];
