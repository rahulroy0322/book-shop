import { useEffect, useRef } from 'react';

const useEventListener = <T = Event>(
  eventType: keyof WindowEventMap,
  callback: (_e: T) => void,
  element: Element | Window | MediaQueryList = window
) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (element == null) {
      return;
    }
    const handler = (e: Event) => callbackRef.current(e as T);
    element.addEventListener(eventType, handler);

    return () => element.removeEventListener(eventType, handler);
  }, [eventType, element]);
};

export default useEventListener;
