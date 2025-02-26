import { Program } from "./program.js";
import { getLogger } from "./logging.js";
import chalk from "chalk";

const logger = getLogger("debug", "programa.log");

logger.info("programa started");

try{
    const{command, args} = process.argv.slice(2);

    let program = new Program(args);
    if(command.toString().toLowerCase() === "greet"){
        program.greet();
    }else{
        throw new Error("Comando invalido");
    }
}catch(exc){
    logger.error(exc);
    console.error(chalk.red.bold(exc.message));
}