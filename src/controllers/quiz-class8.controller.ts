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
import {QuizClass8} from '../models';
import {QuizClass8Repository} from '../repositories';

export class QuizClass8Controller {
  constructor(
    @repository(QuizClass8Repository)
    public quizClass8Repository: QuizClass8Repository,
  ) { }

  @post('/quiz-class8s')
  @response(200, {
    description: 'QuizClass8 model instance',
    content: {'application/json': {schema: getModelSchemaRef(QuizClass8)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(QuizClass8, {
            title: 'NewQuizClass8',

          }),
        },
      },
    })
    quizClass8: QuizClass8,
  ): Promise<QuizClass8> {
    return this.quizClass8Repository.create(quizClass8);
  }

  @get('/quiz-class8s/count')
  @response(200, {
    description: 'QuizClass8 model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(QuizClass8) where?: Where<QuizClass8>,
  ): Promise<Count> {
    return this.quizClass8Repository.count(where);
  }

  @get('/quiz-class8s')
  @response(200, {
    description: 'Array of QuizClass8 model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(QuizClass8, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(QuizClass8) filter?: Filter<QuizClass8>,
  ): Promise<QuizClass8[]> {
    return this.quizClass8Repository.find(filter);
  }

  @patch('/quiz-class8s')
  @response(200, {
    description: 'QuizClass8 PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(QuizClass8, {partial: true}),
        },
      },
    })
    quizClass8: QuizClass8,
    @param.where(QuizClass8) where?: Where<QuizClass8>,
  ): Promise<Count> {
    return this.quizClass8Repository.updateAll(quizClass8, where);
  }

  @get('/quiz-class8s/{id}')
  @response(200, {
    description: 'QuizClass8 model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(QuizClass8, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: any,
    @param.filter(QuizClass8, {exclude: 'where'}) filter?: FilterExcludingWhere<QuizClass8>
  ): Promise<QuizClass8> {
    return this.quizClass8Repository.findById(id, filter);
  }

  @patch('/quiz-class8s/{id}')
  @response(204, {
    description: 'QuizClass8 PATCH success',
  })
  async updateById(
    @param.path.string('id') id: any,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(QuizClass8, {partial: true}),
        },
      },
    })
    quizClass8: QuizClass8,
  ): Promise<void> {
    await this.quizClass8Repository.updateById(id, quizClass8);
  }

  @put('/quiz-class8s/{id}')
  @response(204, {
    description: 'QuizClass8 PUT success',
  })
  async replaceById(
    @param.path.string('id') id: any,
    @requestBody() quizClass8: QuizClass8,
  ): Promise<void> {
    await this.quizClass8Repository.replaceById(id, quizClass8);
  }

  @del('/quiz-class8s/{id}')
  @response(204, {
    description: 'QuizClass8 DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.quizClass8Repository.deleteById(id);
  }
}
