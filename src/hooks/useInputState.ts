import { ChangeEvent, ChangeEventHandler, useCallback, useState } from 'react';

export const useInputState = (initialState = '') => {
  const [state, setState] = useState(initialState);

  const setInputState = useCallback((event: any) => setState(event.target.value), []);

  return [state, setInputState] as [string, (event: any) => void];
};
