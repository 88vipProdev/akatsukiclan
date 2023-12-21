import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class pageEntity{
        @PrimaryGeneratedColumn()
        id : number

        @Column()
        title : string 

        @Column()
        content : string 

        @Column()
        img : string 


}