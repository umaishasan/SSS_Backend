import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlconnectionDataSource} from '../datasources';
import {QuizClass2, QuizClass2Relations} from '../models';

export class QuizClass2Repository extends DefaultCrudRepository<
  QuizClass2,
  typeof QuizClass2.prototype.Subject,
  QuizClass2Relations
> {
  constructor(
    @inject('datasources.mysqlconnection') dataSource: MysqlconnectionDataSource,
  ) {
    super(QuizClass2, dataSource);
  }
}
