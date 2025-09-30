import React, { useEffect, useRef, useState } from "react";
import WishCard from "../components/WishCard";
import entriesData from "../data/Entries.json";
import { Link } from "react-router-dom";

// Fisher–Yates shuffle
function shuffleInPlace(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Build a fresh deck of indices [0..n-1], optionally excluding one index
function buildDeck(n, exclude = null) {
  const deck = [];
  for (let i = 0; i < n; i++) {
    if (exclude !== null && i === exclude) continue;
    deck.push(i);
  }
  return shuffleInPlace(deck);
}

export default function Wishes() {
  const [entries, setEntries] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);

  // holds the remaining shuffled indices for this "round"
  const deckRef = useRef([]);
  // remember the last shown index to avoid immediate repeat across rounds
  const lastShownRef = useRef(null);

  useEffect(() => {
    setEntries(entriesData);

    if (entriesData.length === 0) return;

    if (entriesData.length === 1) {
      setCurrentIndex(0);
      lastShownRef.current = 0;
      deckRef.current = [];
      return;
    }

    // First round: full deck
    deckRef.current = buildDeck(entriesData.length);
    const first = deckRef.current.pop();
    setCurrentIndex(first);
    lastShownRef.current = first;
  }, []);

  const showAnother = () => {
    const n = entries.length;
    if (n === 0) return;
    if (n === 1) return; // nothing else to show

    // Refill the deck if empty, avoiding immediate repeat of the last shown
    if (deckRef.current.length === 0) {
      deckRef.current = buildDeck(n, lastShownRef.current);
    }

    // Draw next
    const next = deckRef.current.pop();
    setCurrentIndex(next);
    lastShownRef.current = next;
  };

  if (!entries.length || currentIndex === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Зареждане…</p>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-center bg-cover"
      style={{ backgroundImage: `url(${import.meta.env.BASE_URL}assets/photos/version6.png)` }}
    >
      {/* 🔙 Back button in top-left corner */}
      <Link to="/" className="absolute top-15 left-15">
        <img
          src={`${import.meta.env.BASE_URL}assets/icons/back-button.png`}
          alt="Назад"
          className="w-20 h-20 hover:scale-110 transition-transform duration-200"
        />
      </Link>

      {/* Wishes container */}
      <div className="w-auto min-w-[60%] max-w-[70%] min-h-[40%] max-h-[80%] mx-auto bg-[rgba(255,255,255,0.75)] backdrop-blur rounded-3xl shadow-2xl p-6 flex flex-col gap-6">
        <WishCard key={currentIndex} entry={entries[currentIndex]} />

        {entries.length > 1 && (
          <div className="flex justify-center">
            <button
              onClick={showAnother}
              className="bg-pink-600 hover:bg-pink-700 text-white text-lg font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-110 transition duration-300 ease-in-out cursor-pointer"
            >
              Покажи още 💝
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
