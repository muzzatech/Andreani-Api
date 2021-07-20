import { Request } from './Request';
import { ConnectionHTTP } from '../http';

export abstract class PutRequest extends Request {
  async execute(): Promise<any> {
    return await new ConnectionHTTP().put(
      this.url,
      this.config.body,
      this.config,
    );
  }
}
