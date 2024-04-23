"use client";
import React from "react";
import Card from "./Card";
import { useRouter } from "next/navigation";

function NotFoundLocation({ location }) {
  const router = useRouter();
  return (
    <div class="col-span-12 flex flex-col justify-center items-center">
      <div className="bg-white w-[500px] text-center px-4 py-8 rounded-md">
        <div className="mb-4 text-2xl">{`Information for "${location}" not found!`}</div>

        <button
          onClick={() => router.push("/")}
          className="text-blue-500 hover:underline"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default NotFoundLocation;
