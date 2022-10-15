import { exec } from 'child_process'

exec("http-server", (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }

  if (stderr) {
    console.log(`stderr: ${stderr}`);
  }

  console.log(`stdout: ${stdout}`);

});



