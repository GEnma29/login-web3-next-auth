import React, { useState, useEffect } from "react";

// eslint-disable-next-line react/function-component-definition
const ClientOnly: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  return <div>{children}</div>;
};

export default ClientOnly;
