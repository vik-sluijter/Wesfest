import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  MessageCircle,
  ChevronRight,
  PersonStandingIcon,
  House,
  Edit2,
  Film,
  ComputerIcon,
  Music,
  Bookmark,
  MoreHorizontal,
  Grid3X3,
  List,
} from "lucide-react";

export default function Feed() {
  const base = import.meta.env.BASE_URL;
  const [activeDay, setActiveDay] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);

  // --- LOGO PATHS ---
  const logos = {
    nav: `${base}logoshort.svg`,
    seal: `${base}logocool.svg`,
  };

  // Use actual workshop images from public folder
  const workshopImages = [
    `${base}workshop1/workshop1_1.png`,
    `${base}workshop1/workshop1_2.png`,
    `${base}workshop1/workshop1_3.png`,
    `${base}workshop1/workshop1_4.png`,
    `${base}workshop2/workshop2_1.png`,
    `${base}workshop2/workshop2_2.png`,
    `${base}workshop2/workshop2_3.png`,
    `${base}workshop2/workshop2_4.png`,
    `${base}workshop3/workshop3_1.png`,
    `${base}workshop3/workshop3_2.png`,
    `${base}workshop3/workshop3_3.png`,
    `${base}workshop3/workshop3_4.png`,
    `${base}workshop4/workshop4_1.png`,
    `${base}workshop4/workshop4_2.png`,
    `${base}workshop4/workshop4_3.png`,
    `${base}workshop4/workshop4_4.png`,
    `${base}workshop5/workshop5_1.png`,
    `${base}workshop5/workshop5_2.png`,
    `${base}workshop5/workshop5_3.png`,
    `${base}workshop5/workshop5_4.png`,
  ];

  // --- DATA GENERATION ---
  // We define the base 6 templates, then programmatically generate a longer list
  const baseTemplates = [
    {
      title: "The Lobby Boy",
      desc: "Uniform pressed. Shoes shined. Inspecting the silver.",
      color: "#F0C6D4", // Pink
      author: "Zero_M",
    },
    {
      title: "Camp Ivanhoe",
      desc: "Record player spinning 'The Young Person's Guide'.",
      color: "#F1C232", // Yellow
      author: "Sam_S",
    },
    {
      title: "The Belafonte",
      desc: "Sonar testing. Detected a Jaguar Shark.",
      color: "#87CEEB", // Blue
      author: "Steve_Z",
    },
    {
      title: "Social Planning",
      desc: "Events filed in alphabetical order.",
      color: "#A2D5AB", // Green
      author: "Margot_T",
    },
    {
      title: "Observatory",
      desc: "Crater is 100% symmetrical today.",
      color: "#CA292A", // Red
      author: "Augie_S",
    },
    {
      title: "Baggage Claim",
      desc: "Three matching suitcases. Hand-painted.",
      color: "#F2E8D5", // Beige
      author: "Peter_W",
    },
  ];

  // Function to generate a static list of 16 items with unique images
  const generateFeed = () => {
    const shuffledImages = [...workshopImages].sort(() => Math.random() - 0.5);
    let feed = [];
    for (let i = 0; i < shuffledImages.length; i++) {
      const template = baseTemplates[i % baseTemplates.length];
      feed.push({
        ...template,
        id: i,
        likes: Math.floor(Math.random() * 500) + 40,
        liked: false,
        image: shuffledImages[i],
      });
    }
    return feed;
  };

  const [posts, setPosts] = useState(generateFeed());

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleLike = (id) => {
    setPosts(
      posts.map((post) =>
        post.id === id
          ? {
              ...post,
              liked: !post.liked,
              likes: post.liked ? post.likes - 1 : post.likes + 1,
            }
          : post
      )
    );
  };

  const scheduleData = {
    1: [
      {
        time: "08:00",
        title: "Andy Gent",
        icon: <PersonStandingIcon size={14} />,
      },
      { time: "10:00", title: "Annie Atkins", icon: <House size={14} /> },
      { time: "13:00", title: "Nelson Lowry", icon: <House size={14} /> },
      { time: "15:00", title: "Jeremy Dawson", icon: <Edit2 size={14} /> },
      { time: "17:45", title: "The Grand Budapest", icon: <Film size={14} /> },
    ],
    2: [
      { time: "08:00", title: "Tim Ledbury", icon: <Edit2 size={14} /> },
      {
        time: "10:00",
        title: "Andrew Weisblum",
        icon: <ComputerIcon size={14} />,
      },
      {
        time: "13:00",
        title: "Barney Pilling",
        icon: <ComputerIcon size={14} />,
      },
      { time: "15:00", title: "Speaker TBA", icon: <Music size={14} /> },
      { time: "17:45", title: "Fantastic Mr. Fox", icon: <Film size={14} /> },
    ],
    3: [
      {
        time: "08:00",
        title: "Andy Gent",
        icon: <PersonStandingIcon size={14} />,
      },
      { time: "10:00", title: "Nelson Lowry", icon: <House size={14} /> },
      { time: "13:00", title: "Jeremy Dawson", icon: <Edit2 size={14} /> },
      {
        time: "15:00",
        title: "Barney Pilling",
        icon: <ComputerIcon size={14} />,
      },
      { time: "17:45", title: "The Phoenician", icon: <Film size={14} /> },
    ],
  };

  return (
    <div
      className={`min-h-screen bg-[#F0C6D4] transition-opacity duration-700 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;500;700&family=Jost:ital,wght@0,400;0,700;0,900;1,400&display=swap');
        .font-serif-custom { font-family: 'Roboto Slab', serif; }
        .font-sans-custom { font-family: 'Jost', sans-serif; }
        .paper-texture { background-image: url("https://www.transparenttextures.com/patterns/p6.png"); }
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { display: flex; width: max-content; animation: scroll 50s linear infinite; }
      `}</style>

      {/* TOP NAV BAR */}
      <nav className="bg-[#CA292A] text-[#F0C6D4] py-3 border-b-4 border-[#F0C6D4] fixed top-0 w-full z-50 shadow-lg overflow-hidden flex items-center">
        <div className="animate-marquee">
          <span className="font-sans-custom text-[11px] font-bold uppercase tracking-[0.3em] whitespace-nowrap">
            {" • THE WESFEST DISPATCH • OFFICIAL CORRESPONDENCE • ".repeat(4)}
          </span>
          <span className="font-sans-custom text-[11px] font-bold uppercase tracking-[0.3em] whitespace-nowrap">
            {" • THE WESFEST DISPATCH • OFFICIAL CORRESPONDENCE • ".repeat(4)}
          </span>
        </div>
      </nav>

      {/* STICKY HEADER */}
      <div className="fixed top-[37px] md:top-[41px] w-full z-40 bg-white border-b-2 border-[#CA292A] h-16 flex items-center px-4 md:px-6">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logos.nav}
              alt="WesFest Badge"
              className="w-10 h-10 object-contain transition-transform group-hover:rotate-12"
            />
            <span className="font-sans-custom text-sm font-black uppercase tracking-widest text-[#CA292A]">
              WesFest
            </span>
          </Link>
          <div className="flex items-center gap-2 font-sans-custom text-[10px] font-bold uppercase text-[#CA292A]">
            <Link
              to="/"
              className="opacity-60 hover:opacity-100 transition-opacity hover:underline">
              Archive
            </Link>
            <ChevronRight size={12} className="opacity-40" />
            <span className="bg-[#CA292A] text-[#F0C6D4] px-4 py-1.5 border-2 border-[#CA292A] shadow-[2px_2px_0px_#8B1E1F]">
              The Feed
            </span>
          </div>
        </div>
      </div>

      <main className="pt-32 md:pt-44 pb-20 max-w-7xl mx-auto px-4 md:px-6 flex flex-col items-center bg-[#F0C6D4] min-h-screen">
        {/* TIMETABLE SECTION */}
        <section className="w-full mb-16 border-2 border-[#CA292A] bg-white bg-opacity-70 p-6 md:p-8 shadow-[12px_12px_0px_#CA292A] relative overflow-hidden">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
            <div className="text-center md:text-left">
              <p className="font-sans-custom text-[10px] font-black uppercase tracking-[0.5em] mb-2 text-[#CA292A] opacity-70">
                The Program
              </p>
              <h3 className="font-serif-custom text-3xl md:text-4xl text-[#CA292A] italic">
                Daily Itinerary
              </h3>
            </div>
            <div className="flex gap-3">
              {[1, 2, 3].map((d) => {
                const dates = { 1: "29.07", 2: "30.07", 3: "31.07" };
                return (
                  <button
                    key={d}
                    onClick={() => setActiveDay(d)}
                    className={`px-8 py-3 border-2 border-[#CA292A] font-sans-custom text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-200 ${
                      activeDay === d
                        ? "bg-[#CA292A] text-[#F0C6D4] translate-x-[4px] translate-y-[4px] shadow-[4px_4px_0px_#8B1E1F]"
                        : "bg-white text-[#CA292A] shadow-[6px_6px_0px_#CA292A] hover:bg-[#F0C6D4]"
                    }`}>
                    {dates[d]}
                  </button>
                );
              })}
            </div>
            <div className="flex flex-wrap gap-4 border-l-0 md:border-l-2 border-[#CA292A] border-dotted pl-0 md:pl-8 justify-center">
              {scheduleData[activeDay].map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center w-16 md:w-20">
                  <span className="font-sans-custom font-bold text-[10px] text-[#CA292A] mb-1">
                    {item.time}
                  </span>
                  <div className="text-[#CA292A] mb-1">{item.icon}</div>
                  <span className="font-sans-custom text-[7px] font-black uppercase tracking-tighter text-[#CA292A] text-center leading-tight">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- GRID HEADER --- */}
        <div className="w-full flex items-center justify-between mb-12 pb-6 border-b-2 border-[#CA292A]">
          <div className="flex items-center gap-4">
            <div className="h-0.5 bg-[#CA292A] w-16 hidden md:block"></div>
            <p className="font-sans-custom text-[10px] font-black uppercase tracking-[0.5em] text-[#CA292A] opacity-70">
              The Feed
            </p>
            <h2 className="font-serif-custom text-3xl md:text-4xl text-[#CA292A] italic">
              Wesfest Activity Feed
            </h2>
          </div>
        </div>

        {/* --- STATIC GRID FEED SECTION --- */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white border-2 border-[#CA292A] shadow-[6px_6px_0px_#CA292A] hover:shadow-[8px_8px_0px_#CA292A] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-300 flex flex-col">
              {/* Post Header */}
              <div className="p-3 border-b-2 border-[#CA292A] border-opacity-20 flex justify-between items-center bg-white">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-6 h-6 rounded-full border border-[#CA292A] flex items-center justify-center text-[9px] font-bold text-white`}
                    style={{ backgroundColor: post.color }}>
                    {post.author.charAt(0)}
                  </div>
                  <p className="font-sans-custom text-[10px] font-bold text-[#CA292A] uppercase tracking-wider">
                    {post.author}
                  </p>
                </div>
                <MoreHorizontal
                  size={14}
                  className="text-[#CA292A] opacity-50"
                />
              </div>

              {/* Post Image */}
              <div className="relative w-full aspect-square border-b-2 border-[#CA292A] group overflow-hidden bg-[#F2E8D5]">
                {post.image ? (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      // Fallback to color block if image fails to load
                      e.target.style.display = "none";
                      e.target.parentElement.style.backgroundColor = post.color;
                    }}
                  />
                ) : (
                  <div
                    className="w-full h-full"
                    style={{ backgroundColor: post.color }}
                  />
                )}
                {/* Watermark Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none">
                  <img
                    src={logos.seal}
                    alt=""
                    className="w-32 h-32 filter brightness-0 opacity-50"
                  />
                </div>
              </div>

              {/* Action Bar */}
              <div className="px-4 pt-4 flex justify-between items-center">
                <div className="flex gap-4">
                  <button
                    onClick={() => handleLike(post.id)}
                    className="hover:scale-110 transition-transform">
                    <Heart
                      size={20}
                      className={`transition-colors ${
                        post.liked
                          ? "fill-[#CA292A] text-[#CA292A]"
                          : "text-[#CA292A]"
                      }`}
                    />
                  </button>
                  <button className="hover:scale-110 transition-transform">
                    <MessageCircle size={20} className="text-[#CA292A]" />
                  </button>
                </div>
                <button className="hover:scale-110 transition-transform">
                  <Bookmark size={20} className="text-[#CA292A]" />
                </button>
              </div>

              {/* Content */}
              <div className="px-4 pb-5 grow flex flex-col justify-end">
                <p className="font-sans-custom text-[10px] font-black uppercase text-[#CA292A] mb-2 opacity-70">
                  {post.likes} Signatures
                </p>
                <div className="space-y-2">
                  <p className="font-serif-custom text-sm text-[#CA292A] leading-tight line-clamp-2">
                    <span className="font-sans-custom text-[11px] font-black uppercase mr-2">
                      {post.author}
                    </span>
                    {post.title}
                  </p>
                  <p className="font-serif-custom text-[11px] text-[#CA292A] opacity-70 italic line-clamp-2">
                    "{post.desc}"
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#CA292A] text-[#F0C6D4] py-24 paper-texture border-t-4 border-[#F0C6D4]">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
          <div className="flex items-center gap-12 mb-12">
            <a
              href="#timetable"
              className="font-sans-custom text-[11px] font-black uppercase tracking-[0.2em] hover:text-white transition-colors">
              Schedule
            </a>
            <div className="w-1 h-1 rounded-full bg-[#F0C6D4]"></div>
            <a
              href="#tickets"
              className="font-sans-custom text-[11px] font-black uppercase tracking-[0.2em] hover:text-white transition-colors">
              Tickets
            </a>
          </div>

          <div className="mb-12">
            <img
              src={logos.seal}
              alt="Official Seal"
              className="w-32 h-32 object-contain filter brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
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
