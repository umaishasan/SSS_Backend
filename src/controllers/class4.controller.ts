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
import {Class4} from '../models';
import {Class4Repository} from '../repositories';

export class Class4Controller {
  constructor(
    @repository(Class4Repository)
    public class4Repository: Class4Repository,
  ) { }

  @post('/class4s')
  @response(200, {
    description: 'Class4 model instance',
    content: {'application/json': {schema: getModelSchemaRef(Class4)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Class4, {
            title: 'NewClass4',

          }),
        },
      },
    })
    class4: Class4,
  ): Promise<Class4> {
    return this.class4Repository.create(class4);
  }

  @get('/class4s/count')
  @response(200, {
    description: 'Class4 model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Class4) where?: Where<Class4>,
  ): Promise<Count> {
    return this.class4Repository.count(where);
  }

  @get('/class4s')
  @response(200, {
    description: 'Array of Class4 model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Class4, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Class4) filter?: Filter<Class4>,
  ): Promise<Class4[]> {
    return this.class4Repository.find(filter);
  }

  @patch('/class4s')
  @response(200, {
    description: 'Class4 PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Class4, {partial: true}),
        },
      },
    })
    class4: Class4,
    @param.where(Class4) where?: Where<Class4>,
  ): Promise<Count> {
    return this.class4Repository.updateAll(class4, where);
  }

  @get('/class4s/{id}')
  @response(200, {
    description: 'Class4 model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Class4, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: any,
    @param.filter(Class4, {exclude: 'where'}) filter?: FilterExcludingWhere<Class4>
  ): Promise<Class4> {
    return this.class4Repository.findById(id, filter);
  }

  @patch('/class4s/{id}')
  @response(204, {
    description: 'Class4 PATCH success',
  })
  async updateById(
    @param.path.string('id') id: any,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Class4, {partial: true}),
        },
      },
    })
    class4: Class4,
  ): Promise<void> {
    await this.class4Repository.updateById(id, class4);
  }

  @put('/class4s/{id}')
  @response(204, {
    description: 'Class4 PUT success',
  })
  async replaceById(
    @param.path.string('id') id: any,
    @requestBody() class4: Class4,
  ): Promise<void> {
    await this.class4Repository.replaceById(id, class4);
  }

  @del('/class4s/{id}')
  @response(204, {
    description: 'Class4 DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.class4Repository.deleteById(id);
  }
}
