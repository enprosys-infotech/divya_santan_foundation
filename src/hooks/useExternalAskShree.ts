import { createContext, useContext } from "react";

export interface ExternalAskShreeContextValue {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const ExternalAskShreeContext = createContext<ExternalAskShreeContextValue>({
  isOpen: false,
  open: () => {},
  close: () => {},
});

export function useExternalAskShree() {
  return useContext(ExternalAskShreeContext);
}