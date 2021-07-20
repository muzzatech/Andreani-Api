import { GetRequest } from '../../common';
import { AndreaniURL } from '../AndrianiURL';

export class Province {
  find(): ProvinceFind {
    return new ProvinceFind();
  }
}

class ProvinceFind extends GetRequest {
  constructor() {
    super(AndreaniURL.on('provinces').findByPK());
  }
}
