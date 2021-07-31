import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlconnectionDataSource} from '../datasources';
import {Class3, Class3Relations} from '../models';

export class Class3Repository extends DefaultCrudRepository<
  Class3,
  typeof Class3.prototype.id,
  Class3Relations
> {
  constructor(
    @inject('datasources.mysqlconnection') dataSource: MysqlconnectionDataSource,
  ) {
    super(Class3, dataSource);
  }
}
