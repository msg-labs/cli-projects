# cli-projects

> Navigate your projects from your cli 

`cli-projects` allows you to find, filter and directly navigate to all your directories with a `.git` folder.

## Installation

```sh
npm install -g @msg-labs/cli-projects
```

In order to enable the directory change you should alias the binary and
prefix it with a `.` like in the example below

```sh
alias p=". msg-cli-projects"
```

## Usage
```
Usage: msg-cli-projects [options] [search...]

Options:
  -V, --version             output the version number
  -d, --directory [string]  uses the directory as base (default: "~")
  -m, --mode [string]       which search mode to use (default: "find")
  -l, --limit [number]      limits the line outputs (default: 10)
  -h, --help                output usage information
```

## To Do
* Highlight what kind of project is (nodejs, php, go, rust...)
* Display current branch and distance from remote
* Allow searching by kind of projects (list all the nodejs projects)
