npm run build-web-component
cp ./test.html ./dist/index.html
npx http-server ./dist -o
