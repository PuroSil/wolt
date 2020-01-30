import React, { useState, useMemo, createContext } from 'react';

// For an application of this scale, the useContext API works well
// for state management and is lightweight, no Redux is needed for this
export const NearbyContext = createContext();

const NearbyContextProvider = props => {
  const [close, setClose] = useState(false);
  const nearbyProvider = useMemo(() => ({ close, setClose }), [close, setClose]);
  
  return (
    <NearbyContext.Provider value={nearbyProvider}>
      {props.children}
    </NearbyContext.Provider>
  );
};

export default NearbyContextProvider;