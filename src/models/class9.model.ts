import {Entity, model, property} from '@loopback/repository';

@model()
export class Class9 extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  user: string;

  @property({
    type: 'buffer',
    required: false,
  })
  Eng: Buffer;

  @property({
    type: 'buffer',
    required: false,
  })
  Urdu: Buffer;

  @property({
    type: 'buffer',
    required: false,
  })
  Math: Buffer;

  @property({
    type: 'buffer',
    required: false,
  })
  Che: Buffer;

  @property({
    type: 'buffer',
    required: false,
  })
  Pst: Buffer;

  @property({
    type: 'number',
    required: false,
  })
  Attendance: number;

  constructor(data?: Partial<Class9>) {
    super(data);
  }
}

export interface Class9Relations {
  // describe navigational properties here
}

export type Class9WithRelations = Class9 & Class9Relations;
