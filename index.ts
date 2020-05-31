import { useEffect, useState } from 'react';
import { InteractionManager } from 'react-native';

/**
 * Uses the interaction manager to force a re-render of components that include
 * this hook, for example to start new interactions. Only reports once.
 */
export function useIdleOnce() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (ready) {
      return;
    }

    const future = InteractionManager.runAfterInteractions(() =>
      setReady(true)
    );

    return () => {
      future.cancel();
    };
  }, [ready]);

  return ready;
}

/**
 * Uses the interaction manager to run the callback once the interactions have
 * finished running; automatically cancelled if the component this hook is used
 * in un-mounts before that.
 *
 * Re-runs for each callback, so make sure the callback passed in has a stable
 * identity, unless you want it to run perpetually.
 *
 * @param callback the callback to run after interactions
 */
export function useIdleCallbackOnce(callback: () => void) {
  useEffect(() => {
    const future = InteractionManager.runAfterInteractions(callback);

    return () => {
      future.cancel();
    };
  }, [callback]);
}
