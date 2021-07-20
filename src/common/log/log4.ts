import { Logger, getLogger, configure } from 'log4js';
import { Logger as Log } from './Logger';

export class Log4js implements Log {
  private _log: Logger;

  constructor(name: string) {
    this._log = configure({
      appenders: {
        out: { type: 'stdout' },
      },
      categories: {
        default: { appenders: ['out'], level: 'all' },
      },
    }).getLogger(name);
  }

  info(message: any, ...params: Array<any>): void {
    this._log.info(message, ...params);
  }

  error(message: any, ...params: Array<any>): void {
    this._log.error(message, ...params);
  }

  fatal(message: any, ...params: Array<any>): void {
    this._log.fatal(message, ...params);
  }

  warn(message: any, ...params: Array<any>): void {
    this._log.warn(message, ...params);
  }

  debug(message: any, ...params: Array<any>): void {
    this._log.debug(message, ...params);
  }

  trace(message: any, ...params: Array<any>): void {
    this._log.trace(message, ...params);
  }
}
