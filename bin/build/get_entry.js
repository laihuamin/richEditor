// 文件的作用——整理所有的路口文件
// 作者：来铧敏

const glob = require('glob');
const path = require('path');

// 解析路径

function getEntry(globPath, filePath) {
    const files = glob.sync(globPath);
    const entries = {};
    files.forEach((item) => {
        let dirname = path.dirname(item);
        let pathname = dirname.replace(new RegExp('^' + filePath), '');
        entries[pathname] = `${item}?entry=true`;
    })
    console.log(files);
    return entries;
}

module.exports = getEntry;
