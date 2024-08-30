import { ChangeEvent, ChangeEventHandler, useState } from "react";

export function useInput() {
  const [value, setValue] = useState('')
  const handleChange: ChangeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return {
    value, handleChange
  }
}