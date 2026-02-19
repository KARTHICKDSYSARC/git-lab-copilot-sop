Write-Host "Starting local web server..." -ForegroundColor Green
Write-Host ""
Write-Host "Your documentation site will be available at:" -ForegroundColor Cyan
Write-Host "http://localhost:8000" -ForegroundColor Yellow
Write-Host ""
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Gray
Write-Host ""

python -m http.server 8000
