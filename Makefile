burn: 
	docker.exe rm -f `docker.exe ps -aq` && docker.exe volume rm -f postgres-volume

start: 
	docker-compose.exe build && docker-compose.exe up

clear-start:
	make burn && docker.exe volume create postgres-volume && make start

default: start
