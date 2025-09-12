import "./App.css";
import CounterApp from "./components/CounterApp";
import Input from "./components/Input";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WeatherApp from "./components/WeatherApp";
import SearchFilterApp from "./components/SearchFilterApp";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Input />}></Route>
          <Route path="/counter-app" element={<CounterApp />}></Route>
          <Route path="/weather-app" element={<WeatherApp />}></Route>
          <Route path="/search-filter" element={<SearchFilterApp />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// Fun/Creative Ideas

// Color Picker – Change background color of a div based on selected input color.

// Emoji Reactions – Click an emoji to increase its counter. Store counts in state.

// Simple Poll/Voting App – Multiple options, store votes in state, display live results.

// BMI Calculator – Input weight and height, calculate BMI, show category (underweight, normal, overweight).
