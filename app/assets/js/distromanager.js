const { DistributionAPI } = require('helios-core/common')

const ConfigManager = require('./configmanager')

// Vault-Tec distribution server (playit.gg tunnel)
exports.REMOTE_DISTRO_URL = 'http://mickey-reacquire.with.playit.plus:1571/distribution.json'

const api = new DistributionAPI(
    ConfigManager.getLauncherDirectory(),
    null, // Injected forcefully by the preloader.
    null, // Injected forcefully by the preloader.
    exports.REMOTE_DISTRO_URL,
    false
)

exports.DistroAPI = api