#!/usr/bin/env node
import { Command } from 'commander';
import gendiff from './index.js';

const program = new Command();

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .option('-f, --format <type>', 'output file format')
  .action((filepath1, filepath2) => {
    console.log(gendiff(filepath1, filepath2));
  });

program.parse(process.argv);
