#!/bin/sh

(cd source && npm run build && npm run npmpub @ionic-native/metadata-retriever)
cp source/dist/@ionic-native/plugins/metadata-retriever/* . -r
