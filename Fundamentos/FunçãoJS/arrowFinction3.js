let compareComthis = function (param) {
    console.log(this === param)
}

compareComthis(global)

const obj = {}
compareComthis = compareComthis.bind(obj)
compareComthis(global)
compareComthis(obj)

let compareComthisArrow = param => console.log(this === param)
compareComthisArrow(global)
compareComthisArrow(module.exports)

compareComthisArrow = compareComthisArrow.bind(obj)
compareComthisArrow(obj)
compareComthisArrow(module.exports)