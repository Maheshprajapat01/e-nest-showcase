import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  BedDouble,
  Bell,
  Building2,
  CalendarCheck,
  Check,
  ChevronRight,
  Database,
  Filter,
  Gauge,
  Home,
  LayoutDashboard,
  ListChecks,
  LockKeyhole,
  Map,
  MapPin,
  Menu,
  MessageSquare,
  Route,
  Search,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  TrendingUp,
  UserRound,
  Utensils,
  Wifi
} from "lucide-react";
import "./styles.css";

const prototypeFeatures = [
  "Room and mess discovery screens with realistic placeholder listings",
  "Filter, map, details, login, registration, and dashboard UI flows",
  "MongoDB collection model and Express API structure for implementation planning",
  "Responsive desktop and mobile screen mockups for faculty review"
];

const futureScope = [
  "Live availability sync from owners and mess operators",
  "Google Maps API distance matrix, route preview, and verified location pins",
  "Online booking requests, secure payments, and document verification",
  "Recommendation engine based on college, budget, food preference, and commute"
];

const rooms = [
  {
    name: "Blue Oak Student Residence",
    type: "Private room",
    price: "Rs 7,500/mo",
    location: "0.8 km from Engineering College",
    rating: "4.6",
    tags: ["Wi-Fi", "Attached bath", "Study desk"],
    status: "Prototype listing"
  },
  {
    name: "Metro Boys PG",
    type: "Shared 2-bed",
    price: "Rs 5,200/mo",
    location: "Near Bus Stand, Sector 5",
    rating: "4.3",
    tags: ["Meals nearby", "Power backup", "CCTV"],
    status: "Prototype listing"
  },
  {
    name: "Nestline Girls Hostel",
    type: "Hostel room",
    price: "Rs 6,800/mo",
    location: "1.2 km from IT Block",
    rating: "4.7",
    tags: ["Laundry", "Security", "Quiet zone"],
    status: "Prototype listing"
  }
];

const messPlans = [
  { name: "Green Plate Mess", food: "Veg thali", price: "Rs 2,400/mo", timing: "Lunch + Dinner", score: "4.5" },
  { name: "Campus Tiffin Hub", food: "Veg/Non-veg", price: "Rs 3,100/mo", timing: "3 meals", score: "4.2" },
  { name: "Homely Bites", food: "North Indian", price: "Rs 2,800/mo", timing: "Dinner focused", score: "4.4" }
];

const apiRoutes = [
  ["POST", "/api/auth/register", "Create student or owner account"],
  ["POST", "/api/auth/login", "Return session token and profile"],
  ["GET", "/api/rooms", "Search rooms by city, budget, amenities, distance"],
  ["GET", "/api/rooms/:id", "Fetch room details with owner preview"],
  ["POST", "/api/owner/rooms", "Owner creates a draft listing"],
  ["GET", "/api/mess", "Search mess plans and food preferences"],
  ["POST", "/api/inquiries", "Student sends interest or visit request"],
  ["GET", "/api/dashboard/student", "Saved listings and inquiry status"]
];

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <FeatureOverview />
      <Flows />
      <ProductScreens />
      <Dashboards />
      <MobileScreens />
      <Architecture />
      <Roadmap />
    </main>
  );
}

function Header() {
  return (
    <header className="topbar">
      <a className="brand" href="#home" aria-label="E-NEST home">
        <span className="brand-mark"><Home size={20} /></span>
        <span><strong>E-NEST</strong><small>Engineers Nest</small></span>
      </a>
      <nav className="desktop-nav" aria-label="Primary">
        <a href="#features">Features</a>
        <a href="#screens">Screens</a>
        <a href="#architecture">Architecture</a>
        <a href="#roadmap">Roadmap</a>
      </nav>
      <button className="icon-button" aria-label="Open navigation"><Menu size={21} /></button>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="hero-copy">
        <span className="eyebrow"><Sparkles size={16} /> Current design prototype</span>
        <h1>E-NEST - Engineers Nest</h1>
        <p>
          A smart room and mess discovery platform designed for college students who need a practical way to compare stays,
          meal plans, commute distance, and owner-provided details before contacting a listing.
        </p>
        <div className="hero-actions">
          <a className="primary-btn" href="#screens">View prototype screens <ArrowRight size={18} /></a>
          <a className="secondary-btn" href="#architecture">Explore system design</a>
        </div>
        <div className="trust-row" aria-label="Project status metrics">
          <span><strong>20</strong> showcase sections</span>
          <span><strong>React</strong> frontend plan</span>
          <span><strong>MongoDB</strong> data model</span>
        </div>
      </div>
      <div className="hero-product" aria-label="Homepage mockup preview">
        <MockBrowser title="E-NEST Discovery">
          <div className="search-strip">
            <div><Search size={18} /> Near Engineering College</div>
            <div><BedDouble size={18} /> Rs 4k - 8k</div>
            <div><Utensils size={18} /> Mess nearby</div>
            <button>Search</button>
          </div>
          <div className="hero-grid">
            {rooms.slice(0, 2).map((room) => <RoomMini key={room.name} room={room} />)}
            <MapPreview />
          </div>
        </MockBrowser>
      </div>
    </section>
  );
}

