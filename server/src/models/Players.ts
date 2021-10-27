import { BaseEntity, Column, Entity, 
    PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "players"})
export class Players extends BaseEntity {
    @PrimaryGeneratedColumn() id: number;
    @Column() firstName: string;
    @Column() lastName: string;
    @Column() age: number;
    @Column() codename: string;
    @Column() info: string;
};






