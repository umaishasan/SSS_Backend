import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlconnectionDataSource} from '../datasources';
import {Parent, ParentRelations} from '../models';

export class ParentRepository extends DefaultCrudRepository<
  Parent,
  typeof Parent.prototype.id,
  ParentRelations
> {
  constructor(
    @inject('datasources.mysqlconnection') dataSource: MysqlconnectionDataSource,
  ) {
    super(Parent, dataSource);
  }
}
