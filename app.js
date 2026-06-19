
/* Editor Institucional de Procedimientos EI · V15
   Formato vectorial real: ya no se superpone sobre una imagen de plantilla.
   La estructura institucional se dibuja como SVG editable/exportable.
*/
const PAGE_W = 792;
const PAGE_H = 612;

const TEMPLATE = {
  flow: "assets/template_p1.png",
  info: "assets/template_p2.png"
};

const FLOW = {
  x: 28, y: 109, w: 737, h: 445,
  processW: 52, roleW: 40
};
FLOW.canvasX = FLOW.x + FLOW.processW + FLOW.roleW;
FLOW.canvasW = FLOW.w - FLOW.processW - FLOW.roleW;
FLOW.bottom = FLOW.y + FLOW.h;
FLOW.right = FLOW.x + FLOW.w;

const COLORS = {
  blue: "#00378A",
  yellow: "#EAC800",
  gray: "#A4A8AB",
  border: "#111111",
  black: "#111111",
  white: "#FFFFFF"
};

const EI_LOGO_DATA = "data:image/png;base64,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";
const EXPORT_SCALE = 4; // alta resolución para PDF/PNG, sin fondo de plantilla rasterizada


let imageData = { flow: TEMPLATE.flow, info: TEMPLATE.info };
let zoom = 1;
let activeTool = "select";
let activePageId = null;
let selected = null; // {type:'shape'|'connector', id}
let connectStartId = null;
let drag = null;

const defaultProject = () => ({
  meta: {
    title: "PROCEDIMIENTO PARA LA GESTIÓN Y EJECUCIÓN DE CORTE DE CABLES",
    code: "S-PR-9",
    version: "Versión 1",
    date: "17/06/2026"
  },
  pages: [
    {
      id: uid("page"),
      type: "flow",
      title: "Flujograma 1",
      lanes: [
        { id: uid("lane"), process: "VENTAS", role: "Asesor comercial" },
        { id: uid("lane"), process: "LOGÍSTICA", role: "Coordinador logístico" },
        { id: uid("lane"), process: "LOGÍSTICA", role: "Auxiliares de corte" }
      ],
      shapes: [
        { id: uid("s"), type: "terminal", x: 170, y: 220, w: 55, h: 20, text: "INICIO", laneIndex: 0 },
        { id: uid("s"), type: "activity", x: 270, y: 220, w: 82, h: 52, text: "RECEPCIONAR solicitud", laneIndex: 0 },
        { id: uid("s"), type: "activity", x: 400, y: 220, w: 95, h: 52, text: "VERIFICAR disponibilidad en sistema", laneIndex: 0 },
        { id: uid("s"), type: "decision", x: 525, y: 220, w: 86, h: 62, text: "¿Hay disponibilidad?", laneIndex: 0 },
        { id: uid("s"), type: "activity", x: 635, y: 170, w: 100, h: 56, text: "INFORMAR novedad", laneIndex: 0 },
        { id: uid("s"), type: "activity", x: 635, y: 295, w: 98, h: 56, text: "GENERAR solicitud de corte", laneIndex: 1 },
        { id: uid("s"), type: "pageConnector", x: 735, y: 295, w: 28, h: 36, text: "A", laneIndex: 1 }
      ],
      connectors: []
    },
    {
      id: uid("page"),
      type: "info",
      title: "Normas y políticas",
      narrative: {
        recognition: "",
        objective: "Establecer las actividades necesarias para gestionar y ejecutar el corte de cables, garantizando trazabilidad, control y cumplimiento de los requisitos internos.",
        scope: "Aplica desde la recepción de la solicitud de corte hasta la entrega del material cortado al área correspondiente.",
        indicators: "Ver tabla de indicadores.",
        info: "Las actividades del flujograma muestran de una manera ordenada y sistemática los pasos a seguir durante la gestión y ejecución del corte de cables.",
        normativity: "Ver normograma.",
        documents: ["S-FT-X Formato de solicitud de corte", "S-IN-X Instructivo relacionado"]
      }
    }
  ]
});
let project = defaultProject();
project.pages[0].connectors = [
  { id: uid("c"), from: project.pages[0].shapes[0].id, to: project.pages[0].shapes[1].id, label: "", route: "auto" },
  { id: uid("c"), from: project.pages[0].shapes[1].id, to: project.pages[0].shapes[2].id, label: "", route: "auto" },
  { id: uid("c"), from: project.pages[0].shapes[2].id, to: project.pages[0].shapes[3].id, label: "", route: "auto" },
  { id: uid("c"), from: project.pages[0].shapes[3].id, to: project.pages[0].shapes[4].id, label: "No", route: "hvh" },
  { id: uid("c"), from: project.pages[0].shapes[3].id, to: project.pages[0].shapes[5].id, label: "Sí", route: "hvh" },
  { id: uid("c"), from: project.pages[0].shapes[5].id, to: project.pages[0].shapes[6].id, label: "", route: "auto" }
];
activePageId = project.pages[0].id;

const $ = (id) => document.getElementById(id);
function uid(prefix){ return `${prefix}_${Math.random().toString(36).slice(2,9)}`; }
function escapeXml(s){ return String(s ?? "").replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c])); }
function currentPage(){ return project.pages.find(p => p.id === activePageId) || project.pages[0]; }
function pageIndex(pageId){ return project.pages.findIndex(p => p.id === pageId); }
function normalizeVersion(v){ return String(v || "").toLowerCase().includes("vers") ? v : `Versión ${v || "1"}`; }

async function init(){
  try {
    imageData.flow = await urlToDataUrl(TEMPLATE.flow);
    imageData.info = await urlToDataUrl(TEMPLATE.info);
  } catch(e) {
    console.warn("No se pudieron precargar las imágenes como data URI. Se usarán rutas relativas.", e);
  }
  bindEvents();
  syncMetaForm();
  renderAll();
  toast("Editor listo. Diseño bloqueado y figuras editables.");
}
async function urlToDataUrl(url){
  const res = await fetch(url);
  const blob = await res.blob();
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
}

