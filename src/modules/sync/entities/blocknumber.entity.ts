import { Column, Entity } from 'typeorm';
import { PublicEntity } from 'src/modules/shared/entities/public.entity';

@Entity('tbl_status')
export class BlockNumberEntity extends PublicEntity {
  @Column({
    type: 'int',
    name: 'contract_type',
  })
  contractType: number;

  @Column({
    type: 'int',
    name: 'block_number',
  })
  blockNumber: number;
}
