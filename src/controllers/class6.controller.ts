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
import {Class6} from '../models';
import {Class6Repository} from '../repositories';

export class Class6Controller {
  constructor(
    @repository(Class6Repository)
    public class6Repository: Class6Repository,
  ) { }

  @post('/class6s')
  @response(200, {
    description: 'Class6 model instance',
    content: {'application/json': {schema: getModelSchemaRef(Class6)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Class6, {
            title: 'NewClass6',

          }),
        },
      },
    })
    class6: Class6,
  ): Promise<Class6> {
    return this.class6Repository.create(class6);
  }

  @get('/class6s/count')
  @response(200, {
    description: 'Class6 model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Class6) where?: Where<Class6>,
  ): Promise<Count> {
    return this.class6Repository.count(where);
  }

  @get('/class6s')
  @response(200, {
    description: 'Array of Class6 model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Class6, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Class6) filter?: Filter<Class6>,
  ): Promise<Class6[]> {
    return this.class6Repository.find(filter);
  }

  @patch('/class6s')
  @response(200, {
    description: 'Class6 PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Class6, {partial: true}),
        },
      },
    })
    class6: Class6,
    @param.where(Class6) where?: Where<Class6>,
  ): Promise<Count> {
    return this.class6Repository.updateAll(class6, where);
  }

  @get('/class6s/{id}')
  @response(200, {
    description: 'Class6 model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Class6, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: any,
    @param.filter(Class6, {exclude: 'where'}) filter?: FilterExcludingWhere<Class6>
  ): Promise<Class6> {
    return this.class6Repository.findById(id, filter);
  }

  @patch('/class6s/{id}')
  @response(204, {
    description: 'Class6 PATCH success',
  })
  async updateById(
    @param.path.string('id') id: any,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Class6, {partial: true}),
        },
      },
    })
    class6: Class6,
  ): Promise<void> {
    await this.class6Repository.updateById(id, class6);
  }

  @put('/class6s/{id}')
  @response(204, {
    description: 'Class6 PUT success',
  })
  async replaceById(
    @param.path.string('id') id: any,
    @requestBody() class6: Class6,
  ): Promise<void> {
    await this.class6Repository.replaceById(id, class6);
  }

  @del('/class6s/{id}')
  @response(204, {
    description: 'Class6 DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.class6Repository.deleteById(id);
  }
}
