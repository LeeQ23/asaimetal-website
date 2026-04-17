import re

with open('src/components/Catalog.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Font classes
content = content.replace(" style={{fontFamily: 'Montserrat, Roboto, Helvetica Neue, Arial, sans-serif'}}", " font-mulish")
content = content.replace(' className="text-red-400 font-bold text-xl uppercase font-mulish"', ' className="text-red-400 font-bold text-xl uppercase font-barlow"')
content = content.replace(' className="text-white font-bold text-lg mb-1 font-mulish"', ' className="text-white font-bold text-lg mb-1 font-barlow"')


# Layout widths
content = content.replace('className="flex-1 space-y-4" style={{flex: \'0 0 58.3%\'}}', 'className="w-full lg:w-7/12 space-y-4 shrink-0"')
content = content.replace('className="flex-1" style={{flex: \'0 0 41.7%\'}}', 'className="w-full lg:w-5/12 shrink-0"')
content = content.replace('className="flex-1" style={{flex: \'0 0 58.3%\'}}', 'className="w-full lg:w-7/12 shrink-0"')
content = content.replace('className="flex-1 space-y-4" style={{flex: \'0 0 41.7%\'}}', 'className="w-full lg:w-5/12 space-y-4 shrink-0"')


# Import next/image
if 'import Image from' not in content:
    content = content.replace("import { generateWhatsAppLink", "import Image from 'next/image';\nimport { generateWhatsAppLink")

# Add Next.js width and height 
content = re.sub(r'<img\n\s+src=\{([^}]+)\}\n\s+alt=\{([^}]+)\}\n\s+className="([^"]+)"\n\s*/>', r'<Image src={\1} alt={\2} className="\3" width={800} height={600} />', content)


with open('src/components/Catalog.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
