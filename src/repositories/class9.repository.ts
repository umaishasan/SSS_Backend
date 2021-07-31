import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlconnectionDataSource} from '../datasources';
import {Class9, Class9Relations} from '../models';

export class Class9Repository extends DefaultCrudRepository<
  Class9,
  typeof Class9.prototype.id,
  Class9Relations
> {
  constructor(
    @inject('datasources.mysqlconnection') dataSource: MysqlconnectionDataSource,
  ) {
    super(Class9, dataSource);
  }
}
