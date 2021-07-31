import {Entity, model, property} from '@loopback/repository';

@model()
export class Student extends Entity {
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
  username: string;

  @property({
    type: 'string',
    required: true,
  })
  gender: string;

  @property({
    type: 'number',
    required: true,
  })
  age: number;

  @property({
    type: 'number',
    required: true,
  })
  class: number;

  @property({
    type: 'string',
    required: true,
  })
  section: string;

  @property({
    type: 'string',
  })
  qrString?: string;

  @property({
    type: 'array',
    itemType: 'string',
  })
  selectedItems?: string[];

  @property({
    type: 'string',
  })
  studentsPic?: string;

  @property({
    type: 'number',
  })
  ItemAmount?: number;

  @property({
    type: 'buffer',
  })
  Voucher?: Buffer;

  @property({
    type: 'string',
  })
  parentNAME?: string;

  @property({
    type: 'string',
  })
  parentID: string;

  constructor(data?: Partial<Student>) {
    super(data);
  }
}

export interface StudentRelations {
  // describe navigational properties here
}

export type StudentWithRelations = Student & StudentRelations;
