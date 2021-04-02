const outerScope = () => {
    const boxEl = document.querySelector('#box');
    const btnContainerEl = document.querySelector('.btn-container');

    boxEl.style.backgroundColor = 'black';
    boxEl.style.width = '300px';
    boxEl.style.height = '300px';
    const innerScope = () => {
    
        btnContainerEl.addEventListener('click', function(e){
            boxEl.style.backgroundColor = `${e.target.value}`
        })
    }
    innerScope()
}

outerScope();

