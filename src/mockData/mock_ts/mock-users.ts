/*import { Address } from "../../app/models/Address";
import { User } from "../../app/models/User";

export const listUsers: User[] = [
    new User("alice_s@gmail.com", "pass1", "Alice", "Smith", "1234567891",
        new Address("10 Main St", "Montreal", "QC", "H1A 2B3", "Canada")
    ),
    new User("bob_j@gmail.com", "pass2", "Bob", "Johnson", "2234567892",
        new Address("20 Elm St", "Toronto", "ON", "M4B 1B4", "Canada")
    ),
    new User("charlie_b@outlook.ca", "pass3", "Charlie", "Brown", "3234567893",
        new Address("30 Maple Ave", "Vancouver", "BC", "V5K 3Z4", "Canada")
    ),
    new User("david_t@gmail.com", "pass4", "David", "Taylor", "4234567894",
        new Address("40 Oak Blvd", "Calgary", "AB", "T2P 5C4", "Canada")
    ),
    new User("eva_d@outlook.ca", "pass5", "Eva", "Davis", "5234567895",
        new Address("50 Birch Rd", "Montreal", "QC", "H2X 1Y7", "Canada")
    ),
    new User("frank_g@outlook.ca", "pass6", "Frank", "Garcia", "6234567896",
        new Address("60 Cedar Ln", "Toronto", "ON", "M5A 4E2", "Canada")
    ),
    new User("grace_m@gmail.com", "pass7", "Grace", "Martinez", "7234567897",
        new Address("70 Pine Ct", "Vancouver", "BC", "V6B 5T1", "Canada")
    ),
    new User("hannah_w@gmail.com", "pass8", "Hannah", "Wilson", "8234567898",
        new Address("80 Walnut Dr", "Ottawa", "ON", "K1A 0B1", "Canada")
    ),
    new User("isaac_l@gmail.com", "pass9", "Isaac", "Lopez", "9234567899",
        new Address("90 Poplar St", "Quebec City", "QC", "G1A 1C5", "Canada")
    ),
    new User("julia_c@outlook.ca", "pass10", "Julia", "Clark", "1034567890",
        new Address("100 Cherry Pl", "Montreal", "QC", "H3A 2R7", "Canada")
    ),
    new User("kyle_l@yahoo.ca", "pass11", "Kyle", "Lewis", "1134567891",
        new Address("110 Palm Way", "Toronto", "ON", "M5J 2N2", "Canada")
    ),
    new User("laura_w@outlook.ca", "pass12", "Laura", "Walker", "1234567892",
        new Address("120 Fir St", "Vancouver", "BC", "V6J 4A3", "Canada")
    ),
    new User("michael_a@outlook.ca", "pass13", "Michael", "Allen", "1334567893",
        new Address("130 Spruce Blvd", "Calgary", "AB", "T3A 5R6", "Canada")
    ),
    new User("nina_y@gmail.com", "pass14", "Nina", "Young", "1434567894",
        new Address("140 Chestnut Rd", "Montreal", "QC", "H3B 2V9", "Canada")
    ),
    new User("oscar_h@yahoo.ca", "pass15", "Oscar", "Hernandez", "1534567895",
        new Address("150 Aspen Dr", "Toronto", "ON", "M4C 1Z2", "Canada")
    )
]

// output
/*
_id       │ _email                 │ _password │ _firstName │ _lastName   │ _phone
'USE1000' │ 'alice_s@gmail.com'    │ 'pass1'   │ 'Alice'    │ 'Smith'     │ '1234567891'
'USE1037' │ 'bob_j@gmail.com'      │ 'pass2'   │ 'Bob'      │ 'Johnson'   │ '2234567892'
'USE1074' │ 'charlie_b@outlook.ca' │ 'pass3'   │ 'Charlie'  │ 'Brown'     │ '3234567893'
'USE1111' │ 'david_t@gmail.com'    │ 'pass4'   │ 'David'    │ 'Taylor'    │ '4234567894'
'USE1148' │ 'eva_d@outlook.ca'     │ 'pass5'   │ 'Eva'      │ 'Davis'     │ '5234567895'
'USE1185' │ 'frank_g@outlook.ca'   │ 'pass6'   │ 'Frank'    │ 'Garcia'    │ '6234567896'
'USE1222' │ 'grace_m@gmail.com'    │ 'pass7'   │ 'Grace'    │ 'Martinez'  │ '7234567897'
'USE1259' │ 'hannah_w@gmail.com'   │ 'pass8'   │ 'Hannah'   │ 'Wilson'    │ '8234567898'
'USE1296' │ 'isaac_l@gmail.com'    │ 'pass9'   │ 'Isaac'    │ 'Lopez'     │ '9234567899'
'USE1333' │ 'julia_c@outlook.ca'   │ 'pass10'  │ 'Julia'    │ 'Clark'     │ '1034567890'
'USE1370' │ 'kyle_l@yahoo.ca'      │ 'pass11'  │ 'Kyle'     │ 'Lewis'     │ '1134567891'
'USE1407' │ 'laura_w@outlook.ca'   │ 'pass12'  │ 'Laura'    │ 'Walker'    │ '1234567892'
'USE1444' │ 'michael_a@outlook.ca' │ 'pass13'  │ 'Michael'  │ 'Allen'     │ '1334567893'
'USE1481' │ 'nina_y@gmail.com'     │ 'pass14'  │ 'Nina'     │ 'Young'     │ '1434567894'
'USE1518' │ 'oscar_h@yahoo.ca'     │ 'pass15'  │ 'Oscar'    │ 'Hernandez' │ '1534567895'
*/
