import { Column, Entity } from 'typeorm';
import { PublicEntity } from 'src/modules/shared/entities/public.entity';

@Entity('tbl_game')
export class GameEntity extends PublicEntity {
  @Column({
    type: 'varchar',
    length: 255,
    name: 'name',
  })
  name: string;
}
