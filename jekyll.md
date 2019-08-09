
# Census API Docs for Javascript
Documentation, examples, guides primarily focused on using the Census API in frontend and backend Javascript applications by unitizing the CitySDK library. 

Built on [uswds-jekyll](https://github.com/18F/uswds-jekyll)

---
### Development
1. Fetch gems by running

```bash
bundle
```

2. Run Jekyll in development

```bash
jekyll serve --config _config.yml,_config_development.yml
```

#### Other notes
When adding images or assets make sure to include relative_url. This is so baseurl works for github pages.
```
{{ '/assets/something.png' | relative_url }}
```

---
If you would like to add features and content, report an issue, or suggest changes submit a pull request on Github.