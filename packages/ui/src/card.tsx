import * as React from "react";

export function Card({
  title,
  children,
  className = "",
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl border border-[#00f2ff]/20 bg-[#0B0B0C]/80 backdrop-blur-md p-6 shadow-[0_0_15px_rgba(0,242,255,0.05)] transition-all hover:border-[#00f2ff]/60 hover:shadow-[0_0_25px_rgba(0,242,255,0.15)] ${className}`}
    >
      {title && (
        <h3 className="mb-4 text-xl font-semibold tracking-wide text-[#00f2ff]">
          {title}
        </h3>
      )}
      <div className="text-gray-300">{children}</div>
    </div>
  );
}
