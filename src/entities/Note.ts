import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany
} from "typeorm";

export enum NoteType {
  SECRETARY = 0,
  NOTE = 1
}

@Entity()
export class Note extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text", { nullable: true })
  content: string;

  @Column("tinyint", { nullable: true, default: NoteType.NOTE })
  content_type: number;

  @Column("boolean",{ default: true })
  done: boolean;
}
