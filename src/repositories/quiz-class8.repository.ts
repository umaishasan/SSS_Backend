import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlconnectionDataSource} from '../datasources';
import {QuizClass8, QuizClass8Relations} from '../models';

export class QuizClass8Repository extends DefaultCrudRepository<
  QuizClass8,
  typeof QuizClass8.prototype.Subject,
  QuizClass8Relations
> {
  constructor(
    @inject('datasources.mysqlconnection') dataSource: MysqlconnectionDataSource,
  ) {
    super(QuizClass8, dataSource);
  }
}
