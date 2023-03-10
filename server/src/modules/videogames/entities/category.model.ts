import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { VideogamesEntity } from "./Videogames.model";

@Entity('category',{schema:'ventasbdd'})
export class CategoryEntity{
    //columnas de la entidad 
    @PrimaryGeneratedColumn('identity')
    id:string;
    @CreateDateColumn({
        name:'create_at',
        type:'timestamptz',
        default:() => 'CURRENT_TIMESTAMP',
    })
    
    createAT:Date;

    @UpdateDateColumn({
        name:'create_at',
        type:'timestamptz',
        default:() => 'CURRENT_TIMESTAMP',
    })
    updateAt:Date;

    @DeleteDateColumn({
        name:'create_at',
        type:'timestamptz',
        nullable:true,
    })

    deleteAt:Date; //el nombre del atributo


    //Relationships
    
    @OneToMany(() => VideogamesEntity, (Videogames) => Videogames.category)
    @JoinColumn({name:'Videogames_id'})
    Videogames: VideogamesEntity;
    
    @Column('varchar',{
        name:'name',
        comment: 'nombre de la categoria',
    })
    
    name:string;
    //nombre del atributo
    
    @Column('varchar',{
        name:'description',
        comment:'descripcion de la categoria'
    })
    
    description:string;
    //user es categoria y photo es Videogameso
}
