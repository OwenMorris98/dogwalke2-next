"use client";
import AddDog from "../components/AddDog";
import Image from "next/image";
import Link from "next/link";


export default function Services() {
  return (
    <div className="flex flex-row justify-between px-4 py-2">
    <div className="max-w-lg rounded overflow-hidden shadow-lg mr-5">
    <Image src="/img/dog-walk.jpg" alt="pawprints" width="500" height="100" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">Schedule Walk</div>
      <p className="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
      </p>
    </div>
    <div className="px-6 pt-4 pb-2">
      <Link href="/services/schedule-walk" className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Schedule Here</Link>
    </div>
    </div>
    <div className="max-w-lg rounded overflow-hidden shadow-lg">
    <Image src="/img/Watch_Dog.jpg" alt="pawprints" width="500" height="100" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">Register Dogs </div>
      <p className="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
      </p>
    </div>
    <div className="px-6 pt-4 pb-2">
    <Link href="/services/dogs-register" className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Register Here</Link>
      
    </div>
  </div>
  </div>
  );
}