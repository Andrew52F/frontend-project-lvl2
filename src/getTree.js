import _ from 'lodash';
import { make } from './diffObject.js';

const getTree = (data1, data2) => {
  const keys = _.union(Object.keys(data1), Object.keys(data2));
  const sortedKeys = _.sortBy(keys);
  return sortedKeys.map((key) => {
    const value1 = data1[key];
    const value2 = data2[key];

    if (value2 === undefined) {
      return make.remove(key, value1);
    }
    if (value1 === undefined) {
      return make.add(key, value2);
    }
    if (_.isPlainObject(value1) && _.isPlainObject(value2)) {
      return make.parent(key, getTree(value1, value2));
    }
    if (!_.isEqual(value1, value2)) {
      return make.change(key, value1, value2);
    }
    if (_.isEqual(value1, value2)) {
      return make.same(key, value1);
    }
    return new Error(`Diff tree generation problem. Format of the value is not supported. Key of the value: "${key}"`);
  });
};

export default getTree;
