import { equal } from 'assert';
import markdownTags from './index';

it('should markdownTags', () =>
  equal(markdownTags('unicorns'), 'unicorns'));

it('should markdownTags invalid input', () =>
  equal(markdownTags(), undefined));
