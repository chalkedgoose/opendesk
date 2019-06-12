const { exec } = require("child_process");
const { dialog, shell } = require("electron");

function twitter_link() {
  const target = "https://twitter.com/greyworld_io";
  shell.openExternal(target);
}

function system_info() {
  const query = `"SELECT * from system_info;"`;
  const prefix = "osqueryi --json";
  const mainCommand = `${prefix} ${query}`;
  exec(mainCommand, (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    const links = document.querySelector("#activeForm");
    let data = JSON.parse(stdout);
    links.innerHTML = "";
    data.forEach(x => {
      links.innerHTML += `
                    ${JSON.stringify(x)}
              `;
    });
  });
}

function temperature_sensors() {
  const query = `"SELECT key, name, celsius, fahrenheit FROM temperature_sensors;"`;
  const prefix = "osqueryi --json";
  const mainCommand = `${prefix} ${query}`;
  exec(mainCommand, (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    const links = document.querySelector("#activeForm");
    let data = JSON.parse(stdout);
    links.innerHTML = "";
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
}

function uptime() {
  const query = `" SELECT days, hours, minutes, seconds, total_seconds FROM uptime;"`;
  const prefix = "osqueryi --json";
  const mainCommand = `${prefix} ${query}`;
  exec(mainCommand, (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    const links = document.querySelector("#activeForm");
    let data = JSON.parse(stdout);
    links.innerHTML = "";
    data.forEach(x => {
      links.innerHTML += `
                    ${JSON.stringify(x)}
              `;
    });
  });
}

function wifi() {
  const query = `" SELECT network_name, last_connected, security_type, captive_portal FROM wifi_networks;"`;
  const query2 = `"SELECT network_name, security_type, mode, channel, rssi, interface FROM wifi_status;"`;
  const prefix = "osqueryi --json";
  const objects = [];
  //   all wifi information
  const mainCommand = `${prefix} ${query}`;
  //    current wifi
  const mainCommand2 = `${prefix} ${query2}`;

  const links = document.querySelector("#activeForm");
  links.innerHTML = "";

  exec(mainCommand2, (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    links.innerHTML += JSON.stringify(JSON.parse(stdout));
  });

  exec(mainCommand, (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    links.innerHTML += JSON.stringify(JSON.parse(stdout));
  });
}

// connected to temperature
const temp = setInterval(() => {
  clearInterval(temp);
  temperature_sensors();
}, 10);
