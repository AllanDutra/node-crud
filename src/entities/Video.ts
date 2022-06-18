import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import { Category } from "./Category";
import { v4 as uuid } from "uuid";

@Entity("videos")
export class Video {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    duration: number;

    @Column()
    category_id: string;

    @ManyToOne(() => Category) // muitos vídeos para uma única categoria
    @JoinColumn({ name: "category_id" })
    category: Category;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}