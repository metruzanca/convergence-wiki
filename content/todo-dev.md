---
draft: "true"
---

%% draft=true in frontmatter, hides this page from the Quartz site %%

## Todo Dev

These are just some notes for things that need to be done.

### Orphan files prevent build

Setup orphan file detection in quartz and cause that to fail a vercel deploy.

This might happen if someone renamed a file in a commit and someone else references the renamed file at the same time. In code, the build would fail. With markdown, we need an equivalent check.

### Separate Production Branch

This should be done to aid in collaboration.
