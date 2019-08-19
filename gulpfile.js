const fs = require('fs');

async function asyncAwaitTask() {
  const { version } = fs.readFileSync('package.json', 'utf-8');
  console.log(fs.readFileSync('package.json', 'utf-8'));
  console.log('ppp', version);
  await Promise.resolve('some result');
}

exports.default = asyncAwaitTask;