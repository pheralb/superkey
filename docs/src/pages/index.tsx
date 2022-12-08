export default function Home() {
  return (
    <div className="w-full bg-no-repeat bg-cover">
      <div className="flex flex-col items-center justify-center pt-16">
        <h2 className="mb-6 text-4xl font-bold">
          A stylized command menu for React
        </h2>
        <div className="flex items-center space-x-8">
          <img src="/img/headlessui.svg" alt="Logo" className="h-12" />
          <img src="/img/tailwindcss.svg" alt="Logo" className="h-12" />
        </div>
        <p>stylized with</p>
      </div>
    </div>
  );
}
