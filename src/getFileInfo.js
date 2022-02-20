import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const genAbsolutePath = (somePath) => {
  const absPath = !path.isAbsolute(somePath) ? path.join(__dirname, '..', '__fixtures__', somePath) : somePath;
  return absPath;
};
const getFileData = (filePath) => fs.readFileSync(genAbsolutePath(filePath), 'utf8');
const getFileExtension = (filePath) => path.extname(filePath);

export { getFileData, getFileExtension };
