import { Request } from './Request';
import { ConnectionHTTP } from '../http';

export abstract class DeleteRequest extends Request {
  async execute(): Promise<any> {
    return await new ConnectionHTTP().delete(this.url, this.config);
  }
}
