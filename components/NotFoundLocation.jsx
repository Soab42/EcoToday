import React from "react";
import Card from "./Card";
import Link from "next/link";

function NotFoundLocation({ location }) {
  return (
    <div class="col-span-12 flex flex-col justify-center items-center">
      <div className="bg-white w-[500px] text-center px-4 py-8 rounded-md">
        <div className="mb-4 text-2xl">{`Information for "${location}" not found!`}</div>

        <Link href="/" className="text-blue-500 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFoundLocation;
