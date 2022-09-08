let i = 0;

for (let catalogo of Object.keys(catalogos)) {
    let div = document.createElement('div');
    div.setAttribute('id', catalogo);
    div.classList.add('carousel-item');
    if(i === 0){
        div.classList.add('active');
    }
    i++;
    div.innerHTML = `<div class="img-carousel" style="background-image: url('${catalogos[catalogo]['img']}');" class="d-block w-100" alt="...">`

    div.addEventListener('click', function(event){
        document.getElementById('modalCatalogosLabel').innerHTML = catalogos[event.currentTarget.id]['nome']
        document.getElementById('modalCatalogosImg').setAttribute('src', catalogos[event.currentTarget.id]['img'])
        document.getElementById('modalCatalogosDataLancamento').innerHTML = catalogos[event.currentTarget.id]['dataLancamento']
        document.getElementById('modalCatalogosDescricao').innerHTML = catalogos[event.currentTarget.id]['descricao']
        modalCatalogos.show()
    })

    carouselCatalogoItems.appendChild(div);
}