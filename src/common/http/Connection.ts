import axios, { AxiosRequestConfig } from 'axios';
import { LogManager, Logger } from '../log';

export type ConnectionConfig = {
  headers: Map<string, string>;
  responseType:
    | 'arraybuffer'
    | 'blob'
    | 'document'
    | 'json'
    | 'text'
    | 'stream';
  queryString: string;
  params: Map<string, string>;
  body: any;
};

export class ConnectionHTTP {
  private _log: Logger;

  constructor() {
    this._log = LogManager.getLogger('ConnectionHTTP');
  }

  async post(url: string, data: any, config: ConnectionConfig): Promise<any> {
    try {
      url = this.parseParams(url, config.params);
      url = this.parseQueryString(url, config.queryString);
      this._log.info(`['POST'] -> ${url}`);
      return await axios.post(url, data, this.generateAxiosConfig(config));
    } catch (error) {
      this._log.error(error.response?.data || error.message);
      throw error;
    }
  }

  async get(url: string, config: ConnectionConfig): Promise<any> {
    try {
      url = this.parseParams(url, config.params);
      url = this.parseQueryString(url, config.queryString);
      this._log.info(`['GET'] -> ${url}`);
      return await axios.get(url, this.generateAxiosConfig(config));
    } catch (error) {
      this._log.error(error.response?.data || error.message);
      throw error;
    }
  }

  async put(url: string, data: any, config: ConnectionConfig): Promise<any> {
    try {
      url = this.parseParams(url, config.params);
      url = this.parseQueryString(url, config.queryString);
      this._log.info(`['PUT'] -> ${url}`);
      return await axios.put(url, data, this.generateAxiosConfig(config));
    } catch (error) {
      this._log.error(error.response?.data || error.message);
      throw error;
    }
  }

  async delete(url: string, config: ConnectionConfig): Promise<any> {
    try {
      url = this.parseParams(url, config.params);
      url = this.parseQueryString(url, config.queryString);
      this._log.info(`['DELETE'] -> ${url}`);
      return await axios.delete(url, this.generateAxiosConfig(config));
    } catch (error) {
      this._log.error(error.response?.data || error.message);
      throw error;
    }
  }

  private parseParams(url: string, params: Map<string, string>): string {
    let Hurl = url;
    if (params.size) {
      for (const name of params.keys()) {
        url = url.concat(
          `${
            url.endsWith('&')
              ? `${name}=${params.get(name)}&`
              : `?${name}=${params.get(name)}&`
          }`,
        );
      }
      Hurl = url.slice(0, -1);
    }
    return Hurl;
  }

  private parseQueryString(url: string, queryString: string): string {
    return queryString
      ? url.concat(url.endsWith('/') ? queryString : `/${queryString}`)
      : url;
  }

  private generateAxiosConfig(config: ConnectionConfig): AxiosRequestConfig {
    const configAxios: AxiosRequestConfig = {
      responseType: config.responseType,
      headers: {},
    };
    config.headers.forEach((value: string, key: string) => {
      // eslint-disable-next-line security/detect-object-injection
      configAxios.headers[key] = value;
    });
    return configAxios;
  }
}
