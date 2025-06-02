import React, { useState } from "react";
import { createContext } from "react";

export const Tripcontext = createContext(null);

const TripContext = (props) => {
  const [trips, setTrips] = useState([
    {
      title: "European Escapade",
      destination: "Rome, Italy",
      duration: 10,
      id : "fbjsbfksafnksafnafs",
      startDate: "2025-07-15",
      endDate: "2025-07-25",
      budget: "moderate",
      travelers: 2,
      img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "A romantic getaway exploring the rich culture, historic sites, and delicious Italian cuisine in the heart of Rome.",
    },
  ]);

  return (
    <Tripcontext.Provider value={{ trips, setTrips }}>
      {props.children}
    </Tripcontext.Provider>
  );
};

export default TripContext;
