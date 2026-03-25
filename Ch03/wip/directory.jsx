import React, { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";

function Person({ person }) {
  return (
    <div className="person">
      <h3>{`${person.name}, ${person.title}`}</h3>
      <p>
        <img
          className="size-medium alignright"
          src={person.img}
          alt={person.name}
          width="300"
          height="300"
          sizes="(max-width: 300px) 100vw, 300px"
        />
        {person.bio}
      </p>
    </div>
  );
}

function People({ people }) {
  return (
    <div className="results">
      {people.map((person) => (
        <Person key={person.id} person={person} />
      ))}
    </div>
  );
}

function Filters() {
  const titles = window.LMDirectory.titles;

  return (
    <form action="" id="directory-filters">
      <div className="group">
        <label htmlFor="txt-name">Name:</label>
        <input name="person_name" value="" placeholder="Name of employee" id="person-name" />
      </div>
      <div className="group">
        <label htmlFor="sel-title">Job Title:</label>
        <select name="sel-title" id="sel-title">
          <option value="">- Select -</option>
          {titles.map((title) => (
            <option value={title.key} key={title.key}>
              {title.display}
            </option>
          ))}
        </select>
      </div>
      <div className="group">
        <label>
          <input type="checkbox" value="1" /> Intern
        </label>
      </div>
    </form>
  );
}

function Directory() {
  const [people, setPeople] = useState(window.LMDirectory.people);

  return (
    <div className="company-dir">
      <h2>Company Directory</h2>
      <p>Learn more about each person at Leaf & Mortar in this company directory.</p>

      <Filters />

      <People people={people} />
    </div>
  );
}

createRoot(document.getElementById("directory-root")).render(
  <StrictMode>
    <Directory />
  </StrictMode>,
);
