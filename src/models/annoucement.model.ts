import {Entity, model, property} from '@loopback/repository';

@model()
export class Annoucement extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  annoucement: string;


  constructor(data?: Partial<Annoucement>) {
    super(data);
  }
}

export interface AnnoucementRelations {
  // describe navigational properties here
}

export type AnnoucementWithRelations = Annoucement & AnnoucementRelations;
