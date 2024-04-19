import { Category } from "@/app/page";
import { usePokeApi } from "@/app/utils/usePokeApi";
import React, { useEffect, useState } from "react";

interface Pokemons {
  currentType: Category | null;
}

const Pokemons: React.FC<Pokemons> = ({ currentType }) => {
  if (!currentType) {
    return "selecciona una categoria";
  }

  const { data: pokemons2, isLoading, isError } = usePokeApi(currentType.url);

  if (isLoading) {
    return <p>Cargando...</p>;
  }

  if (isError) {
    return <p>Hubo un error al cargar los datos.</p>;
  }

  return (
    <div>
      {pokemons2.map(
        ({
          pokemon: { name, url },
        }: {
          pokemon: { name: string; url: string };
        }) => (
          <li key={url}>{name}</li>
        )
      )}
    </div>
  );
};

export default Pokemons;
