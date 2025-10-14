import { useState } from "react";
import { translations } from "./translations";
import { FaFacebookF, FaPinterest, FaInstagram } from "react-icons/fa";
import { FiLink } from "react-icons/fi";

function App() {
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
  const [menuOpen, setMenuOpen] = useState(false);
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
  const meetingTime = "18:00 – 20:00";
  const meetingLocation = "Domplein 9, 3512 JE Utrecht";

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-pink-500">
        <div className="flex justify-between items-center w-full mx-auto px-8 py-4">
          
          <div className="flex flex-col items-start">
            <a
              href="/"
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

          <div className="md:w-1/2 flex flex-col md:items-end items-center self-center space-y-6 md:space-y-8 text-center md:text-right w-full">
            <p className="text-md md:text-lg">
              {t.welcomeLocation}
            </p>
            <p className="text-md md:text-lg">
              {t.welcomeTime}
            </p>
            <p className="text-md md:text-lg leading-relaxed max-w-md">
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
        <div className="space-y-6 max-w-prose text-center text-md md:text-lg">
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
      <section id="calendar" className="h-screen w-screen flex flex-col justify-center items-center space-y-6 snap-start text-pink-500 bg-yellow-100 px-6">
        <h2 className="text-2xl md:text-5xl font-extrabold uppercase mb-6">{t.calendarTitle}</h2>
        <p className="text-md md:text-lg">{t.calendarText}</p>
        <div className="flex flex-col space-y-4 border-dashed border-4 border-pink-300 bg-pink-100 rounded-2xl p-12 font-semibold">
          <h3 className="text-2xl uppercase text-pink-500">{t.nextMeeting}</h3>
          <div className="space-y-4 pb-4">
            <p>{t.dateLabel}: {formattedDate}</p>
            <p>{t.timeLabel}: {meetingTime}</p>
            <p>{t.locationLabel}: {meetingLocation}</p>
          </div>
          <a
            href="https://www.facebook.com/share/g/14UD75KFtKG/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 w-fit text-xl font-bold rounded-lg border border-pink-500 bg-pink-500 text-white hover:text-pink-500 hover:bg-white transition-all duration-300 transform"
          >
            {t.fbLink}
          </a>
        </div>
        <p className="text-md md:text-lg">{t.calendarReminder}</p>
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
          {[
            { icon: <FaInstagram />, href: "" },
            { icon: <FaFacebookF />, href: "" },
            { icon: <FaPinterest />, href: "" },
          ].map((btn, i) => (
            <a
              key={i}
              href={btn.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-6 py-2 rounded-lg text-white bg-pink-500 hover:bg-white hover:text-pink-500 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
            >
              {btn.icon}
            </a>
          ))}

          <button
              onClick={() => { navigator.clipboard.writeText(window.location.href); alert("Link copied to clipboard!"); }}
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
