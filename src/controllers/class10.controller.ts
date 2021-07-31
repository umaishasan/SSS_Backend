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
import {Class10} from '../models';
import {Class10Repository} from '../repositories';

export class Class10Controller {
  constructor(
    @repository(Class10Repository)
    public class10Repository: Class10Repository,
  ) { }

  @post('/class10s')
  @response(200, {
    description: 'Class10 model instance',
    content: {'application/json': {schema: getModelSchemaRef(Class10)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Class10, {
            title: 'NewClass10',

          }),
        },
      },
    })
    class10: Class10,
  ): Promise<Class10> {
    return this.class10Repository.create(class10);
  }

  @get('/class10s/count')
  @response(200, {
    description: 'Class10 model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Class10) where?: Where<Class10>,
  ): Promise<Count> {
    return this.class10Repository.count(where);
  }

  @get('/class10s')
  @response(200, {
    description: 'Array of Class10 model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Class10, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Class10) filter?: Filter<Class10>,
  ): Promise<Class10[]> {
    return this.class10Repository.find(filter);
  }

  @patch('/class10s')
  @response(200, {
    description: 'Class10 PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Class10, {partial: true}),
        },
      },
    })
    class10: Class10,
    @param.where(Class10) where?: Where<Class10>,
  ): Promise<Count> {
    return this.class10Repository.updateAll(class10, where);
  }

  @get('/class10s/{id}')
  @response(200, {
    description: 'Class10 model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Class10, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: any,
    @param.filter(Class10, {exclude: 'where'}) filter?: FilterExcludingWhere<Class10>
  ): Promise<Class10> {
    return this.class10Repository.findById(id, filter);
  }

  @patch('/class10s/{id}')
  @response(204, {
    description: 'Class10 PATCH success',
  })
  async updateById(
    @param.path.string('id') id: any,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Class10, {partial: true}),
        },
      },
    })
    class10: Class10,
  ): Promise<void> {
    await this.class10Repository.updateById(id, class10);
  }

  @put('/class10s/{id}')
  @response(204, {
    description: 'Class10 PUT success',
  })
  async replaceById(
    @param.path.string('id') id: any,
    @requestBody() class10: Class10,
  ): Promise<void> {
    await this.class10Repository.replaceById(id, class10);
  }

  @del('/class10s/{id}')
  @response(204, {
    description: 'Class10 DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.class10Repository.deleteById(id);
  }
}
