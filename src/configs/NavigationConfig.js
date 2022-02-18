import {
    DashboardOutlined, ShoppingCartOutlined, ShoppingOutlined,
    UserOutlined, PictureOutlined,GiftOutlined,ShopOutlined,
    UsergroupAddOutlined,MailOutlined,MobileOutlined,
    SettingOutlined,FileTextOutlined
} from '@ant-design/icons';
import {APP_PREFIX_PATH} from 'configs/AppConfig'

const basicNavTree = [{
    key: 'basic',
    path: `${APP_PREFIX_PATH}/basic`,
    title: 'basic',
    icon: '',
    breadcrumb: false,
    submenu: [
        {
            key: 'basic-planner',
            path: `${APP_PREFIX_PATH}/basic/planner`,
            title: 'sidenav.planner',
            icon: PictureOutlined ,
            breadcrumb: false,
            submenu: []
        },
        {
            key: 'basic-dashboard',
            path: `${APP_PREFIX_PATH}/basic/dashboard`,
            title: 'sidenav.dashboard',
            icon: DashboardOutlined,
            breadcrumb: false,
            submenu: []
        },
        {
            key: 'basic-catalog',
            path: `${APP_PREFIX_PATH}/basic/catalog`,
            title: 'sidenav.catalog',
            icon: ShoppingCartOutlined,
            breadcrumb: true,
            submenu: [
                {
                    key: 'basic-catalog-goods',
                    path: `${APP_PREFIX_PATH}/basic/catalog/goods`,
                    title: 'sidenav.catalog.goods',
                    icon: '',
                    breadcrumb: false,
                    submenu: []
                },
                {
                    key: 'basic-catalog-categories',
                    path: `${APP_PREFIX_PATH}/basic/catalog/categories`,
                    title: 'sidenav.catalog.categories',
                    icon: '',
                    breadcrumb: false,
                    submenu: []
                },
                {
                    key: 'basic-catalog-collections',
                    path: `${APP_PREFIX_PATH}/basic/catalog/collections`,
                    title: 'sidenav.catalog.collections',
                    icon: '',
                    breadcrumb: false,
                    submenu: []
                },
                {
                    key: 'basic-catalog-combo',
                    path: `${APP_PREFIX_PATH}/basic/catalog/combo`,
                    title: 'sidenav.catalog.combo',
                    icon: '',
                    breadcrumb: false,
                    submenu: []
                },
            ]
        },
        {
            key: 'basic-orders',
            path: `${APP_PREFIX_PATH}/basic/orders`,
            title: 'sidenav.orders',
            icon: ShoppingOutlined,
            breadcrumb: false,
            submenu: []
        },
        {
            key: 'basic-clients',
            path: `${APP_PREFIX_PATH}/basic/clients`,
            title: 'sidenav.clients',
            icon: UserOutlined,
            breadcrumb: true,
            submenu: [
                {
                    key: 'basic-clients-list',
                    path: `${APP_PREFIX_PATH}/basic/clients/list`,
                    title: 'sidenav.clients.list',
                    icon: '',
                    breadcrumb: false,
                    submenu: []
                },
                {
                    key: 'basic-clients-groups',
                    path: `${APP_PREFIX_PATH}/basic/clients/groups`,
                    title: 'sidenav.clients.groups',
                    icon: '',
                    breadcrumb: false,
                    submenu: []
                },
            ]
        },
        {
            key: 'basic-banners',
            path: `${APP_PREFIX_PATH}/basic/banners`,
            title: 'sidenav.banners',
            icon: PictureOutlined,
            breadcrumb: false,
            submenu: []
        },
        {
            key: 'basic-promocodes',
            path: `${APP_PREFIX_PATH}/basic/promocodes`,
            title: 'sidenav.promocodes',
            icon: GiftOutlined ,
            breadcrumb: false,
            submenu: []
        },
        {
            key: 'basic-offlinepoints',
            path: `${APP_PREFIX_PATH}/basic/offlinepoints`,
            title: 'sidenav.offlinepoints',
            icon: ShopOutlined  ,
            breadcrumb: true,
            submenu: [
                {
                    key: 'basic-offlinepoints-addresses',
                    path: `${APP_PREFIX_PATH}/basic/offlinepoints/addresses`,
                    title: 'sidenav.offlinepoints.addresses',
                    icon: '',
                    breadcrumb:false,
                    submenu: []
                },
                {
                    key: 'basic-offlinepoints-geofences',
                    path: `${APP_PREFIX_PATH}/basic/offlinepoints/geofences`,
                    title: 'sidenav.offlinepoints.geofences',
                    icon: '',
                    breadcrumb:false,
                    submenu: []
                },
            ]
        },
        {
            key: 'basic-staff',
            path: `${APP_PREFIX_PATH}/basic/staff`,
            title: 'sidenav.staff',
            icon: UsergroupAddOutlined  ,
            breadcrumb: false,
            submenu: []
        },
        {
            key: 'basic-mailinglists',
            path: `${APP_PREFIX_PATH}/basic/mailinglists`,
            title: 'sidenav.mailinglists',
            icon: MailOutlined   ,
            breadcrumb: false,
            submenu: []
        },
    ]
},
]

const systemNavTree = [
    {
        key: 'system',
        path: `${APP_PREFIX_PATH}/system`,
        title: 'system',
        icon: '',
        breadcrumb: false,
        submenu:[
            {
                key: 'system-settings',
                path: `${APP_PREFIX_PATH}/system/settings`,
                title: 'sidenav.settings',
                icon: SettingOutlined ,
                breadcrumb: false,
                submenu: []
            },
            {
                key: 'system-mobileapp',
                path: `${APP_PREFIX_PATH}/system/mobileapp`,
                title: 'sidenav.mobileapp',
                icon: MobileOutlined,
                breadcrumb: false,
                submenu: []
            },
            {
                key: 'system-logs',
                path: `${APP_PREFIX_PATH}/system/logs`,
                title: 'sidenav.logs',
                icon: FileTextOutlined ,
                breadcrumb: false,
                submenu: []
            },
        ]
    }
]

const navigationConfig = [
    ...basicNavTree,
    ...systemNavTree
]

export default navigationConfig;
