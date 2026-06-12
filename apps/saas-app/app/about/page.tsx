export default function About() {
  return (
    <main className="flex flex-col items-center min-h-screen px-4 py-24 text-center">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold mb-8 text-[#00f2ff]">About StudiOS</h1>
        <div className="space-y-6 text-gray-300 text-lg leading-relaxed text-left">
          <p>
            StudiOS was born out of a simple frustration: creative professionals shouldn't have to string together ten different apps just to run their business.
          </p>
          <p>
            We built this platform from the ground up to be the ultimate, all-in-one operating system for modern studios. Whether you are a photography studio, a recording space, or a creative agency, StudiOS gives you the tools to manage your clients, bookings, and operations beautifully.
          </p>
          <p>
            Our mission is to unshackle creators from administrative overhead so they can focus on what they do best: creating.
          </p>
        </div>
      </div>
    </main>
  );
}
