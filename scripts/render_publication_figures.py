"""Render selected figure regions directly from publication PDFs with Poppler.

Crop boxes are measured on pages rendered with their longest side at 1100 px.
Render at double resolution to retain labels on high-density screens.
"""
from pathlib import Path
import subprocess

ROOT = Path(__file__).resolve().parents[1]
# asset, PDF prefix, page, crop (left, top, width, height), description
FIGURES = [
    ('J5', 'J5-', 3, (120, 358, 535, 301), 'Figure 1: research workflow from URANS simulation to DMD reconstruction'),
    ('J4', 'J4-', 6, (48, 72, 728, 378), 'Figure 10: the first 20 DMD modes of the pressure field'),
    ('J1', 'J1-', 4, (127, 185, 550, 405), 'Figure 5: the first four DMD modes of the square-cylinder wake'),
    ('J2', 'J2-', 4, (95, 102, 270, 262), 'Figure 1: LSTM network and memory-cell architecture'),
    ('C3', 'C3-', 4, (150, 594, 474, 290), 'Figure 5: the first four DMD modes'),
    ('C2', 'C2-', 2, (184, 513, 443, 148), 'Figure 1: recurrent network and LSTM cell schematic'),
    ('C1', 'C1-', 5, (268, 96, 238, 188), 'Figure 4(c): multi-scale LSTM and single-network prediction comparison'),
    ('coal-shed-2024', '煤', 3, (81, 80, 297, 352), 'Figure 1: LSTM network and gated memory-cell structure'),
]

def render():
    for key, prefix, page, box, description in FIGURES:
        matches = list((ROOT / 'data').glob(prefix + '*.pdf'))
        if len(matches) != 1:
            raise ValueError(f'Expected one PDF for {key}, found {len(matches)}')
        x, y, width, height = (value * 2 for value in box)
        subprocess.run([
            'pdftoppm', '-f', str(page), '-l', str(page), '-singlefile',
            '-scale-to', '2200', '-x', str(x), '-y', str(y),
            '-W', str(width), '-H', str(height),
            '-jpeg', '-jpegopt', 'quality=94', str(matches[0]),
            str(ROOT / 'images' / 'publications' / (key + '-figure')),
        ], check=True)
        print(f'{key}: page {page}, {description}')

if __name__ == '__main__':
    render()
