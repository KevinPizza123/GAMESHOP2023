import { CategoryEntity } from 'src/modules-sv/entities/category.model';
import { VideogamesEntity } from 'src/modules-sv/entities/Videogames.model';
import { DataSource } from 'typeorm';

export videogamesProviders = [
    {
        provide: RepositoryEnum.Videogames_REPOSITORY,
        userFactory: (dataSource: DataSource) =>
            dataSource.getRepository(VideogamesEntity),
        inject: [DataSourceEnum.PG_DATA_SOURCE]
    },
    {
        provide: RepositoryEnum.CATEGORY_REPOSITORY,
        userFactory: (dataSource: DataSource) =>
            dataSource.getRepository(CategoryEntity),
        inject: [DataSourceEnum.PG_DATA_SOURCE]
    }
]