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
import {Items} from '../models';
import {ItemsRepository} from '../repositories';

export class ItemsController {
  constructor(
    @repository(ItemsRepository)
    public itemsRepository: ItemsRepository,
  ) { }

  @post('/items')
  @response(200, {
    description: 'Items model instance',
    content: {'application/json': {schema: getModelSchemaRef(Items)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Items, {
            title: 'NewItems',

          }),
        },
      },
    })
    items: Items,
  ): Promise<Items> {
    return await this.itemsRepository.create(items);
  }

  @get('/items/count')
  @response(200, {
    description: 'Items model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Items) where?: Where<Items>,
  ): Promise<Count> {
    return this.itemsRepository.count(where);
  }

  @get('/items')
  @response(200, {
    description: 'Array of Items model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Items, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Items) filter?: Filter<Items>,
  ): Promise<Items[]> {
    return this.itemsRepository.find(filter);
  }

  @patch('/items')
  @response(200, {
    description: 'Items PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Items, {partial: true}),
        },
      },
    })
    items: Items,
    @param.where(Items) where?: Where<Items>,
  ): Promise<Count> {
    return this.itemsRepository.updateAll(items, where);
  }

  @get('/items/{id}')
  @response(200, {
    description: 'Items model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Items, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: any,
    @param.filter(Items, {exclude: 'where'}) filter?: FilterExcludingWhere<Items>
  ): Promise<Items> {
    return this.itemsRepository.findById(id, filter);
  }

  @patch('/items/{id}')
  @response(204, {
    description: 'Items PATCH success',
  })
  async updateById(
    @param.path.string('id') id: any,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Items, {partial: true}),
        },
      },
    })
    items: Items,
  ): Promise<void> {
    await this.itemsRepository.updateById(id, items);
  }

  @put('/items/{id}')
  @response(204, {
    description: 'Items PUT success',
  })
  async replaceById(
    @param.path.string('id') id: any,
    @requestBody() items: Items,
  ): Promise<void> {
    await this.itemsRepository.replaceById(id, items);
  }

  @del('/items/{id}')
  @response(204, {
    description: 'Items DELETE success',
  })
  async deleteById(@param.path.string('id') id: any): Promise<void> {
    await this.itemsRepository.deleteById(id);
  }
}
