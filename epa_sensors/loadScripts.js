function loadScript(src, callback)
{
        let script = document.createElement('script')  // Creates the <script> element.
        document.head.append(script)                   // Places the element in the document's <head> section.
        script.src = src                               // Adds the src, <script src='...'>.
        script.onload = () => callback()               // Adds the onload, <script src='...' onload='...()'>
  }

loadScript('https://js.arcgis.com/4.23/', function() {      // Esri 4.23 API.
  loadScript('variables.js', function() {                   // Variables.
    loadScript('base_scene.js', function() {                  // Loads base scene and requirements.
      loadScript('region_11_counties.js', function() {      // Esri Region 11 counties.
        loadScript('pointsourceFeatures.js', function() {   // Esri map requirements map/mapview, and other scripts.
        })
      })
    })
  })
})
