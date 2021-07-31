import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlconnectionDataSource} from '../datasources';
import {ResultClass10, ResultClass10Relations} from '../models';

export class ResultClass10Repository extends DefaultCrudRepository<
  ResultClass10,
  typeof ResultClass10.prototype.Id,
  ResultClass10Relations
> {
  constructor(
    @inject('datasources.mysqlconnection') dataSource: MysqlconnectionDataSource,
  ) {
    super(ResultClass10, dataSource);
  }
}
