import ButtonAddUser from "./ButtonAddUser ";
import Spinner from "./Spinner";
import UsersList from "./UsersList";

const Home = () => {

    return (
        <div className="mt-5 d-flex flex-column">
            <div className="d-flex justify-content-between">
                <h1 className="display-5">List of users</h1>
                <ButtonAddUser />
            </div>
            <UsersList />
        </div>
    );
}

export default Home;