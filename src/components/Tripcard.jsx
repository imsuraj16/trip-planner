import React from "react";
import { MapPin, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Tripcard = ({trip}) => {
  



  return (
    <div className="px-[2rem] py-2">

      {/* Small Trip Card */}
      <div className="relative z-10 w-80">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-black/30 transition-all duration-300 hover:scale-[1.02]">
          {/* Card Image */}
          <div className="relative h-48 overflow-hidden">
            <img
              src={trip.img}
              alt={trip.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>

          {/* Card Content */}
          <div className="p-5 space-y-4">
            {/* Title */}
            <h3 className="text-xl font-bold text-white">{trip.title}</h3>
            
            {/* Trip Info */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-4 h-4 text-red-400" />
                <span className="text-sm">{trip.destination}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-300">
                  <Calendar className="w-4 h-4 text-green-400" />
                  <span className="text-sm">{trip.duration} days</span>
                </div>
                
                <div className="flex items-center gap-2 text-gray-300">
                  <Users className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm">{trip.travelers} people</span>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <Link to={`/trips/tripdetails/${trip.id}`} className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-2.5 px-4 rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/25">
              View Trip
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tripcard;