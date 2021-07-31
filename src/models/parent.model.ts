import {Entity, model, property} from '@loopback/repository';

@model()
export class Parent extends Entity {
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
  SaveAmount: number;

  @property({
    type: 'number',
    required: false,
  })
  DeductAmount: number;


  constructor(data?: Partial<Parent>) {
    super(data);
  }
}

export interface ParentRelations {
  // describe navigational properties here
}

export type ParentWithRelations = Parent & ParentRelations;
