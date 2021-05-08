# react-native-use-idle-once

Hook to report once interactions have ran (idle) or to run a callback once interactions have ran (idle).

## Installation

```shell
yarn install react-native-use-idle-once
```

## Usage

Re-render once, once it's idle.

```typescript

/**
 * Uses the interaction manager to force a re-render of components that include
 * this hook, for example to start new interactions. Only reports once.
 */
import { useIdleOnce } from 'react-native-use-idle-once'
```

Call a callback once, once it's idle.

```typescript

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
import { useIdleCallbackOnce } from 'react-native-use-idle-once'
```