import { Request } from './Request';
import { ConnectionHTTP } from '../http';

export abstract class PostRequest extends Request {
  async execute(): Promise<any> {
    return await new ConnectionHTTP().post(
      this.url,
      this.config.body,
      this.config,
    );
  }
}
