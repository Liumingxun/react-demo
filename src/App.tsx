import "./App.css";
import { Counter } from "./components/Counter";
import { FormInput } from "./components/FormInput";
import { Toggle } from "./components/Toggle";

function App() {
  return (
    <>
      <div style={{ display: "flex", "flexDirection": "column", gap: "3px" }}>
        <Counter initValue={25} />
        <Toggle initValue={false} />
        <FormInput />
      </div>
    </>
  );
}

export default App;
