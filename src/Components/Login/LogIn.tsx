import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { appActions } from "../../store/appSlice";

import CloseButton from "../CloseButton/CloseButton";
import Button from "../Button/Button";

type FormData = {
  username: string;
  password: string;
  password2?: string;
};

const LogIn = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.app.users);
  const isRegistering = useAppSelector((state) => state.app.isRegistering);

  const closeLoginForm = () => {
    dispatch(appActions.toggleLoginForm());
  };

  const onSubmit = handleSubmit((data, e) => {
    if (!isRegistering) {
      // find user in users array
      const userFound = users.find((user) => user.username === data.username);

      console.log(userFound);
      console.log(users);

      if (userFound) {
        // check password
        if (userFound.password === data.password) {
          // login
          dispatch(
            appActions.login({
              username: userFound.username,
              password: userFound.password,
            })
          );
          dispatch(appActions.toggleLoginForm());
          return;
        } else {
          // show error
          console.log("Wrong password");
        }
      }
    }

    if (isRegistering) {
      const username = data.username;
      const password = data.password;
      const password2 = data.password2;

      // if username is not already taken register user
      if (!users.find((user) => user.username === username)) {
        if (password === password2) {
          dispatch(
            appActions.registerUser({
              username: username,
              password: password,
            })
          );
          console.log(username, password);
          dispatch(appActions.toggleIsRegistering());
        }
      }
    }
  });

  const toggleIsRegistering = () => {
    dispatch(appActions.toggleIsRegistering());
    console.log("isregistering");
  };

  return ReactDOM.createPortal(
    <div className="fixed w-full h-full bg-black z-50 flex justify-center items-center">
      <div className="flex flex-col w-80 gap-4">
        <CloseButton onClick={closeLoginForm} className="self-end" />
        <form
          className="flex flex-col gap-2 w-full bg-white px-4 py-8 rounded items-center"
          onSubmit={onSubmit}
        >
          <input
            className="border-2 border-black p-2"
            type="text"
            placeholder="username"
            {...register("username")}
          />
          <input
            className="border-2 border-black p-2"
            type="password"
            placeholder="password"
            {...register("password")}
          />
          {isRegistering && (
            <input
              className="border-2 border-black p-2"
              type="password"
              placeholder="password"
              {...register("password2")}
            />
          )}

          {!isRegistering && (
            <div className="flex gap-4">
              <Button className="px-2 py-1 mt-8">Login</Button>
              <Button
                className="px-2 py-1 mt-8"
                type="button"
                clickHandler={toggleIsRegistering}
              >
                Register
              </Button>
            </div>
          )}
          {isRegistering && (
            <Button className="px-2 py-1 mt-8">Register</Button>
          )}
        </form>
      </div>
    </div>,
    document.getElementById("login") as HTMLElement
  );
};

export default LogIn;
