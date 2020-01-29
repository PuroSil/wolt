import React, { useState, useMemo, createContext } from 'react';

// For an application of this scale, the useContext API works well
// for state management and is lightweight, no Redux is needed for this
export const NearbyContext = createContext();

const NearbyContextProvider = ({ content }) => {
  const [close, setClose] = useState();
  const nearbyProvider = useMemo(() => ({ close, setClose }), [close, setClose]);
  
  return (
    <NearbyContext.Provider value={nearbyProvider}>
      {content}
    </NearbyContext.Provider>
  );
};

export default NearbyContextProvider;