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
import {Class8} from '../models';
import {Class8Repository} from '../repositories';

export class Class8Controller {
  constructor(
    @repository(Class8Repository)
    public class8Repository: Class8Repository,
  ) { }

  @post('/class8s')
  @response(200, {
    description: 'Class8 model instance',
    content: {'application/json': {schema: getModelSchemaRef(Class8)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Class8, {
            title: 'NewClass8',

          }),
        },
      },
    })
    class8: Class8,
  ): Promise<Class8> {
    return this.class8Repository.create(class8);
  }

  @get('/class8s/count')
  @response(200, {
    description: 'Class8 model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Class8) where?: Where<Class8>,
  ): Promise<Count> {
    return this.class8Repository.count(where);
  }

  @get('/class8s')
  @response(200, {
    description: 'Array of Class8 model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Class8, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Class8) filter?: Filter<Class8>,
  ): Promise<Class8[]> {
    return this.class8Repository.find(filter);
  }

  @patch('/class8s')
  @response(200, {
    description: 'Class8 PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Class8, {partial: true}),
        },
      },
    })
    class8: Class8,
    @param.where(Class8) where?: Where<Class8>,
  ): Promise<Count> {
    return this.class8Repository.updateAll(class8, where);
  }

  @get('/class8s/{id}')
  @response(200, {
    description: 'Class8 model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Class8, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: any,
    @param.filter(Class8, {exclude: 'where'}) filter?: FilterExcludingWhere<Class8>
  ): Promise<Class8> {
    return this.class8Repository.findById(id, filter);
  }

  @patch('/class8s/{id}')
  @response(204, {
    description: 'Class8 PATCH success',
  })
  async updateById(
    @param.path.string('id') id: any,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Class8, {partial: true}),
        },
      },
    })
    class8: Class8,
  ): Promise<void> {
    await this.class8Repository.updateById(id, class8);
  }

  @put('/class8s/{id}')
  @response(204, {
    description: 'Class8 PUT success',
  })
  async replaceById(
    @param.path.string('id') id: any,
    @requestBody() class8: Class8,
  ): Promise<void> {
    await this.class8Repository.replaceById(id, class8);
  }

  @del('/class8s/{id}')
  @response(204, {
    description: 'Class8 DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.class8Repository.deleteById(id);
  }
}
