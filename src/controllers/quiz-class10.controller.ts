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
import {QuizClass10} from '../models';
import {QuizClass10Repository} from '../repositories';

export class QuizClass10Controller {
  constructor(
    @repository(QuizClass10Repository)
    public quizClass10Repository: QuizClass10Repository,
  ) { }

  @post('/quiz-class10s')
  @response(200, {
    description: 'QuizClass10 model instance',
    content: {'application/json': {schema: getModelSchemaRef(QuizClass10)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(QuizClass10, {
            title: 'NewQuizClass10',

          }),
        },
      },
    })
    quizClass10: QuizClass10,
  ): Promise<QuizClass10> {
    return this.quizClass10Repository.create(quizClass10);
  }

  @get('/quiz-class10s/count')
  @response(200, {
    description: 'QuizClass10 model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(QuizClass10) where?: Where<QuizClass10>,
  ): Promise<Count> {
    return this.quizClass10Repository.count(where);
  }

  @get('/quiz-class10s')
  @response(200, {
    description: 'Array of QuizClass10 model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(QuizClass10, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(QuizClass10) filter?: Filter<QuizClass10>,
  ): Promise<QuizClass10[]> {
    return this.quizClass10Repository.find(filter);
  }

  @patch('/quiz-class10s')
  @response(200, {
    description: 'QuizClass10 PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(QuizClass10, {partial: true}),
        },
      },
    })
    quizClass10: QuizClass10,
    @param.where(QuizClass10) where?: Where<QuizClass10>,
  ): Promise<Count> {
    return this.quizClass10Repository.updateAll(quizClass10, where);
  }

  @get('/quiz-class10s/{id}')
  @response(200, {
    description: 'QuizClass10 model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(QuizClass10, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: any,
    @param.filter(QuizClass10, {exclude: 'where'}) filter?: FilterExcludingWhere<QuizClass10>
  ): Promise<QuizClass10> {
    return this.quizClass10Repository.findById(id, filter);
  }

  @patch('/quiz-class10s/{id}')
  @response(204, {
    description: 'QuizClass10 PATCH success',
  })
  async updateById(
    @param.path.string('id') id: any,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(QuizClass10, {partial: true}),
        },
      },
    })
    quizClass10: QuizClass10,
  ): Promise<void> {
    await this.quizClass10Repository.updateById(id, quizClass10);
  }

  @put('/quiz-class10s/{id}')
  @response(204, {
    description: 'QuizClass10 PUT success',
  })
  async replaceById(
    @param.path.string('id') id: any,
    @requestBody() quizClass10: QuizClass10,
  ): Promise<void> {
    await this.quizClass10Repository.replaceById(id, quizClass10);
  }

  @del('/quiz-class10s/{id}')
  @response(204, {
    description: 'QuizClass10 DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.quizClass10Repository.deleteById(id);
  }
}
