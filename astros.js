function updateCarouselItem ()
{
    let lastItem = carouselItems[ currentIndex ];
    lastItem.classList.remove( "carousel-current" );

    let isRightArrow = this.classList.contains( "arrow-right" );
    let max = carouselItems.length - 1;
    let min = 0;

    currentIndex += isRightArrow ? 1 : -1;
    currentIndex = currentIndex > max ? min : currentIndex < min ? max : currentIndex;

    let newItem = carouselItems[ currentIndex ];
    newItem.classList.add( "carousel-current" );
    newItem.scrollIntoView( { inline: "center", behavior: "smooth" } );
}

const carouselArrows = document.getElementsByClassName( "carousel-arrow" );
const carouselItems = document.getElementsByClassName( "carousel-item" );
let currentIndex = 0;

for ( let index = 0; index < carouselArrows.length; index ++ )
{
    let arrow = carouselArrows[ index ];
    arrow.addEventListener( "click", updateCarouselItem );
}

