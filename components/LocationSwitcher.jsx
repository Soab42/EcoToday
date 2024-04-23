"use client";
import { getLocationLatLonList } from "@/lib/location-info";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function LocationSwitcher() {
  const [showLocationList, setShowLocationList] = useState(false);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const getLocation = async () => {
      const locations = await getLocationLatLonList();
      console.log(locations);
      setLocations(locations);
    };
    getLocation();
  }, []);
  return (
    <>
      <button onClick={() => setShowLocationList(!showLocationList)}>
        <Image
          class="size-9"
          src="/assets/icons/link.svg"
          alt="link icon"
          width={9}
          height={9}
        />
      </button>
      {showLocationList && (
        <div class="absolute left-0 top-12 z-[999] w-full min-w-[280px] rounded-md bg-white p-4 shadow max-md:-translate-x-1/2">
          <ul
            role="list"
            class="divide-y divide-gray-100 [&>*]:py-2 [&>li]:cursor-pointer"
          >
            {locations.map((info) => {
              return (
                <li key={info?.location}>
                  <Link
                    onClick={() => setShowLocationList(false)}
                    href={`/${info?.location}?latitude=${info?.latitude}&longitude=${info?.longitude}`}
                  >
                    {info?.location}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}

export default LocationSwitcher;
