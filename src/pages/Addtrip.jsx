import React, { useContext } from "react";
import { MapPin, Calendar, Users, Plane, Camera, Star } from "lucide-react";
import { useForm } from "react-hook-form";
import { Tripcontext } from "../context/TripContext";
import {nanoid} from "nanoid"

const AddTrip = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { trips, setTrips } = useContext(Tripcontext);

  const submitHandler = (trip) => {
    data.id = nanoid()
    setTrips((prev) => [...prev, trip]);
    reset();
  };

  

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black p-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 pt-8">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-lg shadow-blue-500/25">
              <Plane className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Plan Your Adventure
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Create unforgettable memories with our smart trip planner. Every
            journey begins with a single step.
          </p>
        </div>

        {/* Main Form Card */}
        <form
          onSubmit={handleSubmit(submitHandler)}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl shadow-black/20"
        >
          <div className="space-y-8">
            {/* Trip Title */}
            <div className="space-y-3">
              <label className="flex items-center gap-3 text-lg font-semibold text-gray-200">
                <Star className="w-5 h-5 text-yellow-400" />
                Trip Title
              </label>
              <div className="relative group">
                <input
                  type="text"
                  placeholder="My Amazing Adventure"
                  className="w-full p-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all duration-300 group-hover:border-white/30"
                  {...register("title")}
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>

            {/* Destination and Duration Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="flex items-center gap-3 text-lg font-semibold text-gray-200">
                  <MapPin className="w-5 h-5 text-red-400" />
                  Destination
                </label>
                <div className="relative group">
                  <input
                    type="text"
                    placeholder="Paris, France"
                    className="w-full p-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all duration-300 group-hover:border-white/30"
                    {...register("destination")}
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="flex items-center gap-3 text-lg font-semibold text-gray-200">
                  <Calendar className="w-5 h-5 text-green-400" />
                  Duration (Days)
                </label>
                <div className="relative group">
                  <input
                    type="number"
                    placeholder="7"
                    min="1"
                    className="w-full p-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all duration-300 group-hover:border-white/30"
                    {...register("duration")}
                  />
                </div>
              </div>
            </div>

            {/* Date Range Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="flex items-center gap-3 text-lg font-semibold text-gray-200">
                  <Calendar className="w-5 h-5 text-blue-400" />
                  Start Date
                </label>
                <div className="relative group">
                  <input
                    type="date"
                    className="w-full p-4 bg-white/5 border border-white/20 rounded-2xl text-white focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all duration-300 group-hover:border-white/30"
                    {...register("startDate")}
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="flex items-center gap-3 text-lg font-semibold text-gray-200">
                  <Calendar className="w-5 h-5 text-purple-400" />
                  End Date
                </label>
                <div className="relative group">
                  <input
                    type="date"
                    className="w-full p-4 bg-white/5 border border-white/20 rounded-2xl text-white focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all duration-300 group-hover:border-white/30"
                    {...register("endDate")}
                  />
                </div>
              </div>
            </div>

            {/* Budget and Travelers Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="flex items-center gap-3 text-lg font-semibold text-gray-200">
                  <span className="text-green-400">$</span>
                  Budget
                </label>
                <div className="relative group">
                  <select
                    className="w-full p-4 bg-white/5 border border-white/20 rounded-2xl text-white focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all duration-300 group-hover:border-white/30 appearance-none cursor-pointer"
                    {...register("budget")}
                  >
                    <option value="" className="bg-gray-800">
                      Select budget range
                    </option>
                    <option value="budget" className="bg-gray-800">
                      Budget ($500 - $1,500)
                    </option>
                    <option value="moderate" className="bg-gray-800">
                      Moderate ($1,500 - $3,000)
                    </option>
                    <option value="luxury" className="bg-gray-800">
                      Luxury ($3,000+)
                    </option>
                  </select>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <label className="flex items-center gap-3 text-lg font-semibold text-gray-200">
                  <Users className="w-5 h-5 text-cyan-400" />
                  Number of Travelers
                </label>
                <div className="relative group">
                  <input
                    type="number"
                    placeholder="2"
                    min="1"
                    className="w-full p-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all duration-300 group-hover:border-white/30"
                    {...register("travelers")}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <label className="flex items-center gap-3 text-lg font-semibold text-gray-200">
                <Camera className="w-5 h-5 text-indigo-400" />
                Trip Image URL
              </label>
              <div className="relative group">
                <input
                  type="url"
                  placeholder="https://example.com/your-trip-image.jpg"
                  className="w-full p-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all duration-300 group-hover:border-white/30"
                  {...register("imageUrl")}
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
              <p className="text-sm text-gray-400 ml-3">
                Add a URL to an image that represents your trip destination or
                theme
              </p>
            </div>

            {/* Description */}
            <div className="space-y-3">
              <label className="flex items-center gap-3 text-lg font-semibold text-gray-200">
                <span className="text-orange-400">✍️</span>
                Trip Description
              </label>
              <div className="relative group">
                <textarea
                  rows={4}
                  placeholder="Tell us about your dream trip... What experiences are you looking for?"
                  className="w-full p-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all duration-300 group-hover:border-white/30 resize-none"
                  {...register("description")}
                ></textarea>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transform hover:scale-[1.02]"
              >
                Create Trip Plan
              </button>
            </div>
          </div>
        </form>

        {/* Footer */}
        <div className="text-center mt-12 text-gray-400">
          <p>Start planning your next adventure today! ✈️</p>
        </div>
      </div>
    </div>
  );
};

export default AddTrip;
