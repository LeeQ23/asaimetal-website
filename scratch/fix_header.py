import re

with open('src/components/Header.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('href="#hero"', 'href="/#hero"')
content = content.replace('href="#proof"', 'href="/#proof"')
content = content.replace('href="#benefits"', 'href="/#benefits"')
content = content.replace('href="#catalog"', 'href="/#catalog"')
content = content.replace('href="#authority"', 'href="/#authority"')
content = content.replace('href="#cta"', 'href="/#cta"')

with open('src/components/Header.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
