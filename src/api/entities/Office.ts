import { GetRequest } from '../../common';
import { AndreaniURL } from '../AndrianiURL';

export class Office {
  find(): OfficeFind {
    return new OfficeFind();
  }
}

class OfficeFind extends GetRequest {
  constructor() {
    super(AndreaniURL.on('offices').findByPK());
  }
}
