module.exports = {
  tlApp: {
    src: [
      [
        'src/dto/**/*.ts',
        'src/app/**/*.ts',
        'src/pages/**/*.ts'
      ]
    ],
    out: '.tmp/typescript.js',
    options: {
        fast: 'never',
        target: 'es5',
        sourceMap: false,
        failOnTypeErrors: true,
        module: 'system',
        moduleResolution: 'node',
        noImplicitAny: true,
        suppressImplicitAnyIndexErrors: true,
        experimentalDecorators: true
    }
  }
};