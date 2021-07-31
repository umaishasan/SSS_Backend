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
import {QuizClass2} from '../models';
import {QuizClass2Repository} from '../repositories';

export class QuizClass2Controller {
  constructor(
    @repository(QuizClass2Repository)
    public quizClass2Repository: QuizClass2Repository,
  ) { }

  @post('/quiz-class2s')
  @response(200, {
    description: 'QuizClass2 model instance',
    content: {'application/json': {schema: getModelSchemaRef(QuizClass2)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(QuizClass2, {
            title: 'NewQuizClass2',

          }),
        },
      },
    })
    quizClass2: QuizClass2,
  ): Promise<QuizClass2> {
    return this.quizClass2Repository.create(quizClass2);
  }

  @get('/quiz-class2s/count')
  @response(200, {
    description: 'QuizClass2 model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(QuizClass2) where?: Where<QuizClass2>,
  ): Promise<Count> {
    return this.quizClass2Repository.count(where);
  }

  @get('/quiz-class2s')
  @response(200, {
    description: 'Array of QuizClass2 model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(QuizClass2, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(QuizClass2) filter?: Filter<QuizClass2>,
  ): Promise<QuizClass2[]> {
    return this.quizClass2Repository.find(filter);
  }

  @patch('/quiz-class2s')
  @response(200, {
    description: 'QuizClass2 PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(QuizClass2, {partial: true}),
        },
      },
    })
    quizClass2: QuizClass2,
    @param.where(QuizClass2) where?: Where<QuizClass2>,
  ): Promise<Count> {
    return this.quizClass2Repository.updateAll(quizClass2, where);
  }

  @get('/quiz-class2s/{id}')
  @response(200, {
    description: 'QuizClass2 model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(QuizClass2, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: any,
    @param.filter(QuizClass2, {exclude: 'where'}) filter?: FilterExcludingWhere<QuizClass2>
  ): Promise<QuizClass2> {
    return this.quizClass2Repository.findById(id, filter);
  }

  @patch('/quiz-class2s/{id}')
  @response(204, {
    description: 'QuizClass2 PATCH success',
  })
  async updateById(
    @param.path.string('id') id: any,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(QuizClass2, {partial: true}),
        },
      },
    })
    quizClass2: QuizClass2,
  ): Promise<void> {
    await this.quizClass2Repository.updateById(id, quizClass2);
  }

  @put('/quiz-class2s/{id}')
  @response(204, {
    description: 'QuizClass2 PUT success',
  })
  async replaceById(
    @param.path.string('id') id: any,
    @requestBody() quizClass2: QuizClass2,
  ): Promise<void> {
    await this.quizClass2Repository.replaceById(id, quizClass2);
  }

  @del('/quiz-class2s/{id}')
  @response(204, {
    description: 'QuizClass2 DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.quizClass2Repository.deleteById(id);
  }
}
