import React from "react";
import fetchPokemon from "./fetchPokemon";
// import { useQuery } from "react-query";
import useMyQuery from "./useMyQuery";
import useTimer from "./useTimer";

const Pokemon = ({ id }) => {
  const { loading: isLoading, error, data: pokemon } = useMyQuery({ id });
  // const { data: pokemon, isLoading, error } = useQuery(
  //   ["pokemon", { id }],
  //   fetchPokemon
  // );

  return isLoading ? (
    <div>loading...</div>
  ) : !pokemon || error ? (
    <div>{"Eroorcomin" + error}</div>
  ) : (
    <div>
      <h2>#{id}</h2>
      <h2>{pokemon.name}</h2>
      <img alt="pokemon" src={pokemon.sprites.front_shiny} />
    </div>
  );
};

export const PokemonPager = () => {
  const { value, isStarted, next, previous, start, stop, reset } = useTimer();
  const cachingNextRequest = useMyQuery({
    id: value + 1
  });

  return (
    <div>
      <button type="button" onClick={previous}>
        Previous
      </button>

      <button type="button" onClick={next}>
        Next
      </button>
      <button type="button" disabled={isStarted} onClick={start}>
        Start
      </button>

      <button type="button" onClick={stop}>
        Stop
      </button>
      <button type="button" onClick={reset}>
        Reset
      </button>

      <Pokemon id={value} />
      {/* caching next request */}
      {cachingNextRequest.data && (
        <img
          hidden
          alt="pokemon"
          src={cachingNextRequest.data.sprites.front_shiny}
        />
      )}
    </div>
  );
};

export default PokemonPager;
