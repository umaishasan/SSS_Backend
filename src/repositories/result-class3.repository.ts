import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlconnectionDataSource} from '../datasources';
import {ResultClass3, ResultClass3Relations} from '../models';

export class ResultClass3Repository extends DefaultCrudRepository<
  ResultClass3,
  typeof ResultClass3.prototype.Id,
  ResultClass3Relations
> {
  constructor(
    @inject('datasources.mysqlconnection') dataSource: MysqlconnectionDataSource,
  ) {
    super(ResultClass3, dataSource);
  }
}
