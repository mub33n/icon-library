
// requiring path and fs modules
const fs = require('fs');
const path = require('path');

// joining path of directory
const directoryPath = path.join(__dirname, '../Icons/ParkIT');
// passsing directoryPath and callback function
fs.readdir(directoryPath, (err, files) => {
  // handling error
  if (err) {
    return console.log(`Unable to scan directory: ${err}`);
  }
  // listing all files using forEach
  files.forEach((file) => {
    const fileName = (`${file.substring(0, file.indexOf('.'))}`).replace(/\-/g, ' ');
    const capitalize = fileName.replace(/(^\w{1})|(\s{1}\w{1})/g, (match) => match.toUpperCase());
    const removeBlanks = capitalize.replace(/\ /g, '');
    const first = `Pi${removeBlanks}`;
    const fullImport = `import ${first} from '../Icons/ParkIT/${removeBlanks}';`;

    fs.appendFile('1.js', `${fullImport}\r\n`, (err) => {
      if (err) throw err;
      // console.log('Saved!');
    });
  });

  files.forEach((file, i) => {
    const fileName = (`${file.substring(0, file.indexOf('.'))}`).replace(/\-/g, ' ');
    const capitalize = fileName.replace(/(^\w{1})|(\s{1}\w{1})/g, (match) => match.toUpperCase());
    const removeBlanks = `${capitalize.replace(/\ /g, '')}`;
    const first = `Pi${removeBlanks}`;
    const fullImport = `{id: ${i}, src: ${first}, title: "${removeBlanks}", tags: "No Tags Added", author: "Park IT", import: "${first}"},`;

    fs.appendFile('2.js', `${fullImport}\r\n`, (err) => {
      if (err) throw err;
      // console.log('Saved!');
    });
  });
});
