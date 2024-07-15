# AppointEase
Modern &lt;strong>open-source&lt;/strong> meeting scheduling platform that makes “finding time” a breeze. When connecting is easy, your teams can get more done.


** NOTE **\
`docker compose` not worked then use `docker-compose`.\
Otherwise try to install [docker-compose](https://docs.docker.com/compose/install/).

## How to run docker

-> Navigate to root folder of the project.
-> launch cmd/terminal/powershell.
-> Run `docker compose up -d` to start build-image + run-container
-> To stop all containers Run `docker compose stop`

To stop all containers forcefully run command `docker compose stop -t`

To flush all available stopped container `docker system prune`

#### Optional flags:
"-f" or "--force": By default, docker system prune prompts you for confirmation before removing objects.\
"--volumes": This flag also removes unused volumes. Use with caution as it can lead to data loss if volumes contain important data.

## Output 
Frontend -> [http://localhost:4200/](http://localhost:4200/)\
Backend -> [http://localhost:4000/](http://localhost:4000/)