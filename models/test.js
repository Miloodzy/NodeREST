var exec = require('child_process').exec;

function puts(error, stdout, stderr) { sys.puts(stdout) }
exec("ls -la", function(error, stdout, stderr) {
  if (!error) {
    // things worked!
  } else {
    // things failed :(
  }
});


