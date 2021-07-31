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
import {Class7} from '../models';
import {Class7Repository} from '../repositories';

export class Class7Controller {
  constructor(
    @repository(Class7Repository)
    public class7Repository: Class7Repository,
  ) { }

  @post('/class7s')
  @response(200, {
    description: 'Class7 model instance',
    content: {'application/json': {schema: getModelSchemaRef(Class7)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Class7, {
            title: 'NewClass7',

          }),
        },
      },
    })
    class7: Class7,
  ): Promise<Class7> {
    return this.class7Repository.create(class7);
  }

  @get('/class7s/count')
  @response(200, {
    description: 'Class7 model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Class7) where?: Where<Class7>,
  ): Promise<Count> {
    return this.class7Repository.count(where);
  }

  @get('/class7s')
  @response(200, {
    description: 'Array of Class7 model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Class7, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Class7) filter?: Filter<Class7>,
  ): Promise<Class7[]> {
    return this.class7Repository.find(filter);
  }

  @patch('/class7s')
  @response(200, {
    description: 'Class7 PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Class7, {partial: true}),
        },
      },
    })
    class7: Class7,
    @param.where(Class7) where?: Where<Class7>,
  ): Promise<Count> {
    return this.class7Repository.updateAll(class7, where);
  }

  @get('/class7s/{id}')
  @response(200, {
    description: 'Class7 model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Class7, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: any,
    @param.filter(Class7, {exclude: 'where'}) filter?: FilterExcludingWhere<Class7>
  ): Promise<Class7> {
    return this.class7Repository.findById(id, filter);
  }

  @patch('/class7s/{id}')
  @response(204, {
    description: 'Class7 PATCH success',
  })
  async updateById(
    @param.path.string('id') id: any,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Class7, {partial: true}),
        },
      },
    })
    class7: Class7,
  ): Promise<void> {
    await this.class7Repository.updateById(id, class7);
  }

  @put('/class7s/{id}')
  @response(204, {
    description: 'Class7 PUT success',
  })
  async replaceById(
    @param.path.string('id') id: any,
    @requestBody() class7: Class7,
  ): Promise<void> {
    await this.class7Repository.replaceById(id, class7);
  }

  @del('/class7s/{id}')
  @response(204, {
    description: 'Class7 DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.class7Repository.deleteById(id);
  }
}
