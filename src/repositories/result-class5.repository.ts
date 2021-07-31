import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlconnectionDataSource} from '../datasources';
import {ResultClass5, ResultClass5Relations} from '../models';

export class ResultClass5Repository extends DefaultCrudRepository<
  ResultClass5,
  typeof ResultClass5.prototype.Id,
  ResultClass5Relations
> {
  constructor(
    @inject('datasources.mysqlconnection') dataSource: MysqlconnectionDataSource,
  ) {
    super(ResultClass5, dataSource);
  }
}
