import React from "react";

export const Wisdom: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => (
  <details>
    <summary>
      Explain thy wisdom (click to
      expand)
    </summary>
    <div className="wisdom-content">
      {children}
    </div>
  </details>
);
