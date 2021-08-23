// @ninjected
document.querySelectorAll( 'img' ).forEach( function ( img ) {
    img.src = img.src.replace( /\/thumb(\/.+)\/\d+px-.+\.svg\.png.*$/, '$1' );
    img.removeAttribute( 'srcset' );
} );