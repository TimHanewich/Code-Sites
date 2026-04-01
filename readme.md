## Learning Resources
- [Ceating a Single Page Application](https://learn.microsoft.com/en-us/power-pages/configure/create-code-sites#create-and-deploy-an-spa-site)
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

## Converting a Power Pages Site to Production
![prod](https://i.imgur.com/ogNJA4Y.png)