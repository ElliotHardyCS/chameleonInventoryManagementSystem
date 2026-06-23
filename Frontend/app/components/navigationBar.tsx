"use client";

import router, { useRouter } from "next/navigation";
import { useState } from "react";


export default function NavBar() {

  const router = useRouter();

  return (
    <nav className = "flex flex-col bg-[#111111]">
      <div className = "flex flex-row px-2 py-2 justify-between">
        <div className = "flex flex-row space-x-2">
          <a href="https://www.starlightdance.net" target="_blank" rel="noopener noreferrer">
            <button className = "w-48 h-18 px-4 py-4 rounded bg-[url(../public/STARLIGHT_LOGO.svg)] bg-no-repeat bg-contain bg-center hover:bg-[#262626] transition-colors"  />
          </a>
          <a href="https://www.starlightdance.net/chameleon" target="_blank" rel="noopener noreferrer">
            <button className = "w-48 h-16 px-4 py-8 rounded bg-[url(../public/CHAMELEON_LOGO.svg)] bg-no-repeat bg-contain bg-center hover:bg-[#262626] transition-colors" />
          </a>
        </div>
        <div className = "flex flex-row space-x-2">
          <button onClick={() => router.push('/')} className = "text-white px-4 py-2 rounded hover:underline"> Home </button>
          <button onClick={() => router.push('/signIn')} className = "text-white px-4 py-2 rounded hover:underline"> Sign in </button>
        </div>
      </div>
    </nav>
  );
}