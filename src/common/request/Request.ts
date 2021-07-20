import { ConnectionConfig } from '../http';
import { GlobalRequest } from './Global';

export type ResponseType =
  | 'arraybuffer'
  | 'blob'
  | 'document'
  | 'json'
  | 'text'
  | 'stream';

export abstract class Request {
  protected readonly url: string;

  protected readonly _config: ConnectionConfig = {
    headers: new Map<string, string>(),
    responseType: 'json',
    queryString: '',
    params: new Map<string, string>(),
    body: {},
  };

  constructor(url: string) {
    this.url = url;
    GlobalRequest.globalConfig.headers.forEach((value: string, key: string) => {
      this._config.headers.set(key, value);
    });
    this._config.responseType = GlobalRequest.globalConfig.responseType;
  }

  addHeader(name: string, value: string): Request {
    this._config.headers.set(name, value);
    return this;
  }

  addParam(name: string, value: string): Request {
    this._config.params.set(name, value);
    return this;
  }

  setQueryString(query: string): Request {
    this._config.queryString = query;
    return this;
  }

  setBody(body: any): Request {
    this.config.body = body;
    return this;
  }

  addQueryString(query: string): Request {
    this._config.queryString.concat(
      this._config.queryString.endsWith('/') ? query : `/${query}`,
    );
    return this;
  }

  setResponseType(responseType: ResponseType): Request {
    this.config.responseType = responseType;
    return this;
  }

  get config() {
    return this._config;
  }

  abstract execute(): Promise<any>;
}
