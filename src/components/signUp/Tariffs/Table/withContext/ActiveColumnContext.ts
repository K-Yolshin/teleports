import { createContext } from 'react';

export interface ContextTypes {
  activeColumn: number;
  onChangeActiveColumn: (activeColumn: number) => void;
}

const ActiveColumnContext = createContext({
  activeColumn: Infinity,
  onChangeActiveColumn: (activeColumn: number) => {},
});

export default ActiveColumnContext;
