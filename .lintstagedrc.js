const path = require('path')

module.exports = {
  // Type check TypeScript files
  '**/*.(ts|tsx)': () => 'tsc --noEmit',

  // Lint & Prettify TS and JS files
  '**/*.(ts|tsx|js)': (filenames) => [
    `next lint --fix --file ${filenames
      .map((f) => path.relative(process.cwd(), f))
      .join(' --file ')}`,
    `prettier --write ${filenames.join(' ')}`,
  ],

  // Prettify only Markdown and JSON files
  '**/*.(md|json)': (filenames) => `prettier --write ${filenames.join(' ')}`,
}
