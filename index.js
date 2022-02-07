import _ from 'lodash';
import path from 'path';
import fs from 'fs';

const getAbsPath = (filepath) => {
  if (!path.isAbsolute(filepath)) {
    return path.resolve([process.cwd(), filepath]);
  }
  return filepath;
};

const getObjFromFilePath = (filepath) => {
  const fileData = fs.readFileSync(filepath);
  const obj = JSON.parse(fileData);
  return obj;
};

const gendiff = (filepath1, filepath2) => {
  const absFilepath1 = getAbsPath(filepath1);
  const absFilepath2 = getAbsPath(filepath2);

  const obj1 = getObjFromFilePath(absFilepath1);
  const obj2 = getObjFromFilePath(absFilepath2);

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
export default gendiff;
