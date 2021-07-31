import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlconnectionDataSource} from '../datasources';
import {Class8, Class8Relations} from '../models';

export class Class8Repository extends DefaultCrudRepository<
  Class8,
  typeof Class8.prototype.id,
  Class8Relations
> {
  constructor(
    @inject('datasources.mysqlconnection') dataSource: MysqlconnectionDataSource,
  ) {
    super(Class8, dataSource);
  }
}
