import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import genDiff from '../src/genDiff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

describe('genDiff testing', () => {
  test('Recursive JSON fixtures', () => {
    const file1path = getFixturePath('file1.json');
    const file2path = getFixturePath('file2.json');
    const actual = genDiff(file1path, file2path);
    const correct = readFile('correct.txt');
    expect(actual).toEqual(correct);
  });
  test('Recursive YAML fixtures', () => {
    const file1path = getFixturePath('file1.yaml');
    const file2path = getFixturePath('file2.yml');
    const actual = genDiff(file1path, file2path);
    const correct = readFile('correct.txt');
    expect(actual).toEqual(correct);
  });
});
