import {Entity, model, property} from '@loopback/repository';

@model()
export class QuizClass10 extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  QNo: string;

  @property({
    type: 'string',
    required: false,
  })
  Subject: string;

  @property({
    type: 'string',
    required: false,
  })
  Q: string;

  @property({
    type: 'string',
    required: false,
  })
  Option1: string;

  @property({
    type: 'string',
    required: false,
  })
  Option2: string;

  @property({
    type: 'string',
    required: false,
  })
  Ans: string;


  constructor(data?: Partial<QuizClass10>) {
    super(data);
  }
}

export interface QuizClass10Relations {
  // describe navigational properties here
}

export type QuizClass10WithRelations = QuizClass10 & QuizClass10Relations;
