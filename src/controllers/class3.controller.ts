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
import {Class3} from '../models';
import {Class3Repository} from '../repositories';

export class Class3Controller {
  constructor(
    @repository(Class3Repository)
    public class3Repository: Class3Repository,
  ) { }

  @post('/class3s')
  @response(200, {
    description: 'Class3 model instance',
    content: {'application/json': {schema: getModelSchemaRef(Class3)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Class3, {
            title: 'NewClass3',

          }),
        },
      },
    })
    class3: Class3,
  ): Promise<Class3> {
    return this.class3Repository.create(class3);
  }

  @get('/class3s/count')
  @response(200, {
    description: 'Class3 model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Class3) where?: Where<Class3>,
  ): Promise<Count> {
    return this.class3Repository.count(where);
  }

  @get('/class3s')
  @response(200, {
    description: 'Array of Class3 model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Class3, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Class3) filter?: Filter<Class3>,
  ): Promise<Class3[]> {
    return this.class3Repository.find(filter);
  }

  @patch('/class3s')
  @response(200, {
    description: 'Class3 PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Class3, {partial: true}),
        },
      },
    })
    class3: Class3,
    @param.where(Class3) where?: Where<Class3>,
  ): Promise<Count> {
    return this.class3Repository.updateAll(class3, where);
  }

  @get('/class3s/{id}')
  @response(200, {
    description: 'Class3 model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Class3, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: any,
    @param.filter(Class3, {exclude: 'where'}) filter?: FilterExcludingWhere<Class3>
  ): Promise<Class3> {
    return this.class3Repository.findById(id, filter);
  }

  @patch('/class3s/{id}')
  @response(204, {
    description: 'Class3 PATCH success',
  })
  async updateById(
    @param.path.string('id') id: any,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Class3, {partial: true}),
        },
      },
    })
    class3: Class3,
  ): Promise<void> {
    await this.class3Repository.updateById(id, class3);
  }

  @put('/class3s/{id}')
  @response(204, {
    description: 'Class3 PUT success',
  })
  async replaceById(
    @param.path.string('id') id: any,
    @requestBody() class3: Class3,
  ): Promise<void> {
    await this.class3Repository.replaceById(id, class3);
  }

  @del('/class3s/{id}')
  @response(204, {
    description: 'Class3 DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.class3Repository.deleteById(id);
  }
}
