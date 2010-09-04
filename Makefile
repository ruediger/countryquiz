FILES := manifest.json index.xhtml countryquiz.xml countryquiz.js icon_24.png icon_128.png
DIR := ./countryquiz/

all: countryquiz.zip

countryquiz.zip: $(FILES)
	mkdir -p $(DIR)
	cp $(FILES) $(DIR)
	zip -r countryquiz.zip $(DIR)
	rm -r $(DIR)
