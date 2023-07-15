"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function Home() {
  const [input, setInput] = useState("");
  const {push} = useRouter();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    push(`profile/${input}`)
  };
  return (
    <div className={styles.main}>
      <div className={styles.center}>
        <h2 style={{ fontStyle: "bold" }}>
          Welcome to Next JS Demo Application ...!!
        </h2>
      </div>
      <div className={styles.grid}>
        <div>
          <h2>Input your name here</h2>
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              placeholder="Enter your name here"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <button type="submit">Predict User Age</button>
          </form>
        </div>
      </div>
    </div>
  );
}
