import { GetRequest } from '../../common';
import { AndreaniURL } from '../AndrianiURL';
import { Base64 } from '../../utils';

export class Authorize {
  login(username: string, password: string): AuthorizeLogin {
    return new AuthorizeLogin(username, password);
  }
}

class AuthorizeLogin extends GetRequest {
  constructor(username: string, password: string) {
    super(AndreaniURL.on('authorize').login());
    this.addHeader(
      'Authorization',
      `Basic ${Base64.encode(`${username}:${password}`)}`,
    );
  }
}
