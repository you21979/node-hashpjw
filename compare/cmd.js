var hashpjw = require('..');

var main = function(argc, argv){
    if(argc !== 3){
        return -1;
    }
    console.log(hashpjw(argv[2]) % argv[1]);
    return 0;
}

var arg = process.argv.slice(1);
return main(arg.length, arg);

