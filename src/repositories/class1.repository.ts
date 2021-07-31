import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlconnectionDataSource} from '../datasources';
import {Class1, Class1Relations} from '../models';

export class Class1Repository extends DefaultCrudRepository<
  Class1,
  typeof Class1.prototype.id,
  Class1Relations
> {
  constructor(
    @inject('datasources.mysqlconnection') dataSource: MysqlconnectionDataSource,
  ) {
    super(Class1, dataSource);
  }
}
