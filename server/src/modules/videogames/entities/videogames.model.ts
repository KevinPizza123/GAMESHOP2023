import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CategoryEntity } from "./category.model";

@Entity('Videogamess',{schema:'ventasbdd'})

export class VideogamesEntity{
    //columnas de la entidad 
    @PrimaryGeneratedColumn('identity')
    id:string;
    @CreateDateColumn({
        //objeto
        name:'create_at',
        type:'timestamptz',
        default:() => 'CURRENT_TIMESTAMP',
    })
    
    createAT:Date;//atributo

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
    //paramtrro de entrada =>
    @ManyToOne(() => CategoryEntity, (category) => category.Videogames)
    @JoinColumn({name:'Videogames_id'})
    category: CategoryEntity;

    @Column('varchar',{
        name:'title',
        unique:true,
        comment: 'nombre del Videojuego',
    })
    title:string;

    @Column('number',{
        name:'price',//nombre de la tabla
        comment:'precio del  Videojuego',
    })
    
    price:number;//nombre del atributo
    
    @Column('varchar',{
        name:'description',
        comment:'descripcion del Videojuego'
    })
    description:string;



}

