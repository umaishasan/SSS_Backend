import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlconnectionDataSource} from '../datasources';
import {Canteen, CanteenRelations} from '../models';

export class CanteenRepository extends DefaultCrudRepository<
  Canteen,
  typeof Canteen.prototype.id,
  CanteenRelations
> {
  constructor(
    @inject('datasources.mysqlconnection') dataSource: MysqlconnectionDataSource,
  ) {
    super(Canteen, dataSource);
  }
}
