## Learning Resources
- [Ceating a Single Page Application](https://learn.microsoft.com/en-us/power-pages/configure/create-code-sites#create-and-deploy-an-spa-site)
- [microsoft/power-platform/skills](https://github.com/microsoft/power-platform-skills)
- [Nick Doelman Blog](https://readyxrm.blog/2026/01/02/power-pages-bring-your-own-code/)

## Before Deploying: Enable .js Attachments
Javascript file (`.js`) attachments must be enabled in your target environment.

To do this programmatically via PAC CLI (this is how GitHub Copilot and Claude Code are instructed to do it via the plugin):
1. Run `pac env list-settings` to get current blocked attachments
2. Remove `js` from the semicolon-separated list.
3. Run `pac env update-settings --name blockedattachments --value "<UPDATED_LIST_WITHOUT_JS>"` to update with the new list, this time with `js` removed.

## Add powerpages.config.json
You can add a file named `powerpages.config.json` to your app with the following content as an example:
```
{
  "siteName": "My Cool Site",
  "defaultLandingPage": "index.html",
  "compiledPath": "dist"
}
```

**NOTE: You do not HAVE to add `powerpages.config.json`.** You can specify the `compiledPath` and `siteName` parameters during the `pag pages upload-code-site` command, seen below. 

## Deploying to Power Pages via PAC CLI
If you *did* add `powerpages.config.json`, you must only specify the `rootPath` parameter (it will read the `compiledPath` and `siteName` parameters from the file). If you provide it both in the file and in the PAC CLI command, the PAC CLI command values take precendence.

```
pac pages upload-code-site --rootPath "./src/" --compiledPath "./dist/" --siteName "Tims SPA"
```

## Setting up Auth
The [Power Pages /setup-auth skill](https://github.com/microsoft/power-platform-skills/blob/main/plugins/power-pages/skills/setup-auth/SKILL.md) provides instructions to the AI on how to establish login (authentication). You'll see the skill instructs the AI to **build out custom authentication logic on the fly** (does *not* provide runable code).
- See full skill instructions [here](https://github.com/microsoft/power-platform-skills/blob/main/plugins/power-pages/skills/setup-auth/SKILL.md)
- The skill also provides an [authentication-reference.md](https://github.com/microsoft/power-platform-skills/blob/main/plugins/power-pages/skills/setup-auth/references/authentication-reference.md) as an example.


## Converting a Power Pages Site to Production
![prod](https://i.imgur.com/ogNJA4Y.png)

## Availability in GCC
Power Pages Code Apps ("Single page applications") are confirmed to be working in GCC!

![in GCC](https://i.imgur.com/KO9eMjz.png)

![working](https://i.imgur.com/LL6lTo0.png)