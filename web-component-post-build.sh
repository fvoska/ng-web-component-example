cd ./dist/MyWidget

cat runtime.js polyfills.js main.js > ../widget.js
mv styles.css ../widget.css

cd ..
rm -rf MyWidget
