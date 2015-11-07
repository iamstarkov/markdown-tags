import { equal } from 'assert';
import markdownTags from './index';

const input = `
# Title

_November 5, 2015_

#nodejs, #markdown, #qwe-asd

Params

Des*cript*ion text`;

const yo = process(input);

it('should markdownTags tags', () =>
  equal(markdownTags(input).tags, ['nodejs', 'markdown']));

it('should markdownTags md', () =>
  equal(markdownTags(input).md, '#nodejs, #markdown'));

it('should markdownTags invalid input', () =>
  equal(markdownTags(), undefined));
