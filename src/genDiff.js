import _ from 'lodash';
import parseFile from './parseFile.js';

const genDiff = (filepath1, filepath2) => {
  const obj1 = parseFile(filepath1);
  const obj2 = parseFile(filepath2);

  const keys = _.union(Object.keys(obj1), Object.keys(obj2));
  const resultObj = keys.reduce((previous, curr) => {
    const prev = previous;
    if (obj1[curr] === obj2[curr]) {
      prev[`  ${curr}`] = obj1[curr];
    } else if (!obj2[curr]) {
      prev[`- ${curr}`] = obj1[curr];
    } else if (!obj1[curr]) {
      prev[`+ ${curr}`] = obj2[curr];
    } else {
      prev[`- ${curr}`] = obj1[curr];
      prev[`+ ${curr}`] = obj2[curr];
    }
    return prev;
  }, {});
  const resultStr = JSON.stringify(resultObj, true, 1).replace(/[,"]/g, '');
  return resultStr;
};
export default genDiff;
