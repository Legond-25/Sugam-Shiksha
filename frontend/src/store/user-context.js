import React, { useState } from 'react';

const UserContext = React.createContext({
  universityName: '',
  universityNameHandler: () => {},
});

export const UserContextProvider = (props) => {
  const [universityName, setUniversityName] = useState('');

  const universityNameHandler = (universityName) => {
    setUniversityName(universityName);
  };

  const contextValue = {
    universityName: universityName,
    universityNameHandler: universityNameHandler,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
