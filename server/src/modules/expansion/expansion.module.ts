/**
 * Expansion module.
 * @file Expansion 模块
 * @module module/expansion/module
 * @author Surmon <https://github.com/surmon-china>
 */

import { Module, HttpModule } from '@nestjs/common';
import { TagProvider } from '@server/modules/tag/tag.model';
import { ArticleProvider } from '@server/modules/article/article.model';
import { CommentProvider } from '@server/modules/comment/comment.model';
import { ExpansionController } from './expansion.controller';
import { GithubService } from './expansion.service.github';
import { StatisticService } from './expansion.service.statistic';

const services = [GithubService, StatisticService];

@Module({
  imports: [HttpModule],
  controllers: [ExpansionController],
  providers: [
    TagProvider,
    ArticleProvider,
    CommentProvider,
    ...services,
  ],
  exports: services,
})
export class ExpansionModule {}
