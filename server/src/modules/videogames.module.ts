

import { Global, Module } from '@nestjs/common';
@Global()
@Module({
    imports: [DatabaseModule],
    controllers: [
        VideogamesController,
        CategoryController
    ],
    providers: [
        ...videogamesProviders,
        VideogamesService,
        CategoryService,
        
    ],
    exports:[],
})
export class VentaModule {}
