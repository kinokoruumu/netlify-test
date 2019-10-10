production:
	yarn build

deploy_preview:
	yarn build && cp netlify/_headers build/_headers
