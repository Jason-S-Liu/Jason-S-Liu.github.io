@echo off
setlocal

cd /d "%~dp0"

xelatex -interaction=nonstopmode ShijieLiu-CV.tex
if errorlevel 1 exit /b %errorlevel%

xelatex -interaction=nonstopmode ShijieLiu-CV.tex
if errorlevel 1 exit /b %errorlevel%

copy /Y "ShijieLiu-CV.pdf" "..\data\ShijieLiu-CV.pdf"

echo Built ..\data\ShijieLiu-CV.pdf
