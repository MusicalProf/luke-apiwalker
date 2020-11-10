import React, { useEffect, useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const Starships = ({ id }) => {
  const [ship, setShip] = useState({});

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/starships/" + id)
      .then((response) => {
        setShip(response.data);
      })
      .catch(() => {
        navigate("/error404");
      });
  }, [id]);

  return (
    <div>
      <h4 className="display-4">{ship.name}</h4>
      <br />
      <p className="text-capitalize">Model: {ship.model}</p>
      <p className="text-capitalize">Manufacturer: {ship.manufacturer}</p>
      <p className="text-capitalize">Crew: {ship.crew}</p>
      <p>Cost: {ship.cost_in_credits} credits</p>
    </div>
  );
};
export default Starships;
