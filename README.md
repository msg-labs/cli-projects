# cli-projects

> Navigate your projects from your cli 

`cli-projects` allows you to see see all your directories with a `.git`
folder on them, filter and directly navigate to them.

## Installation

```sh
npm install --save @msg-labs/cli-projects
```

In order to enable the directory change you should alias the binary and
prefix it with a `.` like in the example below

```sh
alias p=". msg-cli-projects"
```

## To Do
* Highlight what kind of project is (nodejs, php, go, rust...)
* Display current branch and distance from remote
* Allow searching by kind of projects (list all the nodejs projects)
