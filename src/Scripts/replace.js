const replace = require('replace');

// use:

replace({
  regex: ' width={64} height={64} ',
  replacement: ' width={24} height={24} ',
  paths: ['../../src/Icons/Orion'],
  recursive: true,
  silent: false,
});
