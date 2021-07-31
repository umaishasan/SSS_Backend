import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlconnectionDataSource} from '../datasources';
import {QuizClass10, QuizClass10Relations} from '../models';

export class QuizClass10Repository extends DefaultCrudRepository<
  QuizClass10,
  typeof QuizClass10.prototype.Subject,
  QuizClass10Relations
> {
  constructor(
    @inject('datasources.mysqlconnection') dataSource: MysqlconnectionDataSource,
  ) {
    super(QuizClass10, dataSource);
  }
}
