export interface QuoteDispatch {
  pais?: string;
  cpDestino: number;
  contrato: string;
  cliente?: string;
  sucursalOrigen?: string;
  'bultos[0][largoCm]'?: number;
  'bultos[0][anchoCm]'?: number;
  'bultos[0][altoCm]'?: number;
  'bultos[0][volumen]': number;
  'bultos[0][kilos]': number;
  'bultos[0][pesoAforado]': number;
  'bultos[0][valorDeclarado]': number;
  'bultos[0][categoria]'?: number;
}

export interface QuoteDispatchPackage {
  [bultos: string]: number | string | undefined;
}
