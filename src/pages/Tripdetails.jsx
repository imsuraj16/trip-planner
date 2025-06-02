import React from "react";
import {
  MapPin,
  Calendar,
  Users,
  DollarSign,
  Camera,
  Star,
  ArrowLeft,
  Edit,
  Share2,
  Heart,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { Tripcontext } from "../context/TripContext";

const Tripdetails = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const { trips, setTrips } = useContext(Tripcontext);

  const trip = trips.find((f) => f.id === id);
  console.log(trip);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black p-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header with Navigation */}
        <div className="flex items-center justify-between mb-8 pt-6">
          <button className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 group">
            <div
              onClick={() => navigate(-1)}
              className="p-2 bg-white/5 rounded-xl group-hover:bg-white/10 transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
            </div>
            <span on className="text-lg font-medium">
              Back to Trips
            </span>
          </button>

          <div className="flex items-center gap-3">
            <button className="p-3 bg-white/5 border border-white/20 rounded-xl hover:bg-white/10 transition-all duration-300 text-gray-300 hover:text-white">
              <Heart className="w-5 h-5" />
            </button>
            <button className="p-3 bg-white/5 border border-white/20 rounded-xl hover:bg-white/10 transition-all duration-300 text-gray-300 hover:text-white">
              <Share2 className="w-5 h-5" />
            </button>
            <button className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 text-white">
              <Edit className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Hero Section with Image */}
        <div className="relative mb-12">
          <div className="relative h-80 md:h-96 rounded-3xl overflow-hidden bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1502602898536-47ad22581b52?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt="Trip destination"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

            {/* Trip Title Overlay */}
            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-lg shadow-blue-500/25">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                  <span className="text-white font-medium">Featured Trip</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                Amazing European Adventure
              </h1>
              <p className="text-xl text-gray-200">
                A romantic getaway exploring the beautiful streets of Paris
              </p>
            </div>
          </div>
        </div>

        {/* Trip Details Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Main Details Card */}
          <div className="lg:col-span-2">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl shadow-black/20">
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <MapPin className="w-6 h-6 text-red-400" />
                Trip Overview
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                    <div className="p-3 bg-red-500/20 rounded-xl">
                      <MapPin className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Destination</p>
                      <p className="text-white font-semibold text-lg">
                        {trip.destination}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                    <div className="p-3 bg-green-500/20 rounded-xl">
                      <Calendar className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Duration</p>
                      <p className="text-white font-semibold text-lg">
                        {trip.duration}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                    <div className="p-3 bg-cyan-500/20 rounded-xl">
                      <Users className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Travelers</p>
                      <p className="text-white font-semibold text-lg">
                        {trip.travelers}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                    <div className="p-3 bg-yellow-500/20 rounded-xl">
                      <DollarSign className="w-5 h-5 text-yellow-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Budget</p>
                      <p className="text-yellow-400 font-semibold text-lg">
                      {trip.budget}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-3">
                  <span className="text-orange-400">✍️</span>
                  Description
                </h3>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <p className="text-gray-300 leading-relaxed text-lg">
                   {trip.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Dates & Quick Info Sidebar */}
          <div className="space-y-6">
            {/* Dates Card */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl shadow-black/20">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <Calendar className="w-5 h-5 text-blue-400" />
                Travel Dates
              </h3>

              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-white/10">
                  <p className="text-gray-400 text-sm mb-1">Departure</p>
                  <p className="text-white font-semibold">
                   {trip.startDate}
                  </p>
                </div>

                <div className="p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl border border-white/10">
                  <p className="text-gray-400 text-sm mb-1">Return</p>
                  <p className="text-white font-semibold">
                    Monday, July 22, 2024
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl shadow-black/20">
              <h3 className="text-xl font-bold text-white mb-6">
                Quick Actions
              </h3>

              <div className="space-y-3">
                <button className="w-full p-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-[1.02]">
                  View Itinerary
                </button>

                <button className="w-full p-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-2xl transition-all duration-300 border border-white/20">
                  Download PDF
                </button>

                <button className="w-full p-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-2xl transition-all duration-300 border border-white/20">
                  Share Trip
                </button>
              </div>
            </div>

            {/* Trip Stats */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl shadow-black/20">
              <h3 className="text-xl font-bold text-white mb-6">Trip Stats</h3>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Days Until Trip</span>
                  <span className="text-white font-semibold">45</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Planning Progress</span>
                  <span className="text-green-400 font-semibold">75%</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Bookings Made</span>
                  <span className="text-blue-400 font-semibold">3/5</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-400">
          <p>Your adventure awaits! ✈️</p>
        </div>
      </div>
    </div>
  );
};

export default Tripdetails;
