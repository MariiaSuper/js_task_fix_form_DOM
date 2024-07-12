document.querySelectorAll("input").forEach(function(e){var t=document.createElement("label");t.className="field-label",t.htmlFor=e.id;var l=e.name.replace(/([A-Z])/g," $1").trim();t.textContent=l.charAt(0).toUpperCase()+l.slice(1),e.placeholder=l.charAt(0).toUpperCase()+l.slice(1),e.parentElement.insertBefore(t,e)});
//# sourceMappingURL=index.4fd9028d.js.map
