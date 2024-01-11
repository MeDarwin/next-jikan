"use client";
import { useRouter } from "next/navigation";

//TODO: beautify this page
const NotFound = () => {
  const router = useRouter();
  return (
    <>
      <h1 className="flex justify-center items-baseline mx-auto text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
        404,{" "}
        <span className="text-2xl">
          Oops the page you are looking for does not exist
        </span>
      </h1>
      <div>
        <button
          onClick={() => router.back()}
          className="btn btn-primary w-full mt-4"
        >
          Go back
        </button>
      </div>
    </>
  );
};

export default NotFound;
