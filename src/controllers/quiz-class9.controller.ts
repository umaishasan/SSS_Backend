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
import {QuizClass9} from '../models';
import {QuizClass9Repository} from '../repositories';

export class QuizClass9Controller {
  constructor(
    @repository(QuizClass9Repository)
    public quizClass9Repository: QuizClass9Repository,
  ) { }

  @post('/quiz-class9s')
  @response(200, {
    description: 'QuizClass9 model instance',
    content: {'application/json': {schema: getModelSchemaRef(QuizClass9)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(QuizClass9, {
            title: 'NewQuizClass9',

          }),
        },
      },
    })
    quizClass9: QuizClass9,
  ): Promise<QuizClass9> {
    return this.quizClass9Repository.create(quizClass9);
  }

  @get('/quiz-class9s/count')
  @response(200, {
    description: 'QuizClass9 model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(QuizClass9) where?: Where<QuizClass9>,
  ): Promise<Count> {
    return this.quizClass9Repository.count(where);
  }

  @get('/quiz-class9s')
  @response(200, {
    description: 'Array of QuizClass9 model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(QuizClass9, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(QuizClass9) filter?: Filter<QuizClass9>,
  ): Promise<QuizClass9[]> {
    return this.quizClass9Repository.find(filter);
  }

  @patch('/quiz-class9s')
  @response(200, {
    description: 'QuizClass9 PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(QuizClass9, {partial: true}),
        },
      },
    })
    quizClass9: QuizClass9,
    @param.where(QuizClass9) where?: Where<QuizClass9>,
  ): Promise<Count> {
    return this.quizClass9Repository.updateAll(quizClass9, where);
  }

  @get('/quiz-class9s/{id}')
  @response(200, {
    description: 'QuizClass9 model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(QuizClass9, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: any,
    @param.filter(QuizClass9, {exclude: 'where'}) filter?: FilterExcludingWhere<QuizClass9>
  ): Promise<QuizClass9> {
    return this.quizClass9Repository.findById(id, filter);
  }

  @patch('/quiz-class9s/{id}')
  @response(204, {
    description: 'QuizClass9 PATCH success',
  })
  async updateById(
    @param.path.string('id') id: any,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(QuizClass9, {partial: true}),
        },
      },
    })
    quizClass9: QuizClass9,
  ): Promise<void> {
    await this.quizClass9Repository.updateById(id, quizClass9);
  }

  @put('/quiz-class9s/{id}')
  @response(204, {
    description: 'QuizClass9 PUT success',
  })
  async replaceById(
    @param.path.string('id') id: any,
    @requestBody() quizClass9: QuizClass9,
  ): Promise<void> {
    await this.quizClass9Repository.replaceById(id, quizClass9);
  }

  @del('/quiz-class9s/{id}')
  @response(204, {
    description: 'QuizClass9 DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.quizClass9Repository.deleteById(id);
  }
}
