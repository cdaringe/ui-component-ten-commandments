"use client";

export const CommandmentHeader: React.FC<
  {
    children: React.ReactNode;
  } & React.HTMLAttributes<HTMLHeadingElement>
> = ({
  children,
  className,
  ...unhandled
}) => {
  const id = String(children)
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-");
  return (
    <h2
      onClick={() => {
        const nextURL = new URL(
          window.location.href,
        );
        nextURL.hash = id;
        navigator.clipboard.writeText(
          nextURL.toString(),
        );
      }}
      className={[
        className ?? "",
        "hover:cursor-copy text-2xl md:text-3xl font-bold mt-8 mb-4 group",
      ].join(" ")}
      {...unhandled}
    >
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="inline-block ml-2 w-[0.65em] h-[0.65em] opacity-40 group-hover:opacity-100"
        aria-hidden="true"
      >
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
      </svg>
      <a id={id} />
    </h2>
  );
};
