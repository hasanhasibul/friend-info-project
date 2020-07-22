var fakeData = [
    {"name": "Hasibul Hasan","email" : "Hasibul@gmail.com","img" : "https://scontent.fdac4-1.fna.fbcdn.net/v/t1.0-9/88309048_615487049298066_2029337013311766528_n.jpg?_nc_cat=110&_nc_sid=85a577&_nc_eui2=AeEqbZKU7tYsPfAj6M4jkFmzAjxe1V9ZlOACPF7VX1mU4Makl66BPNVH8ILH_rRn-i3JLN4YxeOjKqmWnxyEmTYd&_nc_ohc=p_AhtOp2HzcAX_VKWXK&_nc_ht=scontent.fdac4-1.fna&oh=bf20c64d0245687e726f05b8d9f3425c&oe=5EDC894E","phone" : "01915190007","profession" : "Web Developer","salary" :"500000","gender" : "Male"},
    {"name": "Sakib Al Hasan","email" : "sakibalhasan@gmail.com","img" : "https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","phone" : "01715190007","profession" : "Cricketer","salary" :"600000","gender" : "Male"},
    {"name": "Tushar Ahmed","email" : "tusharahmed@gmail.com","img" : "https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","phone" : "01315190007","profession" : "wordpress developer","salary" :"505000","gender" : "Male"},
    {"name": "Masud Rana","email" : "masudrana@gmail.com","img" : "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","phone" : "01445190007","profession" : "Front-End-Developer","salary" :"45000","gender" : "Male"},
    {"name": "Mottaleb Betal","email" : "betal@gmail.com","img" : "https://images.pexels.com/photos/903661/pexels-photo-903661.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","phone" : "01665190007","profession" : "Android Developer","salary" :"65000","gender" : "Male"},
    {"name": "Moshfiqur Rahman","email" : "mushi@gmail.com","img" : "https://images.pexels.com/photos/262391/pexels-photo-262391.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","phone" : "077190007","profession" : "Mac Developer","salary" :"775000","gender" : "Male"},
    {"name": "Nazim Uddin","email" : "nazim@gmail.com","img" : "https://images.pexels.com/photos/888956/pexels-photo-888956.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","phone" : "01555190007","profession" : "Business","salary" :"445000","gender" : "Male"},
    {"name": "Tushar Ahmed","email" : "tusharahmed@gmail.com","img" : "https://images.pexels.com/photos/897817/pexels-photo-897817.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","phone" : "01315190007","profession" : "wordpress developer","salary" :"455000","gender" : "Male"},
    {"name": "Annie Marrie","email" : "annie@gmail.com","img" : "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","phone" : "01315190007","profession" : "Singer","salary" :"885000","gender" : "Female"},
    {"name": "Flora ","email" : "flora@gmail.com","img" : "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","phone" : "01315190007","profession" : "Job Holder","salary" :"335000","gender" : "Female"},
    {"name": "Himu","email" : "himu@gmail.com","img" : "https://images.pexels.com/photos/756453/pexels-photo-756453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","phone" : "017715190007","profession" : "Employee","salary" :"222000","gender" : "Female"},
    {"name": "Tabassum Rinik","email" : "rinik@gmail.com","img" : "https://images.pexels.com/photos/1090387/pexels-photo-1090387.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","phone" : "01315197","profession" : "Job holder","salary" :"995000","gender" : "Female"},
    {"name": "Bristy Akter ","email" : "akter@gmail.com","img" : "https://images.pexels.com/photos/372042/pexels-photo-372042.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","phone" : "015190007","profession" : "Doctor","salary" :"335000","gender" : "Female"},
    {"name": "Shanta Islam","email" : "Islam@gmail.com","img" : "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","phone" : "01333390007","profession" : "Student","salary" :"667000","gender" : "Female"},
    {"name": "Afrin Lima","email" : "afrin@gmail.com","img" : "https://images.pexels.com/photos/1062280/pexels-photo-1062280.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","phone" : "013190007","profession" : "Lecturer","salary" :"600000","gender" : "Female"},   
]
const shuffle = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}
shuffle(fakeData);
export default fakeData ;