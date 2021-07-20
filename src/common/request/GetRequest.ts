import { Request } from './Request';
import { ConnectionHTTP } from '../http';

export abstract class GetRequest extends Request {
  async execute(): Promise<any> {
    return await new ConnectionHTTP().get(this.url, this.config);
  }
}
