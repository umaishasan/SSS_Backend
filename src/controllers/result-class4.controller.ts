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
import {ResultClass4} from '../models';
import {ResultClass4Repository} from '../repositories';

export class ResultClass4Controller {
  constructor(
    @repository(ResultClass4Repository)
    public resultClass4Repository: ResultClass4Repository,
  ) { }

  @post('/result-class4s')
  @response(200, {
    description: 'ResultClass4 model instance',
    content: {'application/json': {schema: getModelSchemaRef(ResultClass4)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ResultClass4, {
            title: 'NewResultClass4',

          }),
        },
      },
    })
    resultClass4: ResultClass4,
  ): Promise<ResultClass4> {
    return this.resultClass4Repository.create(resultClass4);
  }

  @get('/result-class4s/count')
  @response(200, {
    description: 'ResultClass4 model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ResultClass4) where?: Where<ResultClass4>,
  ): Promise<Count> {
    return this.resultClass4Repository.count(where);
  }

  @get('/result-class4s')
  @response(200, {
    description: 'Array of ResultClass4 model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ResultClass4, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ResultClass4) filter?: Filter<ResultClass4>,
  ): Promise<ResultClass4[]> {
    return this.resultClass4Repository.find(filter);
  }

  @patch('/result-class4s')
  @response(200, {
    description: 'ResultClass4 PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ResultClass4, {partial: true}),
        },
      },
    })
    resultClass4: ResultClass4,
    @param.where(ResultClass4) where?: Where<ResultClass4>,
  ): Promise<Count> {
    return this.resultClass4Repository.updateAll(resultClass4, where);
  }

  @get('/result-class4s/{id}')
  @response(200, {
    description: 'ResultClass4 model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ResultClass4, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: any,
    @param.filter(ResultClass4, {exclude: 'where'}) filter?: FilterExcludingWhere<ResultClass4>
  ): Promise<ResultClass4> {
    return this.resultClass4Repository.findById(id, filter);
  }

  @patch('/result-class4s/{id}')
  @response(204, {
    description: 'ResultClass4 PATCH success',
  })
  async updateById(
    @param.path.string('id') id: any,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ResultClass4, {partial: true}),
        },
      },
    })
    resultClass4: ResultClass4,
  ): Promise<void> {
    await this.resultClass4Repository.updateById(id, resultClass4);
  }

  @put('/result-class4s/{id}')
  @response(204, {
    description: 'ResultClass4 PUT success',
  })
  async replaceById(
    @param.path.string('id') id: any,
    @requestBody() resultClass4: ResultClass4,
  ): Promise<void> {
    await this.resultClass4Repository.replaceById(id, resultClass4);
  }

  @del('/result-class4s/{id}')
  @response(204, {
    description: 'ResultClass4 DELETE success',
  })
  async deleteById(@param.path.string('id') id: any): Promise<void> {
    await this.resultClass4Repository.deleteById(id);
  }
}
