function App() {

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
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    meetingLocation
  )}`;

  return (
    <>
      <header className="sticky top-0 z-50 flex flex-col md:flex-row justify-center items-center md:space-x-12 w-full h-full border-b">
        <a href="#welcome">Welcome</a>
        <a href="#faqs">FAQs</a>
        <a href="/">Knotty & Nice</a>
        <a href="calendar">Calendar</a>
        <a href="contact">Contact</a>
      </header>

      <main className="flex flex-col space-y-24 my-24 mx-0 md:mx-[30vw]">
        {/* Welcome */}
        <section id="welcome">
          <h2>Welcome!</h2>
          <p>Knotty & Nice: A Social Crafting Club is a modern makers’ collective for anyone who loves to create. Whether you’re into crocheting, knitting, embroidery, or any other craft, this is your place to create and connect with others who share your passion.</p>
        </section>
      
        {/* About */}
        <section id="faqs">
          <h2>FAQs</h2>
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
              className="text-white bg-pink-400 rounded px-2 py-1"
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
