import shutil
import os

src = r"C:\Users\Nisanth\.gemini\antigravity-ide\brain\43698983-387e-4479-b3ba-e631d2a0ff9e\media__1781519634143.png"
dest = r"d:\Projects\Portfolio\src\assets\octanet certificate.png"

try:
    shutil.copy(src, dest)
    print("Success")
except Exception as e:
    print("Error:", e)
