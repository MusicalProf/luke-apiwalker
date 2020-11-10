import React, { useState } from "react";
import { navigate } from "@reach/router";

const SearchBar = () => {
  const [selection, setSelection] = useState({
    option: "",
    id: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/${selection.option}/${selection.id}`);
  };
  return (
    <div>
      <h1 className="display-4" style={{ textDecoration: "underline" }}>
        Welcome! To the LukeAPI Walker App!
      </h1>
      <br />
      <h4 className="display-5">What StarWars character fits your fancy?</h4>
      <form
        onSubmit={event => handleSubmit(event)}
        className="d-flex form-inline justify-content-center"
      >
        <label className='mr-2'>Search For:</label>
        <select
          value={selection.option}
          onChange={(e) =>
            setSelection({ ...selection, option: e.target.value })
          }
          className="form-control mr-sm-2 "
        >
          <option hidden>Choose an option: </option>
          <option value="people">People </option>
          <option value="planets">Planets</option>
          <option value="starships">Starships</option>
        </select>
        <label className='mr-2'>ID#: </label>
        <input
          type="text"
          onChange={(e) => setSelection({ ...selection, id: e.target.value })}
          className="form-control mr-sm-2"
        />
        <input type="submit" value="Search" className="btn btn-primary" />
      </form>
      <hr/>
    </div>
  );
};
export default SearchBar;
