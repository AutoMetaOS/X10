import parse from "./parse-torrent-name";

const insertCSS = () => {
    const badge = `
    .badge{
        --col: #0f0;
        background:var(--col);
        border-radius: 2px;
        color: #fff;
        display: inline-block;
        padding: 0 5px;
    }
    .red{--col:#FF0000}
    .green{--col:#22AA22}
    .orange{--col:#FFA500}
    .purple{--col:#A020F0}
    `;

    const style = document.createElement( 'style' );
    style.type = 'text/css';
    style.appendChild( document.createTextNode( badge ) );
    document.head.appendChild( style );
}


const since = ( val ) => {
    val = 0 | ( ( Date.now() - new Date( val ) ) / 1000 );
    let unit,
        length = {
            second: 60,
            minute: 60,
            hour: 24,
            day: 7,
            week: 4.35,
            month: 12,
            year: 10000,
        },
        result;

    for ( unit in length ) {
        result = val % length[ unit ];
        if ( !( val = 0 | ( val / length[ unit ] ) ) )
            return result + " " + ( result - 1 ? unit + "s" : unit );
    };
};

const fix = {
    res: ( { resolution = 'xxx', quality = 'xxx' } ) => {
        if ( resolution === 'xxx' ) return '';
        if ( quality === 'xxx' ) return `<span class="badge green">${ resolution }</span>`;
        return `<span class="badge green">${ resolution }</span>&nbsp;(${ quality })`
    },
    ctr: ( { season = null, episode = null } ) => {
        // if ( !season ) return '🎬';
        if ( !season ) return '';
        if ( !episode ) return `<span class="badge purple">S${ season }</span>`;
        else return `<span class="badge purple">S${ season }E${ episode }</span>`;
    },
    title: ( { title, year } ) => {
        const NSFW = `<span class="badge red">NSFW</span>`;

        const title2 = title.includes( 'XXX' ) ?
            `${ title.replaceAll( 'XXX', '' ) } ${ NSFW }` :
            title;

        if ( year ) return `${ title2 } (${ year })`;
        else return title2;
    }
};

const init = () => {
    const up_list = document.querySelectorAll( '.list-item.item-uploaded label' );
    const name_list = document.querySelectorAll( '.list-item.item-name.item-title a' );

    insertCSS();
    name_list.forEach( ( item ) => {
        const name = item.innerText;
        const parsed = parse( name );

        item.innerHTML =
            `${ fix.title( parsed ) } ${ fix.ctr( parsed ) } ${ fix.res( parsed ) }`;
        // `${ name } <br/> ${ fix.title( parsed ) } ${ fix.ctr( parsed ) } ${ fix.res( parsed ) }`;
    } );

    up_list.forEach( ( item ) => ( item.innerText = since( item.innerText ) ) );
};

setTimeout( init, 500 );