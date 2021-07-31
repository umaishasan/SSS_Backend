import {Entity, model, property} from '@loopback/repository';

@model()
export class ResultClass9 extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  Id: number;

  @property({
    type: 'string',
    required: true,
  })
  Name: string;

  @property({
    type: 'number',
    required: true,
  })
  Eng: number;

  @property({
    type: 'number',
    required: true,
  })
  Urdu: number;

  @property({
    type: 'number',
    required: true,
  })
  Math: number;

  @property({
    type: 'number',
    required: true,
  })
  Che: number;

  @property({
    type: 'number',
    required: true,
  })
  Pst: number;

  @property({
    type: 'number',
    required: true,
  })
  Total: number;

  @property({
    type: 'number',
    required: true,
  })
  Obtained: number;

  @property({
    type: 'number',
    required: true,
  })
  Percentage: number;

  @property({
    type: 'string',
    required: true,
  })
  Grade: string;

  @property({
    type: 'number',
    required: false,
  })
  QuizScore: number;

  constructor(data?: Partial<ResultClass9>) {
    super(data);
  }
}

export interface ResultClass9Relations {
  // describe navigational properties here
}

export type ResultClass9WithRelations = ResultClass9 & ResultClass9Relations;
