import React, { useContext } from "react";
import { Tripcontext } from "../context/TripContext";

import Tripcard from "../components/Tripcard";

const Trips = () => {
  const { trips, setTrips } = useContext(Tripcontext);
  console.log(trips);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black p-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 pt-8">
          <div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              My Trips
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              Explore your travel memories and upcoming adventures
            </p>
          </div>
          <div className="flex items-center gap-4 mt-6 md:mt-0">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-3">
              <span className="text-gray-300 text-sm">Total Trips: </span>
              <span className="text-white font-bold text-lg">
                {trips?.length || 0}
              </span>
            </div>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-2xl transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transform hover:scale-[1.02]">
              + New Trip
            </button>
          </div>
        </div>
        <div className="flex gap-[3rem] flex-wrap">
          {trips.map((trip) => (
            <Tripcard trip={trip} />
          ))}
        </div>

        {/* Footer Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">12</div>
            <div className="text-gray-300">Countries Visited</div>
          </div>
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">47</div>
            <div className="text-gray-300">Days Traveled</div>
          </div>
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">2.4k</div>
            <div className="text-gray-300">Photos Captured</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trips;
