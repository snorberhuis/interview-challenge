# Gilded Rose - Interview Challenge

This is the Gilded Rose Interview Challenge in TypeScript.

## Instructions for interviewer:

1. Set up the laptop for participant.
2. Explain the code:
   1. Gilded Rose is a Rpg Shop and has an inventory management system.
   2. Base Item is a parent class that provides all functionality for every item.
   3. Explain how SellIn and Quality is updated every day at the end of the Day
3. Ask to implement TODO 1:
   1. See if the interviewee brings up tests by themselves.
   2. See if the interviewee writes tests before implementing.
   3. The solution should be implemented.
4. Ask to implement TODO 2:
   1. See how tests cases are elicited
   2. See how overloading or inheritance is used.  
5. Ask to implement TODO 3:
   1. See if Domain knowledge is understood
   2. See how the participant talks about clean code.
   3. See if the participant wants to add documentation to the method

## Getting started

Install dependencies

```sh
npm install
```

## Running app
_You may need to install `ts-node`_

```sh
npx ts-node test/golden-master-text-test.ts
```

Or with number of days as args:
```sh
npx ts-node test/golden-master-text-test.ts 10
```

## Running tests

To run all tests

### Jest way

```sh
npm run test:jest
```

To run all tests in watch mode

```sh
npm run test:jest:watch
```

### Mocha way

```sh
npm run test:mocha
```
