import {Entity, model, property} from '@loopback/repository';

@model()
export class ResultClass4 extends Entity {
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

  constructor(data?: Partial<ResultClass4>) {
    super(data);
  }
}

export interface ResultClass4Relations {
  // describe navigational properties here
}

export type ResultClass4WithRelations = ResultClass4 & ResultClass4Relations;
