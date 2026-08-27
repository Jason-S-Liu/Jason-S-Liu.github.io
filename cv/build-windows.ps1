$ErrorActionPreference = "Stop"

Set-Location $PSScriptRoot

xelatex -interaction=nonstopmode ShijieLiu-CV.tex
xelatex -interaction=nonstopmode ShijieLiu-CV.tex

Copy-Item -Force "ShijieLiu-CV.pdf" "..\data\ShijieLiu-CV.pdf"

Write-Host "Built ..\data\ShijieLiu-CV.pdf"
