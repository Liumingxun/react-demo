import "./App.css";
import { Counter } from "./components/Counter";
import { FormInput } from "./components/FormInput";
import { Timer } from "./components/Timer";
import { Toggle } from "./components/Toggle";
import { CounterReducer } from "./components/CounterReducer";

function App() {
  return (
    <>
      <div style={{ display: "flex", "flexDirection": "column", gap: "3px" }}>
        <CounterReducer />
        <Counter initValue={25} />
        <Toggle initValue={false} />
        <FormInput />
        <Timer />
      </div>
    </>
  );
}

export default App;
