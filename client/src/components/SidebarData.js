import React from "react";
// import HomeIcon from '@material-ui/icons/Home';
// import MyLocationIcon from '@mui/icons-material/MyLocationIcon';
// import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirportsIcon';
// import RouteIcon from '@mui/icons-material/RouteIcon';
// import SportsEsportsIcon from '@mui/icons-material/SportsEsportsIcon';
// import HistoryIcon from '@mui/icons-material/HistoryIcon';
import {AiFillHome} from "react-icons/ai";
import {AiFillEnvironment} from "react-icons/ai";
import {TiFlowSwitch} from "react-icons/ti";
import {MdBackup} from "react-icons/md";
import {AiFillControl} from "react-icons/ai";
import {AiOutlineHistory} from "react-icons/ai";


export const SidebarData = [
    {
        title: "Home",
        icon: <AiFillHome/>,
        link: "/"
    },

    {
        title: "Control units",
        icon: <AiFillEnvironment/>,
        link: "/controlUnit"
    },

    {
        title: "Path",
        icon: <TiFlowSwitch/>,
        link: "/path"
    },

    {
        title: "History",
        icon: <AiOutlineHistory/>,
        link: "/history"
    },

    {
        title: "Simulator",
        icon: <AiFillControl/>,
        link: "/simulator"
    },

    {
        title: "Backup",
        icon: <MdBackup/>,
        link: "/backup"
    }
]