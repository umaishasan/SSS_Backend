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
import {ResultClass8} from '../models';
import {ResultClass8Repository} from '../repositories';

export class ResultClass8Controller {
  constructor(
    @repository(ResultClass8Repository)
    public resultClass8Repository: ResultClass8Repository,
  ) { }

  @post('/result-class8s')
  @response(200, {
    description: 'ResultClass8 model instance',
    content: {'application/json': {schema: getModelSchemaRef(ResultClass8)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ResultClass8, {
            title: 'NewResultClass8',

          }),
        },
      },
    })
    resultClass8: ResultClass8,
  ): Promise<ResultClass8> {
    return this.resultClass8Repository.create(resultClass8);
  }

  @get('/result-class8s/count')
  @response(200, {
    description: 'ResultClass8 model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ResultClass8) where?: Where<ResultClass8>,
  ): Promise<Count> {
    return this.resultClass8Repository.count(where);
  }

  @get('/result-class8s')
  @response(200, {
    description: 'Array of ResultClass8 model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ResultClass8, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ResultClass8) filter?: Filter<ResultClass8>,
  ): Promise<ResultClass8[]> {
    return this.resultClass8Repository.find(filter);
  }

  @patch('/result-class8s')
  @response(200, {
    description: 'ResultClass8 PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ResultClass8, {partial: true}),
        },
      },
    })
    resultClass8: ResultClass8,
    @param.where(ResultClass8) where?: Where<ResultClass8>,
  ): Promise<Count> {
    return this.resultClass8Repository.updateAll(resultClass8, where);
  }

  @get('/result-class8s/{id}')
  @response(200, {
    description: 'ResultClass8 model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ResultClass8, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: any,
    @param.filter(ResultClass8, {exclude: 'where'}) filter?: FilterExcludingWhere<ResultClass8>
  ): Promise<ResultClass8> {
    return this.resultClass8Repository.findById(id, filter);
  }

  @patch('/result-class8s/{id}')
  @response(204, {
    description: 'ResultClass8 PATCH success',
  })
  async updateById(
    @param.path.string('id') id: any,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ResultClass8, {partial: true}),
        },
      },
    })
    resultClass8: ResultClass8,
  ): Promise<void> {
    await this.resultClass8Repository.updateById(id, resultClass8);
  }

  @put('/result-class8s/{id}')
  @response(204, {
    description: 'ResultClass8 PUT success',
  })
  async replaceById(
    @param.path.string('id') id: any,
    @requestBody() resultClass8: ResultClass8,
  ): Promise<void> {
    await this.resultClass8Repository.replaceById(id, resultClass8);
  }

  @del('/result-class8s/{id}')
  @response(204, {
    description: 'ResultClass8 DELETE success',
  })
  async deleteById(@param.path.string('id') id: any): Promise<void> {
    await this.resultClass8Repository.deleteById(id);
  }
}
