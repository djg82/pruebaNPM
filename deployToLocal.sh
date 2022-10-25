#!/bin/bash
if [ ! -d "$1" ]; then
    echo "Missing destionation folder"
    echo "Use example:"
    echo "$0 ../bulk-order-v2"
    exit
fi
yarn build || exit
yes | cp -rf dist "$1/node_modules/@djg/pruebanpm/"