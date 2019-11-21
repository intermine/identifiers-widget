import {
  define
} from 'hybrids';
import styles from '../dist/style.css';
/* Add any additional library imports you may need here. */


/**
 * === Don't remove this method or styles will break.
 * We directly insert a style element into the document head
 * in order to embed styles.
 **/
function styleTemplate() {
  var myStyle = document.createElement("style");
  myStyle.setAttribute("id", "IdentifiersWidgetStyle");
  myStyle.setAttribute("type", "text/css");
  myStyle.innerHTML = styles.toString();
  return myStyle;
}

/**
 * === Don't remove this method or styles will break.
 * Check if there is already a style element for this component and add if not.
 * Useful in cases where this component might be initialised more than once.
 **/
function addStylesIfNeeded() {
  if (!document.getElementById("IdentifiersWidgetStyle")) {
    document.head.appendChild(styleTemplate());
  }
}

/**
 * initialises an existing library, called inside the web component wrapper.
 **/
function initComponent(options) {
  return {
    get: (host, v) => v, // required to be recognized as property descriptor,
    set: () => {}, //required to stop TypeError: setting getter-only property "x"
    connect: async (host, key) => {

      var identifier = host.getAttribute("identifier");

      //1. get identifiers.org details for the
      const identifiersInfo = await getIdentifiersOrgInfo(identifier);
      console.log(identifiersInfo);

      //2. define some of the output elements we need
      const localId = identifiersInfo.payload.parsedCompactIdentifier.localId;
      const resolvedResources = identifiersInfo.payload.resolvedResources;

      //3. build visual output for each element
      var output = `
        <h1>
          ${localId}
        </h1>
        <ul class="identifier-list">`;

      resolvedResources.map(function(resource){
        var className = "secondary";
        if (resource.official) {
          className = "primary";
        }
        output = output + `
          <li class="${className}">
            <a href="${resource.compactIdentifierResolvedUrl}">
              ${resource.description}
            </a>
          </li>`;
      });
      output = output + `</ul>`;

      host.innerHTML = output;

      //leave this line here. Deleting it will result in your css going AWOL.
      addStylesIfNeeded();
    }
  }
}

async function getIdentifiersOrgInfo(myIdentifier) {
  const response = await fetch('https://resolver.api.identifiers.org/' + myIdentifier);
  return await response.json();
}

/**
 * This is where we get started. Needs to be
 * paired with a `define` method call - see end of the page.
 **/
export const IdentifiersWidget = {
  init: initComponent()
};

// this line connects the html element in index.html with the javascript defined above.
define('identifiers-widget', IdentifiersWidget);
