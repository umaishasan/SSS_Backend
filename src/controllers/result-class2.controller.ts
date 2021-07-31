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
import {ResultClass2} from '../models';
import {ResultClass2Repository} from '../repositories';

export class ResultClass2Controller {
  constructor(
    @repository(ResultClass2Repository)
    public resultClass2Repository: ResultClass2Repository,
  ) { }

  @post('/result-class2s')
  @response(200, {
    description: 'ResultClass2 model instance',
    content: {'application/json': {schema: getModelSchemaRef(ResultClass2)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ResultClass2, {
            title: 'NewResultClass2',

          }),
        },
      },
    })
    resultClass2: ResultClass2,
  ): Promise<ResultClass2> {
    return this.resultClass2Repository.create(resultClass2);
  }

  @get('/result-class2s/count')
  @response(200, {
    description: 'ResultClass2 model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ResultClass2) where?: Where<ResultClass2>,
  ): Promise<Count> {
    return this.resultClass2Repository.count(where);
  }

  @get('/result-class2s')
  @response(200, {
    description: 'Array of ResultClass2 model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ResultClass2, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ResultClass2) filter?: Filter<ResultClass2>,
  ): Promise<ResultClass2[]> {
    return this.resultClass2Repository.find(filter);
  }

  @patch('/result-class2s')
  @response(200, {
    description: 'ResultClass2 PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ResultClass2, {partial: true}),
        },
      },
    })
    resultClass2: ResultClass2,
    @param.where(ResultClass2) where?: Where<ResultClass2>,
  ): Promise<Count> {
    return this.resultClass2Repository.updateAll(resultClass2, where);
  }

  @get('/result-class2s/{id}')
  @response(200, {
    description: 'ResultClass2 model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ResultClass2, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: any,
    @param.filter(ResultClass2, {exclude: 'where'}) filter?: FilterExcludingWhere<ResultClass2>
  ): Promise<ResultClass2> {
    return this.resultClass2Repository.findById(id, filter);
  }

  @patch('/result-class2s/{id}')
  @response(204, {
    description: 'ResultClass2 PATCH success',
  })
  async updateById(
    @param.path.string('id') id: any,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ResultClass2, {partial: true}),
        },
      },
    })
    resultClass2: ResultClass2,
  ): Promise<void> {
    await this.resultClass2Repository.updateById(id, resultClass2);
  }

  @put('/result-class2s/{id}')
  @response(204, {
    description: 'ResultClass2 PUT success',
  })
  async replaceById(
    @param.path.string('id') id: any,
    @requestBody() resultClass2: ResultClass2,
  ): Promise<void> {
    await this.resultClass2Repository.replaceById(id, resultClass2);
  }

  @del('/result-class2s/{id}')
  @response(204, {
    description: 'ResultClass2 DELETE success',
  })
  async deleteById(@param.path.string('id') id: any): Promise<void> {
    await this.resultClass2Repository.deleteById(id);
  }
}
