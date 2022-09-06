import { Container, Heading, useToast } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { memo, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import LoginButtonGroup from "../../components/formItems/buttonGroup/LoginButtonGroup";
import CommonField from "../../components/formItems/field";
import AuthLayout from "../../components/layouts/auth";
import { HitApi } from "../../helpers/hitApi";
import { validateEmail, validatePassword } from "../../helpers/utils";
import { setLogin } from "../../redux/authSlice";
import { LOGIN_URL } from "../../variables/urls";

const LoginPage = () => {
    const [isLoading, setIsLoading] = useState(false)
    const toast = useToast()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    function login(params) {
        setIsLoading(true)
        HitApi.post(LOGIN_URL, {
            email: params.email,
            password: params.password
        }).then((result) => {
            dispatch(setLogin({
                token: result.data.token,
                userName: result.data.name
            }))
            setIsLoading(false)
            navigate("/home")
        }).catch((error) => {
            toast({
                title: "Error",
                description: error.response.data,
                position: "top-right",
                isClosable: true,
                duration: 5000,
                status: "error"
            })
            setIsLoading(false)
        })
    }
    return (
        <AuthLayout>
            <Container>
                <Heading>
                    Login
                </Heading>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    onSubmit={(values) => {
                        login(values)
                    }}>
                    {(props) => (
                        <Form>
                            <CommonField
                                label={"E-mail"}
                                placeholder={"Please input your E-mail here"}
                                fieldName={"email"}
                                type={"text"}
                                validation={validateEmail}
                            />
                            <CommonField
                                label={"Password"}
                                placeholder={"Please input your Password here"}
                                fieldName={"password"}
                                type={"password"}
                                validation={validatePassword}
                            />
                            <LoginButtonGroup isLoading={isLoading} />
                        </Form>
                    )}
                </Formik>
                <Container mt={32} p={0}>
                    <hr />
                    <section>
                        <Container mt={4}>
                            <p style={{ textAlign: 'center' }}>
                                if you don`t have any account, you can create one
                                <span style={{ color: 'skyblue' }}>
                                    <Link to={"/register"}> here.</Link>
                                </span>
                            </p>
                        </Container>
                    </section>
                </Container>
            </Container>
        </AuthLayout>
    )
};

export default memo(LoginPage);
