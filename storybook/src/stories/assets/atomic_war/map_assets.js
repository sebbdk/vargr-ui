const promisify = require('util').promisify;
const path = require('path');
const fs = require('fs');
const readdirp = promisify(fs.readdir);
const statp = promisify(fs.stat);

function sortByDigits(array) {
    var re = /\D/g;

    array.sort(function(a, b) {
        return(parseInt(a.replace(re, ""), 10) - parseInt(b.replace(re, ""), 10));
    });
    return(array);
}

async function scan(directoryName = './data', results = []) {
    let files = sortByDigits(await readdirp(directoryName));
    results[directoryName.replace(/\\/ig, '/')] = [];
    for (let f of files) {
        let fullPath = path.join(directoryName, f);
        let stat = await statp(fullPath);
        if (stat.isDirectory()) {
            await scan(fullPath, results);
        } else {
            results[directoryName.replace(/\\/ig, '/')].push(fullPath.replace(/\\/ig, '/'));
        }
    }
    return results;
}

scan('./', {}).then(res => {
    fs.unlinkSync('index.js');

    fs.appendFileSync('index.js', "export const AtomicWar1 = [");
    res['1'].forEach(i => {
        fs.appendFileSync('index.js', `\n\trequire('./${i}'),`);
        
    })
    fs.appendFileSync('index.js', "\n];\n\n");

    fs.appendFileSync('index.js', "export const AtomicWar2 = [");
    res['2'].forEach(i => {
        fs.appendFileSync('index.js', `\n\trequire('./${i}'),`);
        
    })
    fs.appendFileSync('index.js', "\n];\n\n");
})