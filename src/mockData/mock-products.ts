import { Product } from '../app/models/Product';
import { SpecificationDetails } from '../app/models/SpecificationDetails';
import { ShortSpecification } from '../app/models/ShortSpecification';
import { Image } from '../app/models/Image';

// output with id:
/*
'CAT111'  │ 'PRO100012300000' │ 'HP Envy Desktop'          
'CAT111'  │ 'PRO100012300537' │ 'Dell XPS Desktop'         
'CAT111'  │ 'PRO100012301074' │ 'Apple iMac 24-inch'       
'CAT222'  │ 'PRO100012301611' │ 'MacBook Pro 16-inch'      
'CAT222'  │ 'PRO100012302148' │ 'Dell XPS 13 Plus'         
'CAT222'  │ 'PRO100012302685' │ 'ASUS ROG Zephyrus G14'    
'CAT333'  │ 'PRO100012303222' │ 'iPhone 14 Pro'            
'CAT333'  │ 'PRO100012303759' │ 'iPhone 15 Pro'            
'CAT333'  │ 'PRO100012304296' │ 'Samsung Galaxy S23 Ultra' 
'CAT444'  │ 'PRO100012304833' │ 'Dell UltraSharp U2723QE'  
'CAT444'  │ 'PRO100012305370' │ 'Samsung Odyssey G7'       
'CAT444'  │ 'PRO100012305907' │ 'LG 34WN80C-B'             
'CAT555'  │ 'PRO100012306444' │ 'Sony WH-1000XM5'          
'CAT555'  │ 'PRO100012306981' │ 'Bose QuietComfort 45'     
'CAT555'  │ 'PRO100012307518' │ 'Sennheiser Momentum 4'    
*/


