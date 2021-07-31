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
import {Class5} from '../models';
import {Class5Repository} from '../repositories';

export class Class5Controller {
  constructor(
    @repository(Class5Repository)
    public class5Repository: Class5Repository,
  ) { }

  @post('/class5s')
  @response(200, {
    description: 'Class5 model instance',
    content: {'application/json': {schema: getModelSchemaRef(Class5)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Class5, {
            title: 'NewClass5',

          }),
        },
      },
    })
    class5: Class5,
  ): Promise<Class5> {
    return this.class5Repository.create(class5);
  }

  @get('/class5s/count')
  @response(200, {
    description: 'Class5 model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Class5) where?: Where<Class5>,
  ): Promise<Count> {
    return this.class5Repository.count(where);
  }

  @get('/class5s')
  @response(200, {
    description: 'Array of Class5 model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Class5, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Class5) filter?: Filter<Class5>,
  ): Promise<Class5[]> {
    return this.class5Repository.find(filter);
  }

  @patch('/class5s')
  @response(200, {
    description: 'Class5 PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Class5, {partial: true}),
        },
      },
    })
    class5: Class5,
    @param.where(Class5) where?: Where<Class5>,
  ): Promise<Count> {
    return this.class5Repository.updateAll(class5, where);
  }

  @get('/class5s/{id}')
  @response(200, {
    description: 'Class5 model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Class5, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: any,
    @param.filter(Class5, {exclude: 'where'}) filter?: FilterExcludingWhere<Class5>
  ): Promise<Class5> {
    return this.class5Repository.findById(id, filter);
  }

  @patch('/class5s/{id}')
  @response(204, {
    description: 'Class5 PATCH success',
  })
  async updateById(
    @param.path.string('id') id: any,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Class5, {partial: true}),
        },
      },
    })
    class5: Class5,
  ): Promise<void> {
    await this.class5Repository.updateById(id, class5);
  }

  @put('/class5s/{id}')
  @response(204, {
    description: 'Class5 PUT success',
  })
  async replaceById(
    @param.path.string('id') id: any,
    @requestBody() class5: Class5,
  ): Promise<void> {
    await this.class5Repository.replaceById(id, class5);
  }

  @del('/class5s/{id}')
  @response(204, {
    description: 'Class5 DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.class5Repository.deleteById(id);
  }
}
