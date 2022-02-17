import React, {createContext, useState, useEffect} from 'react'

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [products, setProducts] = useState([
            {
                    "_id":"1",
                "title": "ASUS VP229HE 21.5” Monitor",
                "images": [
                    "https://www.affariyet.com/43828-large_default/ecran-msi-pro-238-ips-full-hd-noir-mp242-prix-en-tunisie.jpg",
                    "https://www.tunisianet.com.tn/62591-large/ecran-hp-22es-215-ips-full-hd-led.jpg",
                    "https://static.fnac-static.com/multimedia/Images/FR/MDM/d0/bc/01/16891088/1520-1/tsp20220129091528/Ecran-PC-Gaming-Huawei-MateView-GT-34-LCD-Incurve-Noir.jpg",
                    "https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/5/d/2/5d29971c2c_50180016_ecran-pc-gamer-acer-nitro-xv240ypbmiiprx.jpg"
                ],
                "description": "ASUS VP229HE 21.5” Monitor, 1080P Full HD, 75Hz, IPS, FreeSync/Adaptive-Sync, Eye Care, HDMI VGA, Frameless, VESA Wall Mountable, BLACK",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "colors": ["red", "black", "teal"],
                "sizes": ["XL", "L", "M", "XM", "LX"],
                "price": 101,
                "count": 1
            },
            {
                "_id": "2",
                "title": "ASUS VP229HE 21.5” Monitor",
                "images": [
                    "https://www.tunisianet.com.tn/62591-large/ecran-hp-22es-215-ips-full-hd-led.jpg",
                    "https://www.affariyet.com/43828-large_default/ecran-msi-pro-238-ips-full-hd-noir-mp242-prix-en-tunisie.jpg",
                    "https://static.fnac-static.com/multimedia/Images/FR/MDM/d0/bc/01/16891088/1520-1/tsp20220129091528/Ecran-PC-Gaming-Huawei-MateView-GT-34-LCD-Incurve-Noir.jpg",
                    "https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/5/d/2/5d29971c2c_50180016_ecran-pc-gamer-acer-nitro-xv240ypbmiiprx.jpg"
                    ],
                    "description": "ASUS VP229HE 21.5” Monitor, 1080P Full HD, 75Hz, IPS, FreeSync/Adaptive-Sync, Eye Care, HDMI VGA, Frameless, VESA Wall Mountable, BLACK",
                    "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "colors": ["red", "black", "teal"],
                "sizes": ["XL", "L", "M", "XM", "LX"],
                "price": 102,
                "count": 1

            },
            {
                "_id": "3",
                "title": "ASUS VP229HE 21.5” Monitor",
                "images": [
                    "https://static.fnac-static.com/multimedia/Images/FR/MDM/d0/bc/01/16891088/1520-1/tsp20220129091528/Ecran-PC-Gaming-Huawei-MateView-GT-34-LCD-Incurve-Noir.jpg",
                    "https://www.tunisianet.com.tn/62591-large/ecran-hp-22es-215-ips-full-hd-led.jpg",
                    "https://www.affariyet.com/43828-large_default/ecran-msi-pro-238-ips-full-hd-noir-mp242-prix-en-tunisie.jpg",
                    "https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/5/d/2/5d29971c2c_50180016_ecran-pc-gamer-acer-nitro-xv240ypbmiiprx.jpg"
                    ],
                "description": "ASUS VP229HE 21.5” Monitor, 1080P Full HD, 75Hz, IPS, FreeSync/Adaptive-Sync, Eye Care, HDMI VGA, Frameless, VESA Wall Mountable, BLACK",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "colors": ["red", "black", "teal"],
                "sizes": ["XL", "L", "M", "XM", "LX"],
                "price": 103,
                "count": 1

            },
            {
                "_id": "4",
                "title": "ASUS VP229HE 21.5” Monitor",
                "images": [
                    "https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/5/d/2/5d29971c2c_50180016_ecran-pc-gamer-acer-nitro-xv240ypbmiiprx.jpg",
                    "https://www.tunisianet.com.tn/62591-large/ecran-hp-22es-215-ips-full-hd-led.jpg",
                    "https://static.fnac-static.com/multimedia/Images/FR/MDM/d0/bc/01/16891088/1520-1/tsp20220129091528/Ecran-PC-Gaming-Huawei-MateView-GT-34-LCD-Incurve-Noir.jpg",
                    "https://www.affariyet.com/43828-large_default/ecran-msi-pro-238-ips-full-hd-noir-mp242-prix-en-tunisie.jpg"
                    ],
                    "description": "ASUS VP229HE 21.5” Monitor, 1080P Full HD, 75Hz, IPS, FreeSync/Adaptive-Sync, Eye Care, HDMI VGA, Frameless, VESA Wall Mountable, BLACK",
                    "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "colors": ["red", "black", "teal"],
                "sizes": ["XL", "L", "M", "XM", "LX"],
                "price": 104,
                "count": 1

            },
            
         
            // {
            //     "_id": "5",
            //     "title": "Wacth Product 05",
            //     "images": [
            //         "https://www.upsieutoc.com/images/2020/07/18/img5.jpg",
            //         "https://www.tunisianet.com.tn/62591-large/ecran-hp-22es-215-ips-full-hd-led.jpg",
            //         "https://static.fnac-static.com/multimedia/Images/FR/MDM/d0/bc/01/16891088/1520-1/tsp20220129091528/Ecran-PC-Gaming-Huawei-MateView-GT-34-LCD-Incurve-Noir.jpg",
            //         "https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/5/d/2/5d29971c2c_50180016_ecran-pc-gamer-acer-nitro-xv240ypbmiiprx.jpg"
            //         ],
            //     "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            //     "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            //     "colors": ["red", "black", "teal"],
            //     "sizes": ["XL", "L", "M", "XM", "LX"],
            //     "price": 105,
            //     "count": 1

            // },
            // {
            //     "_id": "6",
            //     "title": "Wacth Product 06",
            //     "images": [
            //         "https://www.upsieutoc.com/images/2020/07/18/img6.jpg",
            //         "https://www.tunisianet.com.tn/62591-large/ecran-hp-22es-215-ips-full-hd-led.jpg",
            //         "https://static.fnac-static.com/multimedia/Images/FR/MDM/d0/bc/01/16891088/1520-1/tsp20220129091528/Ecran-PC-Gaming-Huawei-MateView-GT-34-LCD-Incurve-Noir.jpg",
            //         "https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/5/d/2/5d29971c2c_50180016_ecran-pc-gamer-acer-nitro-xv240ypbmiiprx.jpg"
            //         ],
            //     "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            //     "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            //     "colors": ["red", "black", "teal"],
            //     "sizes": ["XL", "L", "M", "XM", "LX"],
            //     "price": 106,
            //     "count": 1

            // }
    ])

    const [cart, setCart] = useState([])

    const addCart = (id) =>{
        const check = cart.every(item =>{
            return item._id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product._id === id
            })
            setCart([...cart, ...data])
        }else{
            alert("The product has been added to cart.")
        }
    }

    useEffect(() =>{
       const dataCart =  JSON.parse(localStorage.getItem('dataCart'))
       if(dataCart) setCart(dataCart)
    },[])

    useEffect(() =>{
        localStorage.setItem('dataCart', JSON.stringify(cart))
    },[cart])


    const value = {
        products: [products, setProducts],
        cart: [cart, setCart],
        addCart: addCart
    }

    
    return (
        <DataContext.Provider 
            value={value}
        >
            {props.children}
        </DataContext.Provider>
    )
}
