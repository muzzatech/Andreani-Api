import { GetRequest, PostRequest } from '../../common';
import { AndreaniURL } from '../AndrianiURL';
import { OrderModel, AndreaniNumber } from '../models';

export class Order {
  findByPK(id: AndreaniNumber): OrderFindByPk {
    return new OrderFindByPk(id);
  }

  create(body: OrderModel | any): OrderCreate {
    return new OrderCreate(body);
  }

  findByLabel(id: AndreaniNumber): OrderFindByPKLabel {
    return new OrderFindByPKLabel(id);
  }
}

class OrderFindByPKLabel extends GetRequest {
  constructor(id: AndreaniNumber) {
    super(AndreaniURL.on('orders').findByPK());
    this.setQueryString(`${id}/etiquetas`);
  }
}

class OrderCreate extends PostRequest {
  constructor(body: OrderModel | any) {
    super(AndreaniURL.on('orders').create());
    this.setBody(body);
  }
}

class OrderFindByPk extends GetRequest {
  constructor(id: AndreaniNumber) {
    super(AndreaniURL.on('orders').findByPK());
    this.setQueryString(id);
  }
}
