import React from 'react';
import PropTypes from 'prop-types';
import { getCanvas, getVisibleCanvases } from 'mirador/dist/es/src/state/selectors/canvases';
import { getWindowIds } from 'mirador/dist/es/src/state/selectors/getters';
import axios from 'axios';


const mapStateToProps = (state, {windowId} ) => 
({
  canvas: getCanvas(state, { windowId }),
  canvases: getVisibleCanvases(state, { windowId }),
  windowIds: getWindowIds(state),
  prevWindowsIds:getWindowIds(state),
  
});

class miradorTrackerPlugin extends React.Component 
{
  constructor(props) 
  {
    super(props);
    this.state = {
      prevWindowIds: this.props,
      canvas: this.props,
    };
  }

  handleClick = (event) => 
  {
    const { canvases, windowId,  } = this.props;
    const canvasString = windowId.toString() + '-osd';
    const clickedImage = String(event.target.getAttribute('aria-describedby'));
    const clickedCanvas = canvases.find(canvas => canvasString === clickedImage);

    const ClickInfo = 
    {
      windowId: windowId,
      target: clickedCanvas.id,
      message: 'Click Event',
      timestamp: String(new Date())
    };
    
    if (clickedCanvas) 
    {
      console.log('Click on window:', windowId, '- Target:', clickedCanvas.id);
      //axios.post('http://127.0.0.1:3000/click', ClickInfo)

    }
  }

  handleZoom = (event) => 
  {
    const { canvases, windowId } = this.props;
    const canvasString = windowId.toString() + '-osd';
    const clickedImage = String(event.target.getAttribute('aria-describedby'));
    const clickedCanvas = canvases.find(canvas => canvasString === clickedImage);

    const ZoomInfo = 
    {
      windowId: windowId,
      target: clickedCanvas.id,
      message: 'Zoom Event',
      timestamp: String(new Date())
    };
    
    if (clickedCanvas) 
    {
      console.log('Zoom on window:', windowId, '- Target:', clickedCanvas.id);
      //axios.post('http://127.0.0.1:3000/zoom', ZoomInfo)

    }
  }

  windowAdded = (event) =>
  {
    const { windowIds } = this.props;
    const { windowId } = this.props;
    
    if (this.state.prevWindowIds?.length !== windowIds.length) 
    {
       

      this.setState( this.state.prevWindowIds = windowIds);
      const lastImage = windowIds.find(windowIds => windowId==this.state.prevWindowIds[this.state.prevWindowIds?.length-1])
      if(lastImage)
      {
        const WindowInfo = 
        {
          windowId: this.state.prevWindowIds[this.state.prevWindowIds?.length -1],
          target: this.state.canvas.window.canvasId,
          message: 'AddWindow Event',
          timestamp: String(new Date())
        };
        console.log('Window Added:',this.state.prevWindowIds[this.state.prevWindowIds?.length -1],' Url:',this.state.canvas.window.canvasId);
        //axios.post('http://127.0.0.1:3000/addwindow', WindowInfo)
      }
    }
  }
  
  componentDidMount() 
  {
    const { windowId } = this.props;
    const { windowIds } = this.props;

    this.handleClick = this.handleClick.bind(this);
    this.handleZoom = this.handleZoom.bind(this);

    window.addEventListener('click', this.handleClick);
    window.addEventListener('wheel', this.handleZoom);
  }
  
  componentDidUpdate(prevProps) 
  {
    this.windowAdded();
  }
  
  componentWillUnmount() 
  {
    window.removeEventListener('click', this.handleClick);
    window.removeEventListener('wheel', this.handleZoom);
  }
  
  
  render() 
  {
   return null;
  }
}

miradorTrackerPlugin.propTypes = 
{
  canvas: PropTypes.string.isRequired,
  canvases: PropTypes.string.isRequired,
  windowId: PropTypes.string.isRequired,
  windowIds: PropTypes.string.isRequired,

}
export default 
{
  target: 'Window',
  mode: 'add',
  name: 'trackerplugin',
  component: miradorTrackerPlugin,
  mapStateToProps: mapStateToProps,
};