
module.exports = {
  packagerConfig: {
       icon: "build/electron.icns",
       appCategoryType:"public.app-category.developer-tools"
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
