import { useState } from "react";

function App() {
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

  const links = ["Welcome", "About", "Calendar", "Contact"];

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

      <main className="flex flex-col space-y-24 my-24 mx-0 md:mx-[30vw]">
        {/* Welcome */}
        <section id="welcome">
          <h2>Welcome!</h2>
          <p>Knotty & Nice: A Social Crafting Club is a modern makers’ collective for anyone who loves to create. Whether you’re into crocheting, knitting, embroidery, or any other craft, this is your place to create and connect with others who share your passion.</p>
        </section>
      
        {/* About */}
        <section id="about">
          <h2>About</h2>
          <ul>
            <li>Who is welcomed? <span>All skill levels are welcomed.</span></li>
            <li>What do I need to bring? <span>Bring your own supplies and current project.</span></li>
            <li>Do I need to buy anything? <span>We ask that you please support our host venue with a drink or food purchase.</span></li>
          </ul>
        </section>
      
        {/* Calendar */}
        <section id="calendar">
          <h2>Calendar</h2>
          <p>
            We meet <strong>every Monday</strong> from <strong>18:00 - 20:00</strong>!
          </p>

          <div className="">
            <h3>Next Meeting</h3>
            <p>{formattedDate}</p>
            <p>{meetingTime}</p>
            <p>{meetingLocation}</p>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-pink-500 rounded px-2 py-1"
            >
              Get Directions
            </a>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
