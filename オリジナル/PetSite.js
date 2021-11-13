const PetSite = document.querySelector ('.PetSite a');
// PetSite.style.background = 'white';
const SubMenu = document.querySelector('.SubMenu');
function ClickPetSite(){
    if (SubMenu.style.display === 'none'){
        SubMenu.style.display = 'block';}
    else SubMenu.style.display ='none';
}
