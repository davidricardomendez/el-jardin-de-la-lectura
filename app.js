const books = [
['Una historia ridícula',['Luis Landero'],'Toni',1,1],
['Flores para Algernon',['Daniel Keyes'],'Mateo',1,2],
['La juventud atracada',['José Ignacio Conde-Ruiz','Carlotta Conde Gasca'],'Fernando',1,3],
['El segador',['Terry Pratchett'],'Alex',1,4],
['En el camino',['Jack Kerouac'],'Carba',1,5],
['El príncipe destronado',['Miguel Delibes'],'Alberto',1,6],
['La nieta del señor Linh',['Philippe Claudel'],'Simón',1,7],
['Los mares del sur',['Manuel Vázquez Montalbán'],'David',1,8],
['Sab',['Gertrudis Gómez de Avellaneda'],'Toni',2,9],
['El terremoto en Chile',['Heinrich von Kleist'],'Mateo',2,10],
['Informe para una academia',['Franz Kafka'],'Mateo',2,10],
['¿Cuánta tierra necesita un hombre?',['Lev Tolstói'],'Mateo',2,10],
['Cadáver exquisito',['Agustina Bazterrica'],'Fernando',2,11],
['El señor de las moscas',['William Golding'],'Alex',2,12],
['Gente normal',['Sally Rooney'],'Carba',2,13],
['Atrapa al pez dorado',['David Lynch'],'Alberto',2,14],
['Cartas a un joven poeta',['Rainer Maria Rilke'],'Alberto',2,14],
['Fahrenheit 451',['Ray Bradbury'],'Carlos',2,15],
['Ubik',['Philip K. Dick'],'David',2,16],
['A sangre y fuego',['Manuel Chaves Nogales'],'Toni',3,17],
['Cándido',['Voltaire'],'Mateo',3,18],
['Mil cosas',['Juan Tallón'],'Fernando',3,19],
['El viejo y el mar',['Ernest Hemingway'],'Alex',3,20]
].map(([title,authors,member,round,turn],i)=>({title,authors,member,round,turn,cover:`assets/cover-${String(i+1).padStart(2,'0')}.jpg`}));
const names=['Primera ronda','Segunda ronda','Tercera ronda'];
function el(tag,className,text){const node=document.createElement(tag);if(className)node.className=className;if(text!==undefined)node.textContent=text;return node}
function card(book){const article=el('article','book');const frame=el('div','cover-space');const img=el('img');img.src=book.cover;img.alt=`Portada de ${book.title}`;img.loading='lazy';img.decoding='async';frame.append(img);article.append(frame,el('h4','',book.title),el('p','author',book.authors.join(' y ')));const meta=el('p','meta');meta.append(el('span','',`Propuesto por ${book.member}`),el('span','',names[book.round-1]));article.append(meta);return article}
for(let round=1;round<=3;round++){const section=el('section','round');section.dataset.round=round;section.setAttribute('aria-labelledby',`round-${round}`);const heading=el('div','round-heading');const h=el('h3','',names[round-1]);h.id=`round-${round}`;heading.append(el('span','numeral',['I','II','III'][round-1]),h,el('span','',`${books.filter(b=>b.round===round).length} obras o textos`));section.append(heading);const grid=el('div','book-grid');books.filter(book=>book.round===round).forEach(book=>grid.append(card(book)));section.append(grid);document.querySelector('#rounds').append(section)}
const authors=[...new Set(books.flatMap(b=>b.authors))].sort((a,b)=>a.localeCompare(b,'es'));
for(const author of authors){const entry=el('div','author-entry');entry.append(el('h3','',author),el('p','',books.filter(b=>b.authors.includes(author)).map(b=>b.title).join(' · ')));document.querySelector('#author-list').append(entry)}
for(const member of ['Toni','Mateo','Fernando','Alex','Carba','Alberto','Simón','David','Carlos']){const entry=el('div','member');entry.append(el('h3','',member));const list=el('ul');books.filter(b=>b.member===member).forEach(b=>list.append(el('li','',b.title)));entry.append(list);document.querySelector('#member-list').append(entry)}
document.querySelectorAll('.filters button').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.filters button').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));const value=button.dataset.round;document.querySelectorAll('.round').forEach(section=>section.hidden=value!=='all'&&section.dataset.round!==value);document.querySelector('#filter-status').textContent=value==='all'?'Se muestran todas las rondas':`Se muestra la ${names[Number(value)-1].toLowerCase()}`;}));
if(document.modelContext?.registerTool){try{Promise.resolve(document.modelContext.registerTool({name:'read_reading_archive',title:'Consultar el archivo de lecturas',description:'Devuelve las obras, autores, propuestas y rondas del club de lectura.',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:true,untrustedContentHint:false},execute(input){if(input&&Object.keys(input).length)throw new Error('Esta consulta no admite parámetros.');return books.map(({cover,...book})=>book);}})).catch(()=>{});}catch{}}
