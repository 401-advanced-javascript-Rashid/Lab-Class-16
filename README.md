# LAB-16 Event Driven Applications

## Author: Rashid-Alsawalqa

## Node.js Event Emitter

- Node.js core API is based on asynchronous event-driven architecture in which certain kind of objects called emitters periodically emit events that cause listener objects to be called.

- Node.js natively provides us with a useful module called EventEmitter that allows us to get started incorporating Event-Driven Programming in our project right away.

- We access the EventEmitter class through the events module. Once imported we’ll need to create a new object from the class to start using it.

##### const EventEmitter = require('events').EventEmitter;
##### const myEventEmitter = new EventEmitter;

- There will likely come a time when you want to remove an event listener from an event. This could be for performance reasons (the event is no longer needed) or to avoid memory leaks (if an event listener references an object that is no longer needed, it won’t be able to be garbage-collected. This can lead to a build up of unnecessary objects).

- To remove event listeners in EventEmitter we can use the removeListener or removeAllListeners method. It’s important to note that in the EventEmitter that comes built-in with Node you must pass a reference to the exact function you wish to remove when using the removeListener method.

- When the EventEmitter object emits an event, all of the functions attached to that specific event are called synchronously. All values returned by the called listeners are ignored and will be discarded.

## Links and Resources

- [submission PR](https://github.com/401-advanced-javascript-Rashid/Lab-Class-16/pull/1)
- [ci/cd]()

## Setup

  -  eslint: 6.8.0
  -  jest: 25.1.0

## How to initialize/run your application (where applicable)

- npm run test 
- npm run lint
- nodemon 

## UML 
