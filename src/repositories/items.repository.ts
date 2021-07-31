import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlconnectionDataSource} from '../datasources';
import {Items, ItemsRelations} from '../models';

export class ItemsRepository extends DefaultCrudRepository<
  Items,
  typeof Items.prototype.product_id,
  ItemsRelations
> {
  constructor(
    @inject('datasources.mysqlconnection') dataSource: MysqlconnectionDataSource,
  ) {
    super(Items, dataSource);
  }
}
