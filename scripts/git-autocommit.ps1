param(
  [string]$message = "Auto commit from VSCode $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')",
  [string]$branch = "main"
)

try {
    # Stage all changes
    git add -A

    # Check whether there are staged changes
    git diff --cached --quiet
    if ($LASTEXITCODE -ne 0) {
        git commit -m "$message"
        git push origin $branch
        Write-Output "Auto commit and push completed"
    }
    else {
        Write-Output "No changes to commit"
    }
}
catch {
    Write-Output "Error during auto-commit: $_"
    exit 1
}
