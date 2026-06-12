import { Button } from "@repo/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
      <div className="max-w-3xl space-y-8">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl">
          Unshackle your <span className="text-[#00f2ff]">Studio</span>
        </h1>
        <p className="text-xl text-gray-400">
          The ultimate multi-tenant platform for creative studios to manage bookings, clients, and growth.
        </p>
        <div className="flex items-center justify-center gap-4 pt-8">
          <Button size="lg">Start Free Trial</Button>
          <Link href="/about">
            <Button variant="outline" size="lg">Learn More</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
