import _ from 'lodash';
import { isAbsolute, resolve } from 'path';
import fs from 'fs';

const parseFile = (filepath) => {
  const path = !isAbsolute(filepath) ? resolve([process.cwd(), filepath]) : filepath;
  const fileData = fs.readFileSync(path);
  const obj = JSON.parse(fileData);
  return obj;
};

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
