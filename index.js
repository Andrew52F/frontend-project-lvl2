import _ from 'lodash';
import path from 'path';
import fs from 'fs';

const getAbsPath = (fpath) => {
  let filepath = fpath;
  if (!path.isAbsolute(filepath)) {
    filepath = path.resolve([process.cwd(), filepath]);
  }
  return filepath;
};

const getObjFromFilePath = (fpath) => {
  let filepath = fpath;
  filepath = getAbsPath(filepath);
  const fileData = fs.readFileSync(filepath);
  const obj = JSON.parse(fileData);
  return obj;
};

const gendiff = (filepath1, filepath2) => {
  const obj1 = getObjFromFilePath(filepath1);
  const obj2 = getObjFromFilePath(filepath2);

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
