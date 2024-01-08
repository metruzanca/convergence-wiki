---
draft: true
---

## [DRAFT]

All edits must be done with Obsidian, as obsidian will automatically update links when file names are changed or files are moved. This will prevent links from being broken.

Templates in `templates` set the standard for how pages should look. This is to maintain consistency

`index` files are for quartz, which is the tool that powers the website. `title` set in the index file changes the page title. `aliases` makes the index searchable in obsidian and when that file is linked, the "text" of the link will be the alias e.g. `[[starting-classes/index|Starting Classes]]` will be a link to `starting-classes/index` with the text of `Starting Classes` on both Obsidian and Quartz and non of this was typed manually, just autocompleted by obsidian.

## Obsidian Usage

### Paste URL into Selection

Copy a link, then select text and ctrl/cmd+p to paste the link and it will automatically format it for you.

### Link internal pages

Press `[[`  then type the name of the file you're looking for and hit enter to generate a link e.g. `[[Radahn]]` will be generated after searching and hitting enter. This will then be displayed as a link.

If you want to rename a link, you can do so by renaming the file. Obsidian will then update all the files that reference that file. Avoid doing this unless the file being renamed was created in the commit you're working on. (_Its likely to cause broken links if someone else references the file. #meta-todo setup orphan file detection in quartz and cause that to fail a vercel deploy._)

### Hotkeys

Quick Switcher: use `cmd/ctrl+k` or `cmd/ctrl+p` to search for a file. Within this search, you can use `#` to look for headings within all files. Otherwise, you can use the search panel to the left (by default).

Command palette: use `cmd/ctrl+shift+p` to bring up the command palette. I've pinned a few commands for convenience:

- `Commit all changes`: will... commit all changes with the date and time as the message.
- `Push`: will upload your changes to the repository/your fork
- `Lint all files`: Will "lint" all the files, enforcing markdown style for consistency. This is also run when you press `cmd/ctrl+s`.

> Unless you know what you're looking for, this menu might not be as useful for you.


## Setup

### Making local changes
1. Download and install: [Obsidian](https://obsidian.md) and [git](https://git-scm.com/).
	- You might need to open your terminal and check that the `git` command works.
2. Fork the [repository]()
3. Open Obsidian and click on the `open` button and find the

### Uploading your changes to the shared Repository
1. Make a [Github](https://github.com) account.

### Cloning the repository

tldr; I'd recommend running these commands when cloning, this will only clone what you need.

```bash
git clone --filter=blob:none --no-checkout https://github.com/metruzanca/convergence-wiki.git;
cd convergence-wiki;
git sparse-checkout set content;
git checkout;
```

What this will do, is clone the repository with only the content directory. If you just want to contribute to the wiki (aka the content) and you don't plan on contributing to the source code, this will eliminate both distractions and the possibility of accidentally modifying files.

> [!note]
> You cannot move/rename the `content` folder. You can rename the `convergence-wiki` directory but inside of it, the structure must be maintained. The `content` & `.git` folders must not be deleted/moved/renamed.
