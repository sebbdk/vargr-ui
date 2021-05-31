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

scan('private', {}).then(res => {
    fs.unlinkSync('private.index.js');

    fs.appendFileSync('private.index.js', "export const AList = [");
    res['private/a'].forEach(i => {
        fs.appendFileSync('private.index.js', `require('stories/assets/${i}'),\n`);
        
    })
    fs.appendFileSync('private.index.js', "];\n\n");

    fs.appendFileSync('private.index.js', "export const BList = [");
    res['private/b'].forEach(i => {
        fs.appendFileSync('private.index.js', `require('stories/assets/${i}'),\n`);
        
    })
    fs.appendFileSync('private.index.js', "];\n\n");

    fs.appendFileSync('private.index.js', "export const CList = [");
    res['private/c'].forEach(i => {
        fs.appendFileSync('private.index.js', `require('stories/assets/${i}'),\n`);
        
    })
    fs.appendFileSync('private.index.js', "];\n\n");

    fs.appendFileSync('private.index.js', "export const DList = [");
    res['private/d'].forEach(i => {
        fs.appendFileSync('private.index.js', `require('stories/assets/${i}'),\n`);
        
    })
    fs.appendFileSync('private.index.js', "];\n\n");
})