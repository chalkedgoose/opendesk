
module.exports = {
  electronPackagerConfig: {
       "icon": "build/electron.icns"
     },
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
