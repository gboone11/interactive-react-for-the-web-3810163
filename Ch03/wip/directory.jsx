import React, { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { AnimatePresence, motion } from "motion/react";

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
        <AnimatePresence mode="popLayout" key={person.id}>
          <motion.div
						layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0 }}
          >
            <Person person={person} />
          </motion.div>
        </AnimatePresence>
      ))}
    </div>
  );
}

function Filters({ formState, updateFormState }) {
  const titles = window.LMDirectory.titles;

  const updateName = (event) => {
    updateFormState({ currentName: event.target.value });
  };

  const updateTitle = (event) => {
    updateFormState({ currentTitle: event.target.value });
  };

  const updateIntern = (event) => {
    updateFormState({ isIntern: event.target.checked });
  };

  const resetFormState = () => {
    updateFormState({
      currentName: "",
      currentTitle: "",
      isIntern: false,
    });
  };

  return (
    <form action="" id="directory-filters">
      <div className="group">
        <label htmlFor="txt-name">Name:</label>
        <input
          type="text"
          name="person_name"
          placeholder="Name of employee"
          id="person-name"
          value={formState.currentName}
          onChange={updateName}
        />
      </div>
      <div className="group">
        <label htmlFor="sel-title">Job Title:</label>
        <select
          name="sel-title"
          id="sel-title"
          value={formState.currentTitle}
          onChange={updateTitle}
        >
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
          <input type="checkbox" value="1" checked={formState.isIntern} onChange={updateIntern} />{" "}
          Intern
        </label>
      </div>
      <div className="group">
        <input type="reset" name="reset" value="Reset" onClick={resetFormState} />
      </div>
    </form>
  );
}

function Directory() {
  const [people, setPeople] = useState(window.LMDirectory.people);
  const [formState, setFormState] = useState({
    currentName: "",
    currentTitle: "",
    isIntern: false,
  });

  const updateFormState = (spec) => {
    const newFormState = { ...formState, ...spec };
    setFormState(newFormState);
  };

  useEffect(() => {
    const filteredPeople = window.LMDirectory.people.filter(
      (person) =>
        (person.intern === formState.isIntern || person.intern) &&
        (person.name.toLowerCase().indexOf(formState.currentName.toLowerCase()) !== -1 ||
          formState.currentName === "") &&
        (person.title_cat === formState.currentTitle || formState.currentTitle === ""),
    );

    setPeople(filteredPeople);
  }, [formState]);

  return (
    <div className="company-dir">
      <h2>Company Directory</h2>
      <p>Learn more about each person at Leaf & Mortar in this company directory.</p>

      <Filters formState={formState} updateFormState={updateFormState} />

      <People people={people} />
    </div>
  );
}

createRoot(document.getElementById("directory-root")).render(
  <StrictMode>
    <Directory />
  </StrictMode>,
);
