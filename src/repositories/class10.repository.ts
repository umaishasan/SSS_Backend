import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlconnectionDataSource} from '../datasources';
import {Class10, Class10Relations} from '../models';

export class Class10Repository extends DefaultCrudRepository<
  Class10,
  typeof Class10.prototype.id,
  Class10Relations
> {
  constructor(
    @inject('datasources.mysqlconnection') dataSource: MysqlconnectionDataSource,
  ) {
    super(Class10, dataSource);
  }
}
