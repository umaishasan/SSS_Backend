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
import {Annoucement} from '../models';
import {AnnoucementRepository} from '../repositories';

export class AnnoucementController {
  constructor(
    @repository(AnnoucementRepository)
    public annoucementRepository: AnnoucementRepository,
  ) { }

  @post('/annoucements')
  @response(200, {
    description: 'Annoucement model instance',
    content: {'application/json': {schema: getModelSchemaRef(Annoucement)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Annoucement, {
            title: 'NewAnnoucement',

          }),
        },
      },
    })
    annoucement: Annoucement,
  ): Promise<Annoucement> {
    return this.annoucementRepository.create(annoucement);
  }

  @get('/annoucements/count')
  @response(200, {
    description: 'Annoucement model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Annoucement) where?: Where<Annoucement>,
  ): Promise<Count> {
    return this.annoucementRepository.count(where);
  }

  @get('/annoucements')
  @response(200, {
    description: 'Array of Annoucement model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Annoucement, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Annoucement) filter?: Filter<Annoucement>,
  ): Promise<Annoucement[]> {
    return this.annoucementRepository.find(filter);
  }

  @patch('/annoucements')
  @response(200, {
    description: 'Annoucement PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Annoucement, {partial: true}),
        },
      },
    })
    annoucement: Annoucement,
    @param.where(Annoucement) where?: Where<Annoucement>,
  ): Promise<Count> {
    return this.annoucementRepository.updateAll(annoucement, where);
  }

  @get('/annoucements/{id}')
  @response(200, {
    description: 'Annoucement model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Annoucement, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: any,
    @param.filter(Annoucement, {exclude: 'where'}) filter?: FilterExcludingWhere<Annoucement>
  ): Promise<Annoucement> {
    return this.annoucementRepository.findById(id, filter);
  }

  @patch('/annoucements/{id}')
  @response(204, {
    description: 'Annoucement PATCH success',
  })
  async updateById(
    @param.path.string('id') id: any,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Annoucement, {partial: true}),
        },
      },
    })
    annoucement: Annoucement,
  ): Promise<void> {
    await this.annoucementRepository.updateById(id, annoucement);
  }

  @put('/annoucements/{id}')
  @response(204, {
    description: 'Annoucement PUT success',
  })
  async replaceById(
    @param.path.string('id') id: any,
    @requestBody() annoucement: Annoucement,
  ): Promise<void> {
    await this.annoucementRepository.replaceById(id, annoucement);
  }

  @del('/annoucements/{id}')
  @response(204, {
    description: 'Annoucement DELETE success',
  })
  async deleteById(@param.path.string('id') id: any): Promise<void> {
    await this.annoucementRepository.deleteById(id);
  }
}
