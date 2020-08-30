const css = `.cselect {
    position: relative;
    border: 1px solid gray;
    position: relative;
    cursor: pointer;
  }
  .cselect-text {
    padding: 1.1rem;
  }
  .cselect-icon{
    position: absolute;
    top: 12px;
    right: 12px;
    width: 28px;
    height: 28px;
    transition: transform 0.2s ease-in-out;
  }
  .cselect-icon img {
      width:100%;
      height: 100%;
  }
  .cselect-values {
    max-height: 200px;
    overflow-y: scroll;
    display: none;
    position:absolute;
    width:100%;
    border: 1px solid gray;
    background-color: white;
    z-index: 50;
    margin: 0 -1px;
  }
  .cselect-values div {
    padding: 1.1rem;
  }
  .cselect-values div:hover {
      background-color: rgba(0,0,0,.2);
  }`

const createInput = name => {
    const input = document.createElement("input");
    input.setAttribute("name", name);
    input.setAttribute("hidden", true);
    return input;
}


const apply = tag => {
    tag.cselect = {
        isOpen: false,
    }

    const inputTag = createInput(tag.getAttribute("data-name"));

    const parent = tag.parentNode;
    parent.appendChild(inputTag);

    const textTag = tag.querySelector(".cselect-text");
    const iconTag = tag.querySelector(".cselect-icon");
    const valuesTag = tag.querySelector(".cselect-values");

    const toggle = (action = null) => {
        if(action === 'close') {
            tag.cselect.isOpen = false;
            valuesTag.style.display = "none";
            iconTag.style.transform = "rotate(0)";
            return;
        }
        tag.cselect.isOpen = !tag.cselect.isOpen;
        valuesTag.style.display = !tag.cselect.isOpen ? "none" : "block";
        iconTag.style.transform = !tag.cselect.isOpen
          ? "rotate(0)"
          : "rotate(180deg)";
    }

    tag.addEventListener('click', toggle);

    valuesTag.querySelectorAll("div").forEach(valuesTag => {
        valuesTag.addEventListener('click', function(e) {
                e.stopPropagation();
                toggle();
                textTag.textContent = this.textContent;
                tag.cselect.isOpen = false;
                inputTag.value = this.getAttribute("data-value");
        })
    })
    document.onmouseup = function (e) {
        if (!tag.contains(e.target)) {
          toggle('close');
        }
      };
}

const attachStyle = () => {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styleTag = document.createElement('style');
    head.appendChild(styleTag);
    styleTag.type = 'text/css';
    if (styleTag.styleSheet){
        styleTag.styleSheet.cssText = css;
    } else {
        styleTag.appendChild(document.createTextNode(css));
    }
}

attachStyle();
const cselectTags = document.querySelectorAll(".cselect");
cselectTags.forEach(apply);