export interface OrderModel {
  contrato: string;
  tipoServicio?: string;
  sucursalClienteID?: string;
  origen: AndreaniReferencia;
  destino: AndreaniReferencia;
  remitente: Persona;
  destinatario: Persona | Array<Persona>;
  bultos: Bultos | Array<Bultos>;
  remito?: Remito;
  centroDeCostos?: string;
  productoAEntregar?: string;
  productoARetirar?: string;
  tipoProducto?: string;
  categoriaFacturacion?: string;
  pagoDestino?: number;
  valorACobrar?: number;
  fechaDeEntraga?: Fecha;
}

type AndreaniReferencia = {
  postal?: Postal;
  sucursal?: Sucursal;
};

type Postal = {
  codigoPostal: string;
  calle: string;
  numero: string;
  localidad: string;
  region?: string;
  pais: string;
  componentesDeDireccion?: Array<Componentes>;
};

type Componentes = {
  meta: string;
  contenido: string;
};

type Sucursal = {
  id: string;
};

type Persona = {
  nombreCompleto: string;
  email: string;
  documentoTipo: string;
  documentoNumero: string;
  telefonos: Array<Telefono>;
};

type Bultos = {
  kilos: number;
  largoCm?: number;
  altoCm?: number;
  anchoCm?: number;
  volumenCm: number;
  valorDeclaradoSinImpuestos?: number;
  valorDeclaradoConImpuestos?: number;
  referencia: Array<Referencia>;
};

type Referencia = {
  meta: string;
  contenido: string;
};

type Telefono = {
  tipo: 1 | 2 | 3 | 4;
  numero: string;
};

type Remito = {
  numeroRemito: string;
  remitoComplementarios: Array<string>;
};

type Fecha = {
  fecha: number;
  horaDesde: number;
  horaHasta: number;
};
