import React, { createContext, useState } from 'react'

export const recpiecontext = createContext();

const RecpieContext = (props) => {
  const [data, setdata] = useState([]);

  return (
    <recpiecontext.Provider value={{ data, setdata }}>
      {props.children}
    </recpiecontext.Provider>
  );
};

export default RecpieContext;
