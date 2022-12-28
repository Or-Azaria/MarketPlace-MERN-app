import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearUser, getUser } from "../../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "flowbite-react";
import { useEffect } from "react";
const LogoutButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(getUser);

  const LogoutUserWithServer = async () => {
    try {
      const url = `${process.env.REACT_APP_BASE_URL}/api/auth/logout`;
      const { data } = await axios.get(url, { withCredentials: true });
      if (data) {
        dispatch(clearUser());
        console.log("hi hi");
        window.location.reload();
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    console.log(user);
  }, []);
  return (
    <div onClick={LogoutUserWithServer}>
      <Button color="light" pill={true}>
        Light
      </Button>
    </div>
  );
};

export default LogoutButton;
