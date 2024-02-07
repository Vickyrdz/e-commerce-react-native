import { NavigationContainer  } from "@react-navigation/native";
import { useEffect, useState } from "react";
import TabNavigation from "./TabNavigation";
import AuthStack from "./AuthStack";
import { useSelector, useDispatch } from "react-redux";
import { fetchSession } from "../DB";
import { setUser } from "../features/Auth/AuthSlice";

const MainNavigator = () => {
  const [showContent, setShowContent] = useState(false);
  const dispatch = useDispatch();
  const idToken = useSelector((state) => state.auth.value.idToken);

  useEffect(() => {
    const checkSession = async () => {
        try {
          const session = await fetchSession();
          if (session.rows._array.length) {
              const user = session.rows._array[0];
              dispatch(setUser(user));
          }
        } catch (error) {
          console.log(error);
        } finally {
          setShowContent(true);
        }
    };
    checkSession();
  }, [idToken]);

  if (!showContent) return null;

  return (
    <NavigationContainer>
      {idToken ? <TabNavigation /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default MainNavigator;
