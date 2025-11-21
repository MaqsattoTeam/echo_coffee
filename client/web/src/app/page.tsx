import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="text-center">
        <h1 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white">
          Welcome to the Coffee App!
        </h1>
        <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
          Your one-stop solution for all things coffee.
        </p>
      </div>
    </div>
  );
}
