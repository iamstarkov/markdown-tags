import mdast from 'mdast';
import R from 'ramda';
import html = require('mdast-html');

const tagsParagraph = R.pipe(
  item => mdast().parse(item),
  R.prop('children'),
  R.filter(R.propEq('type', 'paragraph')),
  R.map(R.prop('children')),
  R.filter(item => R.equals(1, R.length(item))),
  R.map(R.head),
  R.filter(R.propEq('type', 'text')),
  R.map(R.prop('value')),
  R.filter(item => /#[\w-]*,?[\s]+/gim.test(item)),
  R.head)

export default function markdownTags(input) {
  if (!input) return;
  const md = tagsParagraph(input);
  return { md, tags: md.split(', ') };
};
