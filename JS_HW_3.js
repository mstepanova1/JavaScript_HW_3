// Пример:
a = {name: 'Andrey'}
b = a
a['flat'] = 75
b = JSON.parse(JSON.stringify(a))
a['rooms'] = 3
console.log(b)
console.log(a)

// Task 1
// Написать функцию, которая найдет и выведет в консоль юзеров, зарегистрированных 09.10.2021 и 10.10.2021.

const users = [
    {
        firstName: 'John',
        lastName: 'Caper',
        phone: '7436676737634',
        registrationDate: '12.10.2021'
    },
    {
        firstName: 'Clark',
        lastName: 'Kent',
        phone: '4346676737634',
        registrationDate: '16.09.2021'
    },
    {
        firstName: 'Tony',
        lastName: 'Stark',
        phone: '7436698337634',
        registrationDate: '11.10.2021'
    },
    {
        firstName: 'Bruce',
        lastName: 'Wayne',
        phone: '1111176737634',
        registrationDate: '09.10.2021'
    },
    {
        firstName: 'Star',
        lastName: 'Lord',
        phone: '7439374737634',
        registrationDate: '10.10.2021'
    },
    {
        firstName: 'Kate',
        lastName: 'Bishop',
        phone: '7436693647634',
        registrationDate: '11.10.2021'
    },
    {
        firstName: 'Jerry',
        lastName: 'James',
        phone: '7409048737634',
        registrationDate: '10.10.2021'
    },
    {
        firstName: 'Jeremy',
        lastName: 'Clarkson',
        phone: '743667600289334',
        registrationDate: '16.10.2020'
    },
    {
        firstName: 'Robert',
        lastName: 'Patrik',
        phone: '7436676730093',
        registrationDate: '10.10.2020'
    },
    {
        firstName: 'Jonny',
        lastName: 'Sins',
        phone: '74923982737634',
        registrationDate: '01.01.2021'
    },
    {
        firstName: 'Andrew',
        lastName: 'Garfield',
        phone: '743667988344',
        registrationDate: '09.10.2019'
    },
    {
        firstName: 'Jane',
        lastName: 'Foster',
        phone: '74368783427634',
        registrationDate: '09.10.2019'
    },
    {
        firstName: 'Rick',
        lastName: 'Smith',
        phone: '700000037634',
        registrationDate: '12.10.2021'
    },
];
const registrationDate = user => user.registrationDate === '09.10.2021' || user.registrationDate === '10.10.2021'
const usersFiltered = users.filter(registrationDate)
console.log(usersFiltered)

// Task 2*
// Дан массив объектов. Каждый объект является идентификационной карточкой человека. Нам нужно хранить только уникальные значения в этом массиве.
// Реализуйте функцию, которая будет выполнять эту работу.

