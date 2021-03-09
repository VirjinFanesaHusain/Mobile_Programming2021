export const fullName = "Virjin Fanesa";

export const person = {
    firstName: "Virjin",
    lastName: "Fanesa",
    age: 20,
};

export const display = ({firstName, lastName}) => {
    console.log(`Hello ${firstName} ${lastName}`);
};

export { fullName, person, display};