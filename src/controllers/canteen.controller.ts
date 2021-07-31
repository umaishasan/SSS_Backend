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
import {Canteen} from '../models';
import {CanteenRepository} from '../repositories';

export class CanteenController {
  constructor(
    @repository(CanteenRepository)
    public canteenRepository: CanteenRepository,
  ) { }

  @post('/canteens')
  @response(200, {
    description: 'Canteen model instance',
    content: {'application/json': {schema: getModelSchemaRef(Canteen)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Canteen, {
            title: 'NewCanteen',

          }),
        },
      },
    })
    canteen: Canteen,
  ): Promise<Canteen> {
    return await this.canteenRepository.create(canteen);
  }

  @get('/canteens/count')
  @response(200, {
    description: 'Canteen model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Canteen) where?: Where<Canteen>,
  ): Promise<Count> {
    return this.canteenRepository.count(where);
  }

  @get('/canteens')
  @response(200, {
    description: 'Array of Canteen model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Canteen, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Canteen) filter?: Filter<Canteen>,
  ): Promise<Canteen[]> {
    return this.canteenRepository.find(filter);
  }

  @patch('/canteens')
  @response(200, {
    description: 'Canteen PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Canteen, {partial: true}),
        },
      },
    })
    canteen: Canteen,
    @param.where(Canteen) where?: Where<Canteen>,
  ): Promise<Count> {
    return this.canteenRepository.updateAll(canteen, where);
  }

  @get('/canteens/{id}')
  @response(200, {
    description: 'Canteen model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Canteen, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: any,
    @param.filter(Canteen, {exclude: 'where'}) filter?: FilterExcludingWhere<Canteen>
  ): Promise<Canteen> {
    return this.canteenRepository.findById(id, filter);
  }

  @patch('/canteens/{id}')
  @response(204, {
    description: 'Canteen PATCH success',
  })
  async updateById(
    @param.path.string('id') id: any,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Canteen, {partial: true}),
        },
      },
    })
    canteen: Canteen,
  ): Promise<void> {
    await this.canteenRepository.updateById(id, canteen);
  }

  @put('/canteens/{id}')
  @response(204, {
    description: 'Canteen PUT success',
  })
  async replaceById(
    @param.path.string('id') id: any,
    @requestBody() canteen: Canteen,
  ): Promise<void> {
    await this.canteenRepository.replaceById(id, canteen);
  }

  @del('/canteens/{id}')
  @response(204, {
    description: 'Canteen DELETE success',
  })
  async deleteById(@param.path.string('id') id: any): Promise<void> {
    await this.canteenRepository.deleteById(id);
  }
}
