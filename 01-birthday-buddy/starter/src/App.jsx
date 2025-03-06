import { useState } from "react";
import data from "./data";
import List from "./component/List";

// Main App component that manages the list of people
// Uses the List component (List.js) to render the list of Person components (Person.js)
const App = () => {
  const [people, setPeople] = useState(data);

  // Function to clear the list of people
  const onClear = () => {
    setPeople([]);
  };

  // Function to reset the list back to its original data
  const reRender = () => {
    setPeople(data);
  };

  return (
    <>
      <main>
        <section className="container">
          <h3>{people.length} Birthdays Today</h3>

          {/* List component renders each Person component */}
          <List people={people} />

          {/* Show "Clear All" button if there are multiple people, otherwise show "Reset" button */}
          {people.length > 1 ? (
            <button type="button" className="btn btn-block" onClick={onClear}>
              Clear All
            </button>
          ) : (
            <button type="button" className="btn btn-block" onClick={reRender}>
              Reset
            </button>
          )}
        </section>
      </main>
    </>
  );
};

export default App;
