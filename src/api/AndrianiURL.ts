type AndreaniEntity =
  | 'dispatch'
  | 'orders'
  | 'authorize'
  | 'provinces'
  | 'offices'
  | 'tariff';
type AndreaniMethod = 'findBy' | 'find' | 'create' | 'login';

interface AndreaniEntityURL {
  findByPK(): string;
  find(): string;
  create(): string;
  login(): string;
}

const EntityParser = new Map<AndreaniEntity, string>();
EntityParser.set('dispatch', 'envios');
EntityParser.set('orders', 'ordenes-de-envio');
EntityParser.set('provinces', 'regiones');
EntityParser.set('offices', 'sucursales');
EntityParser.set('tariff', 'tarifas');

class AndreaniURL {
  private host!: string;
  private protocol!: string;
  private basePath!: string;

  protected getMethod(method: AndreaniMethod): string {
    let select!: string;
    switch (method) {
      case 'find':
        select = '?';
        break;
      case 'findBy':
        select = '/';
        break;
      case 'create':
      case 'login':
        select = '';
        break;
      default:
        throw new Error('selected method not available');
        break;
    }
    return select;
  }

  protected createURL(entity: AndreaniEntity, method: AndreaniMethod): string {
    let baseUrl = `${this.protocol}://${this.host}`;
    if (entity === 'authorize') {
      baseUrl = baseUrl.concat('/login');
    } else {
      const basePathHelper = entity === 'orders' ? `/v2` : `/${this.basePath}`;
      const entityParse: any = `/${EntityParser.get(entity)}`;
      baseUrl = baseUrl.concat(
        basePathHelper,
        entityParse,
        this.getMethod(method),
      );
    }
    return baseUrl;
  }

  on(entity: AndreaniEntity): AndreaniEntityURL {
    const findByPK = () => this.createURL(entity, 'findBy');
    const find = () => this.createURL(entity, 'find');
    const create = () => this.createURL(entity, 'create');
    const login = () => this.createURL(entity, 'login');
    return {
      findByPK,
      find,
      create,
      login,
    };
  }

  configure(host: string, protocol = 'https', basePath = 'v1'): void {
    this.host = host;
    this.protocol = protocol;
    this.basePath = basePath;
  }
}

const i: AndreaniURL = new AndreaniURL();
export { i as AndreaniURL };
