function Hero() {
    return (
        <section className="h-screen flex flex-col justify-center items-center text-white">
        <h1 className="text-6xl font-extrabold tracking-tight mb-4">
          The Scrollable Hero
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          This section fills the viewport. Scroll down to see the content.
        </p>
        <button className="px-6 py-3 text-lg font-semibold bg-emerald-600 rounded-lg hover:bg-emerald-700 transition duration-300">
          Get Started
        </button>
    </section>
    )
}
export default Hero;