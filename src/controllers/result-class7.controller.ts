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
import {ResultClass7} from '../models';
import {ResultClass7Repository} from '../repositories';

export class ResultClass7Controller {
  constructor(
    @repository(ResultClass7Repository)
    public resultClass7Repository: ResultClass7Repository,
  ) { }

  @post('/result-class7s')
  @response(200, {
    description: 'ResultClass7 model instance',
    content: {'application/json': {schema: getModelSchemaRef(ResultClass7)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ResultClass7, {
            title: 'NewResultClass7',

          }),
        },
      },
    })
    resultClass7: ResultClass7,
  ): Promise<ResultClass7> {
    return this.resultClass7Repository.create(resultClass7);
  }

  @get('/result-class7s/count')
  @response(200, {
    description: 'ResultClass7 model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ResultClass7) where?: Where<ResultClass7>,
  ): Promise<Count> {
    return this.resultClass7Repository.count(where);
  }

  @get('/result-class7s')
  @response(200, {
    description: 'Array of ResultClass7 model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ResultClass7, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ResultClass7) filter?: Filter<ResultClass7>,
  ): Promise<ResultClass7[]> {
    return this.resultClass7Repository.find(filter);
  }

  @patch('/result-class7s')
  @response(200, {
    description: 'ResultClass7 PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ResultClass7, {partial: true}),
        },
      },
    })
    resultClass7: ResultClass7,
    @param.where(ResultClass7) where?: Where<ResultClass7>,
  ): Promise<Count> {
    return this.resultClass7Repository.updateAll(resultClass7, where);
  }

  @get('/result-class7s/{id}')
  @response(200, {
    description: 'ResultClass7 model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ResultClass7, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: any,
    @param.filter(ResultClass7, {exclude: 'where'}) filter?: FilterExcludingWhere<ResultClass7>
  ): Promise<ResultClass7> {
    return this.resultClass7Repository.findById(id, filter);
  }

  @patch('/result-class7s/{id}')
  @response(204, {
    description: 'ResultClass7 PATCH success',
  })
  async updateById(
    @param.path.string('id') id: any,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ResultClass7, {partial: true}),
        },
      },
    })
    resultClass7: ResultClass7,
  ): Promise<void> {
    await this.resultClass7Repository.updateById(id, resultClass7);
  }

  @put('/result-class7s/{id}')
  @response(204, {
    description: 'ResultClass7 PUT success',
  })
  async replaceById(
    @param.path.string('id') id: any,
    @requestBody() resultClass7: ResultClass7,
  ): Promise<void> {
    await this.resultClass7Repository.replaceById(id, resultClass7);
  }

  @del('/result-class7s/{id}')
  @response(204, {
    description: 'ResultClass7 DELETE success',
  })
  async deleteById(@param.path.string('id') id: any): Promise<void> {
    await this.resultClass7Repository.deleteById(id);
  }
}
