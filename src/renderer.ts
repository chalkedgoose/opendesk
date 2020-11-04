import { ISystemInterface, ITemperatureInterfaceItems, ITemperatureInterface, IUptimeInterface } from "./interfaces/interfaces";
import { query } from "./query/query";
import { systemTemplate, temperatureTemplate, uptimeTemplate } from "./rendering/template";

export const elements = ["wifi", "system_info", "temperature", "uptime", "feedback"] as const;

export type TAttribute = typeof elements[number];

const links = document.querySelector("#activeForm");

const rmAttributeHelper = (id: TAttribute) => document
    .querySelector(`${id}`)
    .classList
    .remove("active")


const stripAttributes = () => elements.forEach(rmAttributeHelper)

const makeAttribute = (id: TAttribute) => document
    .querySelector(`#${id}`)
    .classList
    .add("active");


export enum CustomQSelector {
    SYSTEM_INFO = '#system_info',
    TEMPERATURE = "#temperature"
}

export enum QueryCommand {
    SYSTEM_INFO = `"SELECT * from system_info;"`,
    TEMPERATURE_INFO = `"SELECT key, name, celsius, fahrenheit FROM temperature_sensors;"`,
    UPTIME_INFO = `" SELECT days, hours, minutes, seconds, total_seconds FROM uptime;"`,
}

document.querySelector(CustomQSelector.SYSTEM_INFO).addEventListener('click', async () => {
    stripAttributes();
    makeAttribute("system_info");
    const data = await query(QueryCommand.SYSTEM_INFO) as Array<ISystemInterface>;
    links.innerHTML = "";
    data.forEach(async (x) => links.appendChild(await systemTemplate(x)));
})


document.querySelector(CustomQSelector.TEMPERATURE).addEventListener('click', async () => {
    stripAttributes();
    makeAttribute("temperature");
    const data = await query(QueryCommand.TEMPERATURE_INFO) as ITemperatureInterfaceItems;
    links.innerHTML = "";
    links.innerHTML = ` <h1 class="title">System Temperature</h1>`;

    data.forEach(async (x) => links.appendChild(await temperatureTemplate(x)));
});

export async function uptime(): Promise<void> {
    stripAttributes();
    makeAttribute("uptime");
    const data = await query(QueryCommand.UPTIME_INFO) as Array<IUptimeInterface>;
    data.forEach(async (x) => links.appendChild(await uptimeTemplate(x)));
}

export const temp = setInterval(async () => {
    clearInterval(temp);
    stripAttributes();
    makeAttribute("temperature");
    const data = await query(QueryCommand.TEMPERATURE_INFO) as ITemperatureInterfaceItems;
    links.innerHTML = "";
    links.innerHTML = ` <h1 class="title">System Temperature</h1>`;

    data.forEach(async (x) => links.appendChild(await temperatureTemplate(x)));
}, 10);
