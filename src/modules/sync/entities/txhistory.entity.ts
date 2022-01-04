import { Column, Entity } from 'typeorm';
import { PublicEntity } from 'src/modules/shared/entities/public.entity';

@Entity('tbl_history')
export class TxHistoryEntity extends PublicEntity {
  @Column({
    type: 'varchar',
    length: 128,
    name: 'txid',
  })
  txId: string;

  @Column({
    type: 'int',
    name: 'game_id',
  })
  gameId: number;

  @Column({
    type: 'int',
    name: 'token_id',
  })
  tokenId: number;

  @Column({
    type: 'varchar',
    length: 128,
    name: 'from_address',
  })
  fromAddr: string;

  @Column({
    type: 'varchar',
    length: 128,
    name: 'to_address',
  })
  toAddr: string;

  @Column({
    type: 'varchar',
    length: 128,
    name: 'asset_id',
  })
  assetId: string;

  @Column({
    type: 'varchar',
    length: 32,
    name: 'token_amount',
  })
  tokenAmount: string;

  @Column({
    type: 'varchar',
    length: 32,
    name: 'gamepoint_amount',
  })
  gcAmount: string;

  @Column({
    type: 'int',
    name: 'type',
  })
  type: number;

  @Column({
    type: 'int',
    name: 'block_timestamp',
  })
  blockTimestamp: number;

  @Column({
    type: 'int',
    name: 'block_number',
  })
  blockNumber: number;
}
