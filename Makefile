image_name = site-archifiltre
pwd = $(shell pwd)

all: devServer

runProd : prod
	sudo docker run \
		--network=host \
		-it \
		$(image_name):prod

devServer: dev
	sudo docker run \
		--network=host \
		--mount type=bind,source=$(pwd),target=/mnt,readonly \
		-it \
		$(image_name):dev

dev: cleanContainer
	sudo docker build \
		--network=host \
		--target=dev \
		--tag=$(image_name):dev \
		.

prod: cleanContainer
	sudo docker build \
		--network=host \
		--tag=$(image_name):prod \
		.

clean: cleanContainer

cleanContainer:
	sudo docker container prune -f


install: prod
	sudo rm -fr ./docs
	sudo docker run \
		-d \
		--name=$(image_name) \
		$(image_name):prod sh
	sudo docker cp $(image_name):/usr/src/app/dist ./docs
	sudo docker container rm $(image_name)
	sudo chmod -R 777 ./docs