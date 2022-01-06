interface obj {
	a: number
	b: number
	c: number
}

type P<K extends keyof any, T> = { [P in K]: T }

let pObj: P<"x" | "y", obj> = {
    x: {
        a: 1,
        b: 1,
        c: 1,
    },
    y: {
        a: 1,
        b: 1,
        c: 1,
    }
}

console.log(pObj)