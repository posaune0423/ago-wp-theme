module.exports = {
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/transform-runtime'
  ],
  env: {
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: 'current'
            }
          }
        ]
      ]
    }
  }
};
