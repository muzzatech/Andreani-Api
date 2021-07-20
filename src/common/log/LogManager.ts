import { Logger } from './Logger';
import { Log4js } from './log4';

class LogManager {
  getLogger(name: string): Logger {
    return new Log4js(name);
  }
}

const i: LogManager = new LogManager();
export { i as LogManager };
