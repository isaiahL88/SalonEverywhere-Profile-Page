import Header from './Header'
import ProfileInfo from './ProfileInfo'

const Layout = ({children}) => {
    return (
        <>
            <Header />
            <ProfileInfo/>
            {children}
        </>
    )
}

export default Layout
