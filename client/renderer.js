const { exec } = require("child_process");

const temp = setInterval(() => {
  const query = `"SELECT key, name, celsius, fahrenheit FROM temperature_sensors;"`;
  const prefix = "osqueryi --json";
  clearInterval(temp);
  const mainCommand = `${prefix} ${query}`;
  exec(mainCommand, (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    const links = document.querySelector("#activeForm");
    let data = JSON.parse(stdout);
    data.forEach(x => {
      links.innerHTML += `
        <li class="list-group-item">
        <div class="media-body">
          <strong>
            ${x.name}
          </strong>
          <p>
          fahrenheit: ${x.fahrenheit}
          </p>
          <p>
          celsius: ${x.celsius}
          </p>
          <p>
          key: ${x.key}
          </p>
        </div>
      </li>
        `;
    });
  });
}, 10);
