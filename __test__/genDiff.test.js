import { dirname, join } from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import genDiff from '../src/genDiff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const file1Json = getFixturePath('file1.json');
const file2Json = getFixturePath('file2.json');
const file1Yaml = getFixturePath('file1.yaml');
const file2Yaml = getFixturePath('file2.yml');

const stylish = readFile('correct-stylish.txt');
const plain = readFile('correct-plain.txt');

const stylishCases = [
  [file1Json, file2Json],
  [file1Yaml, file2Yaml],
  [file1Json, file2Yaml],
  [file1Yaml, file2Json],
];

const plainCases = [
  [file1Json, file2Json],
  [file1Yaml, file2Yaml],
  [file1Json, file2Yaml],
  [file1Yaml, file2Json],
];

test.each(stylishCases)(
  'Test stylish format',
  (file1, file2) => {
    expect(genDiff(file1, file2)).toEqual(stylish);
  },
);
test.each(plainCases)(
  'Test plain format',
  (file1, file2) => {
    expect(genDiff(file1, file2, 'plain')).toEqual(plain);
  },
);
