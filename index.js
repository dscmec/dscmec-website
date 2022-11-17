const { spawn } = require("child_process");
try {
  setInterval(() => {
    const child = spawn(`git pull --rebase origin master`, { shell: true });
    child.stdout.on("data", (data) => {
      console.log(`stdout: ${data}`);
    });
  
    child.stderr.on("data", (data) => {
      console.log(`stderr: ${data}`);
    });
  
    child.on("error", (error) => {
      console.log(`error: ${error.message}`);
    });
  
    child.on("close", (code) => {
      console.log(`child process exited with code ${code}`);
    });
  }, 300000);
}
catch(err) {
  console.log(err);
}
