import { isAbsolute, resolve, extname } from 'path';
import fs from 'fs';
import yaml from 'js-yaml';

const parseFile = (filepath) => {
  const path = !isAbsolute(filepath) ? resolve([process.cwd(), filepath]) : filepath;
  const fileData = fs.readFileSync(path, 'utf8');
  if (extname(path) === '.yaml' || extname(path) === '.yml') {
    const objYaml = yaml.load(fileData);
    return objYaml;
  }
  const objJson = JSON.parse(fileData);
  return objJson;
};

export default parseFile;
