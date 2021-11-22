import { BaseEntity, Column, Entity, 
    PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "players"})
export class Players extends BaseEntity {
    @PrimaryGeneratedColumn("uuid") id:string;
    @Column() firstName: string;
    @Column() lastName: string;
    @Column() age: number;
    @Column() codename: string;
    @Column() info: string;
};






