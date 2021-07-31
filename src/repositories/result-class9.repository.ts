import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlconnectionDataSource} from '../datasources';
import {ResultClass9, ResultClass9Relations} from '../models';

export class ResultClass9Repository extends DefaultCrudRepository<
  ResultClass9,
  typeof ResultClass9.prototype.Id,
  ResultClass9Relations
> {
  constructor(
    @inject('datasources.mysqlconnection') dataSource: MysqlconnectionDataSource,
  ) {
    super(ResultClass9, dataSource);
  }
}
