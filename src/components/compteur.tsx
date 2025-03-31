"use client";

import { useState } from "react";

export function Compteur() {
    const [counter, setCounter] = useState(0);

    return (
        <button onClick={() => setCounter(counter + 1)} className="bg-blue-500 text-white p-2 rounded">
            Compteur : {counter}
        </button>
    );
}