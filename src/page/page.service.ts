import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { pageEntity } from './page.entity';
import { Repository } from 'typeorm';

@Injectable()
export class pageService {
  constructor(
    @InjectRepository(pageEntity)
    private readonly pageRepository: Repository<pageEntity>,
  ) {}
}