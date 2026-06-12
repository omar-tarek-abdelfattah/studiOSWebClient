import { Card } from "@repo/ui/card";
import { Button } from "@repo/ui/button";

export default function Pricing() {
  return (
    <main className="flex flex-col items-center min-h-screen px-4 py-24 text-center">
      <h1 className="text-4xl font-bold mb-4 text-[#00f2ff]">Simple, Transparent Pricing</h1>
      <p className="text-gray-400 mb-16">Choose the perfect plan for your studio's needs.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        <Card title="Starter" className="flex flex-col">
          <div className="text-3xl font-bold mb-4">$29<span className="text-sm text-gray-500 font-normal">/mo</span></div>
          <ul className="text-sm text-gray-400 space-y-3 mb-8 flex-1">
            <li>1 Studio Location</li>
            <li>Basic Booking Widget</li>
            <li>Up to 100 bookings/mo</li>
          </ul>
          <Button variant="outline" className="w-full mt-auto">Get Started</Button>
        </Card>

        <Card title="Pro" className="flex flex-col border-[#00f2ff] shadow-[0_0_20px_rgba(0,242,255,0.2)]">
          <div className="text-3xl font-bold mb-4">$99<span className="text-sm text-gray-500 font-normal">/mo</span></div>
          <ul className="text-sm text-gray-400 space-y-3 mb-8 flex-1">
            <li>Up to 3 Studio Locations</li>
            <li>Advanced Analytics</li>
            <li>Custom Domain Routing</li>
            <li>Unlimited Bookings</li>
          </ul>
          <Button variant="solid" className="w-full mt-auto">Go Pro</Button>
        </Card>

        <Card title="Enterprise" className="flex flex-col">
          <div className="text-3xl font-bold mb-4">Custom</div>
          <ul className="text-sm text-gray-400 space-y-3 mb-8 flex-1">
            <li>Unlimited Locations</li>
            <li>Dedicated Account Manager</li>
            <li>White-label Solution</li>
            <li>Custom Integrations</li>
          </ul>
          <Button variant="ghost" className="w-full mt-auto border border-gray-700">Contact Sales</Button>
        </Card>
      </div>
    </main>
  );
}
