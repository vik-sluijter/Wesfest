import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Music,
  House,
  Edit2,
  ComputerIcon,
  ArrowRight,
  Check,
  Film,
  PersonStandingIcon,
  Instagram,
  Mail,
} from "lucide-react";

export default function Home() {
  const base = import.meta.env.BASE_URL;
  const [activeDay, setActiveDay] = useState(1);
  const [selectedTicketDay, setSelectedTicketDay] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const logos = {
    main: `${base}logobig.svg`,
    nav: `${base}logoshort.svg`,
    seal: `${base}logocool.svg`,
  };

  // New data structure for visual tickets
  const visualTickets = [
    {
      id: "1day",
      image: `${base}/tickets/ticket_day${selectedTicketDay}.png`,
      name: "1 - DAY TICKET",
      price: "€59,99",
      isSelectable: true,
    },
    {
      id: "3day",
      image: `${base}/tickets/ticket_3days.png`,
      name: "3 - DAYS TICKET",
      price: "€149,86",
      isSelectable: false,
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
        loc: "Outside - Market Square",
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
        loc: "Outside - Market Square",
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
        loc: "Outside - Market Square",
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
        `${base}/workshop1/workshop1_1.png`,
        `${base}/workshop1/workshop1_3.png`,
        `${base}/workshop1/workshop1_2.png`,
        `${base}/workshop1/workshop1_4.png`,
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
        `${base}/workshop2/workshop2_1.png`,
        `${base}/workshop2/workshop2_2.png`,
        `${base}/workshop2/workshop2_3.png`,
        `${base}/workshop2/workshop2_4.png`,
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
        `${base}/workshop3/workshop3_1.png`,
        `${base}/workshop3/workshop3_2.png`,
        `${base}/workshop3/workshop3_3.png`,
        `${base}/workshop3/workshop3_4.png`,
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
        `${base}/workshop4/workshop4_1.png`,
        `${base}/workshop4/workshop4_2.png`,
        `${base}/workshop4/workshop4_3.png`,
        `${base}/workshop4/workshop4_4.png`,
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
        `${base}/workshop5/workshop5_1.png`,
        `${base}/workshop5/workshop5_2.png`,
        `${base}/workshop5/workshop5_3.png`,
        `${base}/workshop5/workshop5_4.png`,
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
          {/* UPDATED: STYLED FEED BUTTON */}
          <Link
            to="/feed"
            className="mb-8 inline-block px-8 py-3 border-2 border-[#CA292A] bg-white text-[#CA292A] font-sans-custom font-bold uppercase tracking-[0.2em] text-xs hover:bg-[#CA292A] hover:text-[#F0C6D4] transition-all shadow-[4px_4px_0px_#CA292A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#CA292A]">
            View Feed
          </Link>

          <img
            src={logos.main}
            alt="WesFest Logo"
            className="w-full max-w-150 h-auto mb-12 drop-shadow-sm"
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
            <h3 className="font-serif-custom text-2xl md:text-4xl text-[#CA292A] italic mb-10">
              The Daily Program
            </h3>
            <div className="flex justify-center items-center gap-3 sm:gap-6">
              {[1, 2, 3].map((d) => {
                const dates = { 1: "29.07", 2: "30.07", 3: "31.07" };
                return (
                  <button
                    key={d}
                    onClick={() => setActiveDay(d)}
                    className={`relative px-4 sm:px-10 py-2 sm:py-4 font-sans-custom text-[9px] sm:text-[11px] font-black uppercase tracking-[0.1em] sm:tracking-[0.2em] border-2 border-[#CA292A] transition-all duration-200 ${
                      activeDay === d
                        ? "bg-[#CA292A] text-[#F0C6D4] translate-x-[2px] sm:translate-x-[4px] translate-y-[2px] sm:translate-y-[4px]"
                        : "bg-white text-[#CA292A] shadow-[4px_4px_0px_#CA292A] hover:bg-[#F0C6D4]"
                    }`}>
                    {dates[d]}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="border-2 border-[#CA292A] bg-white bg-opacity-60 divide-y-2 divide-[#CA292A] shadow-[12px_12px_0px_#CA292A]">
            {scheduleData[activeDay].map((e, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row sm:items-center p-2 sm:p-8 gap-2 sm:gap-8 hover:bg-white transition-all duration-300 group cursor-default">
                <span className="font-sans-custom font-bold text-sm sm:text-base w-full sm:w-30 shrink-0 text-[#CA292A]">
                  {e.time}
                </span>
                <div className="flex items-center gap-4 sm:gap-6 flex-grow">
                  <div className="p-2 sm:p-3 bg-[#CA292A] text-[#F0C6D4] rounded-full shrink-0 group-hover:rotate-12 transition-transform">
                    {e.icon}
                  </div>
                  <h4 className="font-serif-custom text-lg sm:text-xl md:text-2xl text-[#CA292A]">
                    {e.title}
                  </h4>
                </div>
                <span className="font-sans-custom text-[9px] sm:text-[10px] uppercase font-bold opacity-40 text-[#CA292A] sm:text-right">
                  {e.loc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FLOOR SECTIONS */}
      {floors.map((floor) => {
        // HELPER VARIABLE: Count how many images there are
        const images = floor.images || floor.collageColors || [];
        const count = images.length;

        return (
          <section
            id={`floor-${floor.id}`}
            key={floor.id}
            className={`${floor.theme} paper-texture p-3 border-b-2 border-[#CA292A] relative overflow-hidden`}>
            <div className="grid lg:grid-cols-2 w-full min-h-150">
              <div className="p-6 lg:p-24 flex flex-col justify-center border-opacity-20">
                <p className="font-sans-custom text-xs font-black uppercase tracking-[0.5em] mb-4 opacity-60">
                  Archive {floor.id}
                </p>
                <h2 className="font-serif-custom text-3xl md:text-5xl mb-6 text-[#CA292A] leading-tight">
                  {floor.name}
                </h2>
                <p className="font-serif-custom italic text-lg md:text-xl mb-12 opacity-80">
                  {floor.subtitle}
                </p>
                <div className="space-y-6">
                  {floor.workshops.map((ws, i) => (
                    <div
                      key={i}
                      className={`p-4 sm:p-8 border-2 ${floor.cardStyle} rounded-sm shadow-sm hover:shadow-lg transition-all duration-500 group/card`}>
                      <h4 className="font-serif-custom text-lg sm:text-xl md:text-2xl mb-3">
                        {ws.title}
                      </h4>
                      <p className="font-sans-custom text-[9px] font-bold uppercase tracking-widest mb-3 opacity-70">
                        Focus: {ws.topics}
                      </p>
                      <p className="font-sans-custom text-xs md:text-sm mb-6 leading-relaxed opacity-90">
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

              {/* DYNAMIC GRID LOGIC */}
              <div className="w-full h-full lg:max-h-220">
                <div
                  className={`grid h-full w-full ${
                    count === 4
                      ? "grid-cols-2 md:grid-cols-6"
                      : "grid-cols-1 md:grid-cols-2"
                  }`}>
                  {images.map((item, ci) => {
                    let spanClass = "";

                    // LOGIC A: EXACTLY 4 PHOTOS (Responsive layout)
                    if (count === 4) {
                      if (ci === 0) spanClass = "col-span-2 md:col-span-4";
                      else if (ci === 1) spanClass = "col-span-2 md:col-span-2";
                      else if (ci === 2) spanClass = "col-span-1 md:col-span-3";
                      else spanClass = "col-span-1 md:col-span-3";
                    }
                    // LOGIC B: OTHER AMOUNT (Responsive layout)
                    else {
                      if (count === 1) {
                        // 1 photo: Fills everything
                        spanClass =
                          "col-span-1 md:col-span-2 row-span-2 md:row-span-2";
                      } else if (count === 3 && ci === 0) {
                        // 3 photos: First is wide, other two next to/below
                        spanClass = "col-span-1 md:col-span-2";
                      } else {
                        // Default behavior (e.g. with 2 photos): 50/50
                        spanClass = "col-span-1";
                      }
                    }

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
        );
      })}

      {/* 5. UPDATED TICKETS SECTION */}
      <section
        id="tickets"
        className="py-32 px-6 bg-[#F2E8D5] border-b-2 border-[#CA292A] paper-texture">
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-sans-custom text-[10px] font-black uppercase tracking-[0.5em] mb-4 text-[#CA292A]">
            The Admission Bureau
          </p>
          <h2 className="font-serif-custom text-4xl md:text-6xl text-[#CA292A] mb-20 italic">
            Acquire Entry
          </h2>

          {/* Grid for the 2 new tickets */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start justify-center">
            {visualTickets.map((ticket) => (
              <div key={ticket.id} className="flex flex-col items-center group">
                {/* De Ticket Image */}
                <div className="relative mb-10 w-full max-w-lg transition-transform duration-500 hover:rotate-1 hover:scale-[1.02] drop-shadow-[10px_10px_15px_rgba(0,0,0,0.15)]">
                  <img
                    src={ticket.image}
                    alt={ticket.name}
                    className="w-full h-auto rounded-sm"
                  />
                </div>

                {/* Date Selection for 1-day ticket */}
                {ticket.isSelectable && (
                  <div className="mb-6 w-full max-w-sm">
                    <p className="font-sans-custom text-[10px] font-bold uppercase tracking-[0.2em] mb-3 text-[#CA292A]">
                      Select Date
                    </p>
                    <div className="flex justify-center gap-3">
                      {[1, 2, 3].map((day) => {
                        const dates = { 1: "29.07", 2: "30.07", 3: "31.07" };
                        return (
                          <button
                            key={day}
                            onClick={() => setSelectedTicketDay(day)}
                            className={`px-6 py-2 font-sans-custom text-[10px] font-black uppercase tracking-[0.2em] border-2 border-[#CA292A] transition-all duration-200 ${
                              selectedTicketDay === day
                                ? "bg-[#CA292A] text-[#F0C6D4] translate-x-[2px] translate-y-[2px]"
                                : "bg-white text-[#CA292A] shadow-[4px_4px_0px_#CA292A] hover:bg-[#F2E8D5]"
                            }`}>
                            {dates[day]}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Purchase Button */}
                <Link
                  to="#"
                  className="w-full max-w-sm py-4 bg-[#CA292A] text-[#F0C6D4] font-sans-custom font-black uppercase text-[12px] tracking-[0.2em] border-2 border-[#CA292A] hover:bg-white hover:text-[#CA292A] transition-all shadow-[6px_6px_0px_#CA292A] hover:shadow-[3px_3px_0px_#CA292A] hover:translate-x-[3px] hover:translate-y-[3px]">
                  BUY {ticket.name} • {ticket.price}
                </Link>
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
