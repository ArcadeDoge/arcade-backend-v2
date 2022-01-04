import { Column, Entity, OneToMany } from 'typeorm';
import { PublicEntity } from 'src/modules/shared/entities/public.entity';
import { DiscussionEntity } from './discussion.entity';

@Entity('tbl_stuff')
export class StuffEntity extends PublicEntity {
  @Column({
    type: 'varchar',
    length: 1024,
    name: 'title',
  })
  title: string;

  // @OneToMany(type => DiscussionEntity, discussion => discussion.stuff)
  // discussions: DiscussionEntity[];
}
