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
import {ResultClass1} from '../models';
import {ResultClass1Repository} from '../repositories';

export class ResultClass1Controller {
  constructor(
    @repository(ResultClass1Repository)
    public resultClass1Repository: ResultClass1Repository,
  ) { }

  @post('/result-class1s')
  @response(200, {
    description: 'ResultClass1 model instance',
    content: {'application/json': {schema: getModelSchemaRef(ResultClass1)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ResultClass1, {
            title: 'NewResultClass1',

          }),
        },
      },
    })
    resultClass1: ResultClass1,
  ): Promise<ResultClass1> {
    return this.resultClass1Repository.create(resultClass1);
  }

  @get('/result-class1s/count')
  @response(200, {
    description: 'ResultClass1 model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ResultClass1) where?: Where<ResultClass1>,
  ): Promise<Count> {
    return this.resultClass1Repository.count(where);
  }

  @get('/result-class1s')
  @response(200, {
    description: 'Array of ResultClass1 model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ResultClass1, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ResultClass1) filter?: Filter<ResultClass1>,
  ): Promise<ResultClass1[]> {
    return this.resultClass1Repository.find(filter);
  }

  @patch('/result-class1s')
  @response(200, {
    description: 'ResultClass1 PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ResultClass1, {partial: true}),
        },
      },
    })
    resultClass1: ResultClass1,
    @param.where(ResultClass1) where?: Where<ResultClass1>,
  ): Promise<Count> {
    return this.resultClass1Repository.updateAll(resultClass1, where);
  }

  @get('/result-class1s/{id}')
  @response(200, {
    description: 'ResultClass1 model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ResultClass1, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: any,
    @param.filter(ResultClass1, {exclude: 'where'}) filter?: FilterExcludingWhere<ResultClass1>
  ): Promise<ResultClass1> {
    return this.resultClass1Repository.findById(id, filter);
  }

  @patch('/result-class1s/{id}')
  @response(204, {
    description: 'ResultClass1 PATCH success',
  })
  async updateById(
    @param.path.string('id') id: any,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ResultClass1, {partial: true}),
        },
      },
    })
    resultClass1: ResultClass1,
  ): Promise<void> {
    await this.resultClass1Repository.updateById(id, resultClass1);
  }

  @put('/result-class1s/{id}')
  @response(204, {
    description: 'ResultClass1 PUT success',
  })
  async replaceById(
    @param.path.string('id') id: any,
    @requestBody() resultClass1: ResultClass1,
  ): Promise<void> {
    await this.resultClass1Repository.replaceById(id, resultClass1);
  }

  @del('/result-class1s/{id}')
  @response(204, {
    description: 'ResultClass1 DELETE success',
  })
  async deleteById(@param.path.string('id') id: any): Promise<void> {
    await this.resultClass1Repository.deleteById(id);
  }
}
