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
import {Class9} from '../models';
import {Class9Repository} from '../repositories';

export class Class9Controller {
  constructor(
    @repository(Class9Repository)
    public class9Repository: Class9Repository,
  ) { }

  @post('/class9s')
  @response(200, {
    description: 'Class9 model instance',
    content: {'application/json': {schema: getModelSchemaRef(Class9)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Class9, {
            title: 'NewClass9',

          }),
        },
      },
    })
    class9: Class9,
  ): Promise<Class9> {
    return this.class9Repository.create(class9);
  }

  @get('/class9s/count')
  @response(200, {
    description: 'Class9 model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Class9) where?: Where<Class9>,
  ): Promise<Count> {
    return this.class9Repository.count(where);
  }

  @get('/class9s')
  @response(200, {
    description: 'Array of Class9 model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Class9, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Class9) filter?: Filter<Class9>,
  ): Promise<Class9[]> {
    return this.class9Repository.find(filter);
  }

  @patch('/class9s')
  @response(200, {
    description: 'Class9 PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Class9, {partial: true}),
        },
      },
    })
    class9: Class9,
    @param.where(Class9) where?: Where<Class9>,
  ): Promise<Count> {
    return this.class9Repository.updateAll(class9, where);
  }

  @get('/class9s/{id}')
  @response(200, {
    description: 'Class9 model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Class9, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: any,
    @param.filter(Class9, {exclude: 'where'}) filter?: FilterExcludingWhere<Class9>
  ): Promise<Class9> {
    return this.class9Repository.findById(id, filter);
  }

  @patch('/class9s/{id}')
  @response(204, {
    description: 'Class9 PATCH success',
  })
  async updateById(
    @param.path.string('id') id: any,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Class9, {partial: true}),
        },
      },
    })
    class9: Class9,
  ): Promise<void> {
    await this.class9Repository.updateById(id, class9);
  }

  @put('/class9s/{id}')
  @response(204, {
    description: 'Class9 PUT success',
  })
  async replaceById(
    @param.path.string('id') id: any,
    @requestBody() class9: Class9,
  ): Promise<void> {
    await this.class9Repository.replaceById(id, class9);
  }

  @del('/class9s/{id}')
  @response(204, {
    description: 'Class9 DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.class9Repository.deleteById(id);
  }
}