const users2 = [{
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
            lat: "-37.3159",
            lng: "81.1496"
        }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
    }
},
{
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    address: {
        street: "Douglas Extension",
        suite: "Suite 847",
        city: "McKenziehaven",
        zipcode: "59590-4157",
        geo: {
            lat: "-68.6102",
            lng: "-47.0653"
        }
    },
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: {
        name: "Romaguera-Jacobson",
        catchPhrase: "Face to face bifurcated interface",
        bs: "e-enable strategic applications"
    }
},
{
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
        street: "Victor Plains",
        suite: "Suite 879",
        city: "Wisokyburgh",
        zipcode: "90566-7771",
        geo: {
            lat: "-43.9509",
            lng: "-34.4618"
        }
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
        name: "Deckow-Crist",
        catchPhrase: "Proactive didactic contingency",
        bs: "synergize scalable supply-chains"
    }
},
{
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    address: {
        street: "Douglas Extension",
        suite: "Suite 847",
        city: "McKenziehaven",
        zipcode: "59590-4157",
        geo: {
            lat: "-68.6102",
            lng: "-47.0653"
        }
    },
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: {
        name: "Romaguera-Jacobson",
        catchPhrase: "Face to face bifurcated interface",
        bs: "e-enable strategic applications"
    }
},
{
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    address: {
        street: "Hoeger Mall",
        suite: "Apt. 692",
        city: "South Elvis",
        zipcode: "53919-4257",
        geo: {
            lat: "29.4572",
            lng: "-164.2990"
        }
    },
    phone: "493-170-9623 x156",
    website: "kale.biz",
    company: {
        name: "Robel-Corkery",
        catchPhrase: "Multi-tiered zero tolerance productivity",
        bs: "transition cutting-edge web services"
    }
},
{
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    address: {
        street: "Skiles Walks",
        suite: "Suite 351",
        city: "Roscoeview",
        zipcode: "33263",
        geo: {
            lat: "-31.8129",
            lng: "62.5342"
        }
    },
    phone: "(254)954-1289",
    website: "demarco.info",
    company: {
        name: "Keebler LLC",
        catchPhrase: "User-centric fault-tolerant solution",
        bs: "revolutionize end-to-end systems"
    }
},
{
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    address: {
        street: "Douglas Extension",
        suite: "Suite 847",
        city: "McKenziehaven",
        zipcode: "59590-4157",
        geo: {
            lat: "-68.6102",
            lng: "-47.0653"
        }
    },
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: {
        name: "Romaguera-Jacobson",
        catchPhrase: "Face to face bifurcated interface",
        bs: "e-enable strategic applications"
    }
},
{
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    address: {
        street: "Norberto Crossing",
        suite: "Apt. 950",
        city: "South Christy",
        zipcode: "23505-1337",
        geo: {
            lat: "-71.4197",
            lng: "71.7478"
        }
    },
    phone: "1-477-935-8478 x6430",
    website: "ola.org",
    company: {
        name: "Considine-Lockman",
        catchPhrase: "Synchronised bottom-line interface",
        bs: "e-enable innovative applications"
    }
},
{
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    address: {
        street: "Rex Trail",
        suite: "Suite 280",
        city: "Howemouth",
        zipcode: "58804-1099",
        geo: {
            lat: "24.8918",
            lng: "21.8984"
        }
    },
    phone: "210.067.6132",
    website: "elvis.io",
    company: {
        name: "Johns Group",
        catchPhrase: "Configurable multimedia task-force",
        bs: "generate enterprise e-tailers"
    }
},
{
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    address: {
        street: "Kattie Turnpike",
        suite: "Suite 198",
        city: "Lebsackbury",
        zipcode: "31428-2261",
        geo: {
            lat: "-38.2386",
            lng: "57.2232"
        }
    },
    phone: "024-648-3804",
    website: "ambrose.net",
    company: {
        name: "Hoeger LLC",
        catchPhrase: "Centralized empowering task-force",
        bs: "target end-to-end models"
    }
},
{
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
            lat: "-37.3159",
            lng: "81.1496"
        }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
    }
},
{
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    address: {
        street: "Ellsworth Summit",
        suite: "Suite 729",
        city: "Aliyaview",
        zipcode: "45169",
        geo: {
            lat: "-14.3990",
            lng: "-120.7677"
        }
    },
    phone: "586.493.6943 x140",
    website: "jacynthe.com",
    company: {
        name: "Abernathy Group",
        catchPhrase: "Implemented secondary concept",
        bs: "e-enable extensible e-tailers"
    }
},
{
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    address: {
        street: "Douglas Extension",
        suite: "Suite 847",
        city: "McKenziehaven",
        zipcode: "59590-4157",
        geo: {
            lat: "-68.6102",
            lng: "-47.0653"
        }
    },
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: {
        name: "Romaguera-Jacobson",
        catchPhrase: "Face to face bifurcated interface",
        bs: "e-enable strategic applications"
    }
},
{
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    address: {
        street: "Dayna Park",
        suite: "Suite 449",
        city: "Bartholomebury",
        zipcode: "76495-3109",
        geo: {
            lat: "24.6463",
            lng: "-168.8889"
        }
    },
    phone: "(775)976-6794 x41206",
    website: "conrad.com",
    company: {
        name: "Yost and Sons",
        catchPhrase: "Switchable contextually-based project",
        bs: "aggregate real-time technologies"
    }
},
{
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    address: {
        street: "Kattie Turnpike",
        suite: "Suite 198",
        city: "Lebsackbury",
        zipcode: "31428-2261",
        geo: {
            lat: "-38.2386",
            lng: "57.2232"
        }
    },
    phone: "024-648-3804",
    website: "ambrose.net",
    company: {
        name: "Hoeger LLC",
        catchPhrase: "Centralized empowering task-force",
        bs: "target end-to-end models"
    }
},
{
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    address: {
        street: "Norberto Crossing",
        suite: "Apt. 950",
        city: "South Christy",
        zipcode: "23505-1337",
        geo: {
            lat: "-71.4197",
            lng: "71.7478"
        }
    },
    phone: "1-477-935-8478 x6430",
    website: "ola.org",
    company: {
        name: "Considine-Lockman",
        catchPhrase: "Synchronised bottom-line interface",
        bs: "e-enable innovative applications"
    }
}
]
let uniquePersons = []
users2.forEach((el) => {
    if (uniquePersons.indexOf(JSON.stringify(el)) === -1) {
        uniquePersons.push(JSON.stringify(el));
    }
});
console.log(uniquePersons)

