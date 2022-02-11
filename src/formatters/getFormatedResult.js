import stylish from './stylish.js';

const getFormatedResult = (diffTree, format) => {
  let result;
  if (format === 'stylish') {
    result = stylish(diffTree);
  }
  return result;
};
export default getFormatedResult;
