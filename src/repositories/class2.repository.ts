import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlconnectionDataSource} from '../datasources';
import {Class2, Class2Relations} from '../models';

export class Class2Repository extends DefaultCrudRepository<
  Class2,
  typeof Class2.prototype.id,
  Class2Relations
> {
  constructor(
    @inject('datasources.mysqlconnection') dataSource: MysqlconnectionDataSource,
  ) {
    super(Class2, dataSource);
  }
}
