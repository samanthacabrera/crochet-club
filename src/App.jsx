import { useState } from "react";
import { translations } from "./translations";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { FiLink } from "react-icons/fi";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  // Translator 
  const [lang, setLang] = useState("en"); 
  const t = translations[lang];
  const navLinks = [
    { id: "welcome", label: t.navLinks[0] },
    { id: "mission", label: t.navLinks[1] },
    { id: "info", label: t.navLinks[2] },
    { id: "calendar", label: t.navLinks[3] },

  ];

  // Calendar 
  const today = new Date();
  const nextMeeting = new Date(today);

  if (today.getDay() === 1 && today.getHours() < 18) {
    nextMeeting.setDate(today.getDate());
  } else {
    const daysUntilNextMonday = (8 - today.getDay()) % 7 || 7;
    nextMeeting.setDate(today.getDate() + daysUntilNextMonday);
  }

  const formattedDate = nextMeeting.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });

  const year = today.getFullYear();
  const month = today.getMonth();
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();
  const startDay = (firstDayOfMonth.getDay() + 6) % 7; 

  const daysArray = Array.from({ length: startDay + daysInMonth }).map((_, i) => {
    const day = i - startDay + 1;
    return day > 0 ? day : null;
  });
  const meetingTime = "18:00 – 20:00";

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-pink-500">
        <div className="flex justify-between items-center w-full mx-auto px-8 py-4">
          
          <div className="flex flex-col items-start">
            <a
              href="https://samanthacabrera.github.io/crochet-club/"
              className="text-4xl md:text-5xl font-extrabold text-white uppercase"
            >
              Knotty & Nice
            </a>
            <span className="text-sm md:text-base text-yellow-200 font-semibold uppercase">
              {t.tagline}
            </span>
          </div>

          <div className="hidden md:flex space-x-8 text-lg md:text-xl font-bold text-white uppercase">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.id}`}
                className="relative px-3 py-1 rounded-lg hover:bg-white hover:text-pink-500 transition-all duration-300 transform hover:-translate-y-1"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => setLang(lang === "en" ? "nl" : "en")}
              className="px-3 py-1 rounded-lg bg-white text-pink-500 font-bold hover:bg-pink-500 hover:text-white transition-all duration-300"
            >
              {lang === "en" ? "NL" : "EN"}
            </button>
          </div>

          <button
            className="md:hidden flex flex-col justify-center items-center space-y-1 w-8 h-8"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`block w-8 h-1 bg-white transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block w-8 h-1 bg-white transition-opacity ${menuOpen ? "opacity-0" : ""}`}></span>
            <span className={`block w-8 h-1 bg-white transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-pink-500 text-white flex flex-col space-y-2 px-6 py-4 uppercase font-bold">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.id}`}
                className="relative px-3 py-1 rounded-lg hover:bg-white hover:text-pink-500 transition-all duration-300 transform hover:-translate-y-1"
                onClick={() => setMenuOpen(false)} 
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => setLang(lang === "en" ? "nl" : "en")}
              className="px-3 py-1 rounded-lg bg-white text-pink-500 font-bold hover:bg-pink-500 hover:text-white transition-all duration-300"
            >
              {lang === "en" ? "NL" : "EN"}
            </button>
          </div>
        )}
      </nav>


    <main className="h-screen w-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      {/* Welcome */}
      <section
        id="welcome"
        className="h-screen w-screen flex flex-col justify-center items-center snap-start bg-pink-100 px-6 md:px-[10vw] text-pink-500"
      >
        <div className="w-full max-w-6xl flex flex-col md:flex-row md:justify-between md:items-start space-y-6 md:space-y-0">
         <div className="w-full md:w-1/2 h-fit flex flex-col justify-center items-center md:items-start relative p-6 md:p-12">
            <h1 className="text-4xl md:text-9xl font-bold uppercase text-pink-500 text-center md:text-left">
              {t.title}
            </h1>

            <h2 className="text-md md:text-2xl uppercase font-bold text-yellow-200 bg-pink-500 rounded-lg p-2 mt-4 text-center md:text-left">
              {t.tagline}
            </h2>
          </div>

          <div className="md:w-1/2 max-w-sm flex flex-col md:items-end items-center self-center space-y-6 md:space-y-8 text-center md:text-right">
            <p className="text-md md:text-xl">
              {t.welcomeLocation}
            </p>
            <p className="text-md md:text-xl">
              {t.welcomeTime}
            </p>
            <p className="text-md md:text-xl">
              {t.welcomeText}
            </p>
            <div className="flex flex-col md:flex-row items-center md:space-x-4 mt-8">
              <span className="text-lg md:text-2xl font-extrabold uppercase">
                {t.cta}
              </span>
              <a
                href="https://www.facebook.com/share/g/1YXW3mV722/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-16 h-16 md:w-16 md:h-16 rounded-full bg-pink-500 text-white text-xl md:text-2xl hover:bg-yellow-200 hover:text-pink-500 transition-all duration-300 mt-4 md:mt-0"
              >
                🡥
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section id="mission" className="h-screen w-screen flex flex-col justify-center items-center snap-start text-pink-500 bg-yellow-100 px-6">
        <h2 className="text-2xl md:text-5xl font-extrabold uppercase mb-12">{t.missionTitle}</h2>
        <div className="space-y-6 max-w-prose text-justify text-md md:text-lg">
          {t.missionText.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>

      {/* Info */}
      <section id="info" className="h-screen w-screen flex flex-col justify-center items-center snap-start text-pink-500 bg-pink-100 px-6">
        <h2 className="text-2xl md:text-5xl font-extrabold uppercase mb-12">{t.infoTitle}</h2>
        <ul className="text-md md:text-lg text-left max-w-prose space-y-6">
          {t.infoList.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Calendar */}
      <section
        id="calendar"
        className="min-h-screen w-full flex flex-col justify-center items-center snap-start bg-yellow-100 text-pink-500 px-6 md:px-20 py-16"
      >
        <h2 className="text-2xl md:text-5xl font-extrabold uppercase mb-12">
          {t.calendarTitle}
        </h2>
        <div className="w-full max-w-6xl grid md:grid-cols-2 gap-x-64">
          {/* Next Meeting Info*/}
          <div className="relative flex flex-col justify-between items-center bg-pink-50 border-4 border-pink-300 rounded-3xl shadow-lg w-[260px] md:w-[300px] h-[380px] md:h-[420px] px-6 py-10 mx-auto transform rotate-[-1deg] hover:rotate-0 transition-transform duration-300">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-12 bg-yellow-200 rotate-2 shadow-md rounded-sm opacity-80 z-10"></div>
            <div className="absolute inset-0 rounded-2xl border-2 border-dashed border-pink-400 pointer-events-none"></div>

            <div className="flex flex-col items-center text-center space-y-4 text-pink-500 mt-4">
              <h3 className="text-2xl font-extrabold uppercase tracking-wide">
                {t.nextMeeting}
              </h3>

              <div className="space-y-3 text-lg md:text-xl leading-relaxed font-medium">
                <p>
                  <span className="font-bold">{t.dateLabel}:</span> {formattedDate}
                </p>
                <p>
                  <span className="font-bold">{t.timeLabel}:</span> {meetingTime}
                </p>
                <p>
                  <span className="font-bold">{t.locationLabel}:</span> {t.calendarLocation}
                </p>
              </div>
            </div>
            <a
              href="https://www.facebook.com/groups/1750537472289096"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-pink-500 text-white text-sm md:text-lg font-extrabold hover:bg-yellow-200 hover:text-pink-600 transition-all duration-300 transform hover:-translate-y-1 shadow-md mt-6"
            >
              RSVP 🡥
            </a>
          </div>

          
          <div className="w-full hidden md:block">
            <h3 className="text-2xl md:text-4xl text-center uppercase m-6">
              {today.toLocaleString(lang === "en" ? "en-US" : "nl-NL", {
                month: "short",
                year: "numeric",
              })}
            </h3>

            <div className="grid grid-cols-7 gap-4 text-center text-md md:text-lg">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                <div key={day} className="uppercase">
                  {day}
                </div>
              ))}
              {daysArray.map((day, i) => {
                const isMeetingDay =
                  day === nextMeeting.getDate() &&
                  month === nextMeeting.getMonth() &&
                  year === nextMeeting.getFullYear();

                return (
                  <div
                    key={i}
                    className={`aspect-square flex items-center justify-center text-xl font-extrabold ${
                      day
                        ? isMeetingDay
                          ? "bg-pink-600 text-white rounded-full"
                          : "text-pink-600"
                        : ""
                    }`}
                  >
                    {day || ""}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="h-screen w-screen flex flex-col justify-center items-center snap-start text-pink-500 bg-pink-100 px-6">
        <h2 className="text-3xl md:text-5xl font-extrabold uppercase mb-12 tracking-wide">{t.projectsTitle}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
          {t.projectsText.map((project, index) => (
            <div
              key={index}
              className="flex flex-col rounded-lg border-4 border-pink-500 bg-white p-8 transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-extrabold uppercase text-pink-500">{project.title}</h3>
                 <span className="px-3 py-1 text-sm font-bold uppercase rounded-lg bg-yellow-200 text-pink-500">
                    {project.status}
                  </span>
              </div>
              <p className="text-md md:text-lg leading-relaxed">{project.description}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Share */}
      <section id="share" className="h-screen w-screen flex flex-col justify-center items-center snap-start text-pink-500 bg-yellow-100 px-6">
        <h2 className="text-2xl md:text-5xl font-extrabold uppercase mb-12">{t.shareTitle}</h2>
        <p className="text-md md:text-lg max-w-prose text-center leading-relaxed mb-8">{t.shareText}</p>
          <div className="flex flex-wrap justify-center gap-4 text-xl">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative px-6 py-2 rounded-lg text-white bg-pink-500 hover:bg-white hover:text-pink-500 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
              >
                <FaFacebookF />
              </a>
              <a
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                  "Check out this crochet club: " + window.location.href
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative px-6 py-2 rounded-lg text-white bg-pink-500 hover:bg-white hover:text-pink-500 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
              >
                <FaWhatsapp />
              </a>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert("Link copied to clipboard!");
                }}
                className="relative px-6 py-2 rounded-lg text-white bg-pink-500 hover:bg-white hover:text-pink-500 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
              >
                <FiLink />
              </button>
            </div>
        </section>
      </main>
    </>
  )
}

export default App
