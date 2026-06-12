import Link from "next/link";
import { Button } from "@repo/ui/button";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 border-b border-[#00f2ff]/10 bg-[#0B0B0C]/80 backdrop-blur-lg">
      <div className="flex items-center gap-8">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-[#00f2ff]">
          StudiOS
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
          <Link href="/partners" className="hover:text-white transition-colors">Partners</Link>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Link href="/admin">
          <Button variant="ghost" size="sm">Sign In</Button>
        </Link>
        <Button variant="solid" size="sm">Get Started</Button>
      </div>
    </nav>
  );
}
