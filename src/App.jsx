import { useState } from "react";

function App() {
  const links = ["Welcome", "About", "Calendar", "Contact"];

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
              A Social Crafting Club
            </span>
          </div>

          <div className="hidden md:flex space-x-8 text-lg md:text-xl font-bold text-white uppercase">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="relative px-3 py-1 rounded-lg hover:bg-white hover:text-pink-500 transition-all duration-300 transform hover:-translate-y-1"
              >
                {link}
              </a>
            ))}
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
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="py-2 hover:bg-pink-500 rounded transition-colors duration-300"
                onClick={() => setMenuOpen(false)} 
              >
                {link}
              </a>
            ))}
          </div>
        )}
      </nav>

      <main className="h-screen w-screen overflow-y-scroll scroll-snap-y scroll-snap-mandatory">
      {/* Welcome */}
      <section
        id="welcome"
        className="h-screen w-screen flex flex-col justify-center items-center scroll-snap-start bg-pink-50 px-6"
      >
        <h2 className="text-5xl md:text-6xl font-bold text-pink-500 uppercase mb-6">Welcome!</h2>
        <p className="text-lg md:text-2xl text-pink-500 max-w-prose text-center leading-relaxed">
          Knotty & Nice: A Social Crafting Club is a modern makers’ collective for anyone who loves to create. Whether you’re into crocheting, knitting, embroidery, or any other craft, this is your place to create and connect with others who share your passion.
        </p>
      </section>

      {/* About */}
      <section
        id="about"
        className="h-screen w-screen flex flex-col justify-center items-center scroll-snap-start text-pink-500 bg-yellow-50 px-6"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold  mb-6">About</h2>
        <ul className="text-lg md:text-xl max-w-prose leading-relaxed space-y-2">
          <li>Who is welcomed? <span className="font-semibold">All skill levels are welcomed.</span></li>
          <li>What do I need to bring? <span className="font-semibold">Bring your own supplies and current project.</span></li>
          <li>Do I need to buy anything? <span className="font-semibold">Please support our host venue with a drink or food purchase.</span></li>
        </ul>
      </section>

      {/* Calendar */}
      <section
        id="calendar"
        className="h-screen w-screen flex flex-col justify-center items-center scroll-snap-start bg-pink-100 px-6"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold text-pink-500 mb-6">Calendar</h2>
        <p className="text-lg md:text-xl text-pink-500 mb-4">
          We meet <strong>every Monday</strong> from <strong>18:00 - 20:00</strong>!
        </p>
        <div className="flex flex-col space-y-4 border-dashed border-4 border-pink-200 bg-pink-50 rounded-2xl mt-8 p-6">
          <h3 className="text-3xl uppercase font-bold text-pink-500">Next Meeting</h3>
          <div className="font-bold">
            <p>Date: {formattedDate}</p>
            <p>Time: {meetingTime}</p>
            <p>Location: {meetingLocation}</p>
          </div>
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 w-fit text-sm font-bold rounded-lg bg-white text-pink-500 hover:text-white hover:bg-pink-500 transition-all duration-300 transform"
          >
            Get Directions
          </a>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="h-screen w-screen flex flex-col justify-center items-center scroll-snap-start text-pink-500 bg-yellow-50 px-6"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6">Contact</h2>
        <p className="text-lg md:text-xl mb-4 text-center">
          If you have any questions or are interested in hosting an event at your venue, we’d love to hear from you!
        </p>
        <a href="mailto:contact@gmail.com" className="hover:underline">
          contact@gmail.com
        </a>
      </section>
    </main>
    </>
  )
}

export default App
