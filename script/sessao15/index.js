import { Transform } from "./stream.js"; 

const file = "teste.csv"; 

const transform = new Transform(file);

transform.start();

