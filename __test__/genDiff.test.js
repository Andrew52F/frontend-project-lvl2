import { dirname, join } from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import genDiff from '../src/genDiff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

describe('genDiff testing', () => {
  test('Flat JSON fixtures with relative paths, stylish output format', () => {
    const actual = genDiff('file1-flat.json', 'file2-flat.json');
    const correct = readFile('correct-flat-stylish.txt');
    expect(actual).toEqual(correct);
  });
  test('Recursive JSON fixtures with absolute paths, stylish output format', () => {
    const file1path = getFixturePath('file1-recursive.json');
    const file2path = getFixturePath('file2-recursive.json');
    const actual = genDiff(file1path, file2path);
    const correct = readFile('correct-recursive-stylish.txt');
    expect(actual).toEqual(correct);
  });
  test('Recursive YAML fixtures, stylish output format', () => {
    const file1path = getFixturePath('file1-recursive.yaml');
    const file2path = getFixturePath('file2-recursive.yml');
    const actual = genDiff(file1path, file2path);
    const correct = readFile('correct-recursive-stylish.txt');
    expect(actual).toEqual(correct);
  });
  test('Recursive JSON and YAML fixtures, stylish output format', () => {
    const file1path = getFixturePath('file1-recursive.json');
    const file2path = getFixturePath('file2-recursive.yml');
    const actual = genDiff(file1path, file2path);
    const correct = readFile('correct-recursive-stylish.txt');
    expect(actual).toEqual(correct);
  });
  test('Recursive JSON and YAML fixtures, plain output format', () => {
    const file1path = getFixturePath('file1-recursive.yaml');
    const file2path = getFixturePath('file2-recursive.json');
    const format = 'plain';
    const actual = genDiff(file1path, file2path, format);
    const correct = readFile('correct-recursive-plain.txt');
    expect(actual).toEqual(correct);
  });
});
