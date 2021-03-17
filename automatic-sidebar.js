/**
 * Automatic Sidebar
 * Description: Uma forma de automatizar a abertura de menus laterais sem precisar configurar mais javascript.
 * Version: 1.0
 * Author: André Bez Birolo
 * Link do Autor: https://github.com/AndreBezBirolo/
 **/

document.addEventListener("DOMContentLoaded", function () {function automaticSidebar() {
  let sidebarsSection = document.querySelectorAll('[data-sidebar="section"]')
  if (sidebarsSection) {
    function toggleDirection(container, direction, content, width, status) {
      if (status === 'closed') {
        if(direction === 'right') content.style.right = "-"+width+"px";
        else if (direction === 'left') content.style.left = "-"+width+"px";
        container.style.opacity = '0';
        container.style.pointerEvents = 'none';
      } else if (status === 'opened') {
        if(direction === 'right') content.style.right = "0";
        else if (direction === 'left') content.style.left = "0";
        container.style.opacity = '1';
        container.style.pointerEvents = 'all';
      }
    }
    sidebarsSection.forEach(function(section){
      let buttons = section.querySelectorAll('[data-sidebar="open"],[data-sidebar="close"]'),
        container = section.querySelector('[data-sidebar="container"]'),
        direction = container.dataset.sidebarDirection || 'right',
        content = container.querySelector('[data-sidebar="content"]'),
        width = content.offsetWidth;
      toggleDirection(container ,direction, content, width,'closed');
      buttons.forEach(function(button){
        button.addEventListener('click', function() {
          if(button.dataset.sidebar === 'open') toggleDirection(container, direction, content, width, 'opened')
          else if (button.dataset.sidebar === 'close') toggleDirection(container,direction,content,width, 'closed')
        })
      })
      section.addEventListener('click', function(e){
        if (e.target === container) {
          toggleDirection(container,direction,content,width, 'closed')
        }
      })
    });
  }
}
  try {
    automaticSidebar()
  } catch (e) {
    console.log('Você esqueceu de utilizar algum parametro do Automatic Sidebar, por favor revise seu código.');
    console.log('Veja o erro abaixo e vá arrumar.');
    console.log(e.message)
  }
});