# koad/simple-qrcode-image-api

[![Matrix](https://img.shields.io/matrix/simple-qrcode-image:koad.sh?label=simple-qrcode-image:koad.sh&logo=matrix&server_fqdn=matrix.koad.sh)](https://matrix.to/#/#simple-qrcode-image-api:koad.sh)

## `QR Code Generator` using ``Meteor``
---

### Run this app and serve it on localhost
```bash
git clone https://github.com/koad/simple-qrcode-image-api
cd simple-qrcode-image-api
meteor --port 25879
```
App running at: [localhost:25879](http://localhost:25879) 


### In production

since this app doesn't save any data, tell meteor not to connect to mongodb.
```bash
# Need to at least specify MONGO_URL in production.
export MONGO_URL=false
```
