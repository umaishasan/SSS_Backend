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
import {ResultClass3} from '../models';
import {ResultClass3Repository} from '../repositories';

export class ResultClass3Controller {
  constructor(
    @repository(ResultClass3Repository)
    public resultClass3Repository: ResultClass3Repository,
  ) { }

  @post('/result-class3s')
  @response(200, {
    description: 'ResultClass3 model instance',
    content: {'application/json': {schema: getModelSchemaRef(ResultClass3)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ResultClass3, {
            title: 'NewResultClass3',

          }),
        },
      },
    })
    resultClass3: ResultClass3,
  ): Promise<ResultClass3> {
    return this.resultClass3Repository.create(resultClass3);
  }

  @get('/result-class3s/count')
  @response(200, {
    description: 'ResultClass3 model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ResultClass3) where?: Where<ResultClass3>,
  ): Promise<Count> {
    return this.resultClass3Repository.count(where);
  }

  @get('/result-class3s')
  @response(200, {
    description: 'Array of ResultClass3 model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ResultClass3, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ResultClass3) filter?: Filter<ResultClass3>,
  ): Promise<ResultClass3[]> {
    return this.resultClass3Repository.find(filter);
  }

  @patch('/result-class3s')
  @response(200, {
    description: 'ResultClass3 PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ResultClass3, {partial: true}),
        },
      },
    })
    resultClass3: ResultClass3,
    @param.where(ResultClass3) where?: Where<ResultClass3>,
  ): Promise<Count> {
    return this.resultClass3Repository.updateAll(resultClass3, where);
  }

  @get('/result-class3s/{id}')
  @response(200, {
    description: 'ResultClass3 model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ResultClass3, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: any,
    @param.filter(ResultClass3, {exclude: 'where'}) filter?: FilterExcludingWhere<ResultClass3>
  ): Promise<ResultClass3> {
    return this.resultClass3Repository.findById(id, filter);
  }

  @patch('/result-class3s/{id}')
  @response(204, {
    description: 'ResultClass3 PATCH success',
  })
  async updateById(
    @param.path.string('id') id: any,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ResultClass3, {partial: true}),
        },
      },
    })
    resultClass3: ResultClass3,
  ): Promise<void> {
    await this.resultClass3Repository.updateById(id, resultClass3);
  }

  @put('/result-class3s/{id}')
  @response(204, {
    description: 'ResultClass3 PUT success',
  })
  async replaceById(
    @param.path.string('id') id: any,
    @requestBody() resultClass3: ResultClass3,
  ): Promise<void> {
    await this.resultClass3Repository.replaceById(id, resultClass3);
  }

  @del('/result-class3s/{id}')
  @response(204, {
    description: 'ResultClass3 DELETE success',
  })
  async deleteById(@param.path.string('id') id: any): Promise<void> {
    await this.resultClass3Repository.deleteById(id);
  }
}
