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
    const getDiffLine = (sign, value) => `${indent(depth)}${sign} ${node.key}: ${getDiffSubLines(value, depth)}\n`;

    switch (node.status) {
      case 'add':
        return getDiffLine('+', node.value);
      case 'remove':
        return getDiffLine('-', node.value);
      case 'change':
        return `${getDiffLine('-', node.before)}${getDiffLine('+', node.after)}`;
      case 'same':
        return getDiffLine(' ', node.value);
      case 'recursion':
        return `${indent(depth + 1)}${node.key}: {\n${iteration(node.children, depth + 2).join('')}${indent(depth + 1)}}\n`;
      default:
        throw new Error(`No such diff object status ${node.status}`);
    }
  });
  return `{\n${iteration(diffTree, 1).join('')}}`;
};
export default stylish;
