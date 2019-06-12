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
    const data = JSON.parse(stdout)[0];
    
    links.innerHTML += ` 
    <h1 class="title">Current Wifi Network</h1>
    <div class="media-body">
    <strong>
      ${data.network_name}
    </strong>
    <p>
      security: ${data.security_type}
    </p>
    <p>
        channel: ${data.channel}
    </p>
    <p>
        rssi: ${data.rssi}
    </p>
    <p>
        interface: ${data.interface}
    </p>
  </div>
    `;
  });

  exec(mainCommand, (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    let template = `<h1 class="title">Wifi Networks History</h1>`;
    const data = JSON.parse(stdout);
    data.forEach(x => {
      template += `
        <li class="list-group-item">
        <div class="media-body">
          <strong>
            ${x.network_name}
          </strong>
          <p>
            security: ${x.security_type}
          </p>
          <p>
            captive portal: ${!!+x.captive_portal}
          </p>
          <p>
            last connected: ${x.last_connected}
          </p>
        </div>
      </li>
      `;
    });
    links.innerHTML += template;
  });
}

// connected to temperature
const temp = setInterval(() => {
  clearInterval(temp);
  temperature_sensors();
}, 10);
