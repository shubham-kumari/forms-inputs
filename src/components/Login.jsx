import Input from "./Input";
import { hasMinLength, isEmail, isNotEmpty } from "../util/validation";
import { useInput } from "../hooks/useInput";

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [enteredValue, setEnteredValue] = useState({
  //   email: "",
  //   password: "",
  // });

  // const [didEdit, setDidEdit] = useState({
  //   email: false,
  //   password: false,
  // });

  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError
  } = useInput("", (value) => hasMinLength(value, 6));

  // const emailIsInvalid =
  //   didEdit.email &&
  //   !isEmail(enteredValue.email) &&
  //   !isNotEmpty(enteredValue.email);
  // const passwordIsInvalid =
  //   didEdit.password && !hasMinLength(enteredValue.password, 6);

  function handleSubmit(event) {
    event.preventDefault();

    if(emailHasError || passwordHasError){
      return;
    }
    console.log(emailValue, passwordValue);
  }

  // function handleInputChange(identifier, value) {
  //   setEnteredValue((prevValues) => ({
  //     ...prevValues,
  //     [identifier]: value,
  //   }));
  //   setDidEdit((prevEdit) => ({
  //     ...prevEdit,
  //     [identifier]: false,
  //   }));
  // }
  // function handleInputBlur(identifier) {
  //   setDidEdit((prevEdit) => ({
  //     ...prevEdit,
  //     [identifier]: true,
  //   }));
  // }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          lable="Email"
          id="email"
          type="email"
          name="email"
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          value={emailValue}
          error={emailHasError && "Please enter a valid email"}
        />
        <Input
          lable="Password"
          id="password"
          type="password"
          name="password"
          onBlur={handlePasswordBlur}
          onChange={handlePasswordChange}
          value={passwordValue}
          error={passwordHasError && "Please enter a valid password"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
