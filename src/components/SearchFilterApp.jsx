import React, { useEffect, useState } from "react";
import saravanaImg from "../assets/Saravana.jpg";
import kalaiImg from "../assets/kalai.jpg";
import anushaImg from "../assets/Anusha.jpg";
import mathanImg from "../assets/Mathan.jpg";
import sarveshImg from "../assets/Sarvesh.jpg";
import krishnaImg from "../assets/Krishnan.jpg";
import anithaImg from "../assets/Anitha.jpg";
import axios from "axios";

const SearchFilterApp = () => {
  const [input, setInput] = useState("");
  const [movieName, setMovieName] = useState("");
  const [movieList, setMovieList] = useState([]);
  const NameList = [
    {
      id: "1",
      image: saravanaImg,
      name: "Saravana",
    },
    {
      id: "2",
      image: kalaiImg,
      name: "Kalai",
    },
    {
      id: "3",
      image: anushaImg,
      name: "Anusha",
    },
    {
      id: "4",
      image: mathanImg,
      name: "Mathan",
    },
    {
      id: "5",
      image: sarveshImg,
      name: "Sarvesh",
    },
    {
      id: "6",
      image: krishnaImg,
      name: "Krishna",
    },
    {
      id: "7",
      image: anithaImg,
      name: "Anitha",
    },
    {
      id: "8",
      image: anithaImg,
      name: "Anitha",
    },
  ];
  const [search, setSearch] = useState(NameList);

  useEffect(() => {
    if (!input) {
      setSearch(NameList);
    } else {
      setSearch(
        NameList.filter((search) =>
          search.name.toLowerCase().includes(input.toLowerCase())
        )
      );
      console.log(search, "searched input");
    }
  }, [input]);

  const searchMovieHandle = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=7076dcc65497f0c127b05d81daf4b8c9&language=en-US&with_original_language=ta&sort_by=popularity.desc&page=1`
      );
      if (response.data) {
        console.log(response);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="h-full flex flex-col px-20 mb-10">
      <div className="search-app flex flex-col gap-y-3 max-w-7xl">
        <h3 className="font-semibold text-2xl mt-10 mb-5">
          2. Search Filter by name
        </h3>
        <input
          type="text"
          placeholder="Search name"
          className="mb-10 justify-center flex items-center mx-auto max-w-xl w-full pl-5 border border-green-500 h-10"
          value={input}
          name="name"
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {search?.map((list) => (
            <div key={list.id}>
              <div className="flex flex-col gap-2 bg-white shadow-md rounded-md pb-5">
                <img
                  className="object-cover w-full h-80 rounded-md"
                  src={list.image}
                  alt={list.name}
                />
                <p className="text-gray-800 text-md">{list.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="movie-app flex flex-col gap-y-3 max-w-7xl">
        <h3 className="font-semibold text-2xl mt-10 mb-5">
          2. Search Filter by Movie using API
        </h3>
        <form
          className="flex justify-center items-center"
          onSubmit={searchMovieHandle}
        >
          <input
            type="text"
            placeholder="Search movie"
            className="max-w-xl w-full pl-5 border border-green-500 h-10"
            value={movieName}
            name="movieName"
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="px-10 py-2 bg-black text-white rounded-r-md"
          >
            {" "}
            Submit
          </button>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 gap-3 mt-10">
          {movieList.map((item) => (
            <card key={item.id}>
              <div className="rounded-t-md">
                <img
                  className="object-cover w-full h-80 rounded-t-md"
                  src={item.image}
                  alt
                />
              </div>
              <div className="bg-gray-200 flex flex-col gap-1 py-5 rounded-b-md">
                <p className="text-base font-medium">{item.name}</p>
                <p className="text-gray-700 text-sm">{item.desc}</p>
                <p className="text-md font-normal">{item.year}</p>
              </div>
            </card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchFilterApp;
