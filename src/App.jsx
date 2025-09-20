import "./App.css";
import Input from "./components/Input";
import Navbar from "./components/Navbar";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import WeatherApp from "./components/WeatherApp";
import SearchFilterApp from "./components/SearchFilterApp";
import ExpenseTracker from "./components/ExpenseTracker";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <div className="">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Input />}></Route>
          <Route path="/expense-tracker" element={<ExpenseTracker />}></Route>
          <Route path="/weather-app" element={<WeatherApp />}></Route>
          <Route path="/search-filter" element={<SearchFilterApp />}></Route>
          <Route path="/cart" element={<ShoppingCart />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
