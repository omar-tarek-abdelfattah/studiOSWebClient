import * as React from "react";

export function Table({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`w-full overflow-x-auto rounded-xl border border-[#00f2ff]/20 bg-[#0B0B0C]/60 backdrop-blur-md shadow-[0_0_15px_rgba(0,242,255,0.03)] ${className}`}>
      <table className="w-full text-left text-sm text-gray-300">
        {children}
      </table>
    </div>
  );
}

export function TableHeader({ children }: { children: React.ReactNode }) {
  return (
    <thead className="bg-[#00f2ff]/10 text-xs uppercase text-[#00f2ff] border-b border-[#00f2ff]/20">
      {children}
    </thead>
  );
}

export function TableRow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <tr className={`border-b border-[#00f2ff]/10 hover:bg-[#00f2ff]/5 transition-colors ${className}`}>
      {children}
    </tr>
  );
}

export function TableCell({ children, isHeader = false, className = "" }: { children: React.ReactNode; isHeader?: boolean; className?: string }) {
  const Tag = isHeader ? "th" : "td";
  return (
    <Tag className={`px-6 py-4 ${isHeader ? "font-medium" : ""} ${className}`}>
      {children}
    </Tag>
  );
}
