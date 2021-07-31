import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlconnectionDataSource} from '../datasources';
import {QuizClass3, QuizClass3Relations} from '../models';

export class QuizClass3Repository extends DefaultCrudRepository<
  QuizClass3,
  typeof QuizClass3.prototype.Subject,
  QuizClass3Relations
> {
  constructor(
    @inject('datasources.mysqlconnection') dataSource: MysqlconnectionDataSource,
  ) {
    super(QuizClass3, dataSource);
  }
}
