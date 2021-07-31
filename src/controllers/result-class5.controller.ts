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
import {ResultClass5} from '../models';
import {ResultClass5Repository} from '../repositories';

export class ResultClass5Controller {
  constructor(
    @repository(ResultClass5Repository)
    public resultClass5Repository: ResultClass5Repository,
  ) { }

  @post('/result-class5s')
  @response(200, {
    description: 'ResultClass5 model instance',
    content: {'application/json': {schema: getModelSchemaRef(ResultClass5)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ResultClass5, {
            title: 'NewResultClass5',

          }),
        },
      },
    })
    resultClass5: ResultClass5,
  ): Promise<ResultClass5> {
    return this.resultClass5Repository.create(resultClass5);
  }

  @get('/result-class5s/count')
  @response(200, {
    description: 'ResultClass5 model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ResultClass5) where?: Where<ResultClass5>,
  ): Promise<Count> {
    return this.resultClass5Repository.count(where);
  }

  @get('/result-class5s')
  @response(200, {
    description: 'Array of ResultClass5 model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ResultClass5, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ResultClass5) filter?: Filter<ResultClass5>,
  ): Promise<ResultClass5[]> {
    return this.resultClass5Repository.find(filter);
  }

  @patch('/result-class5s')
  @response(200, {
    description: 'ResultClass5 PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ResultClass5, {partial: true}),
        },
      },
    })
    resultClass5: ResultClass5,
    @param.where(ResultClass5) where?: Where<ResultClass5>,
  ): Promise<Count> {
    return this.resultClass5Repository.updateAll(resultClass5, where);
  }

  @get('/result-class5s/{id}')
  @response(200, {
    description: 'ResultClass5 model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ResultClass5, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: any,
    @param.filter(ResultClass5, {exclude: 'where'}) filter?: FilterExcludingWhere<ResultClass5>
  ): Promise<ResultClass5> {
    return this.resultClass5Repository.findById(id, filter);
  }

  @patch('/result-class5s/{id}')
  @response(204, {
    description: 'ResultClass5 PATCH success',
  })
  async updateById(
    @param.path.string('id') id: any,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ResultClass5, {partial: true}),
        },
      },
    })
    resultClass5: ResultClass5,
  ): Promise<void> {
    await this.resultClass5Repository.updateById(id, resultClass5);
  }

  @put('/result-class5s/{id}')
  @response(204, {
    description: 'ResultClass5 PUT success',
  })
  async replaceById(
    @param.path.string('id') id: any,
    @requestBody() resultClass5: ResultClass5,
  ): Promise<void> {
    await this.resultClass5Repository.replaceById(id, resultClass5);
  }

  @del('/result-class5s/{id}')
  @response(204, {
    description: 'ResultClass5 DELETE success',
  })
  async deleteById(@param.path.string('id') id: any): Promise<void> {
    await this.resultClass5Repository.deleteById(id);
  }
}
