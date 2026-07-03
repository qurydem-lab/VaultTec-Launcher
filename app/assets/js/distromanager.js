const { DistributionAPI } = require('helios-core/common')

const ConfigManager = require('./configmanager')

// Vault-Tec distribution server
exports.REMOTE_DISTRO_URL = 'https://raw.githubusercontent.com/qurydem-lab/VaultTec-Launcher/master/dist/distribution.json'
// DEV: exports.REMOTE_DISTRO_URL = 'http://localhost:8080/distribution.json'

const api = new DistributionAPI(
    ConfigManager.getLauncherDirectory(),
    null, // Injected forcefully by the preloader.
    null, // Injected forcefully by the preloader.
    exports.REMOTE_DISTRO_URL,
    false
)

exports.DistroAPI = api