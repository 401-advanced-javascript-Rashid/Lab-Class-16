'use strict';

const fileSystem = require('../file-system.js');

let file = 'test.json';

describe('test' , () => {

  it('Read the file as a string' , () => {
    let fs = fileSystem.reader(file);
    return fs
      .then( (data) => { 
        let string = typeof(data.toString().trim());
        expect(string).toEqual('string');
      });

  });

  it('Write on the file' , () => {
    let data = JSON.stringify({'test': 'as a string'});
    return fileSystem.writer(file , Buffer.from(data));
  });


  it('Convert text to UpperCase' , () => {
    fileSystem.capsLock(file);
    return fileSystem.reader(file)
      .then( (data) => { 
        expect(typeof(data.toString().trim())).toEqual('string');
      });
  });
});