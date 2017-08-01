# New-Business customer UI backend

New-business customer UI backend is the backend server for New-Business customer UI service.

**Available in K8s at**

[Direct access](http://devkub.cgn.cleverbridge.com:32512)

## Development

- Install dependencies: `npm install`
- Change source code
- Run all tests before commit: `npm test`
- Run lint tools before commit: `npm run lint`
- Commit and push changes with the JIRA ticket id in commit message: `[JIRA_ID] commit message`
- Monitor Jenkins build job

### Development tools
- Analyzing the dependencies in a project: [depcheck](https://github.com/depcheck/depcheck)
- Code linting: [eslint](http://eslint.org/)
- Consistent coding styles: [editorconfig](http://editorconfig.org/)
- Hierarchical configurations for your app deployments: [node-config](https://github.com/lorenwest/node-config)
- Testing [jest](https://facebook.github.io/jest/)
- Update outdated npm packages: [updtr](https://github.com/peerigon/updtr)
- Static type checking: [Flow](https://flow.org/)

### Maintaining package dependencies
Update outdated npm modules with zero pain.

> Based on npm outdated, updtr installs the latest version and runs npm test for each dependency. If the test succeeds,
updtr saves the new version number to your package.json. If the test fails, however, updtr rolls back its changes.

Install updtr global

```
npm i -g updtr
```

Run updtr inside your project

```
cd [project_name]
updtr
```
Analyzing the dependencies in a project

> Depcheck is a tool for analyzing the dependencies in a project to see: how each dependency is used,
which dependencies are useless, and which dependencies are missing from package.json.

Install depcheck global

```
npm i -g depcheck
```

Run depcheck inside your project

```
cd [project_name]
depcheck
```
