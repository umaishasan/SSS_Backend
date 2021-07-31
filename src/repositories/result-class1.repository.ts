import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlconnectionDataSource} from '../datasources';
import {ResultClass1, ResultClass1Relations} from '../models';

export class ResultClass1Repository extends DefaultCrudRepository<
  ResultClass1,
  typeof ResultClass1.prototype.Id,
  ResultClass1Relations
> {
  constructor(
    @inject('datasources.mysqlconnection') dataSource: MysqlconnectionDataSource,
  ) {
    super(ResultClass1, dataSource);
  }
}
