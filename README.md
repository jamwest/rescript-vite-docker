# Rescript Vite Docker
This project is a jumping off point for development of a ReScript application utilising Vite dev server and everything run in a Docker container.

## Motivation
In a previous workflow I had to run 3 different terminals with the rescript build watcher running, a webpack dev server running, and my docker backend containers. I wanted a simpler workflow where I can run everything in docker containers in a single terminal.

## Caveats
TLDR: Probably won't work on Windows without editting.

I had a major issue getting VSCode error/warning highlighting working while building in a container. It turns out the ReScript build tool writes logs to `./lib/bs/.compiler.log` with the file paths that have errors/warning, and the VSCode ReScript extension uses this log file for highlighting. In order to get around this I had to use a volume containing the `lib` directory. I also had to make sure the file paths for the source files in the Docker container matched the paths in the host system (this works on Linux, I haven't tested on Windows or MacOs but expect it to fail on Windows sorry!). Also clean up requires chmod as the permissions get messed up by being created by docker container (included in the npm scripts).

## Requirements
