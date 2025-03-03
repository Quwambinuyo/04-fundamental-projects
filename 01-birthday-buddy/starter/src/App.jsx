import { useState } from "react";
import data from "./data";
import List from "./component/List";

const App = () => {
  const [people, setPeople] = useState(data);

  return (
    <>
      <main>
        <section className="container">
          <h3>{people.length} Birthdays Today</h3>
          <List people={people} />
        </section>
      </main>
    </>
  );
};
export default App;
