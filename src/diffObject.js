const baseObj = (diffKey, diffValue, diffStatus) => {
  const obj = { key: diffKey, value: diffValue, status: diffStatus };
  return obj;
};
const make = {
  remove: (diffKey, diffValue) => baseObj(diffKey, diffValue, 'remove'),
  add: (diffKey, diffValue) => baseObj(diffKey, diffValue, 'add'),
  same: (diffKey, diffValue) => baseObj(diffKey, diffValue, 'same'),
  change: (diffKey, diffBefore, diffAfter) => baseObj(diffKey, [diffBefore, diffAfter], 'change'),
  parent: (diffKey, diffChildren = []) => ({ key: diffKey, children: diffChildren, status: 'parent' }),
};

const get = {
  status: (obj) => obj.status,
  key: (obj) => obj.key,
  value: (obj) => obj.value,
  beforeVal: (obj) => obj.value[0],
  afterVal: (obj) => obj.value[1],
  children: (obj) => obj.children,

};
const diff = { make, get };

export { make, get };
export default diff;
