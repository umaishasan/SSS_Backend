import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlconnectionDataSource} from '../datasources';
import {ResultClass4, ResultClass4Relations} from '../models';

export class ResultClass4Repository extends DefaultCrudRepository<
  ResultClass4,
  typeof ResultClass4.prototype.Id,
  ResultClass4Relations
> {
  constructor(
    @inject('datasources.mysqlconnection') dataSource: MysqlconnectionDataSource,
  ) {
    super(ResultClass4, dataSource);
  }
}
