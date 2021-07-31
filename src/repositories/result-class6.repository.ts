import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlconnectionDataSource} from '../datasources';
import {ResultClass6, ResultClass6Relations} from '../models';

export class ResultClass6Repository extends DefaultCrudRepository<
  ResultClass6,
  typeof ResultClass6.prototype.Id,
  ResultClass6Relations
> {
  constructor(
    @inject('datasources.mysqlconnection') dataSource: MysqlconnectionDataSource,
  ) {
    super(ResultClass6, dataSource);
  }
}
