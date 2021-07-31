import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlconnectionDataSource} from '../datasources';
import {Class4, Class4Relations} from '../models';

export class Class4Repository extends DefaultCrudRepository<
  Class4,
  typeof Class4.prototype.id,
  Class4Relations
> {
  constructor(
    @inject('datasources.mysqlconnection') dataSource: MysqlconnectionDataSource,
  ) {
    super(Class4, dataSource);
  }
}
