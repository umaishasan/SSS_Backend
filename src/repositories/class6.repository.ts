import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlconnectionDataSource} from '../datasources';
import {Class6, Class6Relations} from '../models';

export class Class6Repository extends DefaultCrudRepository<
  Class6,
  typeof Class6.prototype.id,
  Class6Relations
> {
  constructor(
    @inject('datasources.mysqlconnection') dataSource: MysqlconnectionDataSource,
  ) {
    super(Class6, dataSource);
  }
}
