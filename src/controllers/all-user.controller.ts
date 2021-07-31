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
import {AllUser} from '../models';
import {AllUserRepository} from '../repositories';

export class AllUserController {
  constructor(
    @repository(AllUserRepository)
    public allUserRepository: AllUserRepository,
  ) { }

  @post('/all-users')
  @response(200, {
    description: 'AllUser model instance',
    content: {'application/json': {schema: getModelSchemaRef(AllUser)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AllUser, {
            title: 'NewAllUser',

          }),
        },
      },
    })
    allUser: AllUser,
  ): Promise<AllUser> {
    return this.allUserRepository.create(allUser);
  }

  @get('/all-users/count')
  @response(200, {
    description: 'AllUser model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(AllUser) where?: Where<AllUser>,
  ): Promise<Count> {
    return this.allUserRepository.count(where);
  }

  @get('/all-users')
  @response(200, {
    description: 'Array of AllUser model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(AllUser, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(AllUser) filter?: Filter<AllUser>,
  ): Promise<AllUser[]> {
    return this.allUserRepository.find(filter);
  }

  @patch('/all-users')
  @response(200, {
    description: 'AllUser PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AllUser, {partial: true}),
        },
      },
    })
    allUser: AllUser,
    @param.where(AllUser) where?: Where<AllUser>,
  ): Promise<Count> {
    return this.allUserRepository.updateAll(allUser, where);
  }

  @get('/all-users/{id}')
  @response(200, {
    description: 'AllUser model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(AllUser, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: any,
    @param.filter(AllUser, {exclude: 'where'}) filter?: FilterExcludingWhere<AllUser>
  ): Promise<AllUser> {
    return this.allUserRepository.findById(id, filter);
  }

  @patch('/all-users/{id}')
  @response(204, {
    description: 'AllUser PATCH success',
  })
  async updateById(
    @param.path.string('id') id: any,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AllUser, {partial: true}),
        },
      },
    })
    allUser: AllUser,
  ): Promise<void> {
    await this.allUserRepository.updateById(id, allUser);
  }

  @put('/all-users/{id}')
  @response(204, {
    description: 'AllUser PUT success',
  })
  async replaceById(
    @param.path.string('id') id: any,
    @requestBody() allUser: AllUser,
  ): Promise<void> {
    await this.allUserRepository.replaceById(id, allUser);
  }

  @del('/all-users/{id}')
  @response(204, {
    description: 'AllUser DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.allUserRepository.deleteById(id);
  }
}
