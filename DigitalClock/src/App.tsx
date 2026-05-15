import { Box } from "@mui/material";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const date = `${currentTime.getDate()}/${currentTime.getMonth()+1}/${currentTime.getFullYear()}`;

  useEffect(() => {
    const time = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(time);
  }, []);
  return (


    <>
      <h1>Digital Clock</h1>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h2>{date}</h2>
        <p> Current Time: {currentTime.toLocaleTimeString()}</p>
      </Box>
    </>
  );
}

export default App;
