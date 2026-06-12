type Props = {
  params: Promise<{ domain: string }>;
};

export default async function TenantStorefront({ params }: Props) {
  const { domain } = await params;

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-24 bg-black text-white font-sans">
      <div className="z-10 items-center justify-between w-full max-w-5xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-[#00f2ff] mb-4">
          Welcome to {domain}
        </h1>
        <p className="text-xl text-gray-400">
          This is the dynamically routed, public storefront for this specific tenant.
        </p>
      </div>
    </main>
  );
}
