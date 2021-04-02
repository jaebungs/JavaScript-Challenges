// PoughKeepsie Newburgh Peekskill Yonkers Bronx Grand Central

const btnEl = document.querySelector('#next');

function* nextStopGeneratorFunction () {
    yield 'PoughKeepsie';
    yield 'Newburgh';
    yield 'Peekskill';
    yield 'Yonkers';
    yield 'Bronx';
    yield 'Grand Central';
}

const stops = nextStopGeneratorFunction();

btnEl.addEventListener('click', function(){
    if (stops.next().done){
        console.log('We made it!');
        btnEl.disabled = true;
    } else {
        console.log(stops.next().value);
    }
})