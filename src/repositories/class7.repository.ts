import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlconnectionDataSource} from '../datasources';
import {Class7, Class7Relations} from '../models';

export class Class7Repository extends DefaultCrudRepository<
  Class7,
  typeof Class7.prototype.id,
  Class7Relations
> {
  constructor(
    @inject('datasources.mysqlconnection') dataSource: MysqlconnectionDataSource,
  ) {
    super(Class7, dataSource);
  }
}
