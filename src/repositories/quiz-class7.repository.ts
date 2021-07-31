import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlconnectionDataSource} from '../datasources';
import {QuizClass7, QuizClass7Relations} from '../models';

export class QuizClass7Repository extends DefaultCrudRepository<
  QuizClass7,
  typeof QuizClass7.prototype.Subject,
  QuizClass7Relations
> {
  constructor(
    @inject('datasources.mysqlconnection') dataSource: MysqlconnectionDataSource,
  ) {
    super(QuizClass7, dataSource);
  }
}
