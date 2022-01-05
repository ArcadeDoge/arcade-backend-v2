import { Column, Entity } from 'typeorm';
import { PublicEntity } from 'src/modules/shared/entities/public.entity';

@Entity('tbl_likes')
export class LikesEntity extends PublicEntity {
  @Column({
    type: 'int',
    name: 'discussion_id',
  })
  discussionId: number;

  @Column({
    type: 'int',
    name: 'parent_id',
  })
  parentId: number;

  @Column({
    type: 'varchar',
    length: 255,
    name: 'user',
  })
  user: string;

  @Column({
    type: 'int',
    name: 'user_type',
  })
  userType: number;
}
