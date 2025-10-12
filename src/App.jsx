import { useState } from "react";
import { translations } from "./translations";
import { FaFacebookF, FaPinterest, FaInstagram } from "react-icons/fa";
import { FiLink } from "react-icons/fi";

function App() {
  const links = ["Welcome", "About", "Calendar", "Contact"];

  // Translator 
  const [lang, setLang] = useState("en"); 
  const t = translations[lang];

  // Calendar 
  const [menuOpen, setMenuOpen] = useState(false);
  const today = new Date();
  const nextMonday = new Date(today);
  nextMonday.setDate(today.getDate() + ((1 + 7 - today.getDay()) % 7 || 7));
  const formattedDate = nextMonday.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
  const meetingTime = "18:00 – 20:00";
  const meetingLocation = "Domplein 9, 3512 JE Utrecht";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(meetingLocation)}`;

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
            {t.navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="relative px-3 py-1 rounded-lg hover:bg-white hover:text-pink-500 transition-all duration-300 transform hover:-translate-y-1"
              >
                {link}
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
            {t.navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="py-2 hover:bg-pink-500 rounded transition-colors duration-300"
                onClick={() => setMenuOpen(false)} 
              >
                {link}
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
        className="h-screen w-screen flex flex-col justify-center items-center snap-start bg-pink-100 px-6"
      >
        <h2 className="text-5xl md:text-6xl font-bold text-pink-500 uppercase mb-6">{t.welcomeTitle}</h2>
        <p className="text-lg md:text-2xl text-pink-500 max-w-prose text-center leading-relaxed">{t.welcomeText}</p>
      </section>

      {/* About */}
      <section
        id="about"
        className="h-screen w-screen flex flex-col justify-center items-center snap-start text-pink-500 bg-yellow-100 px-6"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold  mb-6">{t.aboutTitle}</h2>
        <ul className="text-lg md:text-xl max-w-prose leading-relaxed space-y-2">
          {t.aboutList.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Calendar */}
      <section
        id="calendar"
        className="h-screen w-screen flex flex-col justify-center items-center snap-start bg-pink-100 px-6"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold text-pink-500 mb-6">{t.calendarTitle}</h2>
        <p className="text-lg md:text-xl text-pink-500 mb-4">{t.calendarText}</p>
        <div className="flex flex-col space-y-4 border-dashed border-4 border-pink-200 bg-pink-50 rounded-2xl mt-8 p-6">
          <h3 className="text-3xl uppercase font-bold text-pink-500">{t.nextMeeting}</h3>
          <div className="font-bold">
            <p>{t.dateLabel}: {formattedDate}</p>
            <p>{t.timeLabel}: {meetingTime}</p>
            <p>{t.locationLabel}: {meetingLocation}</p>
          </div>
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 w-fit text-sm font-bold rounded-lg bg-white text-pink-500 hover:text-white hover:bg-pink-500 transition-all duration-300 transform"
          >
            {t.directions}
          </a>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="h-screen w-screen flex flex-col justify-center items-center snap-start text-pink-500 bg-yellow-100 px-6"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6">{t.contactTitle}</h2>
        <p className="text-lg md:text-xl mb-4 text-center max-w-prose">{t.contactText}</p>
        <a href="mailto:contact@gmail.com" className="hover:underline">
          contact@gmail.com
        </a>
      </section>
      
      {/* Share */}
      <section id="share" className="h-screen w-screen flex flex-col justify-center items-center snap-start text-pink-500 bg-pink-100 px-6">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6">{t.shareTitle}</h2>
          <p className="text-lg md:text-2xl max-w-prose text-center leading-relaxed mb-8">{t.shareText}</p>
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
