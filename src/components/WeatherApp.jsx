import axios from "axios";
import React, { useEffect, useState } from "react";

const WeatherApp = () => {
  const [city, setCity] = useState();
  const [data, setData] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(city);
    try {
      const response = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=e9ea57ce8bcf4fa08cb120333251209&q=${city}&aqi=no`
      );
      if (response.data) {
        console.log(response);
        setData(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="h-full my-20 flex flex-col justify-center items-center">
      <div className="weather-app flex flex-col gap-y-3 max-w-lg w-full">
        <h2 className="font-semibold text-2xl">1. Weather App</h2>
        <form className="flex" onSubmit={handleSubmit}>
          <input
            type="text"
            className="border relative pl-3 text-sm max-w-80 w-full border-gray-200 focus:border-none focus:outline-gray-200"
            placeholder="Enter City"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            type="submit"
            className="text-white px-10 py-1 rounded-r-md bg-black"
          >
            Submit
          </button>
        </form>
        <div className="mt-10">
          <h3 className="font-bold text-2xl mb-5">
            Today Weather in{" "}
            <span className="font-bold text-green-600 mb-3">{city}</span>{" "}
          </h3>
          <div>
            <p>
              {" "}
              City Name:{" "}
              <span className="text-gray-800 text-xl">
                {data?.location?.name}
              </span>
            </p>
            <p>
              {" "}
              Country Name:{" "}
              <span className="text-gray-800 text-xl">
                {data?.location?.country}
              </span>
            </p>

            <p>
              {" "}
              Humidity:{" "}
              <span className="text-gray-800 text-xl">
                {data?.current?.humidity}
              </span>
            </p>
            <p>
              {" "}
              Cloud:{" "}
              <span className="text-gray-800 text-xl">
                {data?.current?.cloud}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
