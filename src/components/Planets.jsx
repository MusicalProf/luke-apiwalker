import React, { useEffect, useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const Planets = ({ id }) => {
  const [place, setPlace] = useState({});

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/planets/" + id)
      .then((response) => {
        setPlace(response.data);
      })
      .catch(() => {
        navigate("/error404");
      });
  }, [id]);

  return (
    <div>
      <h4 className="display-4">{place.name}</h4>
      <br />
      <p className="text-capitalize">Climate: {place.climate}</p>
      <p className="text-capitalize">Terrain: {place.terrain}</p>
      <p className="text-capitalize">Surface Water: {place.surface_water}</p>
      <p className="text-capitalize">Population: {place.population}</p>
    </div>
  );
};
export default Planets;
