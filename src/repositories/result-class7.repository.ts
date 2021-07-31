import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlconnectionDataSource} from '../datasources';
import {ResultClass7, ResultClass7Relations} from '../models';

export class ResultClass7Repository extends DefaultCrudRepository<
  ResultClass7,
  typeof ResultClass7.prototype.Id,
  ResultClass7Relations
> {
  constructor(
    @inject('datasources.mysqlconnection') dataSource: MysqlconnectionDataSource,
  ) {
    super(ResultClass7, dataSource);
  }
}
