import Album from '../album';
import AlbumItem from '../album-item';
import {Size} from '../preview';
import {ThumbnailsPosition} from "./with-thumbnails";

export default interface Params {
    autoStartAtAlbum?: number; // Index of album which will be loaded by auto start.; ; [ 1, 2 ]
    autoStartAtItem?: number; // Index of item which will be loaded by auto start.; ; [ 1, 2, 3 ]
    backgroundColor?: string; // Background color for jGallery container.; ; [ '#ffffff', 'silver' ]
    browserHistory?: boolean; // If set as 'true', changes of active item will be saved in browser history.; [ true, false ]
    canMinimizeThumbnails?: boolean; // If set as 'true', you can minimize thumbnails(only when 'thumbnails' parameter set as 'true').; [ true, false ]
    canChangePreviewSize?: boolean; // If set as 'true', you can change preview size (only for images).; [ true, false ]
    itemOnHide?: (p: { album: Album, item: AlbumItem }) => any; // Custom function that will be called after hide item.; ; [ function() { console.log('called') } ]
    itemOnLoad?: (p: { album: Album, item: AlbumItem }) => any; // Custom function that will be called after load item.; ; [ function() { console.log('called') } ]
    itemOnShow?: (p: { album: Album, item: AlbumItem }) => any; // Custom function that will be called after show item.; ; [ function() { console.log('called') } ]
    navigationOnPreviewClick?: boolean; // If set as 'true', clicking in preview area will change active item(to next if click on right side, or previous if click on left side).; [ true, false ]
    onChange?: (p: { album: Album, item: AlbumItem, prevItem: AlbumItem }) => any; // Custom function that will be called before change (hide) item.; ; [ function() { console.log('called') } ]
    previewSize?: Size; // Size of preview for images.; [ 'cover', 'contain', 'auto' ]
    slideShow?: boolean; // If set as 'true', option slideshow is enabled.; [ true, false ]
    slideShowAutoStart?: boolean; // If set as 'true', slideshow will be started immediately after initializing jGallery(only when 'slideshow' has been set as true).; [ true, false ]
    slideShowInterval?: number; // Time (in ms) between change of photos for slideshow(only when 'slideshow' has been set as true).; [ 3000, 6000, 10000 ]
    textColor?: string; // Color of text and icons.; ; [ '#000000', 'rgb(0,153,221)' ]
    thumbnailHeight?: string; // Height(pixels) of thumbnails.; ; [ '50px', '75px', '125px' ]
    thumbnailHeightOnFullScreen?: string; // Height(pixels) of thumbnails for thumbnails displayed in full-screen.; ; [ '125px', '160px', '200px' ]
    thumbnailWidth?: string; // Width(pixels) of thumbnails.; ; [ '50px', '75px', '125px' ]
    thumbnailWidthOnFullScreen?: string; // Width(pixels) of thumbnails for thumbnails displayed in full-screen.; ; [ '125px', '160px', '200px' ]
    thumbnails?: boolean; // If set as 'true', thumbnails will be displayed.; [ true, false ]
    thumbnailsFullScreen?: boolean; // If set as 'true', thumbnails will be displayed in full-screen.; [ true, false ]
    thumbnailsPosition?: ThumbnailsPosition; // Thumbnails position(only when 'thumbnails' parameter set as 'true').; [ 'top',  'bottom', 'left', 'right' ]
    thumbnailsVisible?: boolean; // If set as 'true', thumbnails will be displayed on gallery initialization.; [ true, false ]
    tooltipChangeSize?: string; // Text of tooltip which will be displayed next to icon for change preview size(only for images).; ; [ 'Change size', 'Zmień rozmiar' ]
    tooltipSeeAllItems?: string; // Text of tooltip which will be displayed next to icon for change thumbnails view.; ; [ 'See all items', 'Zobacz wszystkie elementy' ]
    tooltipSeeOtherAlbums?: string; // Text of tooltip which will be displayed next to icon for change album(if your jGallery has more than one album).; ; [ 'See other albums', 'Zobacz pozostałe albumy' ]
    tooltipSlideShowPause?: string; // Text of tooltip which will be displayed next to icon for pause slideshow.; ; [ 'Pause slide show', 'Zatrzymaj pokaz slajdów' ]
    tooltipSlideShowStart?: string; // Text of tooltip which will be displayed next to icon for play slideshow.; ; [ 'Start slide show', 'Uruchom pokaz slajdów' ]
    tooltipThumbnailsToggle?: string; // Text of tooltip which will be displayed next to icon for toggle thumbnails.; ; [ 'Toggle thumbnails', 'Pokaż/ukryj miniatury' ]
    transitionAnimateSliceHeight?: boolean; // If set as 'true', slices' height will be animated.; [ true, false ]
    transitionAnimateSliceWidth?: boolean; // If set as 'true', slices' width will be animated.; [ true, false ]
    transitionDetails?: number; // Specifies how many slices will have transition mask.; ; [ 1, 0.25, 0.5, 2, 4 ]
    transitionDuration?: number; // Duration(in ms) of transition between items.; [ 500, 250, 1000, 2000 ]
    transitionOpacity?: boolean; // If set as 'true', slices' opacity will be animated.; [ true, false ]
    transitionOriginX?: number; // Specifies center point of transition at X axis; [ 0.5, 0, 1 ]
    transitionOriginY?: number; // Specifies center point of transition at Y axis; [ 0.5, 0, 1 ]
    transitionXAxis?: boolean; // If set as 'true', transition mask will be sliced along X axis.; [ true, false ]
    transitionYAxis?: boolean; // If set as 'true', transition mask will be sliced along Y axis.; [ true, false ]
    transitionEasingFunction?: (time: number) => number; // Specifies transition easing. Argument 'time' is value between 0, 1.; ; [ function(time) { return time; } ]
}