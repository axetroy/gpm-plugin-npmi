/**
 * Created by axetroy on 17-3-10.
 */

const spawn = require('child_process').spawn;

function npmInstall(done) {
  const ls = spawn('npm', ['install'], {stdio: 'inherit'});
  ls.on('close', (code) => {
    done();
  });
}

exports.GPM_PLUGIN = npmInstall;