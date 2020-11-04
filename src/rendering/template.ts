import { ISystemInterface, ITemperatureInterface, IUptimeInterface } from "../interfaces/interfaces";

export async function systemTemplate(x: ISystemInterface): Promise<HTMLElement> {
  const system = document.createElement("div");
  system.innerHTML = `
    <h1 class="title">System Information</h1>
    <div class="media-body">
            <h5>
              computer name: 
            </h5>
            <p>
           ${x.computer_name}
            </p>
            <h5>
              cpu brand:
            </h5>
            <p>
           ${x.cpu_brand}
            </p>
            <h5>
              cpu logical cores:
            </h5>
            <p>
           ${x.cpu_logical_cores}
            </p>
            <h5>
              cpu physical cores:
            </h5>
            <p>
            ${x.cpu_physical_cores}
            </p>
            <h5>
              cpu subtype
            </h5>
            <p>
            ${x.cpu_subtype}
            </p>
            <h5>
              cpu type:
            </h5>
            <p>
               ${x.cpu_type}
            </p>
            <h5>
              hardware model
            </h5>
            <p>
              ${x.hardware_model}
            </p>
            <h5>
              hardware serial
            </h5>
            <p>
              ${x.hardware_serial}
            </p>
            <h5>
              hardware vendor
            </h5>
            <p>
              ${x.hardware_vendor}
            </p>
            <h5>
              hardware version
            </h5>
            <p>
              ${x.hardware_version}
            </p>
            <h5>
              hostname:
            </h5>
            <p>
              ${x.hostname}
            </p>
            <h5>
              local hostname:
            </h5>
            <p>
              ${x.local_hostname}
            </p>
            <h5>
              physical Memory:
            </h5>
            <p>
              ${x.physical_memory}
            </p>
            <h5>
              uuid:
            </h5>
            <p>
              ${x.uuid}
            </p>
          </div>
          <br>
`;
  return system;
}



const xtemperatureTemplate = ({ name, fahrenheit, celsius, key }: ITemperatureInterface) => (
  `
  <li class="list-group-item">
  <div class="media-body">
    <strong>
      ${name}
    </strong>
    <p>
    fahrenheit: ${fahrenheit}
    </p>
    <p>
    celsius: ${celsius}
    </p>
    <p>
    key: ${key}
    </p>
  </div>
</li>`
)



export async function temperatureTemplate(x: ITemperatureInterface): Promise<HTMLElement> {
  const temperature = document.createElement("div");
  temperature.innerHTML += xtemperatureTemplate(x)
  return temperature;
}

export async function uptimeTemplate(x: IUptimeInterface): Promise<HTMLElement> {
  const uptime = document.createElement("div");
  uptime.innerHTML += `
  < h1 class="title" > System Uptime < /h1>
    < div class="media-body" >
      <h5>
      days:
</h5>
  < p >
  ${x.days}
</>

  < h5 >
  hours:
</>
  < p >
  ${x.hours}
</>

  < h5 >
  minutes:
</>
  < p >
  ${x.minutes}
</>

  < h5 >
  seconds:
</>
  < p >
  ${x.seconds}
</>

  < h5 >
  total seconds:
</>
  < p >
  ${x.total_seconds}
</>
  < br >
  </div>
    `
  return uptime;
}