import React from "react";
import { Button, Popover, Form, Tooltip, OverlayTrigger } from "react-bootstrap";
// import $ from "jquery"
// import PopoverBootstrap from "../CommonComponents/Popover"
// import OverlayTrigger from "react-bootstrap/OverlayTrigger";

class NotesAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  handleAddNotes = (e) => {
    e.preventDefault();
    this.setState({
      show: !this.state.show,
      target: e.target,
    });
    // setTimeout( function() { $("#showup").hide(); }, 5000);
  };

  render() {
    const { target, show } = this.state;
    const sharedProps = {
      container: this,
      target: this.getTarget,
      show: this.state.show,
    };

    const popoverRight = (
      <Popover id="popover-positioned-right" title="Popover right" style={{ width: "150px"}}>
        <div style={{ textAlign: "center"}}>Please Add your new notes here</div>
      </Popover>
    );
    // const ref = React.createRef()
    // const { padding, } = this.props
    return (
      <div>
        <div style={{ padding: "100px 0" }}>
          <OverlayTrigger
            show={show}
            trigger="click"
            placement="top"
            // overlay={
            //   <PopoverBootstrap
            //     name="Aneela"
            //     module="diary"
            //     className="popover-positioned-right"
            //     show={show}
            //     innerRef={ref => (this.child = ref)}
            //     {...this.props}
            //   />
            // }
            overlay={popoverRight}
          >
            <Button onClick={(e) => this.handleAddNotes(e)}>
              Add your notes
            </Button>
          </OverlayTrigger>
        </div>
      </div>
    );
  }
}
function TriggerExample() {
    const renderTooltip = (props) => (
      <Tooltip id="button-tooltip" {...props}>
        Simple tooltip
      </Tooltip>
    );
  
    return (
      <OverlayTrigger
        placement="right"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
      >
        <Button variant="success">Hover me to see</Button>
      </OverlayTrigger>
    );
  }

const ShowUp = () => (
  <div className="showup" style={{ height: "40px", width: "120px" }}>
    Hi! Trying something new here!
  </div>
);

class PopoverBootstrap extends React.Component {
    componentDidMount(){
        const { innerRef } = this.props
        innerRef(this)
    }
    render(){
        return(
            <Popover
    id={`popover-positioned-right`}
    title={this.props.name}
    className="Popover right"
  >
    <div className="popover">
      <div>
        <Form className="popover-input">
          <Form.Group className="mb-3">
            <Form.Label>{`${this.props.name} for this ${this.props.module}`}</Form.Label>
            <Form.Control type="text" placeholder="module name"></Form.Control>
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    </div>
  </Popover>

        )
    }
}

export default NotesAdder;
