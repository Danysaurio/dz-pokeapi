"use client";
import { useEffect, useState } from "react";
import Categories from "./components/Categories/Categories";
import Pokemons from "./components/Pokemons/Pokemons";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export interface Category {
  name: string;
  url: string;
}

export default function Home() {
  const [currentType, setCurrentType] = useState<Category | null>(null);

  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <h1 className="text-3xl font-bold">Pokemons</h1>
        <div className="flex">
          <Categories currentType={currentType} handleClick={setCurrentType} />
          <Pokemons currentType={currentType} />
        </div>
      </main>
    </QueryClientProvider>
  );
}
