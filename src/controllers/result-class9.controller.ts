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
import {ResultClass9} from '../models';
import {ResultClass9Repository} from '../repositories';

export class ResultClass9Controller {
  constructor(
    @repository(ResultClass9Repository)
    public resultClass9Repository: ResultClass9Repository,
  ) { }

  @post('/result-class9s')
  @response(200, {
    description: 'ResultClass9 model instance',
    content: {'application/json': {schema: getModelSchemaRef(ResultClass9)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ResultClass9, {
            title: 'NewResultClass9',

          }),
        },
      },
    })
    resultClass9: ResultClass9,
  ): Promise<ResultClass9> {
    return this.resultClass9Repository.create(resultClass9);
  }

  @get('/result-class9s/count')
  @response(200, {
    description: 'ResultClass9 model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ResultClass9) where?: Where<ResultClass9>,
  ): Promise<Count> {
    return this.resultClass9Repository.count(where);
  }

  @get('/result-class9s')
  @response(200, {
    description: 'Array of ResultClass9 model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ResultClass9, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ResultClass9) filter?: Filter<ResultClass9>,
  ): Promise<ResultClass9[]> {
    return this.resultClass9Repository.find(filter);
  }

  @patch('/result-class9s')
  @response(200, {
    description: 'ResultClass9 PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ResultClass9, {partial: true}),
        },
      },
    })
    resultClass9: ResultClass9,
    @param.where(ResultClass9) where?: Where<ResultClass9>,
  ): Promise<Count> {
    return this.resultClass9Repository.updateAll(resultClass9, where);
  }

  @get('/result-class9s/{id}')
  @response(200, {
    description: 'ResultClass9 model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ResultClass9, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: any,
    @param.filter(ResultClass9, {exclude: 'where'}) filter?: FilterExcludingWhere<ResultClass9>
  ): Promise<ResultClass9> {
    return this.resultClass9Repository.findById(id, filter);
  }

  @patch('/result-class9s/{id}')
  @response(204, {
    description: 'ResultClass9 PATCH success',
  })
  async updateById(
    @param.path.string('id') id: any,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ResultClass9, {partial: true}),
        },
      },
    })
    resultClass9: ResultClass9,
  ): Promise<void> {
    await this.resultClass9Repository.updateById(id, resultClass9);
  }

  @put('/result-class9s/{id}')
  @response(204, {
    description: 'ResultClass9 PUT success',
  })
  async replaceById(
    @param.path.string('id') id: any,
    @requestBody() resultClass9: ResultClass9,
  ): Promise<void> {
    await this.resultClass9Repository.replaceById(id, resultClass9);
  }

  @del('/result-class9s/{id}')
  @response(204, {
    description: 'ResultClass9 DELETE success',
  })
  async deleteById(@param.path.string('id') id: any): Promise<void> {
    await this.resultClass9Repository.deleteById(id);
  }
}
