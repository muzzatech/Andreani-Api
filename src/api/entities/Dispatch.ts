import { GetRequest } from '../../common';
import { AndreaniURL } from '../AndrianiURL';
import { AndreaniNumber, QuoteDispatch, FindDispatch } from '../models';

export class Dispatch {
  findByPK(id: AndreaniNumber): DispatchFindByPK {
    return new DispatchFindByPK(id);
  }

  findByRefer(id: AndreaniNumber): DispatchFindByPKRefer {
    return new DispatchFindByPKRefer(id);
  }

  findByTraces(id: AndreaniNumber): DispatchFindByTraces {
    return new DispatchFindByTraces(id);
  }

  find(params: FindDispatch): DispatchFind {
    return new DispatchFind(params);
  }

  tariff(params: QuoteDispatch): DispatchTariff {
    return new DispatchTariff(params);
  }
}

class DispatchFindByPK extends GetRequest {
  constructor(id: AndreaniNumber) {
    super(AndreaniURL.on('dispatch').findByPK());
    this.setQueryString(id);
  }
}

class DispatchFind extends GetRequest {
  constructor(params: FindDispatch | any) {
    super(AndreaniURL.on('dispatch').find());
    Object.entries(params).forEach((param) => {
      const [key, value] = param;
      this.addParam(key, <string>value);
    });
  }
}

class DispatchFindByPKRefer extends GetRequest {
  constructor(id: AndreaniNumber) {
    super(AndreaniURL.on('dispatch').findByPK());
    this.setQueryString(`${id}/multimedia`);
  }
}

class DispatchFindByTraces extends GetRequest {
  constructor(id: AndreaniNumber) {
    super(AndreaniURL.on('dispatch').findByPK());
    this.setQueryString(`${id}/trazas`);
  }
}

class DispatchTariff extends GetRequest {
  constructor(params: QuoteDispatch | any) {
    super(AndreaniURL.on('tariff').find());
    Object.entries(params).forEach((param) => {
      const [key, value] = param;
      this.addParam(key, <string>value);
    });
  }
}
