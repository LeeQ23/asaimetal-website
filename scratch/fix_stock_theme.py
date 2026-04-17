import re

with open('src/app/stock/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Change the initial section bg
content = content.replace('bg-gradient-to-r from-red-600 to-white text-gray-800', 'bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white')
content = content.replace('bg-gray-50', 'bg-black')

# Change filter bar
content = content.replace('bg-white rounded-lg shadow', 'glass-morphism rounded-2xl shadow-modern')
content = content.replace('className="flex-1 p-2 border rounded"', 'className="flex-1 p-3 bg-gray-800 border-gray-700 text-white rounded-lg placeholder-gray-400 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all"')
content = content.replace('className="p-2 border rounded"', 'className="p-3 bg-gray-800 border-gray-700 text-white rounded-lg outline-none focus:border-red-500 transition-all"')

# Change buttons inside filter
content = content.replace('bg-white text-gray-700 hover:bg-gray-100', 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700')

# Change cards
content = content.replace('className={`bg-white p-6 rounded-lg shadow-md hover-lift cursor-pointer relative animate-fade-in-up`}', 'className={`glass-morphism p-6 rounded-3xl shadow-modern hover:shadow-modern-lg transition-all duration-500 hover:-translate-y-2 cursor-pointer relative animate-fade-in-up`}')
# Ensure text is not white-on-white by leaving it default white (from globals), but we need to update some specific `<p>` tags
content = content.replace('<p className="mb-1"><strong>', '<p className="mb-2 text-gray-300"><strong className="text-white">')
content = content.replace('<p className="mb-4"><strong>', '<p className="mb-6 text-red-500"><strong className="text-white">')


with open('src/app/stock/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

### Do the same for stock/[id]
with open('src/app/stock/[id]/page.tsx', 'r', encoding='utf-8') as f:
    content_id = f.read()

content_id = content_id.replace('bg-gray-50', 'bg-black text-white pt-32') # Fixed spacing in pt-20 to pt-32 just in case
content_id = content_id.replace('bg-gray-100', 'bg-gray-800/50')
content_id = content_id.replace('border-gray-300', 'border-gray-700')
content_id = content_id.replace('text-gray-800', 'text-gray-200')
# Title colors already red
content_id = content_id.replace('text-lg', 'text-gray-300 text-lg')
content_id = content_id.replace('className="text-2xl font-bold mb-4"', 'className="text-2xl font-bold mb-4 text-white"')

with open('src/app/stock/[id]/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content_id)