// Task 2*** 
// Реализуйте считывание JSONки из файла task2.json с помощью, например, модуля 'fs' для дальнейшего использования в функции, описанной в задании.

const fs = require('fs')
const users3 = JSON.parse(fs.readFileSync("./task2.json"))
let checkid = Array.from(new Set(users3.map(item => JSON.stringify(item)))).map(item => JSON.parse(item));
console.log(checkid)

// Task 3**

const enterprises = [
    {
      id: 1,
      name: "Предприятие 1",
      departments: [
        {
          id: 2,
          name: "Отдел тестирования",
          employees_count: 10,
        },
        {
          id: 3,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 4,
          name: "Администрация",
          employees_count: 15,
        },
      ]
    },
    {
      id: 5,
      name: "Предприятие 2",
      departments: [
        {
          id: 6,
          name: "Отдел разработки",
          employees_count: 50,
        },
        {
          id: 7,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 8,
          name: "Отдел охраны труда",
          employees_count: 5,
        },
      ]
    },
    {
      id: 9,
      name: "Предприятие 3",
      departments: [
        {
          id: 10,
          name: "Отдел аналитики",
          employees_count: 0,
        },
      ]
    }
]

// 3.1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.
// Пример:
/*
Предприятие 1 (45 сотрудников)
- Отдел тестирования (10 сотрудников)
- Отдел маркетинга (20 сотрудников)
- Администрация (15 человек)
Предприятие 2 (75 сотрудников)
- Отдел разработки (50 сотрудников)
- Отдел маркетинга (20 сотрудников)
- Отдел охраны труда (5 сотрудников)
Предприятие 3 (нет сотрудников)
- Отдел аналитики (нет сотрудников)
*/

const employeesCount = function (number) {
    number = number.toString().split('').pop();
    if (number) {
        if (number == 1) return "сотрудник";
        else if (number > 1 && number < 5) return "сотрудника";
        else return "сотрудников";
    } else return "(нет сотрудников)";

};
const getDepartments = function (companies) {
    companies.forEach((company) => {
        let depts = [];
        let count = 0;
        depts.push(company.name);
        if (company.departments) {
            company.departments.forEach((dept) => {
                count += +dept.employees_count;
                if (dept.employees_count) {
                    depts.push(`- ${dept.name} (${dept.employees_count} ${employeesCount(dept.employees_count)})`);
                } else depts.push(`- ${dept.name} (нет сотрудников)`);
            });
            if (count) {
                depts[0] += ` (${count} ${employeesCount(count)})`;
            } else depts[0] += ` (нет сотрудников)`;
        }
        console.log(depts.join(`\n\ `));
    });
};
getDepartments(enterprises);

// 3.2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать название предприятия, к которому относится).
// Пример:
// getEnterpriseName(4) // Предприятие 1
// getEnterpriseName("Отдел маркетинга") // Предприятие 2

const getEnterpriseName = function(val) {
    let enterprise
    enterprises.forEach(ent => {
        let department
        if (ent.departments) {
            department = ent.departments.find(dept => { return dept.id == val || dept.name == val})
        }
        if (department) {
            enterprise = ent;
        }
    })
    return enterprise ? enterprise : 'Нет организации с таким отделом'
}
console.log(getEnterpriseName("Отдел маркетинга"))
console.log(getEnterpriseName(4))

// 3.3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия.
// Пример:
// addEnterprise("Название нового предприятия")

const getNewId = function(company) {
    let maxId = company[0].id;
    company.forEach((el) => {
        if (maxId = el.id) {
            maxId = el.id;
        }
        if (el.departments) {
            el.departments.forEach((elem) => {
                if (maxId < elem.id) {
                    maxId = elem.id;
                }
            });
        }
    });
    return maxId + 1;
}
const addEnterprise = function(name) {
    enterprises.push ({
        id: getNewId(enterprises),
        name: name,
        departments: []
    })
}
addEnterprise('Тестирование')

// 3.4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.
// Пример:
// addDepartment(1, "Название нового отдела")

const getEnterprise = function (val) {
    let enterprise = enterprises.find(el => el.id == val || el.name == val);
    return enterprise ? enterprise : 'Нет такой организации'
}
const addDepartment = function(id, name, employees_count = 0) {
    const enterprise = getEnterprise(id)
    if(typeof enterprise == 'object') {
        enterprise.departments.push({
            id: getNewId(enterprises),
            name: name,
            employees_count: employees_count,
        })
    } else console.log('Нет такой организации')
}
addDepartment(11, "AQA", 20)
addDepartment(11, "Мануальные тестировщики", 20)
console.log(getEnterprise(11))

