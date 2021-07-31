import {Entity, model, property} from '@loopback/repository';

@model()
export class ResultClass10 extends Entity {
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
  Phy: number;

  @property({
    type: 'number',
    required: true,
  })
  Che: number;

  @property({
    type: 'number',
    required: true,
  })
  Isl: number;

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


  constructor(data?: Partial<ResultClass10>) {
    super(data);
  }
}

export interface ResultClass10Relations {
  // describe navigational properties here
}

export type ResultClass10WithRelations = ResultClass10 & ResultClass10Relations;
