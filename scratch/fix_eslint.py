import re

# src/app/stock/page.tsx
with open('src/app/stock/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace("catch (error)", "catch")
with open('src/app/stock/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

# src/app/stock/[id]/page.tsx
with open('src/app/stock/[id]/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace("import { machines } from '@/data/machines';", "import { machines, Machine } from '@/data/machines';")
content = content.replace("const generateWhatsAppMessage = (machine: any) => {", "const generateWhatsAppMessage = (machine: Machine) => {")
content = content.replace("Object.entries(machine.specs).filter(([key, value]) => value);", "Object.entries(machine.specs).filter(([_, value]) => value);")

with open('src/app/stock/[id]/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

# src/components/Proof.tsx
with open('src/components/Proof.tsx', 'r', encoding='utf-8') as f:
    content = f.read()
    
content = content.replace("import Image from 'next/image';\n", "")
with open('src/components/Proof.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

# src/utils/whatsapp.ts
with open('src/utils/whatsapp.ts', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace("Object.entries(machine.specs).filter(([key, value]) => value);", "Object.entries(machine.specs).filter(([_, value]) => value);")

with open('src/utils/whatsapp.ts', 'w', encoding='utf-8') as f:
    f.write(content)

