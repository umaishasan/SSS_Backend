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
import {Class1} from '../models';
import {Class1Repository} from '../repositories';

export class Class1Controller {
  constructor(
    @repository(Class1Repository)
    public class1Repository: Class1Repository,
  ) { }

  @post('/class1s')
  @response(200, {
    description: 'Class1 model instance',
    content: {'application/json': {schema: getModelSchemaRef(Class1)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Class1, {
            title: 'NewClass1',

          }),
        },
      },
    })
    class1: Class1,
  ): Promise<Class1> {
    return this.class1Repository.create(class1);
  }

  @get('/class1s/count')
  @response(200, {
    description: 'Class1 model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Class1) where?: Where<Class1>,
  ): Promise<Count> {
    return this.class1Repository.count(where);
  }

  @get('/class1s')
  @response(200, {
    description: 'Array of Class1 model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Class1, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Class1) filter?: Filter<Class1>,
  ): Promise<Class1[]> {
    return this.class1Repository.find(filter);
  }

  @patch('/class1s')
  @response(200, {
    description: 'Class1 PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Class1, {partial: true}),
        },
      },
    })
    class1: Class1,
    @param.where(Class1) where?: Where<Class1>,
  ): Promise<Count> {
    return this.class1Repository.updateAll(class1, where);
  }

  @get('/class1s/{id}')
  @response(200, {
    description: 'Class1 model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Class1, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: any,
    @param.filter(Class1, {exclude: 'where'}) filter?: FilterExcludingWhere<Class1>
  ): Promise<Class1> {
    return this.class1Repository.findById(id, filter);
  }

  @patch('/class1s/{id}')
  @response(204, {
    description: 'Class1 PATCH success',
  })
  async updateById(
    @param.path.string('id') id: any,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Class1, {partial: true}),
        },
      },
    })
    class1: Class1,
  ): Promise<void> {
    await this.class1Repository.updateById(id, class1);
  }

  @put('/class1s/{id}')
  @response(204, {
    description: 'Class1 PUT success',
  })
  async replaceById(
    @param.path.string('id') id: any,
    @requestBody() class1: Class1,
  ): Promise<void> {
    await this.class1Repository.replaceById(id, class1);
  }

  @del('/class1s/{id}')
  @response(204, {
    description: 'Class1 DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.class1Repository.deleteById(id);
  }
}
