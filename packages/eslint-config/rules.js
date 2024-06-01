const fs = require('fs')

module.exports = {
  'import/no-default-export': 'off',
  'unused-imports/no-unused-imports': 'error',
  'unused-imports/no-unused-vars': 'error',
  'typescript-sort-keys/interface': ['error', 'asc', { caseSensitive: true, natural: false, requiredFirst: false }],
  'max-params': ['error', 4],
  'testing-library/prefer-screen-queries': 'off',
  '@typescript-eslint/no-unused-vars': [
    'error',
    {
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_',
    },
  ],
  'sort-imports': [
    'error',
    {
      ignoreCase: true,
      ignoreDeclarationSort: true,
    },
  ],
  'import/order': [
    'error',
    {
      groups: ['external', 'builtin', 'internal', 'sibling', 'parent', 'index'],
      'newlines-between': 'always',
      pathGroups: [
        ...getDirectoriesToSort().map((singleDir) => ({
          pattern: `${singleDir}/**`,
          group: 'internal',
        })),
        {
          pattern: 'env',
          group: 'internal',
        },
        {
          pattern: 'theme',
          group: 'internal',
        },
        {
          pattern: 'public/**',
          group: 'internal',
          position: 'after',
        },
      ],
      pathGroupsExcludedImportTypes: ['internal'],
      alphabetize: {
        order: 'asc',
        caseInsensitive: true,
      },
    },
  ],
}

function getDirectoriesToSort() {
  const ignoredSortingDirectories = ['.git', 'dist', '.vscode', 'node_modules']
  return getDirectories(process.cwd()).filter((f) => !ignoredSortingDirectories.includes(f))
}

function getDirectories(path) {
  return fs.readdirSync(path).filter(function (file) {
    return fs.statSync(path + '/' + file).isDirectory()
  })
}
