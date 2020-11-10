import React, { useEffect, useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const People = ({ id }) => {
  const [char, setChar] = useState({});
  const [home, setHome] = useState("");

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/" + id)
      .then((response) => {
        setChar(response.data);
      })
      .catch(() => {
        navigate("/error404");
      });
  }, [id]);

  useEffect(() => {
    axios.get(char.homeworld).then((response) => {
      setHome(response.data.name);
    });
  });

  return (
    <div>
      <h4 className="display-4">{char.name}</h4>
      <br />
      <p>Home World: {home}</p>
      <p>
        Home World Info: <a href={char.homeworld}target="_blank" >Homeworld</a>
      </p>
      <p>Height: {char.height}cm</p>
      <p>Mass: {char.mass}kg</p>
      <p className="text-capitalize">Hair Color: {char.hair_color}</p>
      <p className="text-capitalize">Skin Color: {char.skin_color}</p>
    </div>
  );
};
export default People;
