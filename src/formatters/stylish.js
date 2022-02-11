const stylish = (diffTree) => {
  const indent = (depth, spaseCount = 2) => ' '.repeat(depth * spaseCount);
  const genDiffSubLines = (value, depth) => {
    if (typeof value !== 'object') {
      return value.toString();
    }
    if (value === null) { return null; }
    const lines = Object
      .entries(value)
      .map(([subKey, subValue]) => `${indent(depth + 2)}  ${subKey}: ${genDiffSubLines(subValue, depth + 2)}`);
    return [
      '{',
      ...lines,
      `${indent(depth + 1)}}`,
    ].join('\n');
  };
  const iteration = (subTree, depth) => subTree.map((node) => {
    const getDiffLine = (sign, value) => `${indent(depth)}${sign} ${node.key}: ${genDiffSubLines(value, depth)}\n`;

    switch (node.status) {
      case 'added':
        return getDiffLine('+', node.value);
      case 'removed':
        return getDiffLine('-', node.value);
      case 'changed':
        return `${getDiffLine('-', node.before)}${getDiffLine('+', node.after)}`;
      case 'same':
        return getDiffLine(' ', node.value);
      default:
        return `${indent(depth + 1)}${node.key}: {\n${iteration(node.children, depth + 2).join('')}${indent(depth + 1)}}\n`;
    }
  });
  return `{\n${iteration(diffTree, 1).join('')}}`;
};
export default stylish;
