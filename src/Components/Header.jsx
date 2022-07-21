import React from 'react'
import { Button, Icon, Image, Menu} from "semantic-ui-react";
import logo from "../../src/logo.svg"
import {Link} from 'react-router-dom'
function Header() {
  return (
    <Menu secondary>
        <Image src={logo} width={65}/>
        <Menu.Item style={{fontSize: 23}}>WebMinar </Menu.Item>
        <Menu.Item position='right'>
           <Button as={Link} to='/create' basic><Icon name="add"></Icon>Create</Button> 
             </Menu.Item>
       
    </Menu>
  )
}

export default Header