"use client";
import React from "react";
import { BackgroundBeams } from "../../components/ui/background-beams";
import { AiOutlineEnter } from "react-icons/ai";
const DeleteAccount = () => {
  return (
    <div className="h-[40rem] w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-6xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Delete your account
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Enter your email, and we will start and inform you about your account
          deletion process account.
        </p>

        <input
          type="text"
          placeholder="Enter your email"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 p-4 text-white"
        />
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10 mt-2">
          Write your email then press {""}
          <span className="border-stone-600 border-[1.5px] py-[0.1rem] px-2 rounded-md cursor-pointer">
            enter
          </span>{" "}
          to submit your email
        </p>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default DeleteAccount;
