import { trebol } from "./02-trebol";

const tre = trebol("");

export function Uno(firstName: string) {
    return firstName + (tre+'           *********\n          **********\n         ***********\n        ************\n       ****** ******\n      ******  ******\n     ******   ******\n    ******    ******\n   ******     ******\n              ******\n              ******\n              ******\n              ******\n              ******\n              ******\n              ******\n              ******' + tre);
    }
