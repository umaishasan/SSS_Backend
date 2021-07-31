import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlconnectionDataSource} from '../datasources';
import {QuizClass1, QuizClass1Relations} from '../models';

export class QuizClass1Repository extends DefaultCrudRepository<
  QuizClass1,
  typeof QuizClass1.prototype.Subject,
  QuizClass1Relations
> {
  constructor(
    @inject('datasources.mysqlconnection') dataSource: MysqlconnectionDataSource,
  ) {
    super(QuizClass1, dataSource);
  }
}
