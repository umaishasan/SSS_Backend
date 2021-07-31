import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlconnectionDataSource} from '../datasources';
import {ResultClass8, ResultClass8Relations} from '../models';

export class ResultClass8Repository extends DefaultCrudRepository<
  ResultClass8,
  typeof ResultClass8.prototype.Id,
  ResultClass8Relations
> {
  constructor(
    @inject('datasources.mysqlconnection') dataSource: MysqlconnectionDataSource,
  ) {
    super(ResultClass8, dataSource);
  }
}
