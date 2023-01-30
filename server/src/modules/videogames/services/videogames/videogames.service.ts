import { Inject, Injectable } from '@nestjs/common';
import { CreateVideogamesDto, FilterVideogamesDto, ReadVideogamesDto } from 'src/modules-sv/dto';
import { VideogamesEntity } from 'src/modules-sv/entities/Videogames.model';
import { RepositoryEnum } from 'src/shared/enums/repository.enum';
import { Repository } from 'typeorm';
import { ServiceResponseHttpModel} from '@shared/models';
import { plainToInstance } from 'class-transformer';
import { response } from 'express';

@Injectable()
export class VideogamessService {
    constructor(@Inject(RepositoryEnum.Videogames_REPOSITORY)
        private repository:Repository<VideogamesEntity>,
        ){}
   async create(payload:CreateVideogamesDto):Promise<ServiceResponseHttpModel>{
        const newVideogames = this.repository.create(payload); //se crea el Videogameso
        const VideogamesCreated = this.repository.save(newVideogames);//guardar el Videogameso nuevo creado
        return {data:plainToInstance(ReadVideogamesDto,VideogamesCreated)}//visualizamos
    }

   async catalogue():Promise<ServiceResponseHttpModel> {
    const newEvent = this.repository.findAndCount({take:1000});
    return{
        data:this.response[0],
        pagination:{totaItems: response[1],limit:10}
    };
   }

   async findAll(params?:FilterVideogamesDto):Promise<ServiceResponseHttpModel>{
        if(params?.limit>0 && params?.page >=0)
        return await this.paginateAndFilter(params);
    }
    const response = await this.repository.findAndCount({
        order:{
            updateAt:'DESC'
        },
    });
    return{
        data:plainToInstance(ReadVideogamesDto,response[0]),
            pagination:{totalItems:response[1],limit:10}
    }

    }

