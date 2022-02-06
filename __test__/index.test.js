import gendiff from '../index.js';
import path from 'path';
import fs from 'fs';

beforeAll(() => {
    const filepath1 = '/Users/andrewpetrakov/Desktop/file1.json';
    const filepath2 = '/Users/andrewpetrakov/Desktop/file2.json';
    const correctFilepath = './correct.txt';
    const correct = fs.readFileSync(correctFilepath);
})

test('gendiff', () => {
    expect(gendiff(filepath1, filepath2)).toEqual(correct);
})
