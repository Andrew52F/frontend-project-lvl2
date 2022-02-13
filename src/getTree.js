import _ from 'lodash';

const getTree = (data1, data2) => {
  const keys = _.union(Object.keys(data1), Object.keys(data2));
  const sortedKeys = _.sortBy(keys);
  return sortedKeys.map((key) => {
    const value1 = data1[key];
    const value2 = data2[key];

    if (!_.has(data2, key)) {
      return { status: 'remove', key, value: value1 };
    }
    if (!_.has(data1, key)) {
      return { status: 'add', key, value: value2 };
    }
    if (_.isPlainObject(value1) && _.isPlainObject(value2)) {
      return { status: 'recursion', key, children: getTree(value1, value2) };
    }
    if (!_.isEqual(value1, value2)) {
      return {
        status: 'change', key, before: value1, after: value2,
      };
    }
    return { status: 'same', key, value: value1 };
  });
};

export default getTree;
