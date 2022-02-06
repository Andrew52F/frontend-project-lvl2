install:
	npm ci
test:
	npx -n --experimental-vm-modules jest
publish:
	npm publish --dry-run
lint:
	npx eslint .