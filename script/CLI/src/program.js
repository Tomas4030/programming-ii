import chalk from "chalk";


export class Program{
    #args;
    constructor(args){
        this.#args=args
    }

    greet() {
        let name = this.#args(1);
        if (name){
            console.log(chalk.yellowBright(`Ola ${name}`));
        }
        else{
            console.log(chalk.blue.bold("Ola mundo"))
        }
    }
}