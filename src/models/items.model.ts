import {Entity, model, property} from '@loopback/repository';

@model()
export class Items extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  product_id: number;

  @property({
    type: 'string',
    required: true,
  })
  product_name: string;

  @property({
    type: 'number',
    required: true,
  })
  product_price: number;

  @property({
    type: 'number',
    required: true,
  })
  quantity: number;

  constructor(data?: Partial<Items>) {
    super(data);
  }
}

export interface ItemsRelations {
  // describe navigational properties here
}

export type ItemsWithRelations = Items & ItemsRelations;
