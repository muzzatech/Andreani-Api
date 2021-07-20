import { OrderModel, QuoteDispatch, FindDispatch } from '../src';

export const url = '';
export const username = '';
export const password = '';
export const andreaniNumber = '460900035603219';
export const paransDispatch: FindDispatch = {
  codigoCliente: '',
  idDeProducto: '',
};
export const quoteDispatch: QuoteDispatch = {
  cpDestino: 4218,
  contrato: '',
  'bultos[0][volumen]': 2.5,
  'bultos[0][kilos]': 3,
  'bultos[0][pesoAforado]': 4,
  'bultos[0][valorDeclarado]': 10,
};
export const newOrder: OrderModel = {
  contrato: '',
  origen: {
    postal: {
      codigoPostal: '',
      calle: '',
      localidad: '',
      pais: '',
      numero: '',
      componentesDeDireccion: [{ meta: '', contenido: '' }],
    },
  },
  destino: {
    postal: {
      codigoPostal: '',
      calle: '',
      numero: '',
      localidad: '',
      pais: '',
    },
  },
  remitente: {
    nombreCompleto: '',
    email: '',
    documentoTipo: '',
    documentoNumero: '',
    telefonos: [{ tipo: 1, numero: '' }],
  },
  destinatario: [
    {
      nombreCompleto: '',
      email: '',
      documentoTipo: '',
      documentoNumero: '',
      telefonos: [{ tipo: 2, numero: '' }],
    },
  ],
  productoAEntregar: '',
  bultos: [
    {
      kilos: 10,
      largoCm: 63,
      altoCm: 46,
      anchoCm: 35,
      volumenCm: 55,
      valorDeclaradoConImpuestos: 78999.0,
      referencia: [{ meta: 'idCLiente', contenido: '12758' }],
    },
  ],
};
