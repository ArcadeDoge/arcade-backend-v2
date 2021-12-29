import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { PublicEntity } from 'src/modules/shared/entities/public.entity';
// import { DiscussionEntity } from './discussion.entity';

@Entity('tbl_comment')
export class CommentEntity extends PublicEntity {

  @Column({
    type: 'int',
    name: 'discussion_id'
  })
  discussionId: number;

  // @ManyToOne(type => DiscussionEntity, discussion => discussion.comments)
  // discussion: DiscussionEntity;

  @Column({
    type: 'int',
    name: 'parent_id'
  })
  parentId: number;

  @Column({
    type: 'text',
    name: 'content'
  })
  content: string;

  @Column({
    type: 'varchar',
    length: 255,
    name: 'user'
  })
  user: string;

  @Column({
    type: 'int',
    name: 'user_type'
  })
  userType: number;

  @Column({
    type: 'int',
    name: 'likes'
  })
  likes: number;
}