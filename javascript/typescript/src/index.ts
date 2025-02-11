interface User {
    id: number;
    name: string;
    email: string;
    age: number;
    isAdmin: boolean;
}

function updateUser(user: User, fields: Partial<User>): User {
    return { ...user, ...fields };
}

const user: User = {
    id: 1,
    name: "Ashton",
    email: "ashton@example.com",
    age: 15,
    isAdmin: false,
};

const updatedUser = updateUser(user, { name: "Jack", age: 16 });
console.log(updatedUser);

function validateUpdateFields(fields: Partial<User>): void {
    if ("id" in fields) throw new Error("The 'id' field cannot be updated.");
}

try {
    validateUpdateFields({ id: 2 });
} catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    }
}

const validFields = { name: "Jack", age: 16 };
validateUpdateFields(validFields);