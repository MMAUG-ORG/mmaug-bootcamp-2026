# Post-Session Cleanup Guidance

## Local Machine Cleanup
Remove temporary workspace folders created during the lab:
```bash
    cd ..
    rm -rf mmaug-git-workshop
```

## Cloud Resource & Cost Notice
- Standard GitHub public repositories and PRs are 100% free and incur no charges.
- If using extended CI/CD pipelines (GitHub Actions) or cloud hostings (AWS/Azure/GCP in follow-up exercises, make sure to delete active deployments or resource groups to prevent unexpected billing.