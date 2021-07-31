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
import {ResultClass6} from '../models';
import {ResultClass6Repository} from '../repositories';

export class ResultClass6Controller {
  constructor(
    @repository(ResultClass6Repository)
    public resultClass6Repository: ResultClass6Repository,
  ) { }

  @post('/result-class6s')
  @response(200, {
    description: 'ResultClass6 model instance',
    content: {'application/json': {schema: getModelSchemaRef(ResultClass6)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ResultClass6, {
            title: 'NewResultClass6',

          }),
        },
      },
    })
    resultClass6: ResultClass6,
  ): Promise<ResultClass6> {
    return this.resultClass6Repository.create(resultClass6);
  }

  @get('/result-class6s/count')
  @response(200, {
    description: 'ResultClass6 model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ResultClass6) where?: Where<ResultClass6>,
  ): Promise<Count> {
    return this.resultClass6Repository.count(where);
  }

  @get('/result-class6s')
  @response(200, {
    description: 'Array of ResultClass6 model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ResultClass6, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ResultClass6) filter?: Filter<ResultClass6>,
  ): Promise<ResultClass6[]> {
    return this.resultClass6Repository.find(filter);
  }

  @patch('/result-class6s')
  @response(200, {
    description: 'ResultClass6 PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ResultClass6, {partial: true}),
        },
      },
    })
    resultClass6: ResultClass6,
    @param.where(ResultClass6) where?: Where<ResultClass6>,
  ): Promise<Count> {
    return this.resultClass6Repository.updateAll(resultClass6, where);
  }

  @get('/result-class6s/{id}')
  @response(200, {
    description: 'ResultClass6 model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ResultClass6, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: any,
    @param.filter(ResultClass6, {exclude: 'where'}) filter?: FilterExcludingWhere<ResultClass6>
  ): Promise<ResultClass6> {
    return this.resultClass6Repository.findById(id, filter);
  }

  @patch('/result-class6s/{id}')
  @response(204, {
    description: 'ResultClass6 PATCH success',
  })
  async updateById(
    @param.path.string('id') id: any,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ResultClass6, {partial: true}),
        },
      },
    })
    resultClass6: ResultClass6,
  ): Promise<void> {
    await this.resultClass6Repository.updateById(id, resultClass6);
  }

  @put('/result-class6s/{id}')
  @response(204, {
    description: 'ResultClass6 PUT success',
  })
  async replaceById(
    @param.path.string('id') id: any,
    @requestBody() resultClass6: ResultClass6,
  ): Promise<void> {
    await this.resultClass6Repository.replaceById(id, resultClass6);
  }

  @del('/result-class6s/{id}')
  @response(204, {
    description: 'ResultClass6 DELETE success',
  })
  async deleteById(@param.path.string('id') id: any): Promise<void> {
    await this.resultClass6Repository.deleteById(id);
  }
}
