/**
 * ChatWidgetContext — provides a shared open/close/toggle API for the
 * AskShree chat panel widget so any component on the page can trigger it.
 */

import { createContext, useContext } from "react";

export interface ChatWidgetContextValue {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

export const ChatWidgetContext = createContext<ChatWidgetContextValue>({
  isOpen: false,
  open: () => {},
  close: () => {},
  toggle: () => {},
});

export function useChatWidget() {
  return useContext(ChatWidgetContext);
}
