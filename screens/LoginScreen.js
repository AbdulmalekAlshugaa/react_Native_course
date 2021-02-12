import React, { useState } from "react";
import Screen from "../app/components/Screen";
import { Image, StyleSheet, View } from "react-native";
import AppTextInput from "../app/components/AppTextInput";
import AppButton from "../app/components/AppText/AppButton";
import { Formik } from "formik";
import * as Yup from "yup";
import AppText from "../app/components/AppText";
import ErrorMessages from "../app/components/ErrorMessages";

// creating a vaildation schema
const vaildationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).max(16).label("Password"),
});

function LoginScreen() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  // formik is comming up to replace the use State
  return (
    <Screen>
      <Image
        style={styles.logo}
        source={require("../app/assets/logo-red.png")}
      />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={vaildationSchema}
      >
        {({ handleChange, handleSubmit, errors }) => (
          // here you have to creare a fragment in order to render the container
          <>
            <View style={styles.container}>
              <AppTextInput
                placeholder="Email"
                icon="email"
                onChangeText={handleChange("email")}
                keyBoardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
              />
              <ErrorMessages error={errors.email} />

              <AppTextInput
                placeholder="Password"
                icon="lock"
                onChangeText={handleChange("password")}
                secureTextEntry
                autoCorrect={false}
                autoCapitalize="none"
              />
              <ErrorMessages error={errors.password} />
              <AppButton title="Login" onPress={handleSubmit} />
            </View>
          </>
        )}
      </Formik>
    </Screen>
  );
}
const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  container: {
    padding: 10,
  },
});

export default LoginScreen;
