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
import {QuizClass1} from '../models';
import {QuizClass1Repository} from '../repositories';

export class QuizClass1Controller {
  constructor(
    @repository(QuizClass1Repository)
    public quizClass1Repository: QuizClass1Repository,
  ) { }

  @post('/quiz-class1s')
  @response(200, {
    description: 'QuizClass1 model instance',
    content: {'application/json': {schema: getModelSchemaRef(QuizClass1)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(QuizClass1, {
            title: 'NewQuizClass1',

          }),
        },
      },
    })
    quizClass1: QuizClass1,
  ): Promise<QuizClass1> {
    return this.quizClass1Repository.create(quizClass1);
  }

  @get('/quiz-class1s/count')
  @response(200, {
    description: 'QuizClass1 model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(QuizClass1) where?: Where<QuizClass1>,
  ): Promise<Count> {
    return this.quizClass1Repository.count(where);
  }

  @get('/quiz-class1s')
  @response(200, {
    description: 'Array of QuizClass1 model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(QuizClass1, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(QuizClass1) filter?: Filter<QuizClass1>,
  ): Promise<QuizClass1[]> {
    return this.quizClass1Repository.find(filter);
  }

  @patch('/quiz-class1s')
  @response(200, {
    description: 'QuizClass1 PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(QuizClass1, {partial: true}),
        },
      },
    })
    quizClass1: QuizClass1,
    @param.where(QuizClass1) where?: Where<QuizClass1>,
  ): Promise<Count> {
    return this.quizClass1Repository.updateAll(quizClass1, where);
  }

  @get('/quiz-class1s/{id}')
  @response(200, {
    description: 'QuizClass1 model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(QuizClass1, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: any,
    @param.filter(QuizClass1, {exclude: 'where'}) filter?: FilterExcludingWhere<QuizClass1>
  ): Promise<QuizClass1> {
    return this.quizClass1Repository.findById(id, filter);
  }

  @patch('/quiz-class1s/{id}')
  @response(204, {
    description: 'QuizClass1 PATCH success',
  })
  async updateById(
    @param.path.string('id') id: any,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(QuizClass1, {partial: true}),
        },
      },
    })
    quizClass1: QuizClass1,
  ): Promise<void> {
    await this.quizClass1Repository.updateById(id, quizClass1);
  }

  @put('/quiz-class1s/{id}')
  @response(204, {
    description: 'QuizClass1 PUT success',
  })
  async replaceById(
    @param.path.string('id') id: any,
    @requestBody() quizClass1: QuizClass1,
  ): Promise<void> {
    await this.quizClass1Repository.replaceById(id, quizClass1);
  }

  @del('/quiz-class1s/{id}')
  @response(204, {
    description: 'QuizClass1 DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.quizClass1Repository.deleteById(id);
  }
}
