import { Test, TestingModule } from '@nestjs/testing';
import { VideogamessService } from './videogames.service';

describe('VideogamessService', () => {
  let service: VideogamessService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VideogamessService],
    }).compile();

    service = module.get<VideogamessService>(VideogamessService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
