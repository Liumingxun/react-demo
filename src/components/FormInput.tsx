import { useInput } from "../hooks/useInput";

export const FormInput = () => {
  const { handleChange, value } = useInput();
  return (
    <>
      <div>
        <label>
          {value}
          <input type="text" value={value} onChange={handleChange} />
        </label>
      </div>
    </>
  );
};
