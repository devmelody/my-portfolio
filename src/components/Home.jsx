function Home() {
  return (
    <section className="min-h-screen flex items-start pt-5">
      <div className="grid grid-cols-1 md:grid-cols-2  gap-10 items-center w-full">
        <div>
          <h1 className="text-4xl md:text-6xl font-semibold">
            Hello, I'm <br></br>
            <span className="text-purple-400">Melody</span>
          </h1>
          <p className="mt-5">Frontend developer by day, bug detective by night.</p>

          <div className="flex items-center gap-5 mt-5">
            <a
              href="/cv.pdf"
              download
              className="inline-flex hover:bg-purple-400 border-purple-400 transition duration-300 p-1.5 px-5 border rounded-full"
            >
              <div className="flex gap-2 items-center">
                Download CV
                <i className="fas fa-download w-5"></i>
              </div>
            </a>

            <div className="flex gap-2">
              <a
                href="https://github.com/devmelody"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center border border-purple-400 text-white rounded-full hover:bg-purple-400 transition duration-300"
              >
                <i className="fab fa-github"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/melcamelcase/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center border border-purple-400 text-white rounded-full hover:bg-purple-400 transition duration-300"
              >
                <i class="fa-brands fa-linkedin-in"></i>
              </a>

              <a
                href="mailto:meluel01@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center border border-purple-400 text-white rounded-full hover:bg-purple-400 transition duration-300"
              >
                <i class="fa-solid fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Profile image */}
        <div  className="flex justify-center">
          <img src="profile.png" className="rounded-full sm:w-64 md:w-96" />
        </div>
      </div>
    </section>
  );
}
export default Home;
