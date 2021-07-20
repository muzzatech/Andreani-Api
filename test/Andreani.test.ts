import Andreani from '../src';
import {
  andreaniNumber,
  newOrder,
  password,
  username,
  quoteDispatch,
  paransDispatch,
  url,
} from './constants';

describe('ANDREANI TEST', () => {
  beforeAll(async () => {
    Andreani.configure(url);
    const response = await Andreani.authorize()
      .login(username, password)
      .execute();

    expect(response.status).toBe(200);
    expect(response.headers).toHaveProperty('x-authorization-token');

    Andreani.setToken(response.headers['x-authorization-token']);
  });

  test('GET TRACES', async () => {
    const response = await Andreani.dispatch()
      .findByTraces(andreaniNumber)
      .execute();

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('eventos');
  });

  test('GET DISPATCH', async () => {
    const response = await Andreani.dispatch()
      .findByPK(andreaniNumber)
      .execute();

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('numeroDeTracking');
    expect(response.data).toHaveProperty('contrato');
    expect(response.data).toHaveProperty('estado');
  });

  test('GET DISPATCH BY PARAMS', async () => {
    try {
      const response = await Andreani.dispatch().find(paransDispatch).execute();
      expect(response.status).toBe(200);
    } catch (error) {
      expect(404).toBe(404);
    }
  });

  test('GET TARIFF DISPATCH', async () => {
    const response = await Andreani.dispatch().tariff(quoteDispatch).execute();

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('tarifaSinIva');
    expect(response.data).toHaveProperty('pesoAforado');
  });

  test('LIST PROVINCES', async () => {
    const response = await Andreani.provinces().find().execute();

    expect(response.status).toBe(200);
  });

  test('LIST OFFICES', async () => {
    const response = await Andreani.offices().find().execute();

    expect(response.status).toBe(200);
  });

  test('GET DISPATCH REFER', async () => {
    const response = await Andreani.dispatch()
      .findByRefer(andreaniNumber)
      .execute();

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('numeroDeEnvio');
    expect(response.data).toHaveProperty('multimedia');
  });

  test('CREATE ORDER', async () => {
    const response = await Andreani.orders().create(newOrder).execute();

    expect(response.status).toBe(202);
    expect(response.data).toHaveProperty('estado');
    expect(response.data).toHaveProperty('sucursalDeDistribucion');
    expect(response.data).toHaveProperty('sucursalDeRendicion');
  });

  test('GET ORDER', async () => {
    const response = await Andreani.orders().findByPK(andreaniNumber).execute();

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('estado');
    expect(response.data).toHaveProperty('tipo');
    expect(response.data).toHaveProperty('sucursalDeDistribucion');
    expect(response.data).toHaveProperty('sucursalDeRendicion');
  });

  test('GET ORDER LABEL', async () => {
    const response = await Andreani.orders()
      .findByLabel(andreaniNumber)
      .addHeader('Content-Type', 'Application/pdf')
      .execute();

    expect(response.status).toBe(200);
  });
});
