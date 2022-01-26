param siteName string = 'app-${uniqueString(resourceGroup().name, resourceGroup().id)}'
param hostingPlanName string = 'plan-${siteName}'
param skuName string = 'F1'
param repoUrl string = 'https://github.com/Azure-Samples/ms-identity-javascript-react-spa'
param branch string = 'main'
param linuxFxVersion string = 'NODE|14-lts'

var location = resourceGroup().location

resource appServicePlan 'Microsoft.Web/serverfarms@2021-02-01' = {
  name: hostingPlanName
  location: location
  sku: {
    name: skuName
  }
  properties:{
    reserved: true
  }
}

resource appService 'Microsoft.Web/sites@2021-02-01' = {
  name: siteName
  location: location
  kind: 'app'
  properties: {
    serverFarmId: appServicePlan.id
    siteConfig:{
      linuxFxVersion: linuxFxVersion
    }
  }
}

resource appDeploymentSource 'Microsoft.Web/sites/sourcecontrols@2021-02-01' = {
  name: 'web'
  parent: appService
  properties: {
    branch: branch
    repoUrl: repoUrl
  }
}
