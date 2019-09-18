import { exec } from "child_process";

export async function query(queryString: string): Promise<any> {
    exec(`${"osqueryi --json"} ${queryString}`, (error, stdout, stderr) => {
        if (error) { throw error; }
        return JSON.parse(stdout);
    });
}
