import _ from 'lodash';
import { make } from './diffObject.js';

const getTree = (data1, data2) => {
  const keys = _.union(Object.keys(data1), Object.keys(data2));
  const sortedKeys = _.sortBy(keys);
  return sortedKeys.map((key) => {
    const value1 = data1[key];
    const value2 = data2[key];

    let obj = {};
    if (!_.has(data2, key)) {
      obj = make.remove(key, value1);
    } else if (!_.has(data1, key)) {
      obj = make.add(key, value2);
    } else if (_.isPlainObject(value1) && _.isPlainObject(value2)) {
      obj = make.parent(key, getTree(value1, value2));
    } else if (!_.isEqual(value1, value2)) {
      obj = make.change(key, value1, value2);
    } else if (_.isEqual(value1, value2)) {
      obj = make.same(key, value1);
    }
    return obj;
  });
};

export default getTree;
