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
import {ResultClass10} from '../models';
import {ResultClass10Repository} from '../repositories';

export class ResultClass10Controller {
  constructor(
    @repository(ResultClass10Repository)
    public resultClass10Repository: ResultClass10Repository,
  ) { }

  @post('/result-class10s')
  @response(200, {
    description: 'ResultClass10 model instance',
    content: {'application/json': {schema: getModelSchemaRef(ResultClass10)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ResultClass10, {
            title: 'NewResultClass10',

          }),
        },
      },
    })
    resultClass10: ResultClass10,
  ): Promise<ResultClass10> {
    return this.resultClass10Repository.create(resultClass10);
  }

  @get('/result-class10s/count')
  @response(200, {
    description: 'ResultClass10 model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ResultClass10) where?: Where<ResultClass10>,
  ): Promise<Count> {
    return this.resultClass10Repository.count(where);
  }

  @get('/result-class10s')
  @response(200, {
    description: 'Array of ResultClass10 model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ResultClass10, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ResultClass10) filter?: Filter<ResultClass10>,
  ): Promise<ResultClass10[]> {
    return this.resultClass10Repository.find(filter);
  }

  @patch('/result-class10s')
  @response(200, {
    description: 'ResultClass10 PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ResultClass10, {partial: true}),
        },
      },
    })
    resultClass10: ResultClass10,
    @param.where(ResultClass10) where?: Where<ResultClass10>,
  ): Promise<Count> {
    return this.resultClass10Repository.updateAll(resultClass10, where);
  }

  @get('/result-class10s/{id}')
  @response(200, {
    description: 'ResultClass10 model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ResultClass10, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: any,
    @param.filter(ResultClass10, {exclude: 'where'}) filter?: FilterExcludingWhere<ResultClass10>
  ): Promise<ResultClass10> {
    return this.resultClass10Repository.findById(id, filter);
  }

  @patch('/result-class10s/{id}')
  @response(204, {
    description: 'ResultClass10 PATCH success',
  })
  async updateById(
    @param.path.string('id') id: any,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ResultClass10, {partial: true}),
        },
      },
    })
    resultClass10: ResultClass10,
  ): Promise<void> {
    await this.resultClass10Repository.updateById(id, resultClass10);
  }

  @put('/result-class10s/{id}')
  @response(204, {
    description: 'ResultClass10 PUT success',
  })
  async replaceById(
    @param.path.string('id') id: any,
    @requestBody() resultClass10: ResultClass10,
  ): Promise<void> {
    await this.resultClass10Repository.replaceById(id, resultClass10);
  }

  @del('/result-class10s/{id}')
  @response(204, {
    description: 'ResultClass10 DELETE success',
  })
  async deleteById(@param.path.string('id') id: any): Promise<void> {
    await this.resultClass10Repository.deleteById(id);
  }
}
