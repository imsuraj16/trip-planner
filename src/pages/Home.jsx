import React from 'react'

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative px-6 py-20 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 backdrop-blur-3xl"></div>
        {/* Hero Background Image */}
        <div className="absolute inset-0 ">
          <img 
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2835&q=80" 
            alt="Travel destination" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900/70 to-gray-900"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6 leading-tight">
              Manage Your Trips
              <br />
              <span className="text-white">Like Never Before</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Create detailed itineraries, update your plans on the go, and delete outdated trips. Your complete trip management solution in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-cyan-500/25 border border-cyan-400/30 flex items-center gap-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                </svg>
                Create Your First Trip
              </button>
              <button className="bg-gray-800/50 hover:bg-gray-700/60 text-gray-300 hover:text-white px-8 py-4 rounded-2xl text-lg font-medium transition-all duration-300 border border-gray-600/30 hover:border-gray-500/50 flex items-center gap-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                </svg>
                View All Trips
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Complete Trip Management
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Create, Read, Update, and Delete your trips with powerful management tools
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 - CREATE */}
            <div className="bg-gradient-to-br from-gray-800/50 to-slate-800/50 p-8 rounded-3xl border border-gray-700/30 hover:border-cyan-500/30 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                <img 
                  src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                  alt="Create trip" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/25 relative z-10">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white relative z-10">Create New Trips</h3>
              <p className="text-gray-400 leading-relaxed relative z-10">
                Easily add new trips with destination details, dates, budgets, and activities. Build your travel itinerary from scratch with our intuitive form interface.
              </p>
            </div>

            {/* Feature 2 - UPDATE */}
            <div className="bg-gradient-to-br from-gray-800/50 to-slate-800/50 p-8 rounded-3xl border border-gray-700/30 hover:border-cyan-500/30 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                <img 
                  src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                  alt="Update trip" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/25 relative z-10">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white relative z-10">Update Trip Details</h3>
              <p className="text-gray-400 leading-relaxed relative z-10">
                Modify your existing trips anytime. Change dates, update destinations, adjust budgets, or add new activities as your plans evolve.
              </p>
            </div>

            {/* Feature 3 - DELETE */}
            <div className="bg-gradient-to-br from-gray-800/50 to-slate-800/50 p-8 rounded-3xl border border-gray-700/30 hover:border-cyan-500/30 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                <img 
                  src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                  alt="Organize trips" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="bg-gradient-to-br from-red-500 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-red-500/25 relative z-10">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white relative z-10">Remove Old Trips</h3>
              <p className="text-gray-400 leading-relaxed relative z-10">
                Clean up your trip list by removing completed or cancelled trips. Keep your dashboard organized with only relevant travel plans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-r from-gray-800/30 to-slate-800/30 backdrop-blur-sm relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-8 gap-4 h-full">
            {[...Array(32)].map((_, i) => (
              <div key={i} className="bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full opacity-20"></div>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                1.2K+
              </div>
              <p className="text-gray-400 text-lg">Trips Created</p>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                850+
              </div>
              <p className="text-gray-400 text-lg">Trips Updated</p>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent mb-2">
                300+
              </div>
              <p className="text-gray-400 text-lg">Trips Removed</p>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent mb-2">
                500+
              </div>
              <p className="text-gray-400 text-lg">Active Users</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8 relative">
        {/* Background Image for CTA */}
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80" 
            alt="Beach paradise" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-gray-900"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Start Managing Your Trips Today
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Create your first trip, organize your travel plans, and keep everything updated in one place. Your personal trip management dashboard awaits.
          </p>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-10 py-5 rounded-2xl text-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-cyan-500/25 border border-cyan-400/30">
            Add Your First Trip
          </button>
        </div>
      </section>

      {/* Floating Elements */}
      <div className="fixed top-1/4 left-10 w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full blur-xl animate-pulse"></div>
      <div className="fixed top-1/2 right-10 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="fixed bottom-1/4 left-1/4 w-16 h-16 bg-gradient-to-br from-green-500/20 to-teal-600/20 rounded-full blur-xl animate-pulse delay-500"></div>
    </div>
  )
}

export default Homepage