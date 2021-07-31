import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlconnectionDataSource} from '../datasources';
import {AllUser, AllUserRelations} from '../models';

export class AllUserRepository extends DefaultCrudRepository<
  AllUser,
  typeof AllUser.prototype.email,
  AllUserRelations
> {
  constructor(
    @inject('datasources.mysqlconnection') dataSource: MysqlconnectionDataSource,
  ) {
    super(AllUser, dataSource);
  }
}
