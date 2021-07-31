import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlconnectionDataSource} from '../datasources';
import {QuizClass5, QuizClass5Relations} from '../models';

export class QuizClass5Repository extends DefaultCrudRepository<
  QuizClass5,
  typeof QuizClass5.prototype.Subject,
  QuizClass5Relations
> {
  constructor(
    @inject('datasources.mysqlconnection') dataSource: MysqlconnectionDataSource,
  ) {
    super(QuizClass5, dataSource);
  }
}
