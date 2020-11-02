.DEFAULT_GOAL:=build

.PHONY: build
build:
	npm install

.PHONY: github
github:
	npm deploy

.PHONY: local
local:
	npm start

.PHONY: clean
clean:
	rm -rf node_modules/*

.PHONY: fmt
fmt:
	@standard --fix
