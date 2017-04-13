# markdown-tags

[![Greenkeeper badge](https://badges.greenkeeper.io/iamstarkov/markdown-tags.svg)](https://greenkeeper.io/)

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]

> get tags from markdown article

## Install

    npm install --save markdown-tags

## Usage

```js
import markdownTags from 'markdown-tags';

const input = `
# Title

_November 5, 2015_

#nodejs, #markdown, #qwe-asd`;

markdownTags(input).tags; // ['nodejs', 'markdown', 'qwe-asd']
markdownTags(input).md;   // '#nodejs, #markdown, #qwe-asd'
markdownTags();           // undefined ¯\_(ツ)_/¯
```

## API

### markdownTags(input)

#### input

*Required*  
Type: `String`

Markdown string.

## Related

* [article-data][article-data] — extract data from your markdown article
* [get-md-title][get-md-title] — get title from markdown article
* [get-md-date][get-md-date] — get date from markdown article
* [get-md-desc][get-md-desc] — get description from markdown article
* [get-md-image][get-md-image] — get image from markdown article
* [get-md-content][get-md-content] — get content from markdown article

[article-data]: https://github.com/iamstarkov/article-data
[get-md-title]: https://github.com/iamstarkov/get-md-title
[get-md-date]: https://github.com/iamstarkov/get-md-date
[get-md-desc]: https://github.com/iamstarkov/get-md-desc
[get-md-image]: https://github.com/iamstarkov/get-md-image
[get-md-content]: https://github.com/iamstarkov/get-md-content

## License

MIT © [Vladimir Starkov](https://iamstarkov.com)

[npm-url]: https://npmjs.org/package/markdown-tags
[npm-image]: https://img.shields.io/npm/v/markdown-tags.svg?style=flat-square

[travis-url]: https://travis-ci.org/iamstarkov/markdown-tags
[travis-image]: https://img.shields.io/travis/iamstarkov/markdown-tags.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/iamstarkov/markdown-tags
[coveralls-image]: https://img.shields.io/coveralls/iamstarkov/markdown-tags.svg?style=flat-square

[depstat-url]: https://david-dm.org/iamstarkov/markdown-tags
[depstat-image]: https://david-dm.org/iamstarkov/markdown-tags.svg?style=flat-square
