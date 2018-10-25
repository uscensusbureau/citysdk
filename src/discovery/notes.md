## using NPM `broken-link-checker`

To get a list of all the links recursively, excluding any links that end in "json" with broken link checker
`blc https://api.census.gov/data.html -r -o --exclude *json`

To output the file (saved to directory Cmder is currently in):
`blc https://api.census.gov/data.html -r -o --exclude *json *>&1> output-file-name.txt`

[source](https://www.koskila.net/how-to-redirect-console-output-to-a-file/)

Use wget to get all pages that have "examples" in the url -> output to file "wget-examples.txt":

`wget -r --accept-regex=.*examples.* -O wget-examples.txt https://api.census.gov/data.html`

This will actually download all the pages HTML

Handy regex tool: https://www.regextester.com/

then use `grep` : `-Eo` uses extended regular expressions and shows only the part of the line matching it

[source](https://unix.stackexchange.com/a/181264)

`grep -Eo 'href="[^\"]+"' grep-parsed-hrefs.txt`

However, in Windows double quotes need to be escaped with the caret:

[source](https://stackoverflow.com/a/39526339)

`grep -Eo 'href=^"[^^^"]+^"' grep-parsed-hrefs.txt > hrefs.txt`

Then inside the "hrefs.txt" file, need to do some cleanup:

### Cleaning up In Sublime Text 3

- Delete anything that's not a 'data/' url (first few hundreds lines)
- Delete the 'href=' part of each string
- Add 'https:/api.census.gov/' before hrefs
- wrap all the strings in a vector/array `[]`
- replace all `%20` characters with spaces ` ` (easier to see)
- do some _moar regex_ to properly qualify more than one `&in=` statement (replacing spaces after numbers):
  - regex for all examples that don't qualify `&in=`s fully [replace with `0&in=`, `1&in=`, etc..]: 
    -`0( )`, `1( )`, ... `9( )`
  - regex for certain AIAN areas SLDS [replace with `A&in=`, etc..] requires Sublime Regex + Casesensitive selection: 
    - `A( )`, `B( )`, `C( )`, `R( )`, `T( )`, `U( )`  
    
Saved as hrefs.edn
