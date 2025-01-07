import React, { createContext, useContext, useState } from "react";
const LessonsContext = createContext();

export const LessonsProvider = ({ children }) => {
  const [lessons, setLessons] = useState([]);

  return (
    <LessonsContext.Provider value={{ lessons, setLessons }}>
      {children}
    </LessonsContext.Provider>
  );
};

export const useLessons = () => useContext(LessonsContext);
