# MuzzaTech Andreani API

### This library response to the documentation => **[Andreani-API](https://developers.andreani.com/documentacion)**

## Basic 

### Configuration

```typescript
  Andreani.configure('url'); // set host api
```

### import

```typescript
  import Andreani, { andreaniNumber, QuoteDispatch, OrderModel, FindDispatch } from '@muzzatech/andreani-api'
```

### Models

- AndreaniNumber
- QuoteDispatch (interface)
- OrderModel (interface)
- FindDispatch (interface)

# API

## Login and set token

```typescript
  await Andreani.authirize().login(your.username,your.password);

  // set token with response
  Andreani.setToken(response.header['x-authorization-token']);
```

## Get Traces

```typescript
  await Andreani.dispatch().findByTraces(id: AndreaniNumber).execute();
```

## Get Dispatch

```typescript
  await Andreani.dispatch().findByPk(id: AndreaniNumber).execute();
```

## Find Dispatch

```typescript
  await Andreani.dispatch().find(params: FindDispatch).execute();
```

## Tariff Dispatch

```typescript
  await Andreani.dispatch().tariff(params: QuoteDispatch).execute();
```

## List Provinces

```typescript
  await Andreani.provinces().find().execute();
```

## Tariff Offices

```typescript
  await Andreani.offices().find().execute();
```

## GET PDF (MULTIMEDIA)

```typescript
  await Andreani.dispatch().findByRefer(id: AndreaniNumber).execute();
```

## CREATE ORDER

```typescript
  await Andreani.orders().create(newOrder: OrderModel).execute();
```

## Get Order Created 

```typescript
  await Andreani.orders().findByPK(id: AndreaniNumber).execute();
```

## GET Order by Label

```typescript
  await Andreani.orders().findByLabel(id: AndreaniNumber).execute();
```

## PLUS 


### How can you add more packages, in TARIFF DISPATCH, in this case use the package interface to help

```typescript
export const quoteDispatch: QuoteDispatch = {
  cpDestino: 4612,
  contrato: '400018110',
  'bultos[0][volumen]': 2.5,
  'bultos[0][kilos]': 3,
  'bultos[0][pesoAforado]': 4,
  'bultos[0][valorDeclarado]': 10,
};

const quoteDispatchs: QuoteDispatchPackage = {
  ...quoteDispatch,
  'bultos[1][volumen]': 2.5,
  'bultos[1][kilos]': 3,
  'bultos[1][pesoAforado]': 4,
  'bultos[1][valorDeclarado]': 10,
};
```