import React, { createContext, useContext, useState } from 'react';

const TemplatesContext = createContext();

export const TemplatesProvider = ({ children }) => {
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const refreshTemplates = () => {
    setRefreshTrigger(prev => prev + 1);
  };

  return (
    <TemplatesContext.Provider value={{ refreshTrigger, refreshTemplates }}>
      {children}
    </TemplatesContext.Provider>
  );
};

export const useTemplates = () => {
  const context = useContext(TemplatesContext);
  if (!context) {
    throw new Error('useTemplates must be used within a TemplatesProvider');
  }
  return context;
};
