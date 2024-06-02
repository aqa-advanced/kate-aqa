const users = [
    {name: 'Kate', email: 'sjhcb@gmail.com', age: 28},
    {name: 'James', email: 'test@gmail.com', age: 38},
    {name: 'Den', email: 'dklsvm@gmail.com', age: 63},
];
for (const user of users){
    const {name,email,age} = user;
    console.log(`name: ${name}, email: ${email}, age: ${age}`);
}