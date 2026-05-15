import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

type weather = {
  current_condition: {
    humidity: string;
    temp_C: string;
  }[];
  nearest_area: {
    areaName: { value: string }[];
  }[];
};

export default function InputBox() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<weather | null>(null);
  async function fetchWeather() {
    try {
      const response = await fetch(`https://wttr.in/${city}?format=j1`);
      const data = await response.json();
      setWeather(data);
      console.log(data);
    } catch (error) {
      console.log("API Failed", error);
    }
  }

  // useEffect(() => {
  //   if (city) {
  //     fetchWeather();
  //   } else {
  //     setWeather(null);
  //   }
  // }, [city]);
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TextField
          label="City Name"
          id="filled-basic"
          variant="filled"
          size="small"
          sx={{
            backgroundColor: "white",
            color: "black",
            width: "200px",
            height: "40px",
            marginright: "20px",
            borderRadius: "5px",
          }}
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <Button variant="contained" onClick={fetchWeather}>
          Show Weather
        </Button>
      </Box>
      <div style={{ marginTop: "20px" }}>
        {weather && <p>Humidity: {weather.current_condition[0].humidity}</p>}
        {weather && <p>Temperature: {weather.current_condition[0].temp_C}</p>}
        {weather && <p>Area: {weather.nearest_area[0].areaName[0].value}</p>}
      </div>
    </div>
  );
}
