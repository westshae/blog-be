import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class BlogEntity {
    @PrimaryColumn()
    id: number;

    @Column()
    title:string;

    @Column()
    description:string;

    @Column()
    author:string;

    @Column()
    date:Date;

    @Column()
    text:string;
} 