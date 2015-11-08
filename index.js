import mdast from 'mdast';
import { pipe, prop, filter, propEq, map, head, split, tail } from 'ramda';

const paragraph = pipe(
  item => mdast().parse(item),
  prop('children'),
  filter(propEq('type', 'paragraph')),
  map(prop('children')),
  filter(item => item.length === 1),
  map(head),
  filter(propEq('type', 'text')),
  map(prop('value')),
  filter(item => /#[\w-]*,?[\s]*/gim.test(item)),
  head)

const tags = pipe(
  split(/,?[\s]+/gim),
  map(tail));

export default function markdownTags(input) {
  if (!input) return;
  const md = paragraph(input);
  return { md, tags: tags(md) };
};
