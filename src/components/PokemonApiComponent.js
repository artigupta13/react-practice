import * as React from "react";
import { useGetPokemonByNameQuery } from "../services/pokemon";
import Card from "react-bootstrap/Card";

export default function PokemonApiComponent() {
  const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");

  return (
    <Card className="custom-card">
      <Card.Body>
        <Card.Title>Redux Tool Kit Query</Card.Title>
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <>
            <h3>{data.species.name}</h3>
            <img src={data.sprites.front_shiny} alt={data.species.name} />
          </>
        ) : null}
      </Card.Body>
    </Card>
  );
}
