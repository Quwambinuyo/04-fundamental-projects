import { useState } from "react";
import data from "./data";
import List from "./component/List";

const App = () => {
  const [people, setPeople] = useState(data);

  const onClear = (e) => {
    setPeople([]);
  };

  const reRender = (e) => {
    setPeople(data);
  };

  return (
    <>
      <main>
        <section className="container">
          <h3>{people.length} Birthdays Today</h3>
          <List people={people} />

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
