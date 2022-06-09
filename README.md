<h1 align="center">Awesome Firefox</h1>

Project designed to help you make the most of your Firefox browser. We declare that Firefox is times more convenient and better than Chrome. Our goal is to teach you how to get the most out of your browser!

> Site: https://mozilla.vercel.app
> <br>
> Awesome Windows 11: https://github.com/awesome-windows11/windows11

<h2 align="center">Configuration Files</h2>


<h2>📜 config.js (known as mozilla.cfg)</h2>

You no longer need to manually configure your browser settings. Firefox has auto-configuration for almost any setting. File with autopolicies for [about:config](https://searchfox.org/mozilla-release/source/browser/app/profile/firefox.js) page


All the current settings can be viewed without opening the browser at: `profile/prefs.js`

1. **IMPORTANT:** for THIS file to work, create a file:

<details><summary><code>app\defaults\pref\config-prefs.js</code></summary>

``` js
pref("general.config.obscure_value", 0);
pref("general.config.filename", "config.js");
pref("general.config.sandbox_enabled", false);
```
</details>

2. AFTER that you can create the file (*here are some examples of the most famous settings*):

<details><summary><code>app\config.js</code></summary>
	
```js
// extensions
lockPref('xpinstall.signatures.required', false);
// update
lockPref("app.update.auto", false)
lockPref("app.update.background.enabled", false)
// compact mode
lockPref("browser.compactmode.show", true);
lockPref("browser.uidensity", 1)
//safebrowsing Google
lockPref("browser.safebrowsing.malware.enabled", false)
lockPref("browser.safebrowsing.phishing.enabled", false)
lockPref("browser.safebrowsing.blockedURIs.enabled", false)
lockPref("browser.safebrowsing.downloads.remote.enabled", false)
lockPref("browser.safebrowsing.provider.google.updateURL", "none")
lockPref("browser.safebrowsing.provider.google4.updateURL", "none")
lockPref("browser.safebrowsing.provider.google4.dataSharingUR", "none")
lockPref("browser.safebrowsing.provider.google4.gethashURL", "none")
// Warn you about unwanted and uncommon software
lockPref("browser.safebrowsing.downloads.remote.block_uncommon", false)
// telemetry
lockPref("toolkit.telemetry.enabled", false)
lockPref("toolkit.telemetry.server", "none")
lockPref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false)
lockPref("app.normandy.enabled", false)
lockPref("app.normandy.first_run", false)
lockPref("app.normandy.api_url", "none")
// pocket
lockPref("extensions.pocket.enabled", false)
lockPref("extensions.pocket.api", "none")
lockPref("extensions.pocket.site", "none")
// css
lockPref("toolkit.legacyUserProfileCustomizations.stylesheets", true)
lockPref("widget.non-native-theme.scrollbar.style", 1)
lockPref("nglayout.enable_drag_images", false)
// containers
lockPref("privacy.userContext.enabled", true)
lockPref("privacy.userContext.ui.enabled", true)
// reader
lockPref("reader.parse-on-load.enabled", false)
// search page
lockPref("accessibility.typeaheadfind", true)
lockPref("accessibility.typeaheadfind.autostart", false)
// notification
lockPref("alerts.useSystemBackend", true)
// about:config
lockPref("browser.aboutConfig.showWarning", false)
// download
lockPref("browser.download.autohideButton", false)
// last session
lockPref("browser.startup.page", 3)
// tabs preview taskbar
lockPref("browser.taskbar.previews.enable", false)
// UTF8 decode
lockPref("browser.urlbar.decodeURLsOnCopy", true)
// space double click
lockPref("layout.word_select.eat_space_to_next_word", false)
// account
lockPref("network.http.windows-sso.enabled", false)
// calculator
lockPref("browser.urlbar.suggest.calculator", true)
// tabs animation off
lockPref("ui.prefersReducedMotion", "1")
//  smoothscrolling
lockPref("general.smoothScroll", false)
// autofill logins and passwords
lockPref("signon.autofillForms", false)
// suggest and generate strong password
lockPref("signon.generation.enabled", false)
// Provide search suggestions
lockPref("browser.search.suggest.enabled", true)
// Show search suggestions in adress bar results
lockPref("browser.urlbar.suggest.searches", true)
// Show search suggestions in Private Windows
lockPref("browser.search.suggest.enabled.private", true)
// Search bar in toolbar
lockPref("browser.search.widget.inNavBar", false)
// useragent
lockPref("general.useragent.override", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.63 Safari/537.36")
```
</details>

<h2>📜 policies.json</h2>

Firefox [policies](https://github.com/mozilla/policy-templates/blob/master/README.md)

<details><summary><code>app\distribution\policies.json</code></summary>
	
  ```json
{
  "policies": {
    "DisableAppUpdate": true,
	"DisableFirefoxAccounts": true,
	"DisableFirefoxScreenshots": true,
	"DisablePocket": true,
	"DisableSetDesktopBackground": true,
	"DisableTelemetry": true,
	"DontCheckDefaultBrowser": true,
	"PasswordManagerEnabled": false
    }
}
  ```
</details>

<h2>📜 userChrome.css</h2>

Firefox Appearance (CSS)

<details><summary><code>profile\chrome\userChrome.css</code></summary>
	
https://github.com/MrOtherGuy/firefox-csshacks/tree/master/chrome

	
https://github.com/MrOtherGuy/firefox-csshacks
	
MORE SOON...
</details>
<h2 align="center">✨ Personalization</h2>

[about:config](https://searchfox.org/mozilla-release/source/browser/app/profile/firefox.js)
<br>
[Firefox Scripts](https://github.com/xiaoxiaoflood/firefox-scripts)
<br>
[Firefox Styles TabBar](https://github.com/mbnuqw/sidebery/wiki/Firefox-Styles-Snippets-(via-userChrome.css))
<br>
[WaveFox](https://github.com/QNetITQ/WaveFox)
<br>
[Portable Firefox](https://github.com/UndertakerBen/PorFirefoxUpd)


<h2 align="center">🧰 Extensions</h2>

[Tree Style Tab](https://github.com/piroor/treestyletab)
<br>
[Translate Paginas](https://github.com/FilipePS/Traduzir-paginas-web)
<br>
[Gmail / Calendar checker](https://addons.mozilla.org/ru/firefox/user/1204619)

<h2 align="center"><a href="https://github.com/awesome-windows11/firefox/blob/main/UnbrandedBuilds.md">⬇ Unbranded builds</a></h2>
