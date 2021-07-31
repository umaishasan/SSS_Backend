import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlconnectionDataSource} from '../datasources';
import {Annoucement, AnnoucementRelations} from '../models';

export class AnnoucementRepository extends DefaultCrudRepository<
  Annoucement,
  typeof Annoucement.prototype.id,
  AnnoucementRelations
> {
  constructor(
    @inject('datasources.mysqlconnection') dataSource: MysqlconnectionDataSource,
  ) {
    super(Annoucement, dataSource);
  }
}
