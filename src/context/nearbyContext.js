import { createContext } from 'react';

// For an application of this scale, the useContext API works well
// for state management and is lightweight, no Redux is needed for this
export const NearbyContext = createContext(null);