export const listProducts: Product[] = [
    // Desktop Category
    new Product(
        "HP Envy Desktop",
        "Powerful desktop for multitasking and gaming.",
        1299,
        1150,
        42,
        "CAT111",
        ["black", "silver"],
        [
            new SpecificationDetails("Processor", "Intel Core i7-12700"),
            new SpecificationDetails("RAM", "16 GB DDR4"),
            new SpecificationDetails("Storage", "1 TB SSD"),
            new SpecificationDetails("Graphics", "NVIDIA RTX 3060"),
            new SpecificationDetails("Ports", "USB-C, HDMI, DisplayPort"),
            new SpecificationDetails("OS", "Windows 11"),
            new SpecificationDetails("Weight", "10 kg"),
            new SpecificationDetails("Warranty", "1 year"),
        ],
        [
            new ShortSpecification("Processor", "Intel Core i7-12700"),
            new ShortSpecification("RAM", "16 GB DDR4"),
            new ShortSpecification("Storage", "1 TB SSD"),
            new ShortSpecification("Graphics", "NVIDIA RTX 3060"),
        ],
        [
            new Image("PRO100012300000", "https://picsum.photos/seed/desktop_1/300/300"),
            new Image("PRO100012300000", "https://picsum.photos/seed/desktop_2/300/300"),
            new Image("PRO100012300000", "https://picsum.photos/seed/desktop_3/300/300"),
        ]
    ),
    new Product(
        "Dell XPS Desktop",
        "Sleek desktop for professionals.",
        1549,
        1400,
        18,
        "CAT111",
        ["white"],
        [
            new SpecificationDetails("Processor", "Intel Core i9-12900"),
            new SpecificationDetails("RAM", "32 GB DDR4"),
            new SpecificationDetails("Storage", "1 TB SSD + 2 TB HDD"),
            new SpecificationDetails("Graphics", "NVIDIA RTX 3070"),
            new SpecificationDetails("Ports", "USB-C, HDMI, Ethernet"),
            new SpecificationDetails("OS", "Windows 11"),
            new SpecificationDetails("Weight", "11 kg"),
            new SpecificationDetails("Warranty", "2 years"),
        ],
        [
            new ShortSpecification("Processor", "Intel Core i9-12900"),
            new ShortSpecification("RAM", "32 GB DDR4"),
            new ShortSpecification("Storage", "1 TB SSD + 2 TB HDD"),
            new ShortSpecification("Graphics", "NVIDIA RTX 3070"),
        ],
        [
            new Image("PRO100012300537", "https://picsum.photos/seed/desktop_4/300/300"),
            new Image("PRO100012300537", "https://picsum.photos/seed/desktop_5/300/300"),
            new Image("PRO100012300537", "https://picsum.photos/seed/desktop_6/300/300"),
        ]
    ),
    new Product(
        "Apple iMac 24-inch",
        "All-in-one desktop with Retina display.",
        1899,
        1700,
        65,
        "CAT111",
        ["silver", "blue"],
        [
            new SpecificationDetails("Processor", "Apple M1 chip"),
            new SpecificationDetails("RAM", "16 GB Unified"),
            new SpecificationDetails("Storage", "512 GB SSD"),
            new SpecificationDetails("Graphics", "Integrated 8-core GPU"),
            new SpecificationDetails("Ports", "USB-C, Thunderbolt"),
            new SpecificationDetails("OS", "macOS Ventura"),
            new SpecificationDetails("Weight", "5 kg"),
            new SpecificationDetails("Warranty", "1 year"),
        ],
        [
            new ShortSpecification("Processor", "Apple M1 chip"),
            new ShortSpecification("RAM", "16 GB Unified"),
            new ShortSpecification("Storage", "512 GB SSD"),
            new ShortSpecification("Graphics", "Integrated 8-core GPU"),
        ],
        [
            new Image("PRO100012301074", "https://picsum.photos/seed/desktop_7/300/300"),
            new Image("PRO100012301074", "https://picsum.photos/seed/desktop_8/300/300"),
            new Image("PRO100012301074", "https://picsum.photos/seed/desktop_9/300/300"),
        ]
    ),
    // Laptop Category
    new Product(
        "MacBook Pro 16-inch",
        "High-performance laptop for professionals.",
        2499,
        2300,
        37,
        "CAT222",
        ["silver"],
        [
            new SpecificationDetails("Processor", "Apple M2 Max"),
            new SpecificationDetails("RAM", "32 GB Unified"),
            new SpecificationDetails("Storage", "1 TB SSD"),
            new SpecificationDetails("Display", "16-inch Retina XDR"),
            new SpecificationDetails("Ports", "USB-C, Thunderbolt, HDMI"),
            new SpecificationDetails("OS", "macOS Ventura"),
            new SpecificationDetails("Battery", "100 Wh"),
            new SpecificationDetails("Weight", "2.1 kg"),
        ],
        [
            new ShortSpecification("Processor", "Apple M2 Max"),
            new ShortSpecification("RAM", "32 GB Unified"),
            new ShortSpecification("Storage", "1 TB SSD"),
            new ShortSpecification("Display", "16-inch Retina XDR"),
        ],
        [
            new Image("PRO100012301611", "https://picsum.photos/seed/laptop_1/300/300"),
            new Image("PRO100012301611", "https://picsum.photos/seed/laptop_2/300/300"),
            new Image("PRO100012301611", "https://picsum.photos/seed/laptop_3/300/300"),
        ]
    ),
    new Product(
        "Dell XPS 13 Plus",
        "Sleek and compact laptop for everyday use.",
        1399,
        1250,
        23,
        "CAT222",
        ["black"],
        [
            new SpecificationDetails("Processor", "Intel Core i7-12700U"),
            new SpecificationDetails("RAM", "16 GB DDR4"),
            new SpecificationDetails("Storage", "512 GB SSD"),
            new SpecificationDetails("Display", "13.4-inch OLED"),
            new SpecificationDetails("Ports", "USB-C, Thunderbolt"),
            new SpecificationDetails("OS", "Windows 11"),
            new SpecificationDetails("Battery", "52 Wh"),
            new SpecificationDetails("Weight", "1.2 kg"),
        ],
        [
            new ShortSpecification("Processor", "Intel Core i7-12700U"),
            new ShortSpecification("RAM", "16 GB DDR4"),
            new ShortSpecification("Storage", "512 GB SSD"),
            new ShortSpecification("Display", "13.4-inch OLED"),
        ],
        [
            new Image("PRO100012302148", "https://picsum.photos/seed/laptop_4/300/300"),
            new Image("PRO100012302148", "https://picsum.photos/seed/laptop_5/300/300"),
            new Image("PRO100012302148", "https://picsum.photos/seed/laptop_6/300/300"),
        ]
    ),
    new Product(
        "ASUS ROG Zephyrus G14",
        "Gaming laptop with powerful specs.",
        1599,
        1400,
        50,
        "CAT222",
        ["white", "black"],
        [
            new SpecificationDetails("Processor", "AMD Ryzen 9 6900HS"),
            new SpecificationDetails("RAM", "16 GB DDR5"),
            new SpecificationDetails("Storage", "1 TB SSD"),
            new SpecificationDetails("Graphics", "NVIDIA RTX 3060"),
            new SpecificationDetails("Display", "14-inch QHD"),
            new SpecificationDetails("Ports", "USB-C, HDMI, DisplayPort"),
            new SpecificationDetails("Battery", "76 Wh"),
            new SpecificationDetails("Weight", "1.7 kg"),
        ],
        [
            new ShortSpecification("Processor", "AMD Ryzen 9 6900HS"),
            new ShortSpecification("RAM", "16 GB DDR5"),
            new ShortSpecification("Graphics", "NVIDIA RTX 3060"),
            new ShortSpecification("Display", "14-inch QHD"),
        ],
        [
            new Image("PRO100012302685", "https://picsum.photos/seed/laptop_7/300/300"),
            new Image("PRO100012302685", "https://picsum.photos/seed/laptop_8/300/300"),
            new Image("PRO100012302685", "https://picsum.photos/seed/laptop_9/300/300"),
        ]
    ),

    // Phone Category
    new Product(
        "iPhone 14 Pro",
        "Flagship smartphone with advanced camera and features.",
        999,
        900,
        74,
        "CAT333",
        ["black", "silver"],
        [
            new SpecificationDetails("Processor", "A16 Bionic"),
            new SpecificationDetails("Display", "6.1-inch Super Retina XDR"),
            new SpecificationDetails("Storage", "128 GB"),
            new SpecificationDetails("Camera", "48 MP main, 12 MP ultra-wide"),
            new SpecificationDetails("Battery", "3,200 mAh"),
            new SpecificationDetails("OS", "iOS 16"),
            new SpecificationDetails("Weight", "206 g"),
            new SpecificationDetails("Waterproof", "IP68"),
        ],
        [
            new ShortSpecification("Processor", "A16 Bionic"),
            new ShortSpecification("Display", "6.1-inch Super Retina XDR"),
            new ShortSpecification("Storage", "128 GB"),
            new ShortSpecification("Camera", "48 MP main, 12 MP ultra-wide"),
        ],
        [
            new Image("PRO100012303222", "https://picsum.photos/seed/phone_1/300/300"),
            new Image("PRO100012303222", "https://picsum.photos/seed/phone_2/300/300"),
            new Image("PRO100012303222", "https://picsum.photos/seed/phone_3/300/300"),
        ]
    ),
    new Product(
        "iPhone 15 Pro",
        "Latest Apple iPhone with powerful A17 chip, Pro camera system, and dynamic island.",
        1099,
        999,
        85,
        "CAT333",
        ["black", "silver"],
        [
            new SpecificationDetails("Screen Size", "6.1 inches"),
            new SpecificationDetails("Processor", "A17 Bionic Chip"),
            new SpecificationDetails("Camera", "48MP main, 12MP ultrawide"),
            new SpecificationDetails("Storage Options", "128GB, 256GB, 512GB"),
            new SpecificationDetails("Battery", "Up to 23 hours video playback"),
            new SpecificationDetails("Operating System", "iOS 17"),
            new SpecificationDetails("Weight", "204 g"),
            new SpecificationDetails("5G", "Yes"),
        ],
        [
            new ShortSpecification("Screen Size", "6.1 inches"),
            new ShortSpecification("Processor", "A17 Bionic Chip"),
            new ShortSpecification("Camera", "48MP main, 12MP ultrawide"),
            new ShortSpecification("Storage Options", "128GB, 256GB, 512GB"),
        ],
        [
            new Image("PRO100012306510", "https://picsum.photos/seed/phone_1/300/300"),
            new Image("PRO100012306510", "https://picsum.photos/seed/phone_2/300/300"),
            new Image("PRO100012306510", "https://picsum.photos/seed/phone_3/300/300"),
        ]
    ),
    new Product(
        "Samsung Galaxy S23 Ultra",
        "Samsung's flagship smartphone with advanced camera and performance.",
        1199,
        1100,
        72,
        "CAT333",
        ["black", "silver"],
        [
            new SpecificationDetails("Screen Size", "6.8 inches"),
            new SpecificationDetails("Processor", "Snapdragon 8 Gen 2"),
            new SpecificationDetails("Camera", "200MP main, 12MP ultrawide, 10MP telephoto"),
            new SpecificationDetails("Storage Options", "256GB, 512GB, 1TB"),
            new SpecificationDetails("Battery", "5000mAh"),
            new SpecificationDetails("Operating System", "Android 13"),
            new SpecificationDetails("Weight", "228 g"),
            new SpecificationDetails("5G", "Yes"),
        ],
        [
            new ShortSpecification("Screen Size", "6.8 inches"),
            new ShortSpecification("Processor", "Snapdragon 8 Gen 2"),
            new ShortSpecification("Camera", "200MP main, 12MP ultrawide, 10MP telephoto"),
            new ShortSpecification("Storage Options", "256GB, 512GB, 1TB"),
        ],
        [
            new Image("PRO100012306800", "https://picsum.photos/seed/phone_4/300/300"),
            new Image("PRO100012306800", "https://picsum.photos/seed/phone_5/300/300"),
            new Image("PRO100012306800", "https://picsum.photos/seed/phone_6/300/300"),
        ]
    ),

    // Monitor Category
    new Product(
        "Dell UltraSharp U2723QE",
        "27-inch 4K monitor with precise color accuracy.",
        799,
        700,
        62,
        "CAT444",
        ["black"],
        [
            new SpecificationDetails("Display Size", "27-inch"),
            new SpecificationDetails("Resolution", "3840 x 2160 (4K)"),
            new SpecificationDetails("Color Accuracy", "99% sRGB"),
            new SpecificationDetails("Ports", "USB-C, HDMI, DisplayPort"),
            new SpecificationDetails("Refresh Rate", "60Hz"),
            new SpecificationDetails("Brightness", "400 nits"),
            new SpecificationDetails("Weight", "5.5 kg"),
            new SpecificationDetails("Panel Type", "IPS"),
        ],
        [
            new ShortSpecification("Display Size", "27-inch"),
            new ShortSpecification("Resolution", "3840 x 2160 (4K)"),
            new ShortSpecification("Color Accuracy", "99% sRGB"),
            new ShortSpecification("Refresh Rate", "60Hz"),
        ],
        [
            new Image("PRO100012304125", "https://picsum.photos/seed/monitor_1/300/300"),
            new Image("PRO100012304125", "https://picsum.photos/seed/monitor_2/300/300"),
            new Image("PRO100012304125", "https://picsum.photos/seed/monitor_3/300/300"),
        ]
    ),
    new Product(
        "Samsung Odyssey G7",
        "32-inch curved gaming monitor with high refresh rate.",
        699,
        650,
        50,
        "CAT444",
        ["black"],
        [
            new SpecificationDetails("Display Size", "32-inch"),
            new SpecificationDetails("Resolution", "2560 x 1440 (QHD)"),
            new SpecificationDetails("Refresh Rate", "240Hz"),
            new SpecificationDetails("Curvature", "1000R"),
            new SpecificationDetails("Ports", "HDMI, DisplayPort, USB"),
            new SpecificationDetails("Brightness", "600 nits"),
            new SpecificationDetails("Weight", "6.5 kg"),
            new SpecificationDetails("Panel Type", "VA"),
        ],
        [
            new ShortSpecification("Display Size", "32-inch"),
            new ShortSpecification("Resolution", "2560 x 1440 (QHD)"),
            new ShortSpecification("Refresh Rate", "240Hz"),
            new ShortSpecification("Curvature", "1000R"),
        ],
        [
            new Image("PRO100012304875", "https://picsum.photos/seed/monitor_4/300/300"),
            new Image("PRO100012304875", "https://picsum.photos/seed/monitor_5/300/300"),
            new Image("PRO100012304875", "https://picsum.photos/seed/monitor_6/300/300"),
        ]
    ),
    new Product(
        "LG 34WN80C-B",
        "34-inch ultrawide monitor for productivity and content creation.",
        499,
        450,
        38,
        "CAT444",
        ["black"],
        [
            new SpecificationDetails("Display Size", "34-inch"),
            new SpecificationDetails("Resolution", "2560 x 1080 (Ultrawide)"),
            new SpecificationDetails("Refresh Rate", "60Hz"),
            new SpecificationDetails("Ports", "USB-C, HDMI, DisplayPort"),
            new SpecificationDetails("Brightness", "250 nits"),
            new SpecificationDetails("Weight", "5.5 kg"),
            new SpecificationDetails("Panel Type", "IPS"),
            new SpecificationDetails("Aspect Ratio", "21:9"),
        ],
        [
            new ShortSpecification("Display Size", "34-inch"),
            new ShortSpecification("Resolution", "2560 x 1080 (Ultrawide)"),
            new ShortSpecification("Refresh Rate", "60Hz"),
            new ShortSpecification("Aspect Ratio", "21:9"),
        ],
        [
            new Image("PRO100012305021", "https://picsum.photos/seed/monitor_7/300/300"),
            new Image("PRO100012305021", "https://picsum.photos/seed/monitor_8/300/300"),
            new Image("PRO100012305021", "https://picsum.photos/seed/monitor_9/300/300"),
        ]
    ),

    // Headphone Category
    new Product(
        "Sony WH-1000XM5",
        "Premium noise-canceling wireless headphones.",
        349,
        300,
        92,
        "CAT555",
        ["black"],
        [
            new SpecificationDetails("Type", "Over-ear"),
            new SpecificationDetails("Battery Life", "30 hours"),
            new SpecificationDetails("Noise Cancelling", "Yes"),
            new SpecificationDetails("Bluetooth", "5.0"),
            new SpecificationDetails("Weight", "250 g"),
            new SpecificationDetails("Connectivity", "Wireless, USB-C"),
            new SpecificationDetails("Microphone", "Yes"),
            new SpecificationDetails("Audio Quality", "High-res audio"),
        ],
        [
            new ShortSpecification("Type", "Over-ear"),
            new ShortSpecification("Battery Life", "30 hours"),
            new ShortSpecification("Noise Cancelling", "Yes"),
            new ShortSpecification("Connectivity", "Wireless, USB-C"),
        ],
        [
            new Image("PRO100012305536", "https://picsum.photos/seed/headphone_1/300/300"),
            new Image("PRO100012305536", "https://picsum.photos/seed/headphone_2/300/300"),
            new Image("PRO100012305536", "https://picsum.photos/seed/headphone_3/300/300"),
        ]
    ),
    new Product(
        "Bose QuietComfort 45",
        "Comfortable noise-canceling headphones with superior sound.",
        329,
        280,
        68,
        "CAT555",
        ["white"],
        [
            new SpecificationDetails("Type", "Over-ear"),
            new SpecificationDetails("Battery Life", "24 hours"),
            new SpecificationDetails("Noise Cancelling", "Yes"),
            new SpecificationDetails("Bluetooth", "5.1"),
            new SpecificationDetails("Weight", "240 g"),
            new SpecificationDetails("Connectivity", "Wireless, USB-C"),
            new SpecificationDetails("Microphone", "Yes"),
            new SpecificationDetails("Audio Quality", "High-fidelity sound"),
        ],
        [
            new ShortSpecification("Type", "Over-ear"),
            new ShortSpecification("Battery Life", "24 hours"),
            new ShortSpecification("Noise Cancelling", "Yes"),
            new ShortSpecification("Connectivity", "Wireless, USB-C"),
        ],
        [
            new Image("PRO100012306021", "https://picsum.photos/seed/headphone_4/300/300"),
            new Image("PRO100012306021", "https://picsum.photos/seed/headphone_5/300/300"),
            new Image("PRO100012306021", "https://picsum.photos/seed/headphone_6/300/300"),
        ]
    ),
    new Product(
        "Sennheiser Momentum 4",
        "High-quality wireless headphones with great sound.",
        379,
        320,
        54,
        "CAT555",
        ["black", "silver"],
        [
            new SpecificationDetails("Type", "Over-ear"),
            new SpecificationDetails("Battery Life", "38 hours"),
            new SpecificationDetails("Noise Cancelling", "Yes"),
            new SpecificationDetails("Bluetooth", "5.0"),
            new SpecificationDetails("Weight", "300 g"),
            new SpecificationDetails("Connectivity", "Wireless, USB-C"),
            new SpecificationDetails("Microphone", "Yes"),
            new SpecificationDetails("Audio Quality", "High-fidelity sound"),
        ],
        [
            new ShortSpecification("Type", "Over-ear"),
            new ShortSpecification("Battery Life", "38 hours"),
            new ShortSpecification("Noise Cancelling", "Yes"),
            new ShortSpecification("Connectivity", "Wireless, USB-C"),
        ],
        [
            new Image("PRO100012306431", "https://picsum.photos/seed/headphone_7/300/300"),
            new Image("PRO100012306431", "https://picsum.photos/seed/headphone_8/300/300"),
            new Image("PRO100012306431", "https://picsum.photos/seed/headphone_9/300/300"),
        ]
    ),
];
