import { Dispatch, Order, Authorize, Province, Office } from './entities';
import { AndreaniURL } from './AndrianiURL';
import { GlobalRequest } from '../common';

const messageTokenError = `Token not configured, please login to get one`;

class Andreani {
  private token!: string;

  authorize(): Authorize {
    return new Authorize();
  }

  orders(): Order {
    if (!this.token) throw new Error(messageTokenError);
    return new Order();
  }

  dispatch(): Dispatch {
    if (!this.token) throw new Error(messageTokenError);
    return new Dispatch();
  }

  provinces(): Province {
    if (!this.token) throw new Error(messageTokenError);
    return new Province();
  }

  offices(): Office {
    if (!this.token) throw new Error(messageTokenError);
    return new Office();
  }

  setToken(token: string) {
    this.token = token;
    GlobalRequest.addGlobalHeader('x-authorization-token', this.token);
  }

  configure(host: string) {
    AndreaniURL.configure(host);
    GlobalRequest.addGlobalHeader(`Content-Type`, `application/json`);
    GlobalRequest.addGlobalHeader(`Accept`, 'application/json');
  }
}

const i: Andreani = new Andreani();
export default i as Andreani;
