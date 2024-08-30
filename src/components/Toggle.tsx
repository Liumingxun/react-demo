import { useState } from "react";

export const Toggle = ({ initValue = true }) => {
  const [state, setState] = useState(initValue);
  return (
    <div>
      <button onClick={() => setState(!state)}>{state ? "ON" : "OFF"}</button>
    </div>
  );
};
