import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Camera,
  Music,
  Video,
  Coffee,
  Scissors,
  Sun,
  Star,
  MapPin,
  ArrowRight,
  Clapperboard,
  Mic2,
  Wine,
  Ticket,
  Info,
  Palette,
  Layers,
  Instagram,
  Mail,
  Check,
  Film,
  Mic,
  PersonStandingIcon,
  House,
  Edit,
  Edit2,
  Computer,
  ComputerIcon,
  Hotel,
  Images,
} from "lucide-react";

export default function Home() {
  const [activeDay, setActiveDay] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const logos = {
    main: "/logobig.svg",
    nav: "/logoshort.svg",
    seal: "/logocool.svg",
  };

  const ticketOptions = [
    {
      name: "The Day Tripper",
      price: "35",
      desc: "Perfect for a curious afternoon of cinema and one ground-floor workshop.",
      features: [
        "Single Day Access",
        "1 Workshop Voucher",
        "Festival Program Booklet",
        "Complimentary Mendl's Pastry",
      ],
      highlight: false,
    },
    {
      name: "The Full Suite",
      price: "95",
      desc: "Our most popular choice. Full access to all three days and all workshop floors.",
      features: [
        "3-Day Priority Pass",
        "Unlimited Workshop Access",
        "Opening Night Gala Entry",
        "Limited Edition Poster",
        "Character Photoshoot",
      ],
      highlight: true,
    },
    {
      name: "The Director's Box",
      price: "250",
      desc: "For the ultimate enthusiast. Everything included plus private sessions.",
      features: [
        "VIP Seating in all Screens",
        "Private Mentor Meet & Greet",
        "Curated Gift Trunk",
        "Reserved Rooftop Dining",
        "Fast-track Entry",
      ],
      highlight: false,
    },
  ];

  const scheduleData = {
    1: [
      {
        time: "08:00 - 09:45",
        title: "Andy Gent",
        loc: "Character and Costume Design",
        icon: <PersonStandingIcon size={16} />,
      },
      {
        time: "10:00 - 11:45",
        title: "Annie Atkins",
        loc: "Set and Location Design",
        icon: <House size={16} />,
      },
      {
        time: "13:00 - 14:45",
        title: "Nelson Lowry",
        loc: "Set and Location Design",
        icon: <House size={16} />,
      },
      {
        time: "15:00 - 16:45",
        title: "Jeremy Dawson",
        loc: "Effects, Green Screen, and Stop Motion",
        icon: <Edit2 size={16} />,
      },
      {
        time: "17:45 - 19:45",
        title: "Film: The Grand Budapest Hotel",
        loc: "?",
        icon: <Film size={16} />,
      },
    ],
    2: [
      {
        time: "08:00 - 09:45",
        title: "Tim Ledbury",
        loc: "Effects, Green Screen, and Stop Motion",
        icon: <Edit2 size={16} />,
      },
      {
        time: "10:00 - 11:45",
        title: "Andrew Weisblum",
        loc: "Editing, Compositing, and Color",
        icon: <ComputerIcon size={16} />,
      },
      {
        time: "13:00 - 14:45",
        title: "Barney Pilling",
        loc: "Editing, Compositing, and Color",
        icon: <ComputerIcon size={16} />,
      },
      {
        time: "15:00 - 16:45",
        title: "Speaker TBA",
        loc: "Sound Design and Music",
        icon: <Music size={16} />,
      },
      {
        time: "17:45 - 19:45",
        title: "Film: Fantastic Mr. Fox",
        loc: "?",
        icon: <Film size={16} />,
      },
    ],
    3: [
      {
        time: "08:00 - 09:45",
        title: "Andy Gent",
        loc: "Character and Costume Design",
        icon: <PersonStandingIcon size={16} />,
      },
      {
        time: "10:00 - 11:45",
        title: "Nelson Lowry",
        loc: "Set and Location Design",
        icon: <House size={16} />,
      },
      {
        time: "13:00 - 14:45",
        title: "Jeremy Dawson",
        loc: "Effects, Green Screen, and Stop Motion",
        icon: <Edit2 size={16} />,
      },
      {
        time: "15:00 - 16:45",
        title: "Barney Pilling",
        loc: "Editing, Compositing, and Color",
        icon: <ComputerIcon size={16} />,
      },
      {
        time: "17:45 - 19:45",
        title: "Film: The Phoenician",
        loc: "?",
        icon: <Film size={16} />,
      },
    ],
  };

  const floors = [
    {
      id: 1,
      name: "The Society of Crossed Wires",
      subtitle: "Character, Costume & Puppet Fabrication",
      theme: "bg-[#F0C6D4] text-[#CA292A]",
      cardStyle: "bg-white bg-opacity-40 border-[#CA292A]",
      workshops: [
        {
          title: "Andy Gent Masterclass",
          topics: "Puppet Fabrication",
          description:
            "Explore the design process from initial sketches to fully functioning prototypes. Focus on how details like eyes and posture shape character archetypes.",
          details: "Floor 01 | Andy Gent",
          icon: <PersonStandingIcon size={20} />,
        },
      ],
      images: [
        "/workshop1_1.png",
        "/workshop1_6.png",
        "/workshop1_5.png",
        "/workshop1_4.png",
      ],
    },
    {
      id: 2,
      name: "The Department of Graphics",
      subtitle: "Set Design & Location Scouting",
      theme: "bg-[#F2E8D5] text-[#CA292A]",
      cardStyle: "bg-white bg-opacity-60 border-[#CA292A]",
      workshops: [
        {
          title: "Annie Atkins & Nelson Lowry",
          topics: "World Building",
          description:
            "Design authentic, era-specific documents and miniatures. Learn how props like postcards and typography contribute to narrative depth.",
          details: "Floor 02 | Atkins & Lowry",
          icon: <House size={20} />,
        },
      ],
      images: [
        "/workshop2_1.png",
        "/workshop2_2.png",
        "/workshop2_3.png",
        "/workshop2_4.png",
      ],
    },
    {
      id: 3,
      name: "The Miniature Laboratory",
      subtitle: "Effects, Green Screen & Stop Motion",
      theme: "bg-white text-[#CA292A]",
      cardStyle: "bg-[#F0C6D4] bg-opacity-20 border-[#CA292A]",
      workshops: [
        {
          title: "Jeremy Dawson & Tim Ledbury",
          topics: "VFX & Compositing",
          description:
            "Breakdown of the iconic ski chase. Combine miniatures, live action, and digital backgrounds to achieve the Andersonian style.",
          details: "Floor 03 | Dawson & Ledbury",
          icon: <Edit2 size={20} />,
        },
      ],
      images: [
        "/workshop3_1.jpeg",
        "/workshop3_2.jpeg",
        "/workshop3_3.jpeg",
        "/workshop3_1.jpeg",
      ],
    },
    {
      id: 4,
      name: "The Institute of Acoustics",
      subtitle: "Sound Design & Music Composition",
      theme: "bg-[#F2E8D5] text-[#CA292A]",
      cardStyle: "bg-white bg-opacity-60 border-[#CA292A]",
      workshops: [
        {
          title: "Symphonic Storytelling",
          topics: "Sound Design",
          description:
            "To be announced. Explore the auditory landscape of cinema and the precision of the rhythmic soundscape.",
          details: "Floor 04 | Speaker TBA",
          icon: <Music size={20} />,
        },
      ],
      images: [
        "/workshop4_1.png",
        "/workshop4_2.png",
        "/workshop4_3.png",
        "/workshop4_1.png",
      ],
    },
    {
      id: 5,
      name: "The Cutting Room",
      subtitle: "Editing, Compositing & Color",
      theme: "bg-[#F0C6D4] text-[#CA292A]",
      cardStyle: "bg-white bg-opacity-40 border-[#CA292A]",
      workshops: [
        {
          title: "Andrew Weisblum & Barney Pilling",
          topics: "The Final Cut",
          description:
            "Shaping the rhythm of 'The French Dispatch' and 'Grand Budapest'. Focus on timing, humor, and the experimental nature of frame composition.",
          details: "Floor 05 | Weisblum & Pilling",
          icon: <ComputerIcon size={20} />,
        },
      ],
      images: [
        "/workshop5_1.jpg",
        "/workshop5_2.jpg",
        "/workshop5_3.jpg",
        "/workshop5_1.jpg",
      ],
    },
  ];

  const bannerText =
    " • WELCOME TO WESFEST • THREE DAYS OF CINEMA • CURATED WORKSHOPS • TICKETS AVAILABLE NOW • ";

  return (
    <div
      className={`min-h-screen bg-[#F0C6D4] selection:bg-[#CA292A] selection:text-white transition-opacity duration-1000 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;500;700&family=Jost:ital,wght@0,400;0,700;0,900;1,400&display=swap');
        html { scroll-behavior: smooth; }
        .font-serif-custom { font-family: 'Roboto Slab', serif; }
        .font-sans-custom { font-family: 'Jost', sans-serif; }
        .paper-texture { background-image: url("https://www.transparenttextures.com/patterns/p6.png"); }
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee-infinite { display: flex; width: max-content; animation: scroll 50s linear infinite; }
      `}</style>

      {/* 1. UPDATED MARQUEE BANNER */}
      <nav className="bg-[#CA292A] text-[#F0C6D4] py-3 border-b-4 border-[#F0C6D4] fixed top-0 w-full z-100 shadow-lg overflow-hidden flex items-center">
        <div className="animate-marquee-infinite">
          {/* We repeat the text and use two identical spans. 
              The 'scroll' animation moves 50%, so the second span perfectly replaces the first. */}
          <span className="font-sans-custom text-[11px] font-bold uppercase tracking-[0.3em] whitespace-nowrap">
            {bannerText.repeat(4)}
          </span>
          <span className="font-sans-custom text-[11px] font-bold uppercase tracking-[0.3em] whitespace-nowrap">
            {bannerText.repeat(4)}
          </span>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <header className="pt-48 pb-32 text-center border-b-2 border-[#CA292A] paper-texture bg-[#F0C6D4]">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
          <img
            src={logos.main}
            alt="WesFest Logo"
            className="w-full max-w-[600px] h-auto mb-12 drop-shadow-sm"
          />
          <div className="w-px h-16 bg-[#CA292A] my-8"></div>
          <div className="flex flex-wrap justify-center gap-8 font-sans-custom text-xs font-bold uppercase tracking-widest text-[#CA292A]">
            {["timetable", "floor-1", "floor-2", "floor-3", "tickets"].map(
              (link) => (
                <a
                  key={link}
                  href={`#${link}`}
                  className="hover:opacity-60 transition-opacity underline underline-offset-8 decoration-1">
                  {link.replace("-", " ")}
                </a>
              )
            )}
          </div>
        </div>
      </header>

      {/* 3. SCHEDULE SECTION */}
      <section
        id="timetable"
        className="py-24 bg-[#F0C6D4] paper-texture border-b-2 border-[#CA292A]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="font-serif-custom text-4xl text-[#CA292A] italic mb-10">
              The Daily Program
            </h3>
            <div className="flex justify-center items-center gap-6">
              {[1, 2, 3].map((d) => (
                <button
                  key={d}
                  onClick={() => setActiveDay(d)}
                  className={`relative px-10 py-4 font-sans-custom text-[11px] font-black uppercase tracking-[0.2em] border-2 border-[#CA292A] transition-all duration-200 ${
                    activeDay === d
                      ? "bg-[#CA292A] text-[#F0C6D4] translate-x-[4px] translate-y-[4px]"
                      : "bg-white text-[#CA292A] shadow-[6px_6px_0px_#CA292A] hover:bg-[#F0C6D4]"
                  }`}>
                  Day 0{d}
                </button>
              ))}
            </div>
          </div>
          <div className="border-2 border-[#CA292A] bg-white bg-opacity-60 divide-y-2 divide-[#CA292A] shadow-[12px_12px_0px_#CA292A]">
            {scheduleData[activeDay].map((e, i) => (
              <div
                key={i}
                className="flex items-center p-8 gap-8 hover:bg-white transition-all duration-300 group cursor-default">
                <span className="font-sans-custom font-bold w-30 shrink-0 text-[#CA292A]">
                  {e.time}
                </span>
                <div className="flex items-center gap-6 flex-grow">
                  <div className="p-3 bg-[#CA292A] text-[#F0C6D4] rounded-full shrink-0 group-hover:rotate-12 transition-transform">
                    {e.icon}
                  </div>
                  <h4 className="font-serif-custom text-xl md:text-2xl text-[#CA292A]">
                    {e.title}
                  </h4>
                </div>
                <span className="font-sans-custom text-[10px] uppercase font-bold opacity-40 text-[#CA292A]">
                  {e.loc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FLOOR SECTIONS (UPDATED: 50/50 Split) */}
      {floors.map((floor) => (
        <section
          id={`floor-${floor.id}`}
          key={floor.id}
          className={`${floor.theme} paper-texture p-3 border-b-2 border-[#CA292A] relative overflow-hidden`}>
          {/* Main Container - 50/50 Split using grid-cols-2 */}
          <div className="grid lg:grid-cols-2 w-full min-h-150">
            {/* CONTENT COLUMN (50%) */}
            <div className="p-12 lg:p-24 flex flex-col justify-center border-opacity-20">
              <p className="font-sans-custom text-xs font-black uppercase tracking-[0.5em] mb-4 opacity-60">
                Archive {floor.id}
              </p>
              <h2 className="font-serif-custom text-5xl mb-6 text-[#CA292A] leading-tight">
                {floor.name}
              </h2>
              <p className="font-serif-custom italic text-xl mb-12 opacity-80">
                {floor.subtitle}
              </p>
              <div className="space-y-6">
                {floor.workshops.map((ws, i) => (
                  <div
                    key={i}
                    className={`p-8 border-2 ${floor.cardStyle} rounded-sm shadow-sm hover:shadow-lg transition-all duration-500 group/card`}>
                    <h4 className="font-serif-custom text-2xl mb-3">
                      {ws.title}
                    </h4>
                    <p className="font-sans-custom text-[9px] font-bold uppercase tracking-widest mb-3 opacity-70">
                      Focus: {ws.topics}
                    </p>
                    <p className="font-sans-custom text-sm mb-6 leading-relaxed opacity-90">
                      {ws.description}
                    </p>
                    <div className="flex justify-between items-center pt-4 border-t border-[#CA292A] border-opacity-20 text-[9px] font-black uppercase tracking-widest">
                      <span>{ws.details}</span>
                      <ArrowRight
                        size={16}
                        className="group-hover/card:translate-x-2 transition-transform"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* IMAGE GRID COLUMN (50%) */}
            <div className="w-full h-full lg:max-h-220">
              <div className="grid grid-cols-6 h-full w-full">
                {(floor.images || floor.collageColors).map((item, ci) => {
                  let spanClass = "";
                  if (ci === 0) spanClass = "col-span-4";
                  else if (ci === 1) spanClass = "col-span-2";
                  else if (ci === 2) spanClass = "col-span-3";
                  else spanClass = "col-span-3";

                  return (
                    <div
                      key={ci}
                      className={`${spanClass} relative overflow-hidden border-l border-b border-[#CA292A] border-opacity-10 group/img min-h-75`}
                      style={!floor.images ? { backgroundColor: item } : {}}>
                      {floor.images ? (
                        <img
                          src={item}
                          alt={`Workshop ${ci}`}
                          className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-1000"
                        />
                      ) : (
                        <div className="w-full h-full group-hover/img:scale-105 transition-transform duration-1000"></div>
                      )}
                      <div className="absolute inset-0 bg-black opacity-10 group-hover/img:opacity-0 transition-opacity duration-500"></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* 5. TICKETS */}
      <section
        id="tickets"
        className="py-32 px-6 bg-[#F2E8D5] border-b-2 border-[#CA292A] paper-texture">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-sans-custom text-[10px] font-black uppercase tracking-[0.5em] mb-4 text-[#CA292A]">
            The Admission Bureau
          </p>
          <h2 className="font-serif-custom text-6xl text-[#CA292A] mb-20 italic">
            Acquire Entry
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {ticketOptions.map((tier, i) => (
              <div
                key={i}
                className={`relative p-8 border-2 border-[#CA292A] bg-white flex flex-col transition-all duration-500 hover:-translate-y-4 ${
                  tier.highlight
                    ? "scale-105 z-10 shadow-[10px_10px_0px_#CA292A]"
                    : "shadow-[5px_5px_0px_#CA292A]"
                }`}>
                {tier.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#CA292A] text-[#F0C6D4] px-4 py-1 font-sans-custom text-[9px] font-black uppercase tracking-widest">
                    Highly Recommended
                  </div>
                )}
                <h4 className="font-serif-custom text-3xl text-[#CA292A] mb-2">
                  {tier.name}
                </h4>
                <div className="flex items-baseline gap-1 mb-6 border-b-2 border-[#CA292A] border-dotted pb-6">
                  <span className="font-sans-custom text-2xl font-bold text-[#CA292A]">
                    $
                  </span>
                  <span className="font-serif-custom text-6xl font-black text-[#CA292A]">
                    {tier.price}
                  </span>
                </div>
                <ul className="space-y-4 mb-10 flex-grow">
                  {tier.features.map((feat, fi) => (
                    <li
                      key={fi}
                      className="flex items-start gap-3 text-xs font-sans-custom font-bold uppercase tracking-wider text-[#CA292A] text-left">
                      <Check size={14} className="shrink-0 mt-0.5" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-4 font-sans-custom font-black uppercase text-[11px] tracking-[0.2em] border-2 border-[#CA292A] transition-all ${
                    tier.highlight
                      ? "bg-[#CA292A] text-white"
                      : "hover:bg-[#CA292A] hover:text-white"
                  }`}>
                  Purchase Passage
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="bg-[#CA292A] text-[#F0C6D4] py-24 paper-texture border-t-4 border-[#F0C6D4]">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
          <div className="flex items-center gap-12 mb-12">
            <a
              href="#timetable"
              className="font-sans-custom text-[11px] font-black uppercase tracking-[0.2em] hover:text-white">
              Schedule
            </a>
            <div className="w-1 h-1 rounded-full bg-[#F0C6D4]"></div>
            <a
              href="#tickets"
              className="font-sans-custom text-[11px] font-black uppercase tracking-[0.2em] hover:text-white">
              Tickets
            </a>
          </div>
          <img
            src={logos.seal}
            alt="Official Seal"
            className="w-32 h-32 object-contain filter brightness-0 invert opacity-90 mb-12"
          />
          <div className="flex gap-8 mb-12">
            <Instagram
              size={24}
              className="hover:scale-110 transition-transform cursor-pointer"
            />
            <Mail
              size={24}
              className="hover:scale-110 transition-transform cursor-pointer"
            />
          </div>
          <p className="font-serif-custom italic text-lg opacity-80 mb-8 max-w-sm">
            "A celebration of symmetrical storytelling and curated palettes."
          </p>
          <div className="w-full border-t border-[#F0C6D4]/20 pt-8 flex justify-between items-center font-sans-custom text-[9px] uppercase tracking-[0.4em] opacity-50">
            <p>© 2026 WesFest Film Society</p>
            <p>Cinema City, Room 303</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
