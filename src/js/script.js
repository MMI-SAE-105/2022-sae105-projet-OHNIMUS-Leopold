function search() {
    // Récupération du texte à rechercher et de la zone de recherche
    let textToSearch = document.getElementById("text-to-search").value;
    let searchZone = document.getElementsByTagName("dl");
  
    // Échappement des caractères spéciaux du texte à rechercher
    textToSearch = textToSearch.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  
    // Création d'un modèle de recherche régulière
    let pattern = new RegExp(`${textToSearch}`, "gi");
  
    // Parcours de toutes les balises dl et application du surlignage aux éléments dt et dd
    for (var i = 0; i < searchZone.length; i++) {
      let dts = searchZone[i].getElementsByTagName("dt");
      let dds = searchZone[i].getElementsByTagName("dd");
  
      for (var j = 0; j < dts.length; j++) {
        dts[j].innerHTML = dts[j].textContent.replace(pattern, match => `<mark>${match}</mark>`);
      }
  
      for (var j = 0; j < dds.length; j++) {
        dds[j].innerHTML = dds[j].textContent.replace(pattern, match => `<mark>${match}</mark>`);
      }
    }
  }
  