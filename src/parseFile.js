import yaml from 'js-yaml';

const parseFile = (fileData, fileExtention) => {
  switch (fileExtention) {
    case '.yaml':
    case '.yml':
      return yaml.load(fileData);
    case '.json':
      return JSON.parse(fileData);
    default:
      throw new Error(`This file format is not supported: ${fileExtention}`);
  }
};

export default parseFile;
