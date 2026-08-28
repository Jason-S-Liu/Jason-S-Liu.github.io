$ErrorActionPreference = "Stop"

$sourceDir = $PSScriptRoot
$dataDir = Join-Path $sourceDir "..\data"
$tempDir = Join-Path $env:TEMP ("shijieliu-cv-" + [guid]::NewGuid().ToString("N"))

try {
  New-Item -ItemType Directory -Path $tempDir | Out-Null
  Copy-Item -Path (Join-Path $sourceDir "*") -Destination $tempDir -Recurse -Force

  Set-Location $tempDir

  xelatex -interaction=nonstopmode -halt-on-error ShijieLiu-CV.tex
  xelatex -interaction=nonstopmode -halt-on-error ShijieLiu-CV.tex

  Copy-Item -Force "ShijieLiu-CV.pdf" (Join-Path $sourceDir "ShijieLiu-CV.pdf")
  Copy-Item -Force "ShijieLiu-CV.pdf" (Join-Path $dataDir "ShijieLiu-CV.pdf")
  Copy-Item -Force "ShijieLiu-CV.log" (Join-Path $sourceDir "ShijieLiu-CV.log")

  Write-Host "Built ShijieLiu-CV.pdf"
  Write-Host "Copied ..\data\ShijieLiu-CV.pdf"
}
finally {
  Set-Location $sourceDir
  if (Test-Path $tempDir) {
    Remove-Item -Recurse -Force $tempDir
  }
}
