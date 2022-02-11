import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import genDiff from '../src/genDiff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

describe('genDiff testing', () => {
  test('JSON fixtures', () => {
    const file1Path = getFixturePath('file1.json');
    const file2Path = getFixturePath('file2.json');
    const actual = genDiff(file1Path, file2Path);
    const correct = readFile('correct.txt');
    expect(actual).toEqual(correct);
  });
  test('YAML fixtures', () => {
    const file1Path = getFixturePath('file1.yml');
    const file2Path = getFixturePath('file2.yaml');
    const actual = genDiff(file1Path, file2Path);
    const correct = readFile('correct.txt');
    expect(actual).toEqual(correct);
  });
  test('Recursive JSON fixtures', () => {
    const file1path = getFixturePath('bigfile1.json');
    const file2path = getFixturePath('bigfile2.json');
    const actual = genDiff(file1path, file2path);
    const correct = readFile('bigcorrect.txt');
    expect(actual).toEqual(correct);
  });
  test('Recursive YAML fixtures', () => {
    const file1path = getFixturePath('bigfile1.yaml');
    const file2path = getFixturePath('bigfile2.yml');
    const actual = genDiff(file1path, file2path);
    const correct = readFile('bigcorrect.txt');
    expect(actual).toEqual(correct);
  });
});
