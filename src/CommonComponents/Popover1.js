import React, { Component } from "react"
import Popover from "react-bootstrap/lib/Popover"
import OverlayTrigger from "react-bootstrap/lib/OverlayTrigger"
import PropTypes from "prop-types"
import "./PopoverStyles.scss"

export class Popover1 extends Component {
    static propTypes = {
        title: PropTypes.node,
        id: PropTypes.string,
        popover: PropTypes.node.isRequired,
        isStatic: PropTypes.bool,
        className: PropTypes.string,
    }
    static defaultProps = {
        isStatic: false,
    }
    constructor(...args) {
        super(...args)
        this.id = "popover_" + Math.floor(Math.random() * 1000)
    }
    render() {
        const {
            title,
            id,
            popover,
            isStatic,
            className,
            ...otherProps
        } = this.props
        if (isStatic) {
            return (
                <Popover
                    {...otherProps}
                    className={`vm-popover ${className || ""}`}
                    id={id || this.id}
                    title={title}
                    children={popover}
                />
            )
        }
        return (
            <OverlayTrigger
                trigger="click"
                placement="bottom"
                rootClose
                overlay={
                    <Popover
                        className={`vm-popover ${className}`}
                        id={id || this.id}
                        title={title}
                        children={popover}
                    />
                }
                {...otherProps}
            />
        )
    }
}

export default Popover1
