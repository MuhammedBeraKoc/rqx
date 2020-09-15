const path = require('path')

const MODULE_NOT_FOUND_ERROR_CODE = 195
/**
 * Works like require. The only difference is controls
 * if the given module has default export. And returns
 * the default export instead of the module itself.
 * Returns default export only if three conditions are satisfied:
 * 1) default property is already defined in module object
 * 2) exported module is an object
 * 3) exported module object has only one key-namely "default"-
 * @param moduleName {string}
 * @return {*}
 */
module.exports = (moduleName) => {
    const rootSegments = [__dirname, '..', '..', '..', '..']
    process.chdir(path.resolve(...rootSegments))
    let module
    try {
        module = require(moduleName)
    } catch (err1) {
        try {
            module = require(path.resolve(...rootSegments, moduleName))
        } catch (err2) {
            console.error(err2)
            process.exit(MODULE_NOT_FOUND_ERROR_CODE)
        }
    }
    const isDefaultExport = 'default' in module && typeof module === 'object' && Object.keys(module).length === 1
    if (isDefaultExport) {
        return module.default
    }
    return module
}
