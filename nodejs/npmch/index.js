const chalk = require('chalk')
const validator = require('validator')
console.log(chalk.blue("hello world"));
console.log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);
const res = validator.isEmail("vikash@vk.com")
console.log(res ? chalk.green.inverse(res):chalk.red.inverse(res));