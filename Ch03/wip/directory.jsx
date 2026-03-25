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
  return <div className="filters">stuff</div>;
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
