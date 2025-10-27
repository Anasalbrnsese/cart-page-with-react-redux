import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-block">
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight">
            Your Shopping Cart
            <br />
            <span className="text-white">Experience Reimagined</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto text-pretty">
            Discover a seamless shopping experience with our modern cart system. Built with React, Redux, and styled
            with <span className="text-white font-semibold">Tailwind CSS</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link to={'/products'} className="bg-white text-black px-8 py-3 rounded-full font-semibold transition-colors duration-200 no-underline">
              View Products
            </Link>
            <Link className="border border-gray-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200 no-underline">
              Learn More
            </Link>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24">
          {/* Card 1 */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-700 transition-colors duration-200">
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Lightning Fast</h3>
            <p className="text-gray-400 leading-relaxed">
              Optimized performance with Redux state management for instant updates.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-700 transition-colors duration-200">
            <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Modern Design</h3>
            <p className="text-gray-400 leading-relaxed">Beautiful UI crafted with Tailwind CSS utility classes.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-700 transition-colors duration-200">
            <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Fully Responsive</h3>
            <p className="text-gray-400 leading-relaxed">Works perfectly on all devices from mobile to desktop.</p>
          </div>
        </div>

        {/* Status Indicator */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-3 bg-zinc-900 border border-zinc-800 rounded-full px-6 py-3">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-300">Tailwind CSS On v3 Powered By Anas Faifel</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
