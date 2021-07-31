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
import {QuizClass7} from '../models';
import {QuizClass7Repository} from '../repositories';

export class QuizClass7Controller {
  constructor(
    @repository(QuizClass7Repository)
    public quizClass7Repository: QuizClass7Repository,
  ) { }

  @post('/quiz-class7s')
  @response(200, {
    description: 'QuizClass7 model instance',
    content: {'application/json': {schema: getModelSchemaRef(QuizClass7)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(QuizClass7, {
            title: 'NewQuizClass7',

          }),
        },
      },
    })
    quizClass7: QuizClass7,
  ): Promise<QuizClass7> {
    return this.quizClass7Repository.create(quizClass7);
  }

  @get('/quiz-class7s/count')
  @response(200, {
    description: 'QuizClass7 model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(QuizClass7) where?: Where<QuizClass7>,
  ): Promise<Count> {
    return this.quizClass7Repository.count(where);
  }

  @get('/quiz-class7s')
  @response(200, {
    description: 'Array of QuizClass7 model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(QuizClass7, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(QuizClass7) filter?: Filter<QuizClass7>,
  ): Promise<QuizClass7[]> {
    return this.quizClass7Repository.find(filter);
  }

  @patch('/quiz-class7s')
  @response(200, {
    description: 'QuizClass7 PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(QuizClass7, {partial: true}),
        },
      },
    })
    quizClass7: QuizClass7,
    @param.where(QuizClass7) where?: Where<QuizClass7>,
  ): Promise<Count> {
    return this.quizClass7Repository.updateAll(quizClass7, where);
  }

  @get('/quiz-class7s/{id}')
  @response(200, {
    description: 'QuizClass7 model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(QuizClass7, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: any,
    @param.filter(QuizClass7, {exclude: 'where'}) filter?: FilterExcludingWhere<QuizClass7>
  ): Promise<QuizClass7> {
    return this.quizClass7Repository.findById(id, filter);
  }

  @patch('/quiz-class7s/{id}')
  @response(204, {
    description: 'QuizClass7 PATCH success',
  })
  async updateById(
    @param.path.string('id') id: any,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(QuizClass7, {partial: true}),
        },
      },
    })
    quizClass7: QuizClass7,
  ): Promise<void> {
    await this.quizClass7Repository.updateById(id, quizClass7);
  }

  @put('/quiz-class7s/{id}')
  @response(204, {
    description: 'QuizClass7 PUT success',
  })
  async replaceById(
    @param.path.string('id') id: any,
    @requestBody() quizClass7: QuizClass7,
  ): Promise<void> {
    await this.quizClass7Repository.replaceById(id, quizClass7);
  }

  @del('/quiz-class7s/{id}')
  @response(204, {
    description: 'QuizClass7 DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.quizClass7Repository.deleteById(id);
  }
}
