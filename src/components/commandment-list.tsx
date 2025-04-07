import { CommandmentHeader } from "./commandment-header";
import CommandmentAnatomical from "./commandments/anatomical-components.mdx";
import CommandmentDeclarative from "./commandments/declarative-interfaces.mdx";
import CommandmentImpossibleStates from "./commandments/impossible-unrepresentable.mdx";
import CommandmentForwardUnhandled from "./commandments/forward-unhandled.mdx";
import CommandmentSeparatePresLog from "./commandments/separate-presentation-logic.mdx";
import CommandmentEncapuslate from "./commandments/encapsulate.mdx";
import CommandmentBlessedReferences from "./commandments/blessed-references.mdx";
import CommandmentIOCExtensibility from "./commandments/ioc-extensibility.mdx";
import React from "react";

export const CommandmentList = () => {
  const commandments = [
    {
      title:
        "Thou shalt build with anatomical components",
      render: CommandmentAnatomical,
    },
    {
      title:
        "Thou shalt favor declarative interfaces",
      render: CommandmentDeclarative,
    },
    {
      title:
        "Thou shall make impossible states unrepresentable",
      render:
        CommandmentImpossibleStates,
    },
    {
      title:
        "Thou shalt forward unhandled input",
      render:
        CommandmentForwardUnhandled,
    },
    {
      title:
        "Thou shalt separate presentation from logic",
      render:
        CommandmentSeparatePresLog,
    },
    {
      title:
        "Thou shalt encapsulate behavior and styles",
      render: CommandmentEncapuslate,
    },
    {
      title:
        "Thou shalt favor immutability in all things",
      render: () => null,
    },
    {
      title:
        "Thou shalt not induce uncontrolled side effects",
      render: () => null,
    },
    {
      title:
        "Thou shalt only reference blessed resources",
      render:
        CommandmentBlessedReferences,
    },
    {
      title:
        "Thou shalt invert control for high extensibility cases",
      render:
        CommandmentIOCExtensibility,
    },
  ];

  const lastIndex =
    commandments.length - 1;
  return (
    <ul className="p-0 list-none">
      {commandments.map(
        (commandment, index) => (
          <React.Fragment key={index}>
            <li>
              {/* Render the component if it exists, otherwise just use the title */}
              <CommandmentHeader>
                {index + 1}.{" "}
                {commandment.title}
              </CommandmentHeader>
              {commandment.render({})}
            </li>
            {lastIndex ===
            index ? null : (
              <hr />
            )}
          </React.Fragment>
        ),
      )}
    </ul>
  );
};
