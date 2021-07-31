import {Entity, model, property} from '@loopback/repository';

@model()
export class AllUser extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @property({
    type: 'string',
    required: true,
  })
  user: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;


  constructor(data?: Partial<AllUser>) {
    super(data);
  }
}

export interface AllUserRelations {
  // describe navigational properties here
}

export type AllUserWithRelations = AllUser & AllUserRelations;
