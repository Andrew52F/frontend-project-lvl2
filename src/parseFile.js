import path from 'path';
import fs from 'fs';
import yaml from 'js-yaml';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const parseFile = (filepath) => {
  const absPath = !path.isAbsolute(filepath) ? path.join(__dirname, '..', '__fixtures__', filepath) : filepath;
  const fileData = fs.readFileSync(absPath, 'utf8');
  switch (path.extname(absPath)) {
    case '.yaml':
    case '.yml':
      return yaml.load(fileData);
    case '.json':
      return JSON.parse(fileData);
    default:
      throw new Error(`This file format is not supported: ${path.extname(absPath)}`);
  }
};

export default parseFile;
