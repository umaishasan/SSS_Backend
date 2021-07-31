import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlconnectionDataSource} from '../datasources';
import {QuizClass4, QuizClass4Relations} from '../models';

export class QuizClass4Repository extends DefaultCrudRepository<
  QuizClass4,
  typeof QuizClass4.prototype.Subject,
  QuizClass4Relations
> {
  constructor(
    @inject('datasources.mysqlconnection') dataSource: MysqlconnectionDataSource,
  ) {
    super(QuizClass4, dataSource);
  }
}
