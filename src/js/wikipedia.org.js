const ls = {
    get: key => {
        const value = localStorage.getItem( key );
        return value ? JSON.parse( value ) : null;
    },
    set: ( key, value ) => localStorage.setItem( key, JSON.stringify( value ) )
};

window.onGetClick = ( e ) => {
    e.preventDefault();
    console.log( e );
}


const insert = ( type, data, where = document.body ) => {
    const node = document.createElement( type );
    if ( type === 'script' ) node.textContext = data
    else node.innerHTML = data;
    where.appendChild( node );

    return node;
};

insert(
    'style', `
    #wiki-bh {
        position: fixed;z-index: 99999;top: 0;right: 0;
        background: #fff;
        padding: 10px;
        border-bottom-left-radius: 5px;border-bottom-right-radius: 5px;border: 1px solid #0002;
    }
    #wiki-bh a {color: #000;}`,
    document.head
);

const init = () => {
    const div = insert( 'div', '<a href="https://wikipedia.org">wikipedia.org</a>' );
    div.id = 'wiki-bh';

    document.querySelectorAll( 'a' ).forEach( a => {
        if ( a.href.includes( 'wikipedia.org' ) ) {
            a.setAttribute( 'onclick', 'window.onGetClick(this)' );
        }
    } );
};



setTimeout( init, 500 );