/**
 * Created by axetroy on 17-3-10.
 */
const path = require('path');
const spawn = require('child_process').spawn;
const Promise = require('bluebird');
const co = require('co');
const fs = Promise.promisifyAll(require('fs-extra'));
const which$0 = require('which');

function isYarnEnv() {
  return co(function *() {
    yield [
      fs.readFileAsync(path.join('yarn.lock')),
      which$1('yarn')
    ];
    return true;
  }).catch((err) => {
    console.error(err);
    return Promise.resolve(false);
  });
}

function which$1(cmd, options = {}) {
  return new Promise(function (resolve, reject) {
    which$0.call(this, cmd, options, function (err, resolvePath) {
      if (err) return reject(err);
      resolve(resolvePath);
    });
  });
}

function nodeModuleInstall(done) {

  co(function*() {

    try {
      yield fs.readJsonAsync(path.join('package.json'));
    } catch (err) {
      throw new Error('Invalid package.json');
    }

    const __isYarnEnv__ = yield isYarnEnv();

    let cmd = [];

    if (__isYarnEnv__) {
      cmd = ['yarn']
    } else {
      cmd = ['npm', 'install']
    }

    const ls = spawn(cmd.shift(), cmd, {stdio: 'inherit'});
    ls.on('close', (code, signal) => {
      code === 0 ? done() : done(new Error(`Error Code: ${code}, Exist Signal: ${signal}`));
    });

  }).catch((err) => done(err));
}

exports.add = nodeModuleInstall;