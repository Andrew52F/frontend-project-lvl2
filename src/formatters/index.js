import stylish from './stylish.js';
import plain from './plain.js';

const getFormatedResult = (diffTree, format) => {
  switch (format) {
    case 'stylish':
      return stylish(diffTree);
    case 'plain':
      return plain(diffTree);
    default:
      throw new Error('This format doesnt exist');
  }
};
export default getFormatedResult;
