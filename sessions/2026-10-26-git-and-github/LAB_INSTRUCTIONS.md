# Step-by-Step Lab Instructions

### Exercise 1: Local Git Basics
1. Create a workspace folder:
```bash
   mkdir mmaug-git-workshop && cd mmaug-git-workshop
```
2. Initialize repository & create test.txt:
```bash
    git init
    echo "Hi, learning Git at MMAUG!" > test.txt
```
3. Stage and commit:
```bash
    git add test.txt
    git commit -m "feat: initial commit"
```

### Exercise 2: Time Travel & Reset
1. Delete test.txt and commit:
```bash
    rm test.txt
    git add test.txt && git commit -m "refactor: remove test file"
```
2. Find original commit hash via git log and hard reset:
```bash
    git reset --hard <COMMIT_SHA_ID>
```

### Exercise 3: GitHub Push & Pull Requests
1. Create a public repo session-mmaug on GitHub.
2. Link origin and push:
```bash
    git remote add origin [https://github.com/](https://github.com/)<YOUR_USERNAME>/session-mmaug.git
    git push -u origin main
```
3. Create feature branch and make PR:
```bash
    git checkout -b feature-feedback
    echo "Great MMAUG session!" >> feedback.txt
    git add feedback.txt && git commit -m "docs: add feedback"
    git push -u origin feature-feedback
```
4. Open a Pull Request on GitHub and merge into main.