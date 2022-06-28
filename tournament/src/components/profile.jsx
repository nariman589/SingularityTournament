import { ChakraProvider } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import isEmpty from "./checkEmpty";
import doWeHaveToken from "./checkIfAutorized";
import Header from "./header";
import ReactLoading from "react-loading";
import Footer from "./footer";

// function profInfoImitation() {
//   return
// }

export default function Profile() {
  const [user, setUser] = useState();
  const profile = useCallback(async () => {
    const token = sessionStorage.getItem("token");
    const userReq = await fetch("http://localhost:8189/api/v1/app/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const userRes = await userReq.json();
    console.log(userRes);
    setUser(userRes);
  });
  useEffect(() => {
    profile();
  }, []);

  if (doWeHaveToken() && !isEmpty(user)) {
    return (
      <div className="profilePage">
        <Header />
        <div className="ProfileInfo">
          <div className="mainPageTitle">
            <h2>Profile Info</h2>
          </div>
          <div className="ProfileDetails">
            <div className="ProfileInfoField">Firstname: {user.firstName}</div>
            <div className="ProfileInfoField">Lastname: {user.lastName}</div>
            <div className="ProfileInfoField">Major: {user.major}</div>
            <div className="ProfileInfoField">Login: {user.login}</div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  return (
    <div className="profilePage">
      <Header />
      <ReactLoading color={"orange"} className="center" />
      <Footer />
    </div>
  );
}
