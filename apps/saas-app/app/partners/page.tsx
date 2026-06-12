import { Card } from "@repo/ui/card";

export default function Partners() {
  const partners = [
    { name: "Gr8Nik Studios", type: "Photography" },
    { name: "Neon Wave Records", type: "Audio Production" },
    { name: "Lensflare Creative", type: "Film & Video" },
    { name: "Echo Chamber", type: "Rehearsal Space" },
  ];

  return (
    <main className="flex flex-col items-center min-h-screen px-4 py-24 text-center">
      <h1 className="text-4xl font-bold mb-4 text-[#00f2ff]">Our Partners</h1>
      <p className="text-gray-400 mb-16">Join the hundreds of studios already powering their business with StudiOS.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        {partners.map((partner) => (
          <Card key={partner.name} title={partner.name}>
            {partner.type}
          </Card>
        ))}
      </div>
    </main>
  );
}
