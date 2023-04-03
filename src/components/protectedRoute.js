import React , {useContext} from 'react'
import {Route, Redirect} from 'react-router-dom'
import {contextProvider} from '../context/contextProvider'

const ProtectedRoute = ({component: Component, ...rest}) => {
    const {isAuth} = useContext(contextProvider)
    return (
        <Route {...rest} render={(props) => {
            if(isAuth){
                return <Component {...props} />
            }else{
                return <Redirect to="/signin" />
            }
        }} />
    )
}

export default ProtectedRoute;