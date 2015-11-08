import { deepEqual } from 'assert';
import markdownTags from './index';

const input = `
# Title

_November 5, 2015_

#nodejs, #markdown, #qwe-asd

Params

Des*cript*ion text`;

it('should markdownTags tags', () =>
  deepEqual(markdownTags(input).tags, ['nodejs', 'markdown', 'qwe-asd']));

it('should markdownTags md', () =>
  deepEqual(markdownTags(input).md, '#nodejs, #markdown, #qwe-asd'));

it('should markdownTags tags with other data', () =>
  deepEqual(markdownTags('#yo #there').tags, ['yo', 'there']));

it('should markdownTags tags with single tag', () =>
  deepEqual(markdownTags('#yo').tags, ['yo']));

it('should markdownTags tags with monstreuos tag', () =>
  deepEqual(markdownTags('#yo, #asd     #q').tags, ['yo', 'asd', 'q']));

it('should markdownTags tags with commas tag', () =>
  deepEqual(markdownTags('#yo, #a,,,sd     #q').tags, ['yo', 'a,,,sd', 'q']));

it('should markdownTags invalid input', () =>
  deepEqual(markdownTags(), undefined));
