import { useQuery } from "react-query";


async function fetchPokemonList(url: string) {
    const res = await fetch(url);
    const data = await res.json();

    return data.pokemon;
}

export function usePokeApi(url: string) {
    return useQuery(['PokemonCategory', url], () => fetchPokemonList(url));
}

const fetchPokemonCategories = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/type");
    const { results } = await res.json();

    return results;
}

export const usePokeApiCategories = () => {
    return useQuery('getcategories', fetchPokemonCategories);
}