function bindEvents(){
  $("btnApplyDoc").onclick = () => { readMetaForm(); renderAll(); };
  $("btnLoadExample").onclick = () => { project = defaultProject(); activePageId = project.pages[0].id; selected = null; syncMetaForm(); renderAll(); };
  $("btnSaveLocal").onclick = () => { localStorage.setItem("ei_v14_project", JSON.stringify(project)); toast("Proyecto guardado localmente."); };
  $("btnLoadLocal").onclick = () => {
    const raw = localStorage.getItem("ei_v14_project");
    if(!raw) return toast("No hay proyecto guardado.");
    project = JSON.parse(raw);
    activePageId = project.pages[0]?.id;
    selected = null; syncMetaForm(); renderAll(); toast("Proyecto cargado.");
  };
  $("btnExportJson").onclick = () => downloadText("procedimiento_ei.json", JSON.stringify(project,null,2), "application/json");
  $("jsonImport").onchange = handleJsonImport;
  $("btnExportPdf").onclick = exportPdf;
  $("btnAddFlowPage").onclick = addFlowPage;
  $("btnAddInfoPage").onclick = addInfoPage;
  $("btnDuplicatePage").onclick = duplicatePage;
  $("btnDeletePage").onclick = deletePage;
  $("btnAddLane").onclick = addLane;
  $("btnReflowLanes").onclick = reflowToLanes;
  $("btnApplyNarrative").onclick = () => { readNarrativeForm(); renderAll(); };
  $("btnGenerateFromNarration").onclick = generateFromNarration;
  $("btnExportCurrentPng").onclick = exportCurrentPng;
  $("btnExportCurrentSvg").onclick = exportCurrentSvg;
  $("btnExportProject").onclick = () => downloadText("proyecto_procedimiento_ei.json", JSON.stringify(project,null,2), "application/json");

  document.querySelectorAll(".tool[data-tool]").forEach(btn => btn.onclick = () => {
    activeTool = btn.dataset.tool;
    connectStartId = null;
    document.querySelectorAll(".tool[data-tool]").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderAll(false);
  });
  document.querySelectorAll(".tool[data-add]").forEach(btn => btn.onclick = () => addShape(btn.dataset.add));
  $("btnZoomIn").onclick = () => setZoom(zoom + .1);
  $("btnZoomOut").onclick = () => setZoom(Math.max(.45, zoom - .1));
  $("btnFit").onclick = fitZoom;

  // Shape properties
  ["propShapeType","propText","propLane","propW","propH"].forEach(id => $(id).oninput = updateSelectedShapeFromProps);
  $("btnDeleteShape").onclick = deleteSelectedShape;
  $("btnDuplicateShape").onclick = duplicateSelectedShape;

  // Connector properties
  ["propConnFrom","propConnTo","propConnLabel","propConnRoute"].forEach(id => $(id).oninput = updateSelectedConnectorFromProps);
  $("btnDeleteConnector").onclick = deleteSelectedConnector;

  window.addEventListener("mousemove", onMouseMove);
  window.addEventListener("mouseup", onMouseUp);
  window.addEventListener("keydown", (e) => {
    if(e.key === "Delete" || e.key === "Backspace"){
      if(document.activeElement && ["INPUT","TEXTAREA","SELECT"].includes(document.activeElement.tagName)) return;
      if(selected?.type === "shape") deleteSelectedShape();
      if(selected?.type === "connector") deleteSelectedConnector();
    }
  });
}
function syncMetaForm(){
  $("docTitle").value = project.meta.title || "";
  $("docCode").value = project.meta.code || "";
  $("docVersion").value = project.meta.version || "";
  $("docDate").value = project.meta.date || "";
}
function readMetaForm(){
  project.meta.title = $("docTitle").value.trim();
  project.meta.code = $("docCode").value.trim();
  project.meta.version = normalizeVersion($("docVersion").value.trim());
  project.meta.date = $("docDate").value.trim();
}
function setZoom(z){
  zoom = Math.round(z*100)/100;
  $("pageSurface").style.transform = `scale(${zoom})`;
  $("zoomLabel").textContent = `${Math.round(zoom*100)}%`;
}
function fitZoom(){
  const stage = $("pageStage");
  const w = stage.clientWidth - 80;
  const h = stage.clientHeight - 80;
  setZoom(Math.max(.45, Math.min(w/PAGE_W, h/PAGE_H, 1.15)));
}

