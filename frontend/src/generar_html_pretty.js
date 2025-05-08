const fs = require('fs');
const beautify = require('js-beautify').html;

const niveles = require('./niveles_css_json.json');

const opciones = {
  indent_size: 2,
  preserve_newlines: true,
  indent_inner_html: true,
  unformatted: [] // ← esto es lo que mantiene TODO con saltos e indentación
};

const nivelesActualizados = niveles.map(n => ({
  ...n,
  html_pretty: beautify(n.html, opciones)
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}));

fs.writeFileSync(
  './niveles_css_json_con_pretty.json',
  JSON.stringify(nivelesActualizados, null, 2),
  'utf-8'
);

console.log('✅ Archivo generado correctamente con js-beautify');
