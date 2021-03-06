module.exports = makeTag

function makeTag (definition, forcedTag) {
    if (! definition.docker && definition.docker.name) {
        throw new Error('Needs a name, make sure docker.name exists in package.json')
    }

    var name = definition.docker.name
    var registry = definition.docker.registry
    var version = definition.docker.version || definition.version
    if (forcedTag) version = forcedTag

    var ret = name
    if (registry) ret = registry + '/' + name
    if (version) ret += ':' + version
    return ret
}