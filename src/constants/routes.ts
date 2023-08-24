interface Routes {
    index?: boolean,
    label: string,
    path: string
}

const routes: Routes[] = [
    {
        index: true,
        label: '0xNeit',
        path: '/',
    },
    {
        label: 'About',
        path: '/about',
    },
    {
        label: 'Resume',
        path: '/resume',
    },
    {
        label: 'Projects',
        path: '/projects',
    },
    {
        label: 'Stats',
        path: '/stats',
    },
    {
        label: 'Contact',
        path: '/contact',
    },
]

export default routes;