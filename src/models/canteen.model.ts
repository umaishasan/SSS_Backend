import {Entity, model, property} from '@loopback/repository';

@model()
export class Canteen extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  gender: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  phone: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @property({
    type: 'number',
    required: false,
  })
  wallet: number;


  constructor(data?: Partial<Canteen>) {
    super(data);
  }
}

export interface CanteenRelations {
  // describe navigational properties here
}

export type CanteenWithRelations = Canteen & CanteenRelations;
