import fs from "fs"

export default class File {

    static readJson = (file: string): any =>
        JSON.parse(fs.readFileSync(file).toString())

}
