"use client";

import { useState } from 'react';

export default function LandingPage() {

  const [search, setSearch ] = useState('');

  return (
    <main className = "flex flex-row bg-[#262626] justify-around space-x-5">

        <div className = "flex flex-col space-y-10">

            <input type = "text" value = {search} onChange = {(e) => setSearch(e.target.value)} placeholder = "Search the catalogue" className = "text-white text-left bg-[#323232] w-100 px-2 py-1 rounded-full border-b-2 border-white"/>

            

        </div>

        <div className = "flex flex-col">
            
        </div>
    </main>
  );
}
