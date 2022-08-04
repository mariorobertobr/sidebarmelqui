import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

export default function SideBar( props : any) {
 return (

        <ProSidebar collapsed={props.collapsed}>
        <Menu iconShape="square">
        <MenuItem>Dashboard</MenuItem>
        <SubMenu title="Components" >
          <MenuItem>Component 1</MenuItem>
        
        </SubMenu>
         <SubMenu title="Component 2 " >
          <MenuItem>Component 1</MenuItem>
        </SubMenu>
         <SubMenu title="Component 2 " >
          <MenuItem>Component 1</MenuItem>
        </SubMenu>
         <SubMenu title="Component 2 " >
          <MenuItem>Component 1</MenuItem>
        </SubMenu>
        </Menu>
      </ProSidebar>    
    
)
}