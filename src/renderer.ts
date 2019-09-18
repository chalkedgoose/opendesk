import { exec } from "child_process";

const elements = ["wifi", "system_info", "temperature", "uptime", "feedback"];
async function rmAttributes(): Promise<void> {
    elements.forEach(id => {
        document
        .querySelector(`${id}`)
        .classList
        .remove("active");
    });
}

async function mkAttribute(id: string): Promise<void> {
    document
    .querySelector(`#${id}`)
    .classList
    .add("active");
}