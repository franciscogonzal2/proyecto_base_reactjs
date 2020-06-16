//MENU
const LITERALS = [
    {
        "link": "",
        "label": {
            "esp": "¿Quienes Somos?",
            "eng": "About us"
        },
        "subMenu": [
            {
                "icon": "fas fa-building",
                "label": {
                    "esp": "Nuestra empresa",
                    "eng": "Our company"
                },
                "items": [
                    {
                        "link": "/nosotros",
                        "labels": {
                            "esp": "¿Quienes Somos?",
                            "eng": "About us"
                        }
                    },
                    {
                        "link": "/oferta",
                        "labels": {
                            "esp": "Nuestros servicios",
                            "eng": "Our services"
                        }
                    }
                ]
            },
            {
                "icon": "fas fa-plus-square",
                "label": {
                    "esp": "La web",
                    "eng": "The web"
                },
                "items": [
                    {
                        "link": "/webdesign",
                        "labels": {
                            "esp": "Diseño y desarrollo web",
                            "eng": "Web design and development"
                        }
                    },
                    {
                        "link": "/responsive",
                        "labels": {
                            "esp": "Responsive design",
                            "eng": "Responsive design"
                        }
                    }
                ]
            }
        ]
    },
    {
        "link": "/webpacks",
        "label": {
            "esp": "Paquetes Web",
            "eng": "Web combos"
        }
    },
    {
        "link": "/portafolio",
        "label": {
            "esp": "Portafolio",
            "eng": "Portfolio"
        }
    },
    {
        "link": "/contacto",
        "label": {
            "esp": "Contáctenos",
            "eng": "Contact us"
        }
    }
]

export default LITERALS;