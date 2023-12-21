import { pageEntity } from './page.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module, ModuleMetadata } from "@nestjs/common"; 

@Module({

        imports:[
                TypeOrmModule.forRoot(), pageModule,
        ]
})

export class pageModule{

}