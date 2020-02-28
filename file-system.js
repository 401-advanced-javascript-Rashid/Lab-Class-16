'use strict';

const fs = require('fs');
const util = require('util');
const read = util.promisify(fs.readFile) ;
const write = util.promisify(fs.writeFile) ;
const events = require('./event.js');
require('./logger.js');


const reader = (file) => {
  try{
    events.emit('log', 'Reading!');
    return read(file).then( (data) => {
      return data ;
    });
  }catch(e){
    return events.emit('error' , e);
  }

};

const writer = (file, data) => {
  try{
    events.emit('log', 'Writing!');
    return write(file , data);
  }catch(e){
    return events.emit('error' , e);
  }
};

const capsLock = (file) => {
  events.emit('log', 'ToUpperCase!');
  fs.readFile( file, (err, data) => {
    if(err) { 
      throw err; 
    }

    events.emit('Done' , 'Read');
    let text = data.toString().toUpperCase();

    events.emit('Done' , 'ToUpperCase function');
    let buffer = Buffer.from(text);
    fs.writeFile( file, buffer, (err, data) => {
      if(err) { 
        throw err; 
      }
      events.emit('Done' , `It's Saved!`);
    });
  });
};


module.exports = {reader , writer ,capsLock} ;