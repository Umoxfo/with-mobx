import { observable } from "mobx";

export const deps = observable.map(new Map());
export const arrs = observable.map(new Map());

setTimeout(() => deps.set("a", 1), 100);