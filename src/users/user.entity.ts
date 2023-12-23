import { Column, Entity ,PrimaryGeneratedColumn  } from "typeorm";
@Entity()

export class UserEntity{
        @PrimaryGeneratedColumn()
        id : number

        @Column()
        fristName : string 

        @Column() 
        middleName : string 

        @Column() 
        lastName: string 

        @Column()
        sex :string
        
        @Column()
        email :string 

        @Column()
        password: string 

        @Column({
                type: 'enum',
                enum: ['admin', 'user'],
                default: 'user', // Giá trị mặc định là 'user'
              })
              role: string;








}