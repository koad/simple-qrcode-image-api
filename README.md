# koad/simple-qrcode-image-api

## `QR Code Generator` using ``Meteor``
---

### Run this app and serve it on localhost
```bash
meteor --port 25879
```

### In production

since this app doesn't save any data, tell meteor not to use one.
```bash
# Need to at least specify MONGO_URL in production.
export MONGO_URL=false
```
