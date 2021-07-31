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
import {Parent} from '../models';
import {ParentRepository} from '../repositories';

export class ParentController {
  constructor(
    @repository(ParentRepository)
    public parentRepository: ParentRepository,
  ) { }

  @post('/parents')
  @response(200, {
    description: 'Parent model instance',
    content: {'application/json': {schema: getModelSchemaRef(Parent)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Parent, {
            title: 'NewParent',

          }),
        },
      },
    })
    parent: Parent,
  ): Promise<Parent> {
    return await this.parentRepository.create(parent);
  }

  @get('/parents/count')
  @response(200, {
    description: 'Parent model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Parent) where?: Where<Parent>,
  ): Promise<Count> {
    return this.parentRepository.count(where);
  }

  @get('/parents')
  @response(200, {
    description: 'Array of Parent model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Parent, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Parent) filter?: Filter<Parent>,
  ): Promise<Parent[]> {
    return this.parentRepository.find(filter);
  }

  @patch('/parents')
  @response(200, {
    description: 'Parent PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Parent, {partial: true}),
        },
      },
    })
    parent: Parent,
    @param.where(Parent) where?: Where<Parent>,
  ): Promise<Count> {
    return this.parentRepository.updateAll(parent, where);
  }

  @get('/parents/{id}')
  @response(200, {
    description: 'Parent model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Parent, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: any,
    @param.filter(Parent, {exclude: 'where'}) filter?: FilterExcludingWhere<Parent>
  ): Promise<Parent> {
    return this.parentRepository.findById(id, filter);
  }

  @patch('/parents/{id}')
  @response(204, {
    description: 'Parent PATCH success',
  })
  async updateById(
    @param.path.string('id') id: any,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Parent, {partial: true}),
        },
      },
    })
    parent: Parent,
  ): Promise<void> {
    await this.parentRepository.updateById(id, parent);
  }

  @put('/parents/{id}')
  @response(204, {
    description: 'Parent PUT success',
  })
  async replaceById(
    @param.path.string('id') id: any,
    @requestBody() parent: Parent,
  ): Promise<void> {
    await this.parentRepository.replaceById(id, parent);
  }

  @del('/parents/{id}')
  @response(204, {
    description: 'Parent DELETE success',
  })
  async deleteById(@param.path.string('id') id: any): Promise<void> {
    await this.parentRepository.deleteById(id);
  }
}
