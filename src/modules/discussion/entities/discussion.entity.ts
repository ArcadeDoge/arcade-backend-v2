import { PublicEntity } from 'src/modules/shared/entities/public.entity';
import { Column, Entity } from 'typeorm';

@Entity('tbl_discussion')
export class DiscussionEntity extends PublicEntity {
  // @ManyToOne(type => StuffEntity, stuff => stuff.discussions)
  // stuff: StuffEntity;

  @Column({
    type: 'int',
    name: 'stuff_id',
  })
  stuffId: number;

  @Column({
    type: 'text',
    name: 'content',
  })
  content: string;

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

  @Column({
    type: 'int',
    name: 'likes',
  })
  likes: number;

  // @Column({
  //   type: 'int',
  //   name: 'comment_cnt',
  //   nullable: true
  // })
  commentCnt: number;

  // @OneToMany(type => CommentEntity, comment => comment.discussion)
  // comments: CommentEntity[];
}
