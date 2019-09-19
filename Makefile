production:
	yarn build

deploy_preview:
	yarn build && cp $(CURDIR)/netlify/{_redirects,login.html} build/.
