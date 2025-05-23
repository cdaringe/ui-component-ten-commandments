import React from "react";

export const Wisdom: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => (
  <details className="wisdom-content">
    <summary>
      Explain thy wisdom (click to
      expand)
    </summary>
    <div>{children}</div>
  </details>
);
