import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlconnectionDataSource} from '../datasources';
import {QuizClass9, QuizClass9Relations} from '../models';

export class QuizClass9Repository extends DefaultCrudRepository<
  QuizClass9,
  typeof QuizClass9.prototype.Subject,
  QuizClass9Relations
> {
  constructor(
    @inject('datasources.mysqlconnection') dataSource: MysqlconnectionDataSource,
  ) {
    super(QuizClass9, dataSource);
  }
}
