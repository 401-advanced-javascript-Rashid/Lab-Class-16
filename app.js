'use strict';

const events = require('./event');
const fileSystem = require('./file-system');
require('./logger.js');


let data = process.argv.pop();

if(data){

  fileSystem.capsLock(data);
  events.emit('log', 'To Upper Case Function !');

}