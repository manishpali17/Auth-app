import Link from "next/link";
import { FaRegFaceFrown } from "react-icons/fa6";

const NotFound = () => {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <FaRegFaceFrown size={100} className=" text-white" />
      <h2 className="text-xl text-white font-semibold">404 Not Found</h2>
      <p className="text-white">Could not find the requested Page.</p>
      <Link
        href="/"
        className="mt-4 rounded-md bg-red-500 px-4 py-2 text-sm text-white transition-colors hover:bg-red-400"
      >
        Go Back
      </Link>
    </main>
  );
};
export default NotFound;