function FeatureOverview() {
  const cards = [
    ["Room Discovery", "Compare PGs, hostels, and private rooms using budget, distance, occupancy, and amenities.", BedDouble],
    ["Mess Discovery", "Review nearby mess plans with food type, monthly pricing, timing, and student-friendly notes.", Utensils],
    ["Map-Based View", "Prototype layout for location pins and commute context before Google Maps API integration.", Map],
    ["Dashboards", "Separate owner and student dashboards for listings, inquiries, saved places, and profile status.", LayoutDashboard],
    ["Verification Planning", "Clear labels for prototype records and future verified-owner workflows.", ShieldCheck],
    ["Responsive UI", "Mobile-first screens for students searching rooms while moving around campus areas.", Smartphone]
  ];

  return (
    <section className="section" id="features">
      <SectionTitle eyebrow="Feature overview" title="A practical discovery workflow for students and property owners" />
      <div className="feature-grid">
        {cards.map(([title, text, Icon]) => (
          <article className="feature-card" key={title}>
            <span className="feature-icon"><Icon size={22} /></span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
      <div className="status-split">
        <StatusPanel title="Current Prototype" items={prototypeFeatures} tone="ready" />
        <StatusPanel title="Future Scope" items={futureScope} tone="future" />
      </div>
    </section>
  );
}

function Flows() {
  const userFlow = ["Register/Login", "Choose role", "Search room or mess", "Apply filters", "Open details", "Save or inquire", "Track status"];
  const ia = ["Public pages", "Authentication", "Student area", "Owner area", "Listing management", "Search services", "Map services", "Admin scope"];
  const journey = [
    ["Need", "Student needs a room near college within a monthly budget."],
    ["Discover", "Student searches by college area, distance, rent, room type, and mess preference."],
    ["Evaluate", "Student compares details, rules, photos placeholders, food plans, and route context."],
    ["Contact", "Student sends an inquiry or visit request once owner verification is available."],
    ["Manage", "Dashboard tracks saved listings, inquiry status, and profile completion."]
  ];
  return (
    <section className="section flow-band">
      <SectionTitle eyebrow="Planning views" title="Complete user flow, information architecture, sitemap, and journey" />
      <div className="flow-grid">
        <article className="wide-panel">
          <h3><Route size={20} /> Complete User Flow</h3>
          <div className="flow-line">
            {userFlow.map((step, index) => (
              <React.Fragment key={step}>
                <span>{step}</span>{index < userFlow.length - 1 && <ChevronRight size={18} />}
              </React.Fragment>
            ))}
          </div>
        </article>
        <article className="panel">
          <h3><ListChecks size={20} /> Information Architecture</h3>
          <div className="pill-list">{ia.map((item) => <span key={item}>{item}</span>)}</div>
        </article>
        <article className="panel">
          <h3><Map size={20} /> Website Sitemap</h3>
          <ul className="sitemap">
            <li>Home</li>
            <li>Rooms: search, details, map</li>
            <li>Mess: search, details</li>
            <li>Auth: login, register</li>
            <li>Dashboards: student, owner</li>
            <li>Project: stack, database, roadmap</li>
          </ul>
        </article>
        <article className="wide-panel">
          <h3><UserRound size={20} /> User Journey</h3>
          <div className="journey-grid">
            {journey.map(([stage, copy]) => (
              <div key={stage}>
                <strong>{stage}</strong>
                <p>{copy}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

function ProductScreens() {
  return (
    <section className="section" id="screens">
      <SectionTitle eyebrow="UI mockups" title="Homepage, search, detail, mess, map, filters, and authentication screens" />
      <div className="screen-grid">
        <Screen title="Homepage UI"><HomepageMock /></Screen>
        <Screen title="Room Search Page"><SearchMock /></Screen>
        <Screen title="Room Details Page"><RoomDetails /></Screen>
        <Screen title="Mess Details Page"><MessDetails /></Screen>
        <Screen title="Map View"><MapView /></Screen>
        <Screen title="Filters"><FilterView /></Screen>
        <Screen title="Login & Registration"><AuthMock /></Screen>
      </div>
    </section>
  );
}

function Dashboards() {
  return (
    <section className="section dashboard-band">
      <SectionTitle eyebrow="Dashboards" title="Role-based workspace concepts for students and owners" />
      <div className="dashboard-grid">
        <Screen title="Owner Dashboard"><OwnerDashboard /></Screen>
        <Screen title="Student Dashboard"><StudentDashboard /></Screen>
      </div>
    </section>
  );
}

function MobileScreens() {
  return (
    <section className="section mobile-band">
      <SectionTitle eyebrow="Responsive mobile screens" title="Compact mobile flows for search, details, and saved listings" />
      <div className="phones">
        <Phone title="Search"><SearchMock compact /></Phone>
        <Phone title="Details"><RoomDetails compact /></Phone>
        <Phone title="Dashboard"><StudentDashboard compact /></Phone>
      </div>
    </section>
  );
}

function Architecture() {
  const stack = [
    ["Frontend", "HTML5, CSS3, JavaScript, React.js"],
    ["Backend", "Node.js, Express.js REST API"],
    ["Database", "MongoDB collections for users, rooms, mess, inquiries, saved listings"],
    ["Maps", "Google Maps API planned for map pins, geocoding, and distance estimates"]
  ];
  const collections = ["users", "rooms", "messPlans", "inquiries", "savedListings", "reviews", "locations"];

  return (
    <section className="section architecture" id="architecture">
      <SectionTitle eyebrow="Engineering overview" title="Database overview, backend API structure, and technology stack" />
      <div className="arch-grid">
        <article className="panel">
          <h3><Database size={20} /> Database Overview</h3>
          <div className="collection-grid">
            {collections.map((item) => <span key={item}>{item}</span>)}
          </div>
          <p className="muted">
            The prototype defines collections and relationships for implementation planning. Real records, verification,
            and moderation workflows are future implementation tasks.
          </p>
        </article>
        <article className="panel api-panel">
          <h3><Server size={20} /> Backend API Structure</h3>
          {apiRoutes.map(([method, path, desc]) => (
            <div className="api-row" key={path}>
              <code>{method}</code>
              <span>{path}</span>
              <small>{desc}</small>
            </div>
          ))}
        </article>
        <article className="wide-panel stack-panel">
          <h3><Gauge size={20} /> Technology Stack</h3>
          <div className="stack-grid">
            {stack.map(([label, value]) => (
              <div key={label}>
                <strong>{label}</strong>
                <p>{value}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

function Roadmap() {
  const phases = [
    ["Phase 1", "Prototype", "Finalize UI flow, data model, and search experience mockups.", "Current"],
    ["Phase 2", "MVP Build", "Implement authentication, room CRUD, mess CRUD, search API, and dashboards.", "Next"],
    ["Phase 3", "Map Integration", "Add Google Maps API, distance filters, verified map pins, and route previews.", "Future"],
    ["Phase 4", "Trust Layer", "Verification workflow, reviews, payment readiness, and admin moderation.", "Future"]
  ];
  return (
    <section className="section roadmap" id="roadmap">
      <SectionTitle eyebrow="Future roadmap" title="A grounded path from prototype to usable MVP" />
      <div className="roadmap-list">
        {phases.map(([phase, title, copy, status]) => (
          <article key={phase}>
            <span>{phase}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
            <strong>{status}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}

function SectionTitle({ eyebrow, title }) {
  return (
    <div className="section-title">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
    </div>
  );
}

function StatusPanel({ title, items, tone }) {
  return (
    <article className={`status-panel ${tone}`}>
      <h3>{title}</h3>
      {items.map((item) => (
        <p key={item}><Check size={17} /> {item}</p>
      ))}
    </article>
  );
}

function MockBrowser({ title, children }) {
  return (
    <div className="mock-browser">
      <div className="browser-bar">
        <span></span><span></span><span></span>
        <strong>{title}</strong>
      </div>
      <div className="browser-body">{children}</div>
    </div>
  );
}

function Screen({ title, children }) {
  return (
    <article className="screen">
      <div className="screen-title"><span>{title}</span><small>Prototype UI</small></div>
      <div>{children}</div>
    </article>
  );
}

function Phone({ title, children }) {
  return (
    <article className="phone">
      <div className="phone-speaker"></div>
      <div className="phone-title">{title}</div>
      {children}
    </article>
  );
}

function RoomMini({ room }) {
  return (
    <article className="room-mini">
      <div className="room-img"><Building2 size={26} /></div>
      <div>
        <h4>{room.name}</h4>
        <p>{room.type} · {room.location}</p>
        <strong>{room.price}</strong>
      </div>
    </article>
  );
}

function MapPreview() {
  return (
    <div className="map-preview">
      <span className="pin p1"><MapPin size={18} /></span>
      <span className="pin p2"><MapPin size={18} /></span>
      <span className="pin p3"><MapPin size={18} /></span>
      <strong>College Area</strong>
      <small>Map placeholder for planned Google Maps API</small>
    </div>
  );
}

function HomepageMock() {
  return (
    <div className="home-mock">
      <div className="mock-hero">
        <h3>Find rooms and mess plans near your college</h3>
        <p>Compare student stays by rent, commute, meals, safety, and amenities.</p>
        <div className="mini-search"><Search size={16} /> Search near campus</div>
      </div>
      <div className="mini-stats"><span>128 listings</span><span>24 mess plans</span><span>8 areas</span></div>
    </div>
  );
}

function SearchMock({ compact = false }) {
  return (
    <div className={`search-mock ${compact ? "compact" : ""}`}>
      <div className="filterbar"><Filter size={16} /> Budget · Room type · Distance · Food</div>
      {rooms.map((room) => (
        <div className="listing" key={room.name}>
          <div className="thumb"><BedDouble size={20} /></div>
          <div>
            <h4>{room.name}</h4>
            <p>{room.location}</p>
            <div>{room.tags.slice(0, 2).map((tag) => <span key={tag}>{tag}</span>)}</div>
          </div>
          <strong>{room.price}</strong>
        </div>
      ))}
    </div>
  );
}

function RoomDetails({ compact = false }) {
  const room = rooms[0];
  return (
    <div className={`details-mock ${compact ? "compact" : ""}`}>
      <div className="detail-image"><Building2 size={34} /><span>{room.status}</span></div>
      <h3>{room.name}</h3>
      <p><MapPin size={15} /> {room.location}</p>
      <div className="detail-meta">
        <span>{room.price}</span><span><Star size={14} /> {room.rating}</span><span>Single occupancy</span>
      </div>
      <div className="amenities">{room.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
      <button className="primary-btn small">Send inquiry</button>
    </div>
  );
}

function MessDetails() {
  return (
    <div className="mess-mock">
      {messPlans.map((mess) => (
        <article key={mess.name}>
          <Utensils size={22} />
          <div>
            <h4>{mess.name}</h4>
            <p>{mess.food} · {mess.timing}</p>
          </div>
          <strong>{mess.price}</strong>
        </article>
      ))}
    </div>
  );
}

function MapView() {
  return (
    <div className="map-view">
      <MapPreview />
      <aside>
        <h4>Nearby matches</h4>
        <p>Blue Oak Residence · 0.8 km</p>
        <p>Green Plate Mess · 0.5 km</p>
        <p>Metro Boys PG · 1.4 km</p>
      </aside>
    </div>
  );
}

function FilterView() {
  const filters = ["Rs 4k - 8k", "Private room", "Within 1 km", "Wi-Fi", "Mess nearby", "Verified owner planned"];
  return (
    <div className="filters-view">
      {filters.map((item) => <label key={item}><input type="checkbox" defaultChecked /> {item}</label>)}
      <div className="range"><span>Budget</span><strong>Rs 7,500</strong></div>
    </div>
  );
}

function AuthMock() {
  return (
    <div className="auth-mock">
      <div className="auth-card">
        <LockKeyhole size={22} />
        <h3>Welcome back</h3>
        <input aria-label="Email" placeholder="student@college.edu" />
        <input aria-label="Password" placeholder="Password" type="password" />
        <button>Login</button>
      </div>
      <div className="role-card">
        <UserRound size={22} />
        <strong>Register as</strong>
        <span>Student</span>
        <span>Owner</span>
      </div>
    </div>
  );
}

function OwnerDashboard() {
  return (
    <div className="dash-mock">
      <div className="dash-header"><Building2 size={22} /><div><h3>Owner workspace</h3><p>Manage draft listings and inquiries</p></div></div>
      <div className="dash-metrics"><span>3 rooms</span><span>11 inquiries</span><span>2 mess plans</span></div>
      <div className="task-list">
        <p><Bell size={15} /> Visit request from Riya Sharma</p>
        <p><CalendarCheck size={15} /> Add availability calendar</p>
        <p><ShieldCheck size={15} /> Verification workflow planned</p>
      </div>
    </div>
  );
}

function StudentDashboard({ compact = false }) {
  return (
    <div className={`dash-mock ${compact ? "compact" : ""}`}>
      <div className="dash-header"><UserRound size={22} /><div><h3>Student dashboard</h3><p>Saved places and inquiry tracking</p></div></div>
      <div className="dash-metrics"><span>6 saved</span><span>3 inquiries</span><span>2 visits</span></div>
      <div className="task-list">
        <p><Star size={15} /> Blue Oak Residence saved</p>
        <p><MessageSquare size={15} /> Owner reply pending</p>
        <p><Wifi size={15} /> Preference: Wi-Fi + mess nearby</p>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
