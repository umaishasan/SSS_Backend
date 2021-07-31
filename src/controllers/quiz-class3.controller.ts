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
import {QuizClass3} from '../models';
import {QuizClass3Repository} from '../repositories';

export class QuizClass3Controller {
  constructor(
    @repository(QuizClass3Repository)
    public quizClass3Repository: QuizClass3Repository,
  ) { }

  @post('/quiz-class3s')
  @response(200, {
    description: 'QuizClass3 model instance',
    content: {'application/json': {schema: getModelSchemaRef(QuizClass3)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(QuizClass3, {
            title: 'NewQuizClass3',

          }),
        },
      },
    })
    quizClass3: QuizClass3,
  ): Promise<QuizClass3> {
    return this.quizClass3Repository.create(quizClass3);
  }

  @get('/quiz-class3s/count')
  @response(200, {
    description: 'QuizClass3 model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(QuizClass3) where?: Where<QuizClass3>,
  ): Promise<Count> {
    return this.quizClass3Repository.count(where);
  }

  @get('/quiz-class3s')
  @response(200, {
    description: 'Array of QuizClass3 model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(QuizClass3, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(QuizClass3) filter?: Filter<QuizClass3>,
  ): Promise<QuizClass3[]> {
    return this.quizClass3Repository.find(filter);
  }

  @patch('/quiz-class3s')
  @response(200, {
    description: 'QuizClass3 PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(QuizClass3, {partial: true}),
        },
      },
    })
    quizClass3: QuizClass3,
    @param.where(QuizClass3) where?: Where<QuizClass3>,
  ): Promise<Count> {
    return this.quizClass3Repository.updateAll(quizClass3, where);
  }

  @get('/quiz-class3s/{id}')
  @response(200, {
    description: 'QuizClass3 model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(QuizClass3, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: any,
    @param.filter(QuizClass3, {exclude: 'where'}) filter?: FilterExcludingWhere<QuizClass3>
  ): Promise<QuizClass3> {
    return this.quizClass3Repository.findById(id, filter);
  }

  @patch('/quiz-class3s/{id}')
  @response(204, {
    description: 'QuizClass3 PATCH success',
  })
  async updateById(
    @param.path.string('id') id: any,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(QuizClass3, {partial: true}),
        },
      },
    })
    quizClass3: QuizClass3,
  ): Promise<void> {
    await this.quizClass3Repository.updateById(id, quizClass3);
  }

  @put('/quiz-class3s/{id}')
  @response(204, {
    description: 'QuizClass3 PUT success',
  })
  async replaceById(
    @param.path.string('id') id: any,
    @requestBody() quizClass3: QuizClass3,
  ): Promise<void> {
    await this.quizClass3Repository.replaceById(id, quizClass3);
  }

  @del('/quiz-class3s/{id}')
  @response(204, {
    description: 'QuizClass3 DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.quizClass3Repository.deleteById(id);
  }
}
