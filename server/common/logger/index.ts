const log4js = require('log4js');
let fs_logger = require('fs');
const logRootPath = "./bin/logs"
//Remove old log files
if (fs_logger.existsSync(`${logRootPath}/service.log`)) {
  fs_logger.unlinkSync(`${logRootPath}/service.log`);
}

log4js.configure({
  appenders: { service: { type: 'file', filename: './bin/logs/service.log' } },
  categories: { default: { appenders: ['service'], level: 'info' } }
});

module.exports = log4js;