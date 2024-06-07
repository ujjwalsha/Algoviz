var gulp = require('gulp');

var winInstaller = require('electron-windows-installer');

gulp.task('create-windows-installer', function (done) {
  winInstaller({
    appDirectory: './node_modules/electron/dist',

    outputDirectory: './release',

    arch: 'ia32',

    authors: 'Vrittiviz inc.',

    version: '1.0.0',

    iconUrl: 'favicon.ico',

    setupIcon: 'favicon.ico',

    loadingGif: 'ele.gif',

    noMsi: true,

    exe: 'vrittiviz.exe',
  })
    .then()
    .catch(e => {
      console.log(`No dice: ${e.message}`);
    });
});
