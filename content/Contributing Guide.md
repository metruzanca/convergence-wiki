## [DRAFT]

All edits must be done with Obsidian, as obsidian will automatically update links when file names are changed or files are moved. This will prevent links from being broken.

Templates in `templates` set the standard for how pages should look. This is to maintain consistency.

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
