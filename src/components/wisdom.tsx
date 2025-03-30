import React from "react";

export const Wisdom: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => (
  <details>
    <summary>
      Explain thy wisdom
    </summary>
    {children}
  </details>
);
