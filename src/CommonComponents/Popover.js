import React from "react";
import {
  Popover,
  Form,
  Button,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

// class PopoverBootstrap extends React.Component {
//     render() {
//         const { name, module, show, target, placement, container, padding} = this.props
//         console.log(name, "name")
//         return (
//             <div>
//                 <OverlayTrigger
//                     trigger="click"
//                     show={show}
//                     target={target}
//                     placement={placement}
//                     container={container}
//                     containerPadding={padding}
//                     overlay={PopoverTrigger}
//                 >
//                     <Button></Button>

//                 </OverlayTrigger>
//             </div>
//         )
//     }
// }

const PopoverBootstrap = (props) => (
  <Popover
    id={`popover-positioned-right`}
    title={props.name}
    className="popover-positioned-right"
    // innerRef={ref}
    // placement="bottom"
  >
    <div className="popover">
      <div>
        <Form className="popover-input">
          <Form.Group className="mb-3">
            <Form.Label>{`${props.name} for this ${props.module}`}</Form.Label>
            <Form.Control type="text" placeholder="module name"></Form.Control>
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    </div>
  </Popover>
);

const PopoverBootstrap1 = ({ name, module }) => {
  <Tooltip>sIMPLE</Tooltip>;
};

export default PopoverBootstrap;
