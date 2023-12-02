import React, { useRef } from "react";
import lang from "../utils/lang";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openAI";
import { API_OPTIONS } from "../utils/contants";
import { addGptMovieResult } from "../utils/gptSlice";
const GptSearchBar = () => {
  const dispatch = useDispatch();

  const searchText = useRef(null);
  const langKey = useSelector((store) => store.config.lang);
  const searchMovieTmdb = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    return json.results;
  };
  const handleGptSearchClick = async () => {
    // console.log(searchText.current.value);
    const gptQuery =
      "Act as a movie reccomendation system and suggest some good movies for the query" +
      searchText.current.value +
      ".Only give me 5 movies suggestion that are seprated by a comma as shown in the example. Example Results: Sholay, Don, Apne, Hunter, KGF ";

    //make a call to GPT api to get the movie results
    const gptResuts = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResuts.choices);

    if (!gptResuts.choices) {
      //do error handling here
    }
    const gptMovies = gptResuts.choices?.[0]?.message?.content.split(",");
    //search tmdb movies
    const promiseArray = gptMovies.map((movie) => searchMovieTmdb(movie));
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };
  return (
    <div className="pt-[40%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="col-span-9 p-4 m-4"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />
        <button
          className="col-span-3 m-4 px-4 py-2 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
