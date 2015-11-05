import { equal } from 'assert';
import markdownTags from './index';

const input = `
# Title

_November 5, 2015_

#nodejs, #markdown

Description text`;

it('should markdownTags tags', () =>
  equal(markdownTags(input).tags, ['nodejs', 'markdown']));

it('should markdownTags md', () =>
  equal(markdownTags(input, text => `YO ${text}`).md, 'YO #nodejs, #markdown'));

it('should markdownTags md', () =>
  equal(markdownTags(input, text => `YO ${text}`).html, '<p>YO #nodejs, #markdown</p>'));

it('should markdownTags invalid input', () =>
  equal(markdownTags(), undefined));
