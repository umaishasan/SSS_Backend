import {Entity, model, property} from '@loopback/repository';

@model()
export class Class3 extends Entity {
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
  Sci: Buffer;

  @property({
    type: 'buffer',
    required: false,
  })
  Sst: Buffer;

  @property({
    type: 'buffer',
    required: false,
  })
  Isl: Buffer;

  @property({
    type: 'buffer',
    required: false,
  })
  Draw: Buffer;

  @property({
    type: 'buffer',
    required: false,
  })
  Sindhi: Buffer;

  @property({
    type: 'number',
    required: false,
  })
  Attendance: number;


  constructor(data?: Partial<Class3>) {
    super(data);
  }
}

export interface Class3Relations {
  // describe navigational properties here
}

export type Class3WithRelations = Class3 & Class3Relations;
