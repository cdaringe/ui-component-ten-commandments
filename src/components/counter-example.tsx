import React from "react";

export const CounterExample: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => (
  <details className="counter-example-content mb-2">
    <summary>
      See a counter example (click to
      expand)
    </summary>
    <div>{children}</div>
  </details>
);
