import { ConnectionConfig } from '../http';
import { ResponseType } from './Request';

class GlobalRequest {
  private _globalConfig: ConnectionConfig = {
    headers: new Map<string, string>(),
    responseType: 'json',
    queryString: '',
    params: new Map<string, string>(),
    body: {},
  };

  addGlobalHeader(name: string, value: string): void {
    this._globalConfig.headers.set(name, value);
  }

  setGlobalResponseType(responseType: ResponseType): void {
    this._globalConfig.responseType = responseType;
  }

  get globalConfig() {
    return this._globalConfig;
  }
}

const i: GlobalRequest = new GlobalRequest();
export { i as GlobalRequest };
