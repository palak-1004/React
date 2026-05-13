import React from "react";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
export default function Quote() {
  let [quote, setQuote] = useState<string>("");
  let [loadQuote, setLoadQuote] = useState<boolean>(true);

  async function fetchQuote() {
    try {
      setLoadQuote(true);
      const response = await fetch("https://dummyjson.com/quotes/random");

      const data = await response.json();
        setQuote(data.quote);
      setLoadQuote(false);
    } catch (error) {
      console.log("api failed");
    }
  }

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div>
      <h1>Random Quote Generator</h1>
      <p>{loadQuote ? "Loading..." : quote}</p>
      <Button variant="contained" color="primary" onClick={() => fetchQuote()}>
        Generate New Quote
      </Button>
    </div>
  );
}
