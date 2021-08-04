
const Validator = (value) => {
    const errors  = {
        email: "",
        password: ""
    }

    if (!value.email){
        errors.email = "Email is required"
    } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value.email)) {
        errors.email = "Email is invalid"
    }

    if (!value.password){
        errors.password = "Password is required"
    } else if (value.password.length < 6) {
        errors.password = "password character should be greater than 6";
    }

    return errors;
}

export default Validator;
