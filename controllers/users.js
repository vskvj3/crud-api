export const getUser = (req, res)=>{
    res.send(users);
}

export const createUser = (req, res)=>{
    const user = req.body;

    users.push({ ...user, id: uuidv4()});

    res.send('user added to the database');
}

export const deleteUser = (req, res)=>{
    const {id} = req.params;

    users = users.filter((user) => user.id !== id)

    res.send(`user with id: ${id} deleted from the database`);
}

export const updateUser = (req, res)=> {
    const {id} = req.params;

    const {firstName, lastName, age} = req.body;

    const user = users.find((user)=> user.id === id);

    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;

    res.send('updated user');
}

export const getUserWithID = (req, res)=>{

    const {id} = req.params;

    const foundUser = users.find((user)=> user.id===id);

    res.send(foundUser);
}

