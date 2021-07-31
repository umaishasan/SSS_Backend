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
import {QuizClass5} from '../models';
import {QuizClass5Repository} from '../repositories';

export class QuizClass5Controller {
  constructor(
    @repository(QuizClass5Repository)
    public quizClass5Repository: QuizClass5Repository,
  ) { }

  @post('/quiz-class5s')
  @response(200, {
    description: 'QuizClass5 model instance',
    content: {'application/json': {schema: getModelSchemaRef(QuizClass5)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(QuizClass5, {
            title: 'NewQuizClass5',

          }),
        },
      },
    })
    quizClass5: QuizClass5,
  ): Promise<QuizClass5> {
    return this.quizClass5Repository.create(quizClass5);
  }

  @get('/quiz-class5s/count')
  @response(200, {
    description: 'QuizClass5 model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(QuizClass5) where?: Where<QuizClass5>,
  ): Promise<Count> {
    return this.quizClass5Repository.count(where);
  }

  @get('/quiz-class5s')
  @response(200, {
    description: 'Array of QuizClass5 model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(QuizClass5, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(QuizClass5) filter?: Filter<QuizClass5>,
  ): Promise<QuizClass5[]> {
    return this.quizClass5Repository.find(filter);
  }

  @patch('/quiz-class5s')
  @response(200, {
    description: 'QuizClass5 PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(QuizClass5, {partial: true}),
        },
      },
    })
    quizClass5: QuizClass5,
    @param.where(QuizClass5) where?: Where<QuizClass5>,
  ): Promise<Count> {
    return this.quizClass5Repository.updateAll(quizClass5, where);
  }

  @get('/quiz-class5s/{id}')
  @response(200, {
    description: 'QuizClass5 model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(QuizClass5, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: any,
    @param.filter(QuizClass5, {exclude: 'where'}) filter?: FilterExcludingWhere<QuizClass5>
  ): Promise<QuizClass5> {
    return this.quizClass5Repository.findById(id, filter);
  }

  @patch('/quiz-class5s/{id}')
  @response(204, {
    description: 'QuizClass5 PATCH success',
  })
  async updateById(
    @param.path.string('id') id: any,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(QuizClass5, {partial: true}),
        },
      },
    })
    quizClass5: QuizClass5,
  ): Promise<void> {
    await this.quizClass5Repository.updateById(id, quizClass5);
  }

  @put('/quiz-class5s/{id}')
  @response(204, {
    description: 'QuizClass5 PUT success',
  })
  async replaceById(
    @param.path.string('id') id: any,
    @requestBody() quizClass5: QuizClass5,
  ): Promise<void> {
    await this.quizClass5Repository.replaceById(id, quizClass5);
  }

  @del('/quiz-class5s/{id}')
  @response(204, {
    description: 'QuizClass5 DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.quizClass5Repository.deleteById(id);
  }
}
