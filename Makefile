
default: build

css:
	npx tailwindcss -i src/App/meui/meui.scss -o meui.css

build:
	npm run build

publish: build
	netlify deploy --prod -d dist

clean:
	rm -rf dist
