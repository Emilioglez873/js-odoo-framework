{
    'name': 'Awesome Dashboard',
    'summary': 'Starting module for Discover the JS framework, chapter 2: Build a dashboard',
    'description': 'We practiced important features from Owl like services, lazy loading, registries and generic components to allow customization',
    'author': 'Odoo',
    'website': 'https://www.odoo.com/',
    'category': 'Tutorials/AwesomeDashboard',
    'version': '17.0',
    'application': True,
    'installable': True,
    'depends': ['base', 'web', 'mail', 'crm'],
    'data': [
        'views/views.xml',
    ],
    'assets': {
        'web.assets_backend': [
            'awesome_dashboard/static/src/**/*',
        ],
        'awesome_dashboard.dashboard': ['awesome_dashboard/static/src/dashboard/**/*'],
    },
    'license': 'AGPL-3',
}
