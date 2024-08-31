import { useReducer } from "react"

export const useCounter = ({ initValue }: { initValue: number }) => {
  const [counter, dispatch] = useReducer((state: number, action: Record<'type' | string, string>) => {
    switch (action.type) {
      case 'increase':
        return state + 1
      case 'decrease':
        return state - 1
      default:
        return initValue
    }
  }, initValue)

  return { counter, dispatch }
}