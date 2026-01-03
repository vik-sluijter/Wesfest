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
import { image } from "framer-motion/client";

export default function Feed() {
  const [activeDay, setActiveDay] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);

  // --- LOGO PATHS ---
  const logos = {
    nav: "/logoshort.svg",
    seal: "/logocool.svg",
  };

  const images = {
    imageone: "/workshop1_3.png",
    imagetwo: "/workshop2_3.png",
    imagethree: "/workshop3_1.jpeg",
    imagefour: "/workshop4_1.png",
    imagefive: "/workshop5_1.jpg",
    placeholder: "/placeholder.png",
  };

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

  // Function to generate a static list of 24 items
  const generateFeed = () => {
    let feed = [];
    // Get image keys excluding placeholder for randomization
    const imageKeys = Object.keys(images).filter(
      (key) => key !== "placeholder"
    );
    // Loop 4 times to create 24 items (6 templates * 4)
    for (let i = 0; i < 4; i++) {
      const batch = baseTemplates.map((template, index) => {
        // Randomly select an image key
        const randomImageKey =
          imageKeys[Math.floor(Math.random() * imageKeys.length)];
        return {
          ...template,
          // Create a unique ID based on the batch and index
          id: i * 6 + index,
          // Randomize likes slightly so they don't look identical
          likes: Math.floor(Math.random() * 500) + 40,
          liked: false,
          // Assign the random image
          image: images[randomImageKey],
        };
      });
      feed = [...feed, ...batch];
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
      className={`min-h-screen bg-[#F2E8D5] transition-opacity duration-700 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;500;700&family=Jost:wght@400;700;900&display=swap');
        .font-serif-custom { font-family: 'Roboto Slab', serif; }
        .font-sans-custom { font-family: 'Jost', sans-serif; }
        .paper-texture { background-image: url("https://www.transparenttextures.com/patterns/p6.png"); }
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { display: flex; width: max-content; animation: scroll 40s linear infinite; }
      `}</style>

      {/* TOP NAV BAR */}
      <nav className="bg-[#CA292A] text-[#F0C6D4] py-2 fixed top-0 w-full z-[110] border-b border-[#F0C6D4] overflow-hidden">
        <div className="animate-marquee">
          <span className="font-sans-custom text-[9px] font-bold uppercase tracking-[0.3em] whitespace-nowrap">
            {" • THE WESFEST DISPATCH • OFFICIAL CORRESPONDENCE • ".repeat(20)}
          </span>
        </div>
      </nav>

      {/* STICKY HEADER */}
      <div className="fixed top-[33px] md:top-[37px] w-full z-[100] bg-white border-b-2 border-[#CA292A] h-14 flex items-center px-4 md:px-6 paper-texture">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logos.nav}
              alt="WesFest Badge"
              className="w-8 h-8 object-contain transition-transform group-hover:rotate-12"
            />
            <span className="font-sans-custom text-xs font-black uppercase tracking-widest text-[#CA292A]">
              WesFest
            </span>
          </Link>
          <div className="flex items-center gap-2 font-sans-custom text-[9px] font-bold uppercase text-[#CA292A]">
            <Link
              to="/"
              className="opacity-40 hover:opacity-100 transition-opacity">
              Archive
            </Link>
            <ChevronRight size={10} className="opacity-20" />
            <span className="bg-[#CA292A] text-white px-3 py-1 rounded-sm">
              The Feed
            </span>
          </div>
        </div>
      </div>

      <main className="pt-32 md:pt-40 pb-20 max-w-7xl mx-auto px-4 md:px-6 flex flex-col items-center">
        {/* TIMETABLE SECTION */}
        <section className="w-full mb-16 border-2 border-[#CA292A] bg-white p-6 md:p-8 shadow-[8px_8px_0px_#CA292A] relative overflow-hidden">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
            <div className="text-center md:text-left">
              <h3 className="font-serif-custom text-2xl text-[#CA292A] italic">
                Daily Itinerary
              </h3>
              <p className="font-sans-custom text-[9px] font-black uppercase tracking-widest text-[#CA292A] opacity-60">
                Please consult your watch
              </p>
            </div>
            <div className="flex gap-2">
              {[1, 2, 3].map((d) => (
                <button
                  key={d}
                  onClick={() => setActiveDay(d)}
                  className={`px-5 py-2 border-2 border-[#CA292A] font-sans-custom text-[10px] font-black transition-all ${
                    activeDay === d
                      ? "bg-[#CA292A] text-white"
                      : "bg-white text-[#CA292A] hover:bg-[#F0C6D4]"
                  }`}>
                  DAY 0{d}
                </button>
              ))}
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
        <div className="w-full flex items-center justify-between mb-8 pb-4 border-b border-[#CA292A]/30">
          <div className="flex items-center gap-4">
            <div className="h-px bg-[#CA292A] w-12 hidden md:block"></div>
            <span className="font-sans-custom text-[10px] font-black uppercase tracking-[0.2em] text-[#CA292A]">
              Wesfest Activity Feed
            </span>
          </div>
        </div>

        {/* --- STATIC GRID FEED SECTION --- */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white border-2 border-[#CA292A] shadow-[4px_4px_0px_rgba(202,41,42,0.3)] hover:shadow-[8px_8px_0px_#CA292A] hover:-translate-y-1 transition-all duration-300 flex flex-col">
              {/* Post Header */}
              <div className="p-2 border-b-2 border-[#F2E8D5] flex justify-between items-center bg-[#fdfbf7]">
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

              {/* Post Image (Color Block) */}
              <div className="relative w-full aspect-square border-b border-[#CA292A] group overflow-hidden">
                <img src={images.imagethree} alt="placehodler" />
                {/* Watermark Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none transform group-hover:scale-110 duration-700">
                  <img
                    src={logos.seal}
                    alt=""
                    className="w-24 h-24 filter brightness-0"
                  />
                </div>
              </div>

              {/* Action Bar */}
              <div className="px-3 pt-3 flex justify-between items-center">
                <div className="flex gap-3">
                  <button onClick={() => handleLike(post.id)}>
                    <Heart
                      size={18}
                      className={`transition-colors ${
                        post.liked
                          ? "fill-[#CA292A] text-[#CA292A]"
                          : "text-[#CA292A]"
                      }`}
                    />
                  </button>
                  <MessageCircle size={18} className="text-[#CA292A]" />
                </div>
                <Bookmark size={18} className="text-[#CA292A]" />
              </div>

              {/* Content */}
              <div className="px-3 pb-4 grow flex flex-col justify-end">
                <p className="font-sans-custom text-[9px] font-black uppercase text-[#CA292A] mt-2 mb-1">
                  {post.likes} Signatures
                </p>
                <div className="space-y-1">
                  <p className="font-serif-custom text-xs text-[#CA292A] leading-tight line-clamp-2">
                    <span className="font-sans-custom text-[10px] font-black uppercase mr-1">
                      {post.author}
                    </span>
                    {post.title}
                  </p>
                  <p className="font-serif-custom text-[10px] text-gray-500 italic line-clamp-2">
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
