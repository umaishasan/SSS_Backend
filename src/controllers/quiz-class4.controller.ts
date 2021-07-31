import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param, patch, post, put, requestBody,
  response
} from '@loopback/rest';
import {QuizClass4} from '../models';
import {QuizClass4Repository} from '../repositories';

export class QuizClass4Controller {
  constructor(
    @repository(QuizClass4Repository)
    public quizClass4Repository: QuizClass4Repository,
  ) { }

  @post('/quiz-class4s')
  @response(200, {
    description: 'QuizClass4 model instance',
    content: {'application/json': {schema: getModelSchemaRef(QuizClass4)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(QuizClass4, {
            title: 'NewQuizClass4',

          }),
        },
      },
    })
    quizClass4: QuizClass4,
  ): Promise<QuizClass4> {
    return this.quizClass4Repository.create(quizClass4);
  }

  @get('/quiz-class4s/count')
  @response(200, {
    description: 'QuizClass4 model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(QuizClass4) where?: Where<QuizClass4>,
  ): Promise<Count> {
    return this.quizClass4Repository.count(where);
  }

  @get('/quiz-class4s')
  @response(200, {
    description: 'Array of QuizClass4 model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(QuizClass4, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(QuizClass4) filter?: Filter<QuizClass4>,
  ): Promise<QuizClass4[]> {
    return this.quizClass4Repository.find(filter);
  }

  @patch('/quiz-class4s')
  @response(200, {
    description: 'QuizClass4 PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(QuizClass4, {partial: true}),
        },
      },
    })
    quizClass4: QuizClass4,
    @param.where(QuizClass4) where?: Where<QuizClass4>,
  ): Promise<Count> {
    return this.quizClass4Repository.updateAll(quizClass4, where);
  }

  @get('/quiz-class4s/{id}')
  @response(200, {
    description: 'QuizClass4 model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(QuizClass4, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: any,
    @param.filter(QuizClass4, {exclude: 'where'}) filter?: FilterExcludingWhere<QuizClass4>
  ): Promise<QuizClass4> {
    return this.quizClass4Repository.findById(id, filter);
  }

  @patch('/quiz-class4s/{id}')
  @response(204, {
    description: 'QuizClass4 PATCH success',
  })
  async updateById(
    @param.path.string('id') id: any,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(QuizClass4, {partial: true}),
        },
      },
    })
    quizClass4: QuizClass4,
  ): Promise<void> {
    await this.quizClass4Repository.updateById(id, quizClass4);
  }

  @put('/quiz-class4s/{id}')
  @response(204, {
    description: 'QuizClass4 PUT success',
  })
  async replaceById(
    @param.path.string('id') id: any,
    @requestBody() quizClass4: QuizClass4,
  ): Promise<void> {
    await this.quizClass4Repository.replaceById(id, quizClass4);
  }

  @del('/quiz-class4s/{id}')
  @response(204, {
    description: 'QuizClass4 DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.quizClass4Repository.deleteById(id);
  }
}
