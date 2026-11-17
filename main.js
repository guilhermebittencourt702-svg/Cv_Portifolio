const dados = {
  nome: "Guilherme Araujo Silva",
  titulo: "ADS / Desenvolvedor em Formação",
  foto: "foto.jpeg..jpeg",
  email: "guilhermebittencourt702@gmail.com",
  whatsapp: "(11) 98302-9581",
  local: "Suzano - SP, Brasil",
  linkedin: "linkedin.com/in/guilherme-araujo-699b49435",
  github: "github.com/guilhermebittencourt702-svg",
  especializacao: "Analista de Sistemas",
  objetivo: "Conseguir elaborar sistemas para empresas grandes e atuar internacionalmente.",
  empresa: "Empresa Tmkt",
  cargo: "Operador",
  descricao: "Trabalho com o público recebendo ligações.",
  instituicao: "UNIPIAGET",
  curso: "Análise e Desenvolvimento de Sistemas",
  semestre: "2º Semestre - Cursando",
  habilidades: "JavaScript, Python, Visual Studio Code",
  idioma: "Português - Nativo",
  certificacao: "Excel Básico — SENAI (2025)",
  projeto: "Exibir Nomes — HTML, CSS e JavaScript",
  vaga: "Full Stack / Desenvolvedor Web — Remoto ou Híbrido"
};

const fotoPerfil = document.getElementById("fotoPerfil");
if (fotoPerfil) fotoPerfil.src = dados.foto;

const nomeEl = document.getElementById("nomeUsuario");
if (nomeEl) nomeEl.textContent = dados.nome;

const tituloEl = document.getElementById("tituloUsuario");
if (tituloEl) tituloEl.textContent = dados.titulo;

const linhas = [
  { cat: "Dados Pessoais", det: "Nome Completo", info: dados.nome },
  { cat: "Dados Pessoais", det: "Título", info: dados.titulo },
  { cat: "Dados Pessoais", det: "E-mail", info: dados.email },
  { cat: "Dados Pessoais", det: "WhatsApp", info: dados.whatsapp },
  { cat: "Dados Pessoais", det: "Localização", info: dados.local },
  { cat: "Links", det: "LinkedIn", info: dados.linkedin },
  { cat: "Links", det: "GitHub", info: dados.github },
  { cat: "Resumo", det: "Especialização", info: dados.especializacao },
  { cat: "Resumo", det: "Objetivo", info: dados.objetivo },
  { cat: "Experiência", det: `${dados.cargo} (${dados.empresa})`, info: dados.descricao },
  { cat: "Formação", det: dados.instituicao, info: `${dados.curso} — ${dados.semestre}` },
  { cat: "Habilidades", det: "Técnicas", info: dados.habilidades },
  { cat: "Idiomas", det: "Português", info: dados.idioma },
  { cat: "Certificações", det: "Excel Básico", info: dados.certificacao },
  { cat: "Projetos", det: "Exibir Nomes", info: dados.projeto },
  { cat: "Preferências", det: "Cargo Desejado", info: dados.vaga }
];

const corpo = document.getElementById("corpoTabela");
if (corpo) {
  corpo.innerHTML = "";
  for (let item of linhas) {
    const linha = document.createElement("tr");
    linha.innerHTML = `<td>${item.cat}</td><td>${item.det}</td><td>${item.info}</td>`;
    corpo.appendChild(linha);
  }
}