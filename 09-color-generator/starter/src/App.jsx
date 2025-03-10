import { useState } from "react";
import ColorList from "./components/ColorList";
import Form from "./components/Form";
import Values from "values.js";

const App = () => {
  const [colors, setColors] = useState(new Values("#f15025").all(10));

  return (
    <>
      <main>
        <Form />
        <ColorList />
      </main>
    </>
  );
};
export default App;
