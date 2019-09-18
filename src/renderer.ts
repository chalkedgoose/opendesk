import { exec } from "child_process";

const elements = ["wifi", "system_info", "temperature", "uptime", "feedback"];
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
 * 
 * @param id - id of object we want to add
 */
async function mkAttribute(id: string): Promise<void> {
    document
    .querySelector(`#${id}`)
    .classList
    .add("active");
}