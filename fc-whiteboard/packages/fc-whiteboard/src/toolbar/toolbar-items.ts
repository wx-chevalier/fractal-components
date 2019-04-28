import { WhitePage } from '../whiteboard/WhitePage/index';
import { RectMarker } from './../markers/RectMarker/index';
import { CoverMarker } from './../markers/CoverMarker/index';
import { TextMarker } from './../markers/TextMarker/index';
import { ArrowMarker } from './../markers/ArrowMarker/index';
import { HighlightMarker } from './../markers/HighlightMarker/index';
import { ToolbarItem } from './ToolbarItem';
import { LineMarker } from '../markers/LineMarker';

const OkIcon = require('../assets/check.svg');
const DeleteIcon = require('../assets/eraser.svg');
const PointerIcon = require('../assets/mouse-pointer.svg');
const CloseIcon = require('../assets/times.svg');

export const dragToolbarItem = new ToolbarItem({
  name: 'drag',
  tooltipText: 'Drag',
  icon: require('../assets/drag.svg')
});

export const highlightMarkerToolbarItem = new ToolbarItem({
  name: 'cover-marker',
  tooltipText: 'Cover',
  icon: require('../assets/highlight.svg'),
  markerType: HighlightMarker
});

export const arrowMarkerToolbarItem = new ToolbarItem({
  name: 'arrow-marker',
  tooltipText: 'Arrow',
  icon: require('../assets/arrow.svg'),
  markerType: ArrowMarker
});

export const textMarkerToolbarItem = new ToolbarItem({
  name: 'text-marker',
  tooltipText: 'Text',
  icon: require('../assets/text.svg'),
  markerType: TextMarker
});

export const coverMarkerToolbarItem = new ToolbarItem({
  name: 'cover-marker',
  tooltipText: 'Cover',
  icon: require('../assets/cover.svg'),
  markerType: CoverMarker
});

export const rectMarkerToolbarItem = new ToolbarItem({
  name: 'rect-marker',
  tooltipText: 'Rectangle',
  icon: require('../assets/rect.svg'),
  markerType: RectMarker
});

export const lineMarkerToolbarItem = new ToolbarItem({
  name: 'line-marker',
  tooltipText: 'Line',
  icon: require('../assets/line.svg'),
  markerType: LineMarker
});

export const closeToolbarItem = new ToolbarItem({
  icon: CloseIcon,
  name: 'close',
  tooltipText: 'Close'
});

export const separatorToolbarItem = new ToolbarItem({ name: 'separator', tooltipText: '' });

export function getToolbars(page?: WhitePage) {
  const toolbars = [
    {
      icon: PointerIcon,
      name: 'pointer',
      tooltipText: 'Pointer',
      draggable: true
    },
    {
      icon: DeleteIcon,
      name: 'delete',
      tooltipText: 'Delete'
    },
    rectMarkerToolbarItem,
    coverMarkerToolbarItem,
    highlightMarkerToolbarItem,
    lineMarkerToolbarItem,
    arrowMarkerToolbarItem,
    textMarkerToolbarItem
  ];

  if (!page) {
    toolbars.push(
      ...[
        {
          icon: OkIcon,
          name: 'ok',
          tooltipText: 'OK'
        }
      ]
    );
  }

  return toolbars;
}
