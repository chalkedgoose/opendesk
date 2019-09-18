import { exec } from "child_process";
import { shell } from "electron";
import { ISystemInterface, ITemperatureInterfaceItems, ITemperatureInterface, IUptimeInterface } from "./interfaces/interfaces";
import { query } from "./query/query";
import { systemTemplate, temperatureTemplate, uptimeTemplate } from "./rendering/template";

const elements = ["wifi", "system_info", "temperature", "uptime", "feedback"];
const links = document.querySelector("#activeForm");
/**
 * Removes all attributes
 */
async function rmAttributes(): Promise<void> {
    elements.forEach((id) => {
        document
            .querySelector(`${id}`)
            .classList
            .remove("active");
    });
}

/**
 * @param id - id of object we want to add
 */
async function mkAttribute(id: string): Promise<void> {
    document
        .querySelector(`#${id}`)
        .classList
        .add("active");
}

/**
 * Twitter Link Generator
 */
async function twitterLink(): Promise<void> {
    await rmAttributes();
    await mkAttribute("feedback");
    shell.openExternal("https://twitter.com/Carlos92622018");
}

async function systemInformation(): Promise<void> {
    await rmAttributes();
    await mkAttribute("system_info");
    const data = await query(`"SELECT * from system_info;"`) as Array<ISystemInterface>;
    links.innerHTML = "";
    data.forEach(async (x: ISystemInterface) => {
        links.appendChild(await systemTemplate(x));
    });
}

async function temperatureSensors(): Promise<void> {
    await rmAttributes();
    await mkAttribute("temperature");
    const data = await query(`"SELECT key, name, celsius, fahrenheit FROM temperature_sensors;"`) as ITemperatureInterfaceItems;
    links.innerHTML = "";
    links.innerHTML = ` <h1 class="title">System Temperature</h1>`;

    data.forEach(async (x: ITemperatureInterface) => {
        links.appendChild(await temperatureTemplate(x));
    });
}

async function uptime(): Promise<void> {
    await rmAttributes();
    await mkAttribute("uptime");
    const data = await query(`" SELECT days, hours, minutes, seconds, total_seconds FROM uptime;"`) as Array<IUptimeInterface>;
    data.forEach(async (x: IUptimeInterface) => {
        links.appendChild(await uptimeTemplate(x));
    });
}
