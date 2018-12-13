import Params from './parameters';

const defaults: Params = {
    browserHistory: true,
    slideShow: true,
    slideShowAutoStart: false,
    slideShowInterval: 4000,
    thumbnails: true,
    backgroundColor: '#000',
    textColor: '#fff',
    autostartAtAlbum: 1,
    autostartAtItem: 1,
    canMinimalizeThumbnails: true,
    canChangePreviewSize: true,
    thumbnailsVisible: true,
    thumbnailsPosition: 'bottom',
    thumbnailsFullScreen: true,
    thumbnailWidth: '64px',
    thumbnailHeight: '64px',
    thumbnailWidthOnFullScreen: '128px',
    thumbnailHeightOnFullScreen: '128px',
    tooltipSeeOtherAlbums: 'See other albums',
    tooltipChangeSize: 'Change size',
    tooltipSeeAllItems: 'See all items',
    tooltipSlideShowStart: 'Start slide show',
    tooltipSlideShowPause: 'Pause slide show',
    tooltipThumbnailsToggle: 'Toogle whumbnails',
    transitionDuration: 500,
    transitionDetails: 1,
    transitionXAxis: true,
    transitionYAxis: false,
    transitionOriginX: .5,
    transitionOriginY: .5,
    onChange: () => {},
    itemOnHide: () => {},
    itemOnLoad: () => {},
    itemOnShow: () => {},
};

export default defaults;