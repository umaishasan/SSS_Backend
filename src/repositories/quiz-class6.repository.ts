import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlconnectionDataSource} from '../datasources';
import {QuizClass6, QuizClass6Relations} from '../models';

export class QuizClass6Repository extends DefaultCrudRepository<
  QuizClass6,
  typeof QuizClass6.prototype.Subject,
  QuizClass6Relations
> {
  constructor(
    @inject('datasources.mysqlconnection') dataSource: MysqlconnectionDataSource,
  ) {
    super(QuizClass6, dataSource);
  }
}
