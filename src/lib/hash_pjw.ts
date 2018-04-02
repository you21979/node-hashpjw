// p.j.weinberger hash function (a.k.a. elf hash function)

export const hashpjw = (key : any) : number => {
    return (key instanceof Buffer) ? hashpjw_buffer(key)
                            : (typeof key === "string") ? hashpjw_string(key)
                            : (typeof key === "number") ? hashpjw_number(key)
                            : hashpjw_object(key)
}

export const hashpjw_buffer = (key : Buffer) : number => {
    const buff = key
    const len = buff.length
    let h = 0
    let g = 0
    for(let i = 0; i < len; ++i) {
        const p = buff[i]
        h = (h << 4) + p
        if( (g = h & 0xf0000000) ) {
            h = h ^ (g >>> 24)
            h = h ^ g
        }
    }
    return h
}

export const hashpjw_object = (key : Object) : number => {
    return hashpjw_string( key.toString() )
}

export const hashpjw_number = (key : number) : number => {
    return hashpjw_string( key.toString() )
}

export const hashpjw_string = (key : string) : number => {
    return hashpjw_buffer( new Buffer(key, 'utf8') )
}
