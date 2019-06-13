
module.exports = {
  makers: [
    {
        name: '@electron-forge/maker-dmg',
        platforms: ['darwin'],
        config: {
              format: 'ULFO'
        }
    }
  ]
}