// 3.5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.
// Пример:
// editEnterprise(1, "Новое название предприятия")

const editEnterprise = function(val, name) {
    const enterprise = getEnterprise(val)
    if (typeof enterprise == 'object') {
        enterprise.name = name;
    } else console.log(enterprise)
}
editEnterprise(11, 'Тестировщики')
console.log(getEnterprise(11))

// 3.6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.
// Пример:
// editDepartment(7, "Новое название отдела")

const getDepartment = function(val) {
    let department;
    enterprises.forEach((company) => {
        const dept = company.departments.find((el) => {
            return el.id == val || el.name == val;
        });
        if (dept) department = dept;
    });
    return department ? department : 'Нет такого отдела'
}
const editDepartment = function(val, name) {
    const department = getDepartment(val)
    if(typeof department == 'object') {
        department.name = name
    } else console.log(department)
}
editDepartment(12, 'Автотестировщики')
console.log(getEnterprise(11))

// 3.7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.
// Пример:
// deleteEnterprise(1)

const deleteEnterprise = function(id) {
    enterprises.forEach((enterprise, index) => {
        if (enterprise.id === id) {
            enterprises.splice(index,1);
        }
    })
}
deleteEnterprise(1)

// 3.8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.
// Пример:
// deleteDepartment(3)

let deleteDepartment = function (id) {
    enterprises.forEach(e => {
        let index = e.departments.findIndex(d => d.id === id && d.employees_count === 0);
        if (index !== -1) {
            e.departments.splice(index,1);
        }
    })
}
deleteDepartment(3);
console.log(enterprises)

// 3.9. Написать функцию для переноса сотрудников между отделами одного предприятия.
// В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники.
// Пример:
// moveEmployees(2, 3)

const moveEmployees = function (currentId, newId) {
    let currentDepartment = getDepartment(currentId);
    let newDepartment = getDepartment(newId)
    if (typeof currentDepartment == 'object' && typeof newDepartment == 'object') {
        newDepartment.employees_count += currentDepartment.employees_count;
        currentDepartment.employees_count = 0
    } else console.log('Нет такого отдела')
}
moveEmployees(13, 12);
console.log(getEnterprise(11))

// Task 4****
// Написать функцию: Функция строит древовидный список компании.
// При ее вызове в консоль должен вывестись список подразделений компании с указанием количества сотрудников и с соблюдение вложенности подразделений.
// Пример:
/* 
Компания (10)
-- Отдел тестирования (7)
---- Тестирование Web (5)
---- Тестирование Mobile (0)
-- Отдел маркетинга (30)
-- Администрация (25)
---- Бухгалтерия (10)
---- Менеджмент (15)
------ Подраздел менеджмента 1 (5)
------ Подраздел менеджмента 2 (10)
---- HR (1)
*/

const company = [
    {
      id: 1,
      name: "Компания",
      parent: null,
      users_count: 10,
      children: [
        {
          id: 2,
          name: "Отдел тестирования",
          parent: 1,
          users_count: 7,
          children: [
            {
              id: 2,
              name: "Тестирование Web",
              parent: 2,
              users_count: 5,
            },
            {
              id: 3,
              name: "Тестирование Mobile",
              parent: 2,
              users_count: 0,
            },
          ]
        },
        {
          id: 4,
          name: "Отдел маркетинга",
          parent: 1,
          users_count: 30,
        },
        {
          id: 5,
          name: "Администрация",
          parent: 1,
          users_count: 25,
          children: [
            {
              id: 6,
              name: "Бухгалтерия",
              parent: 5,
              users_count: 10,
            },
            {
              id: 7,
              name: "Менеджмент",
              parent: 5,
              users_count: 15,
              children: [
                {
                  id: 8,
                  name: "Подраздел менеджмента 1",
                  parent: 7,
                  users_count: 5,
                },
                {
                  id: 9,
                  name: "Подраздел менеджмента 2",
                  parent: 7,
                  users_count: 10,
                }
              ]
            },
            {
              id: 10,
                 name: "HR",
                parent: 5,
              users_count: 1,
            }
          ]
        },
      ]
    }
]
const checkArray = function (company, counter = "") {
    company.forEach((comp) => {
        console.log(`${counter}${counter === "" ? "" : " "}${comp.name} (${comp.users_count})`);
        if (comp.children) {
            counter += "--";
            checkArray(comp.children, counter);
            counter = counter.slice(0, -2);
        }
    });
};
checkArray(company)