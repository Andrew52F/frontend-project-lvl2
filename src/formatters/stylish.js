import { get } from '../diffObject.js';

const indent = (depth, spaseCount = 2) => ' '.repeat(depth * spaseCount);
const getDiffSubLines = (value, depth) => {
  if (typeof value !== 'object') {
    return value.toString();
  }
  if (value === null) { return null; }
  const lines = Object
    .entries(value)
    .map(([subKey, subValue]) => `${indent(depth + 2)}  ${subKey}: ${getDiffSubLines(subValue, depth + 2)}`);
  return [
    '{',
    ...lines,
    `${indent(depth + 1)}}`,
  ].join('\n');
};

const stylish = (diffTree) => {
  const iteration = (subTree, depth) => subTree.map((node) => {
    const getDiffLine = (sign, value) => `${indent(depth)}${sign} ${get.key(node)}: ${getDiffSubLines(value, depth)}\n`;

    switch (get.status(node)) {
      case 'add':
        return getDiffLine('+', get.value(node));
      case 'remove':
        return getDiffLine('-', get.value(node));
      case 'change':
        return `${getDiffLine('-', get.beforeVal(node))}${getDiffLine('+', get.afterVal(node))}`;
      case 'same':
        return getDiffLine(' ', get.value(node));
      case 'parent':
        return `${indent(depth + 1)}${get.key(node)}: {\n${iteration(get.children(node), depth + 2).join('')}${indent(depth + 1)}}\n`;
      default:
        throw new Error(`No such diff object status ${get.status(node)}`);
    }
  });
  return `{\n${iteration(diffTree, 1).join('')}}`;
};
export default stylish;
