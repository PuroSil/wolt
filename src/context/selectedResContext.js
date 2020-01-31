import React, { useState, useMemo, createContext } from 'react';

// For an application of this scale, the useContext API works well
// for state management and is lightweight, no Redux is needed for this
export const SelectedResContext = createContext();

const SelectedResContextProvider = props => {
  const [selectedRes, setSelectedRes] = useState([]);
  const selectedResProvider = useMemo(() => ({
    selectedRes, setSelectedRes }),
    [selectedRes, setSelectedRes]
  );
  
  return (
    <SelectedResContext.Provider value={selectedResProvider}>
      {props.children}
    </SelectedResContext.Provider>
  );
};

export default SelectedResContextProvider;
