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
import {QuizClass6} from '../models';
import {QuizClass6Repository} from '../repositories';

export class QuizClass6Controller {
  constructor(
    @repository(QuizClass6Repository)
    public quizClass6Repository: QuizClass6Repository,
  ) { }

  @post('/quiz-class6s')
  @response(200, {
    description: 'QuizClass6 model instance',
    content: {'application/json': {schema: getModelSchemaRef(QuizClass6)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(QuizClass6, {
            title: 'NewQuizClass6',

          }),
        },
      },
    })
    quizClass6: QuizClass6,
  ): Promise<QuizClass6> {
    return this.quizClass6Repository.create(quizClass6);
  }

  @get('/quiz-class6s/count')
  @response(200, {
    description: 'QuizClass6 model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(QuizClass6) where?: Where<QuizClass6>,
  ): Promise<Count> {
    return this.quizClass6Repository.count(where);
  }

  @get('/quiz-class6s')
  @response(200, {
    description: 'Array of QuizClass6 model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(QuizClass6, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(QuizClass6) filter?: Filter<QuizClass6>,
  ): Promise<QuizClass6[]> {
    return this.quizClass6Repository.find(filter);
  }

  @patch('/quiz-class6s')
  @response(200, {
    description: 'QuizClass6 PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(QuizClass6, {partial: true}),
        },
      },
    })
    quizClass6: QuizClass6,
    @param.where(QuizClass6) where?: Where<QuizClass6>,
  ): Promise<Count> {
    return this.quizClass6Repository.updateAll(quizClass6, where);
  }

  @get('/quiz-class6s/{id}')
  @response(200, {
    description: 'QuizClass6 model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(QuizClass6, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: any,
    @param.filter(QuizClass6, {exclude: 'where'}) filter?: FilterExcludingWhere<QuizClass6>
  ): Promise<QuizClass6> {
    return this.quizClass6Repository.findById(id, filter);
  }

  @patch('/quiz-class6s/{id}')
  @response(204, {
    description: 'QuizClass6 PATCH success',
  })
  async updateById(
    @param.path.string('id') id: any,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(QuizClass6, {partial: true}),
        },
      },
    })
    quizClass6: QuizClass6,
  ): Promise<void> {
    await this.quizClass6Repository.updateById(id, quizClass6);
  }

  @put('/quiz-class6s/{id}')
  @response(204, {
    description: 'QuizClass6 PUT success',
  })
  async replaceById(
    @param.path.string('id') id: any,
    @requestBody() quizClass6: QuizClass6,
  ): Promise<void> {
    await this.quizClass6Repository.replaceById(id, quizClass6);
  }

  @del('/quiz-class6s/{id}')
  @response(204, {
    description: 'QuizClass6 DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.quizClass6Repository.deleteById(id);
  }
}
