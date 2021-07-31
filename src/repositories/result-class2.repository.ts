import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlconnectionDataSource} from '../datasources';
import {ResultClass2, ResultClass2Relations} from '../models';

export class ResultClass2Repository extends DefaultCrudRepository<
  ResultClass2,
  typeof ResultClass2.prototype.Id,
  ResultClass2Relations
> {
  constructor(
    @inject('datasources.mysqlconnection') dataSource: MysqlconnectionDataSource,
  ) {
    super(ResultClass2, dataSource);
  }
}
