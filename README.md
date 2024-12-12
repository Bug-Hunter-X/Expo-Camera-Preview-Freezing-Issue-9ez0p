# Expo Camera Preview Freezing Bug

This repository demonstrates a bug in the Expo Camera API where the camera preview can freeze after a period of time or multiple component re-renders. The camera functionality itself continues to work (images can be captured), but the preview stops updating, resulting in a frozen display.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` or `yarn install` to install dependencies.
3. Run the app using `expo start`.
4. Use the app for an extended time, or repeatedly trigger component re-renders.  The preview may eventually freeze.

## Workaround and Solutions (See bugSolution.js)

The included `bugSolution.js` file contains a potential solution to this issue, described in the file's comments.