const test2 = import('./test')
  .then((module) => {
    return module['before'](1000).then(() => module);
  })
  .then((module) => {
    describe('top', () => {
      module['test'](true);
    });
    mocha.run();
  })
  .then(() => {
    console.log('done');
  });
