import * as React from 'react'
import _ from "lodash"
import Swamy from "../images/venkateswaraSwamy.jpeg"


class Navbar extends React.Component {
    render() {
        const options = [
            {
                label : "Profile",
                value: "profile",
            },
            {
                label: "Logout",
                value: "logout"
            }
        ]
        return (
            <div className='navbar-header'>
                <div className='swamy-pic-name'>
                    <div>OM NAMO VENKATESAYA</div>
                    <div className='swamy-logo'>
                        <img src={Swamy} alt="swamy-icon" className='swamy-header-pic ' />
                    </div>
                    <div className='profile'>
                        <DropDown 
                            label="Profile" 
                            options={options} 
                        />
                    </div>
                </div>
            </div>
        )
    }
}

const DropDown = ({ label, options }) => {
    const [value, setValue] = React.useState('profile')
    const ChangeHandler = (event) => {
        setValue(event.target.value)
    }
    return (
        <div>
            <label>
                <select value={value} onChange={() => { ChangeHandler() }}>
                    {options.map((dropDownOption) => (
                        <option value={dropDownOption.value}>{dropDownOption.label}</option>
                    ))}
                </select>
           </label>
        </div>
    )
}

export default Navbar