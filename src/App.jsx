import React from "react";
import Navbar from "./components/Navbar";
import Mainroutes from "./routes/Mainroutes";
const App = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-slate-900 to-black w-full min-h-screen text-white">
      <Navbar />
      <Mainroutes />
    </div>
  );
};

export default App;
