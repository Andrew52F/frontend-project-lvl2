### Hexlet tests and linter status:
[![Actions Status](https://github.com/Andrew52F/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/Andrew52F/frontend-project-lvl2/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/b989d210d6fcfddff136/maintainability)](https://codeclimate.com/github/Andrew52F/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/b989d210d6fcfddff136/test_coverage)](https://codeclimate.com/github/Andrew52F/frontend-project-lvl2/test_coverage)
[![linter](https://github.com/Andrew52F/frontend-project-lvl2/actions/workflows/linter.yml/badge.svg)](https://github.com/Andrew52F/frontend-project-lvl2/actions/workflows/linter.yml)
[![tests](https://github.com/Andrew52F/frontend-project-lvl2/actions/workflows/tests.yml/badge.svg)](https://github.com/Andrew52F/frontend-project-lvl2/actions/workflows/tests.yml)
<br>
<br>
## Описание:
На этом репозитории располагается второй учебный проект на JavaScript - <b>"Вычислитель отличий"</b>.<br>

Это консольная утилита сравнивающая конфигурационные файлы форматов json и yaml.<br>
<br>
## Процесс установки:
1. Установите Node.js<br>
2. Скопируйте файлы с репозитория в удобное место.<br>
3. Установите утилиту: make install<br>
4. Утилита готова к использованию.<br>

## Использование:

```
Usage: gendiff [options] <filepath1> <filepath2>

Compares two configuration files and shows a difference.

Options:
  -V, --version        output the version number
  -f, --format [type]  output format: "stylish", "plain", "json" (default: "stylish")
  -h, --help           display help for command
```
## Примеры использования:
1. Сравнение плоский json файлов, формат вывода "stylish"

[![asciicast](https://asciinema.org/a/vPpxvvTlrF6mdVApSchBTFyuR.svg)](https://asciinema.org/a/vPpxvvTlrF6mdVApSchBTFyuR)


2. Сравнение плоских yaml файлов, формат вывода "stylish"

[![asciicast](https://asciinema.org/a/P8esXjC09s3gyMyb0pkmEDTdL.svg)](https://asciinema.org/a/P8esXjC09s3gyMyb0pkmEDTdL)


3. Сравнение объемных json файлов, формат вывода "stylish"

[![asciicast](https://asciinema.org/a/HRdmI2DewY82vwoN5n9xUdx8E.svg)](https://asciinema.org/a/HRdmI2DewY82vwoN5n9xUdx8E)


4. Сравнение объемных yaml файлов, формат вывода "stylish"

[![asciicast](https://asciinema.org/a/KL9BE787HcCdXlwpOlc0i698e.svg)](https://asciinema.org/a/KL9BE787HcCdXlwpOlc0i698e)


5. Сравнение объемных json и yaml файлов, формат вывода "plain"

[![asciicast](https://asciinema.org/a/Ir6ZySuM85r2fV0P7pKNKcDbh.svg)](https://asciinema.org/a/Ir6ZySuM85r2fV0P7pKNKcDbh)


6. Сравнение объемных json и yaml файлов, формат вывода "json"

[![asciicast](https://asciinema.org/a/j4ZP9JaD7Nh6OmIpPz35ZSn7h.svg)](https://asciinema.org/a/j4ZP9JaD7Nh6OmIpPz35ZSn7h)<