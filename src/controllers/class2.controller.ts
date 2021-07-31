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
import {Class2} from '../models';
import {Class2Repository} from '../repositories';

export class Class2Controller {
  constructor(
    @repository(Class2Repository)
    public class2Repository: Class2Repository,
  ) { }

  @post('/class2s')
  @response(200, {
    description: 'Class2 model instance',
    content: {'application/json': {schema: getModelSchemaRef(Class2)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Class2, {
            title: 'NewClass2',

          }),
        },
      },
    })
    class2: Class2,
  ): Promise<Class2> {
    return this.class2Repository.create(class2);
  }

  @get('/class2s/count')
  @response(200, {
    description: 'Class2 model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Class2) where?: Where<Class2>,
  ): Promise<Count> {
    return this.class2Repository.count(where);
  }

  @get('/class2s')
  @response(200, {
    description: 'Array of Class2 model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Class2, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Class2) filter?: Filter<Class2>,
  ): Promise<Class2[]> {
    return this.class2Repository.find(filter);
  }

  @patch('/class2s')
  @response(200, {
    description: 'Class2 PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Class2, {partial: true}),
        },
      },
    })
    class2: Class2,
    @param.where(Class2) where?: Where<Class2>,
  ): Promise<Count> {
    return this.class2Repository.updateAll(class2, where);
  }

  @get('/class2s/{id}')
  @response(200, {
    description: 'Class2 model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Class2, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: any,
    @param.filter(Class2, {exclude: 'where'}) filter?: FilterExcludingWhere<Class2>
  ): Promise<Class2> {
    return this.class2Repository.findById(id, filter);
  }

  @patch('/class2s/{id}')
  @response(204, {
    description: 'Class2 PATCH success',
  })
  async updateById(
    @param.path.string('id') id: any,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Class2, {partial: true}),
        },
      },
    })
    class2: Class2,
  ): Promise<void> {
    await this.class2Repository.updateById(id, class2);
  }

  @put('/class2s/{id}')
  @response(204, {
    description: 'Class2 PUT success',
  })
  async replaceById(
    @param.path.string('id') id: any,
    @requestBody() class2: Class2,
  ): Promise<void> {
    await this.class2Repository.replaceById(id, class2);
  }

  @del('/class2s/{id}')
  @response(204, {
    description: 'Class2 DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.class2Repository.deleteById(id);
  }
}
