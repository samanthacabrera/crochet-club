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
    { id: "info", label: t.navLinks[1] },
    { id: "calendar", label: t.navLinks[2] },
    { id: "contact", label: t.navLinks[3] },
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
      <section id="welcome" className="h-screen w-screen flex flex-col justify-center items-center snap-start text-pink-500 bg-pink-100 px-6">
        <h2 className="text-2xl md:text-5xl font-extrabold uppercase mb-12">{t.welcomeTitle}</h2>
        <p className="text-md md:text-lg max-w-prose text-center leading-relaxed">{t.welcomeText}</p>
      </section>

      {/* Info */}
      <section id="info" className="h-screen w-screen flex flex-col justify-center items-center snap-start text-pink-500 bg-yellow-100 px-6">
        <h2 className="text-2xl md:text-5xl font-extrabold uppercase mb-12">{t.infoTitle}</h2>
        <ul className="text-md md:text-lg text-left max-w-prose space-y-6">
          {t.infoList.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Calendar */}
      <section id="calendar" className="h-screen w-screen flex flex-col justify-center items-center snap-start text-pink-500 bg-pink-100 px-6">
        <h2 className="text-2xl md:text-5xl font-extrabold uppercase mb-12">{t.calendarTitle}</h2>
        <p className="text-md md:text-lg mb-4">{t.calendarText}</p>
        <div className="flex flex-col space-y-4 border-dashed border-4 border-pink-200 bg-pink-50 rounded-2xl mt-8 p-6">
          <h3 className="text-3xl uppercase font-bold text-pink-500">{t.nextMeeting}</h3>
          <div className="font-bold">
            <p>{t.dateLabel}: {formattedDate}</p>
            <p>{t.timeLabel}: {meetingTime}</p>
            <p>{t.locationLabel}: {meetingLocation}</p>
          </div>
          <a
            href="https://www.meetup.com/knotty&nice/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 w-fit text-sm font-bold rounded-lg bg-white text-pink-500 hover:text-white hover:bg-pink-500 transition-all duration-300 transform"
          >
            {t.meetupLink}
          </a>
        </div>
      </section>
      
      {/* Contact */}
      <section
        id="contact" className="h-screen w-screen flex flex-col justify-center items-center snap-start text-pink-500 bg-yellow-100 px-6"
      >
        <h2 className="text-2xl md:text-5xl font-extrabold uppercase mb-12">{t.contactTitle}</h2>
        <p className="text-md md:text-lg mb-4 text-center max-w-prose">{t.contactText}</p>
        <a href="mailto:contact@gmail.com" className="hover:underline">
          contact@gmail.com
        </a>
      </section>
      
      {/* Share */}
      <section id="share" className="h-screen w-screen flex flex-col justify-center items-center snap-start text-pink-500 bg-pink-100 px-6">
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
