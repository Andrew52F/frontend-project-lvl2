import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import genDiff from '../src/genDiff';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('getDiff testing', () => {
  const file1Path = getFixturePath('file1.json');
  const file2Path = getFixturePath('file2.json');

  const actual = genDiff(file1Path, file2Path);
  const correct = readFile('correct.txt');
  expect(actual).toEqual(correct);
});
