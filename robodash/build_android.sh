#!/bin/bash
ng build --prod --base-href "file:///android_asset/"
rm -rf ./android/app/src/main/assets/*
cp -R ./dist/ ./android/app/src/main/assets/