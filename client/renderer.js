// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

function setFlashingWindow() {
    const query = `"SELECT key, name, celsius, fahrenheit FROM temperature_sensors;"`;
    const prefix = "osqueryi --json";
    const mainCommand = `${prefix} ${query}`;
    exec(mainCommand, (err, stdout, stderr) => {
      if (err) {
        console.error(err);
        return;
      }
      let data = JSON.parse(stdout);
      data.forEach(x => {
        console.log(x.celsius);
        console.log(x.fahrenheit);
        console.log(x.key);
        console.log(x.name);
        console.log(x);
        console.log("\n");
      });
    });
  }

  setFlashingWindow();