import _ from 'lodash';

const getTree = (data1, data2) => {
  const keys = _.union(Object.keys(data1), Object.keys(data2));
  const sortedKeys = _.sortBy(keys);
  return sortedKeys.map((key) => {
    const value1 = data1[key];
    const value2 = data2[key];

    let obj = {};
    if (!_.has(data2, key)) {
      obj = { status: 'remove', key, value: value1 };
    } else if (!_.has(data1, key)) {
      obj = { status: 'add', key, value: value2 };
    } else if (_.isPlainObject(value1) && _.isPlainObject(value2)) {
      obj = { status: 'recursion', key, children: getTree(value1, value2) };
    } else if (!_.isEqual(value1, value2)) {
      obj = {
        status: 'change', key, before: value1, after: value2,
      };
    } else if (_.isEqual(value1, value2)) {
      obj = { status: 'same', key, value: value1 };
    }
    return obj;
  });
};

export default getTree;
