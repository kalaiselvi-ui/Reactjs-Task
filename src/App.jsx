import "./App.css";
import CounterApp from "./components/CounterApp";
import Input from "./components/Input";
import Navbar from "./components/Navbar";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import WeatherApp from "./components/WeatherApp";
import SearchFilterApp from "./components/SearchFilterApp";

function App() {
  return (
    <div className="">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Input />}></Route>
          <Route path="/counter-app" element={<CounterApp />}></Route>
          <Route path="/weather-app" element={<WeatherApp />}></Route>
          <Route path="/search-filter" element={<SearchFilterApp />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
