production:
	yarn build

deploy_preview:
	yarn build && cp netlify/{_redirects,login.html} public/.