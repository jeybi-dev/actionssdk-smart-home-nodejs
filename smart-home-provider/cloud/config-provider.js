// Copyright 2017, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

var Config = {};

Config.devPortSmartHome = "3000";
Config.smartHomeProviderGoogleClientId = "414683817273-nhpj31fgg1c7gu6t6ggn28g5ss1bfcqo.apps.googleusercontent.com"; // client id that Google will use
Config.smartHomeProvideGoogleClientSecret = "UkGsJKwVfN1akb_kUBikkLxW"; // client secret that Google will use
Config.smartHomeProviderApiKey = "AIzaSyBP3ntwP2hdUeTvyrdrPor0Iwv2apRQTKk"; // client API Key generated on the console
Config.isLocal = false;

function init() {
  process.argv.forEach(function (value, i, arr) {
    if (value.includes("smart-home="))
      Config.smartHomeProviderCloudEndpoint = value.split("=")[1];
    else if (value.includes("isLocal"))
      Config.isLocal = true;
  });
  if (!Config.smartHomeProviderCloudEndpoint)
    Config.smartHomeProviderCloudEndpoint = "http://localhost:3000";
  console.log("config: ", Config);
}
init();

exports.devPortSmartHome = Config.devPortSmartHome;
exports.smartHomeProviderGoogleClientId = Config.smartHomeProviderGoogleClientId;
exports.smartHomeProvideGoogleClientSecret = Config.smartHomeProvideGoogleClientSecret;
exports.smartHomeProviderCloudEndpoint = Config.smartHomeProviderCloudEndpoint;
exports.smartHomeProviderApiKey = Config.smartHomeProviderApiKey;
exports.isLocal = Config.isLocal;
