// assets
import PersonIcon from '@mui/icons-material/Person';
import SchemaIcon from '@mui/icons-material/Schema';
import ConstructionIcon from '@mui/icons-material/Construction';

// constant
const icons = {
    PersonIcon,
    SchemaIcon,
    ConstructionIcon
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
    id: 'utilities',
    title: 'Utilities',
    type: 'group',
    children: [
        {
            id: 'users-exhibition',
            title: 'Usuários',
            type: 'item',
            url: '/users',
            icon: icons.PersonIcon,
            breadcrumbs: false
        },
        {
            id: 'plants-exhibition',
            title: 'Plantas',
            type: 'item',
            url: '/plants',
            icon: icons.SchemaIcon,
            breadcrumbs: false
        },
        {
            id: 'devices-exhibition',
            title: 'Dispositivos',
            type: 'item',
            url: '/devices',
            icon: icons.ConstructionIcon,
            breadcrumbs: false
        }
    ]
};

export default utilities;
