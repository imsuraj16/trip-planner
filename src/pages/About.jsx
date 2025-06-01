import React from 'react';
import { MapPin, Calendar, Users, Zap, Globe, Heart, Star, ArrowRight } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Smart Destinations",
      description: "Discover hidden gems and popular spots with our intelligent recommendation engine.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Effortless Planning",
      description: "Create, edit, and organize your trips with our intuitive planning interface.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaborative Travel",
      description: "Plan together with friends and family in real-time collaboration.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Optimized performance ensures your planning experience is seamless.",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const stats = [
    { number: "50K+", label: "Happy Travelers" },
    { number: "150K+", label: "Trips Planned" },
    { number: "200+", label: "Destinations" },
    { number: "4.9", label: "User Rating" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-lg rounded-full px-6 py-2 mb-8 border border-white/20">
              <Globe className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-medium">Your Journey Starts Here</span>
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                TripCraft
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              The ultimate trip planning companion that transforms your travel dreams into perfectly organized adventures
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transform hover:-translate-y-1">
                Start Planning
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10">
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Why Choose <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">TripCraft?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We've built the most comprehensive trip planning platform with features that make travel planning a joy, not a chore.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-white/10 hover:transform hover:scale-105">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} mb-6 group-hover:shadow-lg transition-all duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6">
                <Heart className="w-5 h-5 text-red-400" />
                <span className="text-sm font-medium">Our Mission</span>
              </div>
              <h3 className="text-4xl font-bold mb-6">
                Making Travel Planning <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Effortless</span>
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                We believe that planning your next adventure should be as exciting as the trip itself. That's why we've created TripCraft - a platform that combines intelligent automation with intuitive design to make trip planning seamless and enjoyable.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Whether you're planning a weekend getaway or a month-long expedition, TripCraft adapts to your needs and helps you create memories that last a lifetime.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-3xl blur-xl"></div>
              <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <div className="flex items-center gap-4 mb-4">
                  <Star className="w-6 h-6 text-yellow-400" />
                  <span className="font-semibold">What Our Users Say</span>
                </div>
                <blockquote className="text-lg italic text-gray-300 mb-4">
                  "TripCraft transformed how I plan my travels. What used to take hours now takes minutes, and I discover amazing places I never would have found otherwise."
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center font-bold">
                    S
                  </div>
                  <div>
                    <div className="font-semibold">Sarah Johnson</div>
                    <div className="text-sm text-gray-400">Travel Enthusiast</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center">
          <h3 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Plan Your Next <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Adventure?</span>
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of travelers who trust TripCraft to make their journeys unforgettable.
          </p>
          <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 px-12 py-4 rounded-xl font-bold text-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transform hover:-translate-y-1">
            Get Started Free
            <ArrowRight className="inline-block ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;