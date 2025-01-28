# React useEffect Hook Runs on Every Render Despite Dependencies

This repository demonstrates a common, yet subtle bug in React's `useEffect` hook.  The bug occurs when the effect function's closure changes on each render, causing the effect to run unnecessarily, even if the dependencies haven't changed.

## The Problem

The `useEffect` hook in the `bug.js` file is intended to log a message whenever the `count` state variable changes.  However, due to the way the effect function is defined, it rerenders even when `count` remains the same, leading to excessive logging.

## The Solution

The solution, in `bugSolution.js`, involves using a `useCallback` hook to memoize the effect function, ensuring that the same function is used across renders as long as the dependencies haven't changed.