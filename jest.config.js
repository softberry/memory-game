module.exports = {
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|scss|less)$': '<rootDir>/__mocks__/styleMock.js',
  },
  moduleFileExtensions: ['js', 'html'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.html?$': 'html-loader-jest',
  },
};
