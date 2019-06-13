
module.exports = {
  makers: [
    {
        name: '@electron-forge/maker-dmg',
        platforms: ['darwin', 'linux'],
        config: {
              format: 'ULFO'
        }
    }
  ]
}
