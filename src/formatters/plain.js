import { get } from '../diffObject.js';

const getValueLine = (value) => {
  if (typeof value === 'object' && value !== null) {
    return '[complex value]';
  } if (typeof value === 'string') {
    return `'${value}'`;
  } if (value === null) {
    return null;
  }
  return String(value);
};

const plain = (diffTree) => {
  const iteration = (subTree, parent) => subTree
    .filter((node) => get.status(node) !== 'same')
    .map((node) => {
      const property = parent ? `${parent}.${get.key(node)}` : `${get.key(node)}`;
      switch (get.status(node)) {
        case 'add':
          return `Property '${property}' was added with value: ${getValueLine(get.value(node))}`;
        case 'remove':
          return `Property '${property}' was removed`;
        case 'change':
          return `Property '${property}' was updated. From ${getValueLine(get.beforeVal(node))} to ${getValueLine(get.afterVal(node))}`;
        case 'parent':
          return `${iteration(get.children(node), property)}`;
        default:
          throw new Error(`No such diff object status ${get.status(node)}`);
      }
    }, []).join('\n');
  return iteration(diffTree, '');
};

export default plain;
