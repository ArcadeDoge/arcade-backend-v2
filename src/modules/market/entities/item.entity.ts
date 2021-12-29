import { PublicEntity } from "src/modules/shared/entities/public.entity";
import { Column, Entity } from "typeorm";

@Entity('tbl_item')
export class ItemEntity extends PublicEntity {

  @Column({
    type: 'int',
    name: 'game_id'
  })
  gameId: number;
  
  @Column({
    type: 'int',
    name: 'category_id'
  })
  categoryId: number;
  
  @Column({
    type: 'varchar',
    length: 128,
    name: 'contract_address'
  })
  contractAddress: string;
  
  @Column({
    type: 'int',
    name: 'token_id'
  })
  tokenId: number;
  
  @Column({
    type: 'varchar',
    length: 255,
    name: 'name'
  })
  name: string;
  
  @Column({
    type: 'text',
    name: 'description'
  })
  description: string;
  
  @Column({
    type: 'varchar',
    length: 255,
    name: 'attach_url'
  })
  attachUrl: string;
  
  @Column({
    type: 'varchar',
    length: 128,
    name: 'owner'
  })
  owner: string;
  
  @Column({
    type: 'int',
    name: 'is_anonymous'
  })
  isAnonymous: number;
  
  @Column({
    type: 'double',
    name: 'arcadedoge_price'
  })
  arcadeDogePrice: number;
  
  @Column({
    type: 'int',
    name: 'is_visible'
  })
  isVisible: number;
  
  @Column({
    type: 'int',
    name: 'is_burnt'
  })
  isBurnt: number;
  
  @Column({
    type: 'int',
    name: 'trade_cnt'
  })
  tradeCnt: number;
  
}