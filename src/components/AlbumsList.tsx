import { useThunk } from "../hooks/useThunk";

const AlbumsList = ({ user }) => {

    // const [doFetchAlbums, isLoadingAlbums, loadingAlbumsError] = useThunk(fetchUsers);

    return (
        <div className="p-3">
            <p className="fs-5">Albums by {user.name}</p>
        </div>
    );
}

export default AlbumsList;