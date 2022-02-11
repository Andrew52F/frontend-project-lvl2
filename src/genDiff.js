import parseFile from './parseFile.js';
import getTree from './getTree.js';
import getFormatedResult from './formatters/getFormatedResult.js';

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const obj1 = parseFile(filepath1);
  const obj2 = parseFile(filepath2);
  const diffTree = getTree(obj1, obj2);
  const result = getFormatedResult(diffTree, format);
  return result;
};

export default genDiff;
