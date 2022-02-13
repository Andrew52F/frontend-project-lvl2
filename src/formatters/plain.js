const plain = (diffTree) => {
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
  const iteration = (subTree, parent) => subTree
    .filter((node) => node.status !== 'same')
    .map((node) => {
      const property = parent ? `${parent}.${node.key}` : `${node.key}`;
      switch (node.status) {
        case 'add':
          return `Property '${property}' was added with value: ${getValueLine(node.value)}`;
        case 'remove':
          return `Property '${property}' was removed`;
        case 'change':
          return `Property '${property}' was updated. From ${getValueLine(node.before)} to ${getValueLine(node.after)}`;
        case 'recursion':
          return `${iteration(node.children, property)}`;
        default:
          throw new Error(`No such diff object status ${node.status}`);
      }
    }, []).join('\n');
  return iteration(diffTree, '');
};

export default plain;
