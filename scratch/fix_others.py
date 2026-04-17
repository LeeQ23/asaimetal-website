import re

# Authority.tsx Fixes
with open('src/components/Authority.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace(" style={{fontFamily: 'Montserrat, Roboto, Helvetica Neue, Arial, sans-serif'}}", " font-mulish")
content = content.replace(' className="text-white font-bold text-xl mb-2 font-mulish"', ' className="text-white font-bold text-xl mb-2 font-barlow"')
content = content.replace(' className="text-white font-bold text-lg font-mulish"', ' className="text-white font-bold text-lg font-barlow"')
content = content.replace(' className="text-red-400 font-semibold text-lg font-mulish"', ' className="text-red-400 font-semibold text-lg font-barlow"')

# Remove inline fontSize, lineHeight, etc.
content = re.sub(r' style=\{\{\s*fontSize:\s*\'[^\']+\',\s*lineHeight:\s*\'[^\']+\'\s*\}\}', '', content)
content = content.replace(' style={{', ' style={{') # Just in case
# There's a CTA button with inline styles:
# style={{
#   fontSize: '18px',
#   fontWeight: '700',
#   textTransform: 'uppercase',
#   background: 'linear-gradient(135deg, #DC2626 0%, #FB4E4E 100%)',
#   color: '#FFFFFF',
#   boxShadow: '0 4px 15px rgba(220, 38, 38, 0.3)'
# }}
# Let's replace button styles
cta_style = """            style={{
              fontSize: '18px',
              fontWeight: '700',
              textTransform: 'uppercase',
              background: 'linear-gradient(135deg, #DC2626 0%, #FB4E4E 100%)',
              color: '#FFFFFF',
              boxShadow: '0 4px 15px rgba(220, 38, 38, 0.3)'
            }}"""
content = content.replace(cta_style, 'className="inline-block px-12 py-6 rounded-xl text-[18px] font-bold uppercase transition-all duration-300 transform hover:scale-105 shadow-[0_4px_15px_rgba(220,38,38,0.3)] bg-gradient-to-br from-red-600 to-red-500 text-white"')

with open('src/components/Authority.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

# Proof.tsx Fixes
with open('src/components/Proof.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace("font-['Barlow']", "font-barlow")
content = content.replace("font-['Mulish']", "font-mulish")

if 'import Image from' not in content:
    content = "import Image from 'next/image';\n" + content

# <img src={logo} alt={`Company Logo ${(index % 14) + 1}`} className="max-w-full max-h-full object-contain transition-all duration-500 group-hover:scale-110 filter brightness-75 group-hover:brightness-100 relative z-10" />
# To: <Image src={logo} alt... width={80} height={80} className="..." />
content = re.sub(r'<img\s+src=\{logo\}\s+alt=\{([^}]+)\}\s+className="([^"]+)"\s*/>', r'<Image src={logo} alt={\1} className="\2" width={100} height={40} />', content)


with open('src/components/Proof.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
