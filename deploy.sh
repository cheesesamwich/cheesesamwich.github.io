#!/bin/sh

git add .

echo "Commit name?"
read name

git commit -m "$name"

git push

npm run deploy