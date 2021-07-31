import {Entity, model, property} from '@loopback/repository';

@model()
export class ResultClass7 extends Entity {
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
  Sci: number;

  @property({
    type: 'number',
    required: true,
  })
  Sst: number;

  @property({
    type: 'number',
    required: true,
  })
  Isl: number;

  @property({
    type: 'number',
    required: true,
  })
  Draw: number;

  @property({
    type: 'number',
    required: true,
  })
  Sindhi: number;

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

  constructor(data?: Partial<ResultClass7>) {
    super(data);
  }
}

export interface ResultClass7Relations {
  // describe navigational properties here
}

export type ResultClass7WithRelations = ResultClass7 & ResultClass7Relations;
