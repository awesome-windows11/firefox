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
// Block dangerous downloads
lockPref("browser.safebrowsing.downloads.enabled", false) 
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
// reader mode
lockPref("reader.parse-on-load.enabled", false)
// css
lockPref("toolkit.legacyUserProfileCustomizations.stylesheets", true)
lockPref("widget.non-native-theme.scrollbar.style", 3)
lockPref("nglayout.enable_drag_images", false)
// containers
lockPref("privacy.userContext.enabled", true)
lockPref("privacy.userContext.ui.enabled", true)
// reader
lockPref("reader.parse-on-load.enabled", false)
// search page
lockPref("accessibility.typeaheadfind", false) // чтобы поиск не набирался сразу
lockPref("accessibility.typeaheadfind.autostart", false)
// notification
lockPref("alerts.useSystemBackend", true)
// about:config
lockPref("browser.aboutConfig.showWarning", false)
// download
lockPref("browser.download.autohideButton", false)
lockPref("browser.download.useDownloadDir", false)
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
// tabs animation off
lockPref("ui.prefersReducedMotion", "1")
// ctrl + tab menu
lockPref("browser.ctrlTab.sortByRecentlyUsed", true)
// Open links in tabs of new tab (windows = 2)
lockPref("browser.link.open_newwindow", 3)
// open links in searchbar of current tab
lockPref("browser.urlbar.openintab", false)
// smoothscrolling
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
// spellcheck on
lockPref("layout.spellcheckDefault", 1)
// reset the browser window size
lockPref("privacy.resistFingerprinting", false)
// useragent
lockPref("general.useragent.override", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36")
// https://firefox-source-docs.mozilla.org/browser/urlbar/preferences.html
lockPref("browser.urlbar.showSearchSuggestionsFirst", false)
// max count search bar
lockPref("browser.urlbar.maxRichResults", 20)
// calculator
lockPref("browser.urlbar.suggest.calculator", true)
lockPref("browser.urlbar.unitConversion.enabled", true)
