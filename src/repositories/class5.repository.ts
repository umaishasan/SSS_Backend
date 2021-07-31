import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlconnectionDataSource} from '../datasources';
import {Class5, Class5Relations} from '../models';

export class Class5Repository extends DefaultCrudRepository<
  Class5,
  typeof Class5.prototype.id,
  Class5Relations
> {
  constructor(
    @inject('datasources.mysqlconnection') dataSource: MysqlconnectionDataSource,
  ) {
    super(Class5, dataSource);
  }
}
