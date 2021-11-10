1. Generate a **GPG key** and add it to Github: https://help.github.com/articles/generating-a-new-gpg-key
_(if you don't want to type a passphrase on every commit, you need to press "Enter" when the console will prompt you to type a passphrase)_

2. Configure **Git** properly by editing the `.gitconfig` file using the command line `git config --global --edit` in a terminal, then replace _YOUR_GITHUB_EMAIL_, _YOUR_SIGNING_KEY_ and _GPG_BINARY_PATH_ with your data

```ini
[user]
  name = Xavier Foucrier
  email = YOUR_GITHUB_EMAIL
  signingkey = YOUR_SIGNING_KEY
[gpg]
  program = GPG_BINARY_PATH
[commit]
  gpgsign = true
```

- _YOUR_GITHUB_EMAIL_: the **email address** used to login on Github
- _YOUR_SIGNING_KEY_: the **GPG key** used to sign commits, should follow the GPG key ID convention, like this example: https://help.github.com/articles/telling-git-about-your-signing-key/#telling-git-about-your-gpg-key-1
- _GPG_BINARY_PATH_: the **GPG binary file path**, depending on your Git install and your operating system:
  - Windows: `gpg`, `gpg.exe` or `C:\\Program Files\\Git\\usr\\bin\\gpg.exe` _(can be found using `where gpg` in a terminal)_
  - Mac or Linux: `gpg` or `/usr/local/bin/gpg` _(can be found using `which gpg` in a terminal)_

3. Enjoy **signed commits** with your favorite code editor!

> Note that you can temporary disable GPG signed commits by setting `gpgsign = false` in your `.gitconfig` file with `git config --global commit.gpgsign false`
