import parseFile from './parseFile.js';
import getTree from './getTree.js';
import getFormatedResult from './formatters/index.js';
import { getFileData, getFileExtension } from './getFileInfo.js';

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const file1Data = getFileData(filepath1);
  const file2Data = getFileData(filepath2);
  const file1Ext = getFileExtension(filepath1);
  const file2Ext = getFileExtension(filepath2);
  const obj1 = parseFile(file1Data, file1Ext);
  const obj2 = parseFile(file2Data, file2Ext);
  const diffTree = getTree(obj1, obj2);
  const result = getFormatedResult(diffTree, format);
  return result;
};

export default genDiff;