function renderAll(attach = true){
  readMetaForm();
  renderPageList();
  renderContextPanels();
  renderCanvas(attach);
  renderProps();
}
function renderPageList(){
  const list = $("pageList");
  list.innerHTML = "";
  project.pages.forEach((p, i) => {
    const div = document.createElement("div");
    div.className = "page-pill" + (p.id === activePageId ? " active" : "");
    div.innerHTML = `<span>${i+1}. ${p.type === "flow" ? "Flujograma" : "Narrativa"}</span><small>${p.title || ""}</small>`;
    div.onclick = () => { activePageId = p.id; selected = null; renderAll(); };
    list.appendChild(div);
  });
}
function renderContextPanels(){
  const page = currentPage();
  $("lanesPanel").classList.toggle("hidden", page.type !== "flow");
  $("narrativePanel").classList.toggle("hidden", page.type !== "info");
  if(page.type === "flow") renderLanesEditor(page);
  if(page.type === "info") syncNarrativeForm(page);
}
function renderLanesEditor(page){
  const wrap = $("lanesEditor");
  wrap.innerHTML = "";
  page.lanes.forEach((lane, idx) => {
    const row = document.createElement("div");
    row.className = "lane-row";
    row.innerHTML = `
      <div class="lane-head"><span>Carril ${idx+1}</span><button class="mini-btn" data-del="${idx}">×</button></div>
      <label>Proceso<input data-lane-proc="${idx}" value="${escapeAttr(lane.process)}"></label>
      <label>Responsable / cargo<input data-lane-role="${idx}" value="${escapeAttr(lane.role)}"></label>
    `;
    wrap.appendChild(row);
  });
  wrap.querySelectorAll("[data-lane-proc]").forEach(inp => inp.oninput = (e) => {
    page.lanes[+e.target.dataset.laneProc].process = e.target.value; renderCanvas(); renderProps();
  });
  wrap.querySelectorAll("[data-lane-role]").forEach(inp => inp.oninput = (e) => {
    page.lanes[+e.target.dataset.laneRole].role = e.target.value; renderCanvas(); renderProps();
  });
  wrap.querySelectorAll("[data-del]").forEach(btn => btn.onclick = (e) => {
    const idx = +e.target.dataset.del;
    if(page.lanes.length <= 1) return toast("Debe existir al menos un carril.");
    page.lanes.splice(idx,1);
    page.shapes.forEach(s => { if(s.laneIndex >= page.lanes.length) s.laneIndex = page.lanes.length-1; });
    renderAll();
  });
}
function escapeAttr(s){ return String(s ?? "").replace(/"/g,"&quot;"); }

function syncNarrativeForm(page){
  const n = page.narrative || {};
  $("narrRecognition").value = n.recognition || "";
  $("narrObjective").value = n.objective || "";
  $("narrScope").value = n.scope || "";
  $("narrIndicators").value = n.indicators || "Ver tabla de indicadores.";
  $("narrInfo").value = n.info || "";
  $("narrNormativity").value = n.normativity || "Ver normograma.";
  $("narrDocs").value = (n.documents || []).join("\n");
}
function readNarrativeForm(){
  const page = currentPage();
  if(page.type !== "info") return;
  page.narrative = {
    recognition: $("narrRecognition").value.trim(),
    objective: $("narrObjective").value.trim(),
    scope: $("narrScope").value.trim(),
    indicators: $("narrIndicators").value.trim(),
    info: $("narrInfo").value.trim(),
    normativity: $("narrNormativity").value.trim(),
    documents: $("narrDocs").value.split(/\n+/).map(s => s.trim()).filter(Boolean)
  };
}

function renderCanvas(attach = true){
  const page = currentPage();
  const svg = buildPageSvg(page, pageIndex(page.id), project.pages.length);
  $("pageSurface").innerHTML = svg;
  if(attach) attachSvgEvents();
  setZoom(zoom);
}

function baseDefs(){
  return `
    <defs>
      <linearGradient id="gBlue" x1="0" x2="1"><stop offset="0" stop-color="#00378A"/><stop offset="1" stop-color="#002C70"/></linearGradient>
      <linearGradient id="gShape" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#f1f1f1"/></linearGradient>
      <linearGradient id="gLane" x1="0" x2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#eeeeee"/></linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="1.3" flood-opacity=".25"/>
      </filter>
      <marker id="arrowHead" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#111"/>
      </marker>
    </defs>`;
}

function buildPageSvg(page, idx, total){
  let content = renderVectorTemplate(page, idx, total);
  if(page.type === "flow") content += renderFlowPage(page);
  if(page.type === "info") content += renderInfoPage(page);
  return `<svg class="editor-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${PAGE_W} ${PAGE_H}" width="${PAGE_W}" height="${PAGE_H}">
    ${baseDefs()}
    ${content}
  </svg>`;
}

function renderVectorTemplate(page, idx, total){
  const title = project.meta.title || "TITULO DEL PROCEDIMIENTO";
  const code = project.meta.code || "X-X-X";
  const version = normalizeVersion(project.meta.version || "Versión 1");
  const date = project.meta.date || "DD/MM/AAAA";
  const pageTxt = `Pág. ${idx+1} de ${total}`;
  const headerX = 28, headerY = 28, headerW = 737, headerH = 72;
  const rowY = 100, rowH = 12;
  let s = "";

  // Fondo y caja exterior creados en SVG, no como imagen superpuesta.
  s += `<rect x="0" y="0" width="${PAGE_W}" height="${PAGE_H}" fill="#fff"/>`;
  s += `<rect x="${headerX}" y="${headerY}" width="${headerW}" height="${page.type === "flow" ? 526 : 515}" fill="#fff" stroke="#111" stroke-width="1"/>`;

  // Encabezado institucional.
  s += `<rect x="${headerX}" y="${headerY}" width="${headerW}" height="${headerH}" fill="#fff" stroke="#111" stroke-width="1"/>`;
  s += `<rect x="205" y="${headerY+1}" width="560" height="${headerH-1}" fill="url(#gBlue)"/>`;
  // Zona curva blanca del logo, calibrada para simular la plantilla aprobada.
  s += `<path d="M ${headerX+1} ${headerY+1} H 205 C 250 ${headerY+1}, 250 ${headerY+headerH-1}, 205 ${headerY+headerH-1} H ${headerX+1} Z" fill="#fff"/>`;
  s += `<image href="${EI_LOGO_DATA}" x="40" y="42" width="165" height="50" preserveAspectRatio="xMidYMid meet"/>`;

  s += `<text x="445" y="64" text-anchor="middle" fill="${COLORS.yellow}" font-size="11.2" font-weight="800">${textSpans(title, 445, 64, 46, 12, COLORS.yellow, true)}</text>`;
  s += `<text x="707" y="59" text-anchor="middle" fill="${COLORS.yellow}" font-size="13" font-weight="800">${escapeXml(code)}</text>`;
  s += `<text x="707" y="78" text-anchor="middle" fill="#fff" font-size="13" font-weight="800">${escapeXml(version)}</text>`;

  if(page.type === "flow"){
    // Fila fija Responsable / Flujograma.
    s += `<rect x="${headerX}" y="${rowY}" width="${headerW}" height="${rowH}" fill="#fff" stroke="#111" stroke-width="1"/>`;
    s += `<line x1="${FLOW.x + FLOW.processW + FLOW.roleW}" y1="${rowY}" x2="${FLOW.x + FLOW.processW + FLOW.roleW}" y2="${rowY+rowH}" stroke="#111" stroke-width="1"/>`;
    s += `<text x="${FLOW.x + (FLOW.processW+FLOW.roleW)/2}" y="${rowY+8.7}" text-anchor="middle" fill="${COLORS.blue}" font-size="9.5" font-weight="800">RESPONSABLE</text>`;
    s += `<text x="${FLOW.canvasX + FLOW.canvasW/2}" y="${rowY+8.7}" text-anchor="middle" fill="${COLORS.blue}" font-size="9.5" font-weight="800">FLUJOGRAMA</text>`;
  } else {
    // Fila fija de normas/políticas.
    s += `<rect x="${headerX}" y="${rowY}" width="${headerW}" height="${rowH}" fill="#fff" stroke="#111" stroke-width="1"/>`;
    s += `<text x="396" y="${rowY+8.7}" text-anchor="middle" fill="${COLORS.blue}" font-size="9.5" font-weight="800">Normas y Políticas de la Identificación del Procedimiento</text>`;
  }

  // Pie de página vectorial.
  s += `<text x="31" y="590" fill="${COLORS.gray}" font-size="13" font-weight="800">${escapeXml(date)}</text>`;
  s += `<text x="765" y="590" text-anchor="end" fill="${COLORS.gray}" font-size="13" font-weight="800">${escapeXml(pageTxt)}</text>`;
  return s;
}

function renderHeaderOverlay(page, idx, total){
  // Se cubren las zonas dinámicas del encabezado sin tocar logo ni bordes de la plantilla.
  const title = project.meta.title || "TITULO DEL PROCEDIMIENTO";
  const code = project.meta.code || "X-X-X";
  const version = normalizeVersion(project.meta.version || "Versión 1");
  // Coordenadas calibradas contra plantilla PDF.
  let s = "";
  s += `<rect x="238" y="42" width="410" height="48" fill="${COLORS.blue}" opacity=".98"/>`;
  s += `<text x="443" y="66" text-anchor="middle" fill="${COLORS.yellow}" font-size="11.2" font-weight="700">${textSpans(title, 443, 66, 45, 12, COLORS.yellow, true)}</text>`;
  s += `<rect x="668" y="42" width="72" height="48" fill="${COLORS.blue}" opacity=".98"/>`;
  s += `<text x="704" y="60" text-anchor="middle" fill="${COLORS.yellow}" font-size="13" font-weight="800">${escapeXml(code)}</text>`;
  s += `<text x="704" y="78" text-anchor="middle" fill="#fff" font-size="13" font-weight="800">${escapeXml(version)}</text>`;
  return s;
}

function renderFooterOverlay(idx, total){
  const date = project.meta.date || "DD/MM/AAAA";
  const pageTxt = `Pág. ${idx+1} de ${total}`;
  let s = "";
  // Cubrir fecha/paginación anterior para que no duplique datos
  s += `<rect x="28" y="575" width="130" height="24" fill="#fff" opacity=".97"/>`;
  s += `<rect x="675" y="575" width="95" height="24" fill="#fff" opacity=".97"/>`;
  s += `<text x="31" y="590" fill="${COLORS.gray}" font-size="13" font-weight="700">${escapeXml(date)}</text>`;
  s += `<text x="765" y="590" text-anchor="end" fill="${COLORS.gray}" font-size="13" font-weight="700">${escapeXml(pageTxt)}</text>`;
  return s;
}

function renderFlowPage(page){
  let s = "";
  const lanes = page.lanes?.length ? page.lanes : [{process:"", role:""}];
  const n = lanes.length;
  const laneH = FLOW.h / n;

  // Se cubre el cuerpo del flujograma para crear carriles dinámicos sin dañar encabezado/pie.
  s += `<rect x="${FLOW.x}" y="${FLOW.y}" width="${FLOW.w}" height="${FLOW.h}" fill="#fff"/>`;
  s += `<rect x="${FLOW.x}" y="${FLOW.y}" width="${FLOW.processW}" height="${FLOW.h}" fill="url(#gLane)" stroke="${COLORS.border}" stroke-width="1"/>`;
  s += `<rect x="${FLOW.x + FLOW.processW}" y="${FLOW.y}" width="${FLOW.roleW}" height="${FLOW.h}" fill="#fff" stroke="${COLORS.border}" stroke-width="1"/>`;
  s += `<rect x="${FLOW.canvasX}" y="${FLOW.y}" width="${FLOW.canvasW}" height="${FLOW.h}" fill="#fff" stroke="${COLORS.border}" stroke-width="1"/>`;

  lanes.forEach((lane, i) => {
    const y = FLOW.y + i * laneH;
    if(i > 0) s += `<line x1="${FLOW.x}" y1="${y}" x2="${FLOW.right}" y2="${y}" stroke="${COLORS.border}" stroke-width="1"/>`;
    const cy = y + laneH/2;
    s += rotatedText(lane.process || "PROCESO", FLOW.x + FLOW.processW/2, cy, 10.5, "#111", 700);
    s += rotatedText(lane.role || "Responsable", FLOW.x + FLOW.processW + FLOW.roleW/2, cy, 10.2, "#111", 700);
  });

  // Conectores antes de figuras.
  (page.connectors || []).forEach(c => s += renderConnector(page, c));

  // Figuras.
  (page.shapes || []).forEach(shape => s += renderShape(shape));

  // selección.
  if(selected?.type === "shape"){
    const sh = page.shapes.find(x => x.id === selected.id);
    if(sh) s += renderSelection(sh);
  }
  return s;
}

function rotatedText(text, cx, cy, size, fill, weight){
  return `<text x="${cx}" y="${cy}" text-anchor="middle" dominant-baseline="middle" transform="rotate(-90 ${cx} ${cy})" font-size="${size}" fill="${fill}" font-weight="${weight}">${escapeXml(text)}</text>`;
}

function renderInfoPage(page){
  const n = page.narrative || {};
  // Cubrir contenido del formato base y reescribirlo con datos de usuario.
  let s = "";
  s += `<rect x="38" y="112" width="718" height="430" fill="#fff" opacity=".98"/>`;
  s += `<line x1="38" y1="112" x2="756" y2="112" stroke="${COLORS.border}" stroke-width="1"/>`;
  s += `<line x1="38" y1="542" x2="756" y2="542" stroke="${COLORS.border}" stroke-width="1"/>`;
  s += `<line x1="38" y1="112" x2="38" y2="542" stroke="${COLORS.border}" stroke-width="1"/>`;
  s += `<line x1="756" y1="112" x2="756" y2="542" stroke="${COLORS.border}" stroke-width="1"/>`;
  s += `<text x="397" y="124" text-anchor="middle" fill="${COLORS.blue}" font-size="11" font-weight="800">Normas y Políticas de la Identificación del Procedimiento</text>`;

  const leftX = 44, rightX = 405;
  let y = 145;
  const lh = 13.5;
  s += labelBlock("Reconocimientos:", n.recognition || "", leftX, y, 330); y += 31;
  s += labelBlock("Objetivo:", n.objective || "", leftX, y, 330); y += 58;
  s += labelBlock("Alcance:", n.scope || "", leftX, y, 330); y += 58;
  s += labelBlock("Indicadores:", n.indicators || "Ver tabla de indicadores.", leftX, y, 330); y += 38;
  s += labelBlock("Información Sobre la Aplicación del Flujograma:", n.info || "Las actividades del flujograma muestran de una manera ordenada y sistemática los pasos a seguir en el momento de ejecutar el procedimiento.", leftX, y, 330);

  let yr = 145;
  s += labelBlock("Normatividad:", n.normativity || "Ver normograma.", rightX, yr, 330); yr += 44;
  s += `<text x="${rightX}" y="${yr}" fill="${COLORS.blue}" font-size="11.5" font-weight="800">Documentos relacionados:</text>`;
  yr += 28;
  (n.documents || ["X-X-X"]).forEach((d, i) => {
    s += `<text x="${rightX+18}" y="${yr + i*18}" fill="${COLORS.blue}" font-size="12" font-weight="800">•</text>`;
    s += `<text x="${rightX+42}" y="${yr + i*18}" fill="${COLORS.blue}" font-size="11.5" font-weight="800">${escapeXml(d)}</text>`;
  });
  return s;
}

function labelBlock(label, body, x, y, width){
  let s = `<text x="${x}" y="${y}" fill="${COLORS.blue}" font-size="11.5" font-weight="800">${escapeXml(label)}</text>`;
  const start = label.length < 14 ? x + label.length*6.4 + 4 : x;
  const bodyY = label.length < 14 ? y : y + 14;
  const lines = wrapText(body, Math.floor(width/6.2), 5);
  lines.forEach((line, idx) => {
    s += `<text x="${idx === 0 && label.length < 14 ? start : x}" y="${bodyY + idx*13.5}" fill="#111" font-size="11.2" font-weight="400">${escapeXml(line)}</text>`;
  });
  return s;
}

function renderConnector(page, c){
  const from = page.shapes.find(s => s.id === c.from);
  const to = page.shapes.find(s => s.id === c.to);
  if(!from || !to) return "";
  const path = connectorPath(from, to, c.route || "auto");
  const mid = path.mid;
  const selectedClass = selected?.type === "connector" && selected.id === c.id ? " selected" : "";
  return `
    <path class="connector-hit" data-connector-id="${c.id}" d="${path.d}"></path>
    <path class="connector-line${selectedClass}" data-connector-id="${c.id}" d="${path.d}"></path>
    ${c.label ? `<text x="${mid.x}" y="${mid.y-5}" text-anchor="middle" fill="${COLORS.blue}" font-size="9" font-weight="800">${escapeXml(c.label)}</text>` : ""}
  `;
}

function bbox(s){ return {x:s.x-s.w/2,y:s.y-s.h/2,w:s.w,h:s.h,cx:s.x,cy:s.y}; }
function getAnchorPair(a,b){
  if(Math.abs(a.x-b.x) > Math.abs(a.y-b.y)){
    if(b.x >= a.x) return {sx:a.x+a.w/2, sy:a.y, tx:b.x-b.w/2, ty:b.y};
    return {sx:a.x-a.w/2, sy:a.y, tx:b.x+b.w/2, ty:b.y};
  }
  if(b.y >= a.y) return {sx:a.x, sy:a.y+a.h/2, tx:b.x, ty:b.y-b.h/2};
  return {sx:a.x, sy:a.y-a.h/2, tx:b.x, ty:b.y+b.h/2};
}
function connectorPath(a,b,route){
  const p = getAnchorPair(a,b);
  let pts = [];
  if(route === "direct"){
    if(Math.abs(p.sy-p.ty)<6 || Math.abs(p.sx-p.tx)<6) pts = [[p.sx,p.sy],[p.tx,p.ty]];
    else pts = [[p.sx,p.sy],[p.tx,p.sy],[p.tx,p.ty]];
  } else if(route === "vhv"){
    const my = (p.sy+p.ty)/2;
    pts = [[p.sx,p.sy],[p.sx,my],[p.tx,my],[p.tx,p.ty]];
  } else {
    // auto/hvh: conector ortogonal H-V-H, nunca diagonal.
    const mx = (p.sx+p.tx)/2;
    pts = [[p.sx,p.sy],[mx,p.sy],[mx,p.ty],[p.tx,p.ty]];
  }
  const d = "M " + pts.map(pt => `${round(pt[0])} ${round(pt[1])}`).join(" L ");
  const mid = pts[Math.floor(pts.length/2)] || pts[0];
  return {d, mid:{x:mid[0], y:mid[1]}};
}
function round(n){ return Math.round(n*10)/10; }

function renderShape(s){
  const x = s.x - s.w/2, y = s.y - s.h/2, w=s.w, h=s.h;
  const data = `data-shape-id="${s.id}"`;
  if(s.type === "terminal"){
    return `<g class="selectable" ${data}>${shadow()}
      <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${h/2}" fill="url(#gBlue)" stroke="#001d4f" stroke-width="1"/>
      <text x="${s.x}" y="${s.y+3.5}" text-anchor="middle" fill="#fff" font-size="9.5" font-weight="800">${escapeXml(s.text || "INICIO")}</text>
    </g>`;
  }
  if(s.type === "activity"){
    return `<g class="selectable" ${data}>${shadow()}
      <rect x="${x}" y="${y}" width="${w}" height="${h}" fill="url(#gShape)" stroke="#111" stroke-width="1"/>
      ${activityText(s)}
    </g>`;
  }
  if(s.type === "decision"){
    const points = `${s.x},${y} ${x+w},${s.y} ${s.x},${y+h} ${x},${s.y}`;
    return `<g class="selectable" ${data}>${shadow()}
      <polygon points="${points}" fill="url(#gShape)" stroke="#111" stroke-width="1"/>
      ${plainText(s.text || "¿DECISIÓN?", s.x, s.y-6, Math.max(9, Math.floor(w/8)), 9.2, "#111", 700, "middle")}
    </g>`;
  }
  if(s.type === "document"){
    const wave = `M ${x} ${y} H ${x+w} V ${y+h-12} C ${x+w-25} ${y+h-5}, ${x+25} ${y+h-18}, ${x} ${y+h-10} Z`;
    return `<g class="selectable" ${data}>${shadow()}
      <path d="${wave}" fill="url(#gShape)" stroke="#111" stroke-width="1"/>
      ${activityText(s, s.y-3)}
    </g>`;
  }
  if(s.type === "delay"){
    const r = Math.min(h/2, 22);
    const d = `M ${x} ${y} H ${x+w-r} Q ${x+w} ${y} ${x+w} ${y+h/2} Q ${x+w} ${y+h} ${x+w-r} ${y+h} H ${x} Z`;
    return `<g class="selectable" ${data}>${shadow()}
      <path d="${d}" fill="url(#gShape)" stroke="#111" stroke-width="1"/>
      ${plainText(s.text || "Retraso", s.x, s.y-4, Math.floor(w/7), 9.2, "#111", 700, "middle")}
    </g>`;
  }
  if(s.type === "pageConnector"){
    const points = `${x},${y} ${x+w},${y} ${x+w},${y+h*0.62} ${s.x},${y+h} ${x},${y+h*0.62}`;
    return `<g class="selectable" ${data}>${shadow()}
      <polygon points="${points}" fill="url(#gBlue)" stroke="#001d4f" stroke-width="1"/>
      <text x="${s.x}" y="${s.y+4}" text-anchor="middle" fill="#fff" font-size="13" font-weight="800">${escapeXml(s.text || "A")}</text>
    </g>`;
  }
  // sameConnector
  return `<g class="selectable" ${data}>${shadow()}
    <circle cx="${s.x}" cy="${s.y}" r="${Math.min(w,h)/2}" fill="url(#gBlue)" stroke="#001d4f" stroke-width="1"/>
    <text x="${s.x}" y="${s.y+4}" text-anchor="middle" fill="#fff" font-size="11" font-weight="800">${escapeXml(s.text || "1")}</text>
  </g>`;
}
function shadow(){ return ""; } // El filtro se omite en SVG final para conservar nitidez en PDF.
function renderSelection(s){
  const b = bbox(s);
  return `<rect class="selected-outline" x="${b.x-4}" y="${b.y-4}" width="${b.w+8}" height="${b.h+8}" rx="3"/>`;
}

function activityText(s, cyOverride){
  const raw = (s.text || "ACTIVIDAD").trim();
  const parts = raw.split(/\s+/);
  const verb = (parts.shift() || "").toUpperCase();
  const rest = parts.join(" ");
  const cy = cyOverride ?? s.y;
  let out = "";
  out += `<text x="${s.x}" y="${cy-6}" text-anchor="middle" fill="${COLORS.blue}" font-size="8.7" font-weight="800">${escapeXml(verb)}</text>`;
  const lines = wrapText(rest, Math.max(8, Math.floor(s.w/7.2)), 3);
  lines.forEach((line,i) => {
    out += `<text x="${s.x}" y="${cy+6+i*10}" text-anchor="middle" fill="#111" font-size="8.5" font-weight="500">${escapeXml(line)}</text>`;
  });
  return out;
}
function plainText(text, x, y, chars, size, fill, weight, anchor){
  return wrapText(text, chars, 4).map((line,i) =>
    `<text x="${x}" y="${y+i*(size+2)}" text-anchor="${anchor}" fill="${fill}" font-size="${size}" font-weight="${weight}">${escapeXml(line)}</text>`
  ).join("");
}
function textSpans(text, x, y, chars, lineH, fill, upper){
  const lines = wrapText(upper ? String(text).toUpperCase() : text, chars, 3);
  if(lines.length <= 1) return escapeXml(lines[0] || "");
  return lines.map((line,i)=>`<tspan x="${x}" dy="${i===0 ? -((lines.length-1)*lineH/2) : lineH}">${escapeXml(line)}</tspan>`).join("");
}
function wrapText(text, maxChars, maxLines=99){
  text = String(text || "").replace(/\s+/g," ").trim();
  if(!text) return [""];
  const words = text.split(" ");
  const lines = [];
  let cur = "";
  for(const w of words){
    if((cur+" "+w).trim().length <= maxChars) cur = (cur+" "+w).trim();
    else { if(cur) lines.push(cur); cur = w; }
  }
  if(cur) lines.push(cur);
  if(lines.length > maxLines){
    const keep = lines.slice(0,maxLines);
    keep[maxLines-1] = keep[maxLines-1].replace(/\.*$/,"") + "…";
    return keep;
  }
  return lines;
}

function attachSvgEvents(){
  const svg = document.querySelector(".editor-svg");
  if(!svg) return;
  svg.querySelectorAll("[data-shape-id]").forEach(el => {
    el.addEventListener("mousedown", e => onShapeMouseDown(e, el.dataset.shapeId));
    el.addEventListener("click", e => onShapeClick(e, el.dataset.shapeId));
  });
  svg.querySelectorAll("[data-connector-id]").forEach(el => {
    el.addEventListener("click", e => {
      e.stopPropagation();
      selected = {type:"connector", id: el.dataset.connectorId};
      renderAll();
    });
  });
  svg.addEventListener("click", e => {
    if(e.target === svg){ selected = null; connectStartId = null; renderAll(); }
  });
}
function svgPoint(evt){
  const svg = document.querySelector(".editor-svg");
  const pt = svg.createSVGPoint();
  pt.x = evt.clientX; pt.y = evt.clientY;
  const res = pt.matrixTransform(svg.getScreenCTM().inverse());
  return {x:res.x, y:res.y};
}
function onShapeMouseDown(e, id){
  if(activeTool !== "select") return;
  e.stopPropagation();
  const page = currentPage();
  const s = page.shapes.find(x => x.id === id);
  if(!s) return;
  selected = {type:"shape", id};
  const p = svgPoint(e);
  drag = {id, startX:p.x, startY:p.y, ox:s.x, oy:s.y};
  renderAll();
}
function onShapeClick(e, id){
  e.stopPropagation();
  if(activeTool === "connect"){
    const page = currentPage();
    if(!connectStartId){ connectStartId = id; selected = {type:"shape", id}; toast("Selecciona la figura destino."); renderAll(); return; }
    if(connectStartId === id){ connectStartId = null; return toast("Origen y destino no pueden ser iguales."); }
    page.connectors.push({id:uid("c"), from:connectStartId, to:id, label:"", route:"auto"});
    connectStartId = null; selected = null; activeTool = "select";
    document.querySelectorAll(".tool[data-tool]").forEach(b => b.classList.remove("active"));
    document.querySelector('.tool[data-tool="select"]').classList.add("active");
    renderAll();
  } else {
    selected = {type:"shape", id}; renderAll();
  }
}
function onMouseMove(e){
  if(!drag) return;
  const page = currentPage();
  const s = page.shapes.find(x => x.id === drag.id);
  if(!s) return;
  const p = svgPoint(e);
  s.x = clamp(drag.ox + (p.x-drag.startX), FLOW.canvasX + s.w/2 + 8, FLOW.right - s.w/2 - 8);
  s.y = clamp(drag.oy + (p.y-drag.startY), FLOW.y + s.h/2 + 8, FLOW.bottom - s.h/2 - 8);
  s.laneIndex = laneIndexFromY(page, s.y);
  renderCanvas();
}
function onMouseUp(){ drag = null; }
function clamp(v,min,max){ return Math.max(min, Math.min(max, v)); }
function laneIndexFromY(page, y){
  const n = page.lanes?.length || 1;
  return clamp(Math.floor((y - FLOW.y) / (FLOW.h / n)), 0, n-1);
}

function renderProps(){
  const page = currentPage();
  $("emptyProps").classList.remove("hidden");
  $("shapeProps").classList.add("hidden");
  $("connectorProps").classList.add("hidden");
  if(page.type !== "flow" || !selected) return;

  if(selected.type === "shape"){
    const s = page.shapes.find(x => x.id === selected.id);
    if(!s) return;
    $("emptyProps").classList.add("hidden");
    $("shapeProps").classList.remove("hidden");
    $("propShapeType").value = s.type;
    $("propText").value = s.text || "";
    $("propW").value = Math.round(s.w);
    $("propH").value = Math.round(s.h);
    const laneSelect = $("propLane");
    laneSelect.innerHTML = "";
    page.lanes.forEach((l, i) => {
      laneSelect.innerHTML += `<option value="${i}">${i+1}. ${escapeXml(l.process)} / ${escapeXml(l.role)}</option>`;
    });
    laneSelect.value = s.laneIndex ?? 0;
  }
  if(selected.type === "connector"){
    const c = page.connectors.find(x => x.id === selected.id);
    if(!c) return;
    $("emptyProps").classList.add("hidden");
    $("connectorProps").classList.remove("hidden");
    const opts = page.shapes.map(s => `<option value="${s.id}">${escapeXml(shortShapeName(s))}</option>`).join("");
    $("propConnFrom").innerHTML = opts;
    $("propConnTo").innerHTML = opts;
    $("propConnFrom").value = c.from;
    $("propConnTo").value = c.to;
    $("propConnLabel").value = c.label || "";
    $("propConnRoute").value = c.route || "auto";
  }
}
function shortShapeName(s){ return `${s.type}: ${(s.text||"").slice(0,28)}`; }
function updateSelectedShapeFromProps(){
  const page = currentPage();
  if(selected?.type !== "shape") return;
  const s = page.shapes.find(x => x.id === selected.id);
  if(!s) return;
  s.type = $("propShapeType").value;
  s.text = $("propText").value;
  s.w = +$("propW").value || s.w;
  s.h = +$("propH").value || s.h;
  s.laneIndex = +$("propLane").value || 0;
  const laneH = FLOW.h/(page.lanes.length||1);
  s.y = FLOW.y + laneH*s.laneIndex + laneH/2;
  renderCanvas();
}
function updateSelectedConnectorFromProps(){
  const page = currentPage();
  if(selected?.type !== "connector") return;
  const c = page.connectors.find(x => x.id === selected.id);
  if(!c) return;
  c.from = $("propConnFrom").value;
  c.to = $("propConnTo").value;
  c.label = $("propConnLabel").value;
  c.route = $("propConnRoute").value;
  renderCanvas();
}

function addShape(type){
  const page = currentPage();
  if(page.type !== "flow") return toast("Las figuras solo se agregan en páginas de flujograma.");
  const lane = 0;
  const count = page.shapes.length;
  const laneH = FLOW.h/page.lanes.length;
  const x = FLOW.canvasX + 70 + (count % 5) * 112;
  const y = FLOW.y + laneH*lane + laneH/2;
  const dims = defaultDims(type);
  const shape = {id:uid("s"), type, x:clamp(x,FLOW.canvasX+50,FLOW.right-50), y, w:dims.w, h:dims.h, text:defaultText(type), laneIndex: lane};
  page.shapes.push(shape);
  selected = {type:"shape", id:shape.id};
  renderAll();
}
function defaultDims(type){
  return {
    terminal:{w:55,h:20}, activity:{w:92,h:52}, decision:{w:82,h:62}, document:{w:92,h:58}, delay:{w:78,h:58},
    pageConnector:{w:30,h:36}, sameConnector:{w:26,h:26}
  }[type] || {w:80,h:50};
}
function defaultText(type){
  return {terminal:"INICIO", activity:"REALIZAR actividad", decision:"¿Condición?", document:"REGISTRAR documento", delay:"ESPERAR condición", pageConnector:"A", sameConnector:"1"}[type] || "Texto";
}
function deleteSelectedShape(){
  const page = currentPage();
  if(selected?.type !== "shape") return;
  page.shapes = page.shapes.filter(s => s.id !== selected.id);
  page.connectors = page.connectors.filter(c => c.from !== selected.id && c.to !== selected.id);
  selected = null; renderAll();
}
function duplicateSelectedShape(){
  const page = currentPage();
  if(selected?.type !== "shape") return;
  const s = page.shapes.find(x => x.id === selected.id);
  if(!s) return;
  const cp = {...s, id:uid("s"), x:s.x+25, y:s.y+25};
  page.shapes.push(cp);
  selected = {type:"shape", id:cp.id};
  renderAll();
}
function deleteSelectedConnector(){
  const page = currentPage();
  if(selected?.type !== "connector") return;
  page.connectors = page.connectors.filter(c => c.id !== selected.id);
  selected = null; renderAll();
}

function addLane(){
  const page = currentPage();
  if(page.type !== "flow") return;
  page.lanes.push({id:uid("lane"), process:"PROCESO", role:"Responsable / cargo"});
  renderAll();
}
function reflowToLanes(){
  const page = currentPage();
  if(page.type !== "flow") return;
  const laneH = FLOW.h/page.lanes.length;
  page.shapes.forEach(s => {
    s.laneIndex = clamp(s.laneIndex ?? laneIndexFromY(page,s.y), 0, page.lanes.length-1);
    s.y = FLOW.y + s.laneIndex*laneH + laneH/2;
  });
  renderAll();
  toast("Figuras ajustadas al centro de sus carriles.");
}

function addFlowPage(){
  const p = {
    id:uid("page"), type:"flow", title:"Nuevo flujograma",
    lanes:[{id:uid("lane"),process:"PROCESO",role:"Responsable"}],
    shapes:[], connectors:[]
  };
  project.pages.push(p); activePageId = p.id; selected = null; renderAll();
}
function addInfoPage(){
  const p = {
    id:uid("page"), type:"info", title:"Narrativa",
    narrative:{recognition:"", objective:"", scope:"", indicators:"Ver tabla de indicadores.", info:"", normativity:"Ver normograma.", documents:[]}
  };
  project.pages.push(p); activePageId = p.id; selected = null; renderAll();
}
function duplicatePage(){
  const idx = pageIndex(activePageId);
  const cp = JSON.parse(JSON.stringify(project.pages[idx]));
  cp.id = uid("page");
  cp.title = (cp.title || "") + " copia";
  if(cp.lanes) cp.lanes.forEach(l => l.id = uid("lane"));
  if(cp.shapes){
    const map = {};
    cp.shapes.forEach(s => { const old=s.id; s.id=uid("s"); map[old]=s.id; });
    cp.connectors?.forEach(c => { c.id=uid("c"); c.from=map[c.from]||c.from; c.to=map[c.to]||c.to; });
  }
  project.pages.splice(idx+1,0,cp);
  activePageId = cp.id; selected = null; renderAll();
}
function deletePage(){
  if(project.pages.length <= 1) return toast("Debe existir al menos una página.");
  const idx = pageIndex(activePageId);
  project.pages.splice(idx,1);
  activePageId = project.pages[Math.max(0,idx-1)].id;
  selected = null; renderAll();
}

function generateFromNarration(){
  const text = $("narrationInput").value.trim();
  if(!text) return toast("Escribe la narración del proceso.");
  const page = currentPage();
  if(page.type !== "flow") return toast("Selecciona una página de flujograma.");
  const lines = text.split(/\n+/).map(x=>x.trim()).filter(Boolean);
  const lanes = [];
  const laneMap = new Map();
  const shapes = [];
  const connectors = [];
  let lastId = null;
  let lastDecisionId = null;
  const addLaneIf = (proc, role) => {
    const key = `${proc}|${role}`;
    if(!laneMap.has(key)){
      laneMap.set(key, lanes.length);
      lanes.push({id:uid("lane"), process:proc || "PROCESO", role:role || "Responsable"});
    }
    return laneMap.get(key);
  };

  // inicio default
  let firstLane = addLaneIf("PROCESO","Solicitante");
  const start = {id:uid("s"), type:"terminal", x:FLOW.canvasX+50, y:0, w:55,h:20,text:"INICIO",laneIndex:firstLane};
  shapes.push(start); lastId=start.id;

  let col = 1;
  for(const line of lines){
    let type = "activity", label = "", proc = "PROCESO", role = "Responsable", body = line;
    if(/^fin\.?$/i.test(line)){
      type = "terminal"; body = "FIN";
    } else if(/^decisi[oó]n\s+/i.test(line)){
      type = "decision"; body = line.replace(/^decisi[oó]n\s+/i,"");
    } else if(/^documento\s+/i.test(line)){
      type = "document"; body = line.replace(/^documento\s+/i,"");
    } else if(/^retraso\s+/i.test(line)){
      type = "delay"; body = line.replace(/^retraso\s+/i,"");
    } else if(/^(sí|si|no)\s*:/i.test(line)){
      label = line.match(/^(sí|si|no)/i)[1].toUpperCase().replace("SI","Sí");
      body = line.replace(/^(sí|si|no)\s*:\s*/i,"");
    }

    const parts = body.split(":");
    if(parts.length > 1){
      const head = parts.shift().trim();
      body = parts.join(":").trim();
      const pr = head.split("|").map(x=>x.trim());
      if(pr.length === 2){ proc = pr[0]; role = pr[1]; }
      else { proc = pr[0] || "PROCESO"; role = pr[0] || "Responsable"; }
    }

    const laneIndex = addLaneIf(proc, role);
    const dims = defaultDims(type);
    const sh = {id:uid("s"), type, x:FLOW.canvasX+55+col*105, y:0, w:dims.w,h:dims.h,text:cleanShapeText(body,type), laneIndex};
    shapes.push(sh);
    if(lastId){
      const from = label && lastDecisionId ? lastDecisionId : lastId;
      connectors.push({id:uid("c"),from,to:sh.id,label,route:"auto"});
    }
    if(type === "decision") lastDecisionId = sh.id;
    else if(!label) lastDecisionId = null;
    lastId = sh.id;
    col++;
  }

  page.lanes = lanes.length ? lanes : page.lanes;
  const laneH = FLOW.h / page.lanes.length;
  shapes.forEach((s,i) => {
    s.laneIndex = clamp(s.laneIndex, 0, page.lanes.length-1);
    s.y = FLOW.y + s.laneIndex*laneH + laneH/2;
    s.x = clamp(s.x, FLOW.canvasX+50, FLOW.right-45);
  });
  page.shapes = shapes;
  page.connectors = connectors;
  selected = null;
  renderAll();
  toast("Borrador generado. Puedes mover figuras y corregir flechas.");
}
function cleanShapeText(t,type){
  t = String(t||"").replace(/\.$/,"").trim();
  if(type === "activity" && !/^[A-ZÁÉÍÓÚÑ]+\s/.test(t)) return t;
  return t || defaultText(type);
}

function handleJsonImport(e){
  const f = e.target.files?.[0];
  if(!f) return;
  const reader = new FileReader();
  reader.onload = () => {
    try{
      project = JSON.parse(reader.result);
      activePageId = project.pages[0]?.id;
      selected = null; syncMetaForm(); renderAll(); toast("JSON importado.");
    }catch(err){ alert("No se pudo leer el JSON."); }
  };
  reader.readAsText(f);
}

async function exportCurrentPng(){
  const page = currentPage();
  const svg = buildPageSvg(page, pageIndex(page.id), project.pages.length);
  const png = await svgToPng(svg, EXPORT_SCALE);
  downloadDataUrl(`pagina_${pageIndex(page.id)+1}.png`, png);
}
function exportCurrentSvg(){
  readMetaForm();
  const page = currentPage();
  const svg = buildPageSvg(page, pageIndex(page.id), project.pages.length);
  downloadText(`pagina_${pageIndex(page.id)+1}.svg`, svg, "image/svg+xml;charset=utf-8");
}
async function exportPdf(){
  readMetaForm();
  if(!window.jspdf?.jsPDF){
    alert("No se pudo cargar jsPDF. Verifica conexión a internet o usa Imprimir > Guardar como PDF.");
    return;
  }
  toast("Generando PDF...");
  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF({orientation:"landscape", unit:"pt", format:"letter"});
  for(let i=0;i<project.pages.length;i++){
    if(i>0) pdf.addPage("letter","landscape");
    const svg = buildPageSvg(project.pages[i], i, project.pages.length);
    const png = await svgToPng(svg, EXPORT_SCALE);
    pdf.addImage(png, "PNG", 0, 0, 792, 612);
  }
  const filename = `${(project.meta.code || "procedimiento").replace(/[^\w\-]+/g,"_")}.pdf`;
  pdf.save(filename);
  toast("PDF generado.");
}
function svgToPng(svgString, scale=2){
  return new Promise((resolve,reject)=>{
    const svg64 = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svgString);
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = PAGE_W*scale;
      canvas.height = PAGE_H*scale;
      const ctx = canvas.getContext("2d");
      ctx.fillStyle="#fff"; ctx.fillRect(0,0,canvas.width,canvas.height);
      ctx.drawImage(img,0,0,canvas.width,canvas.height);
      resolve(canvas.toDataURL("image/png"));
    };
    img.onerror = reject;
    img.src = svg64;
  });
}
function downloadText(name, text, type="text/plain"){
  const blob = new Blob([text], {type});
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob); a.download = name; a.click();
  setTimeout(()=>URL.revokeObjectURL(a.href), 1000);
}
function downloadDataUrl(name, dataUrl){
  const a=document.createElement("a"); a.href=dataUrl; a.download=name; a.click();
}
function toast(msg){
  const el = $("toast");
  el.textContent = msg;
  el.classList.remove("hidden");
  clearTimeout(toast._t);
  toast._t = setTimeout(()=>el.classList.add("hidden"), 2500);
}

init();
