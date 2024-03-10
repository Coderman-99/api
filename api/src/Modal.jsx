import { useEffect, useState } from "react";
import Modal from "react-modal";
import Body from "./Body";
import Paginate from "./Pagination.jsx";
import ModalContent from "./ModalContent";
import Card from "./Card";
import Fuse from "fuse.js"
import ModalContent2 from "./ModalContent2.jsx";
import Error from "./Error.jsx";
Modal.setAppElement('#root');
function ModalShow() {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [country, setCountry] = useState()
    const [searchCountry, setSearchCountry] = useState("")
    const [sCountry, setsCountry] = useState([])
    const [errorMessage, setErrorMessage] = useState("")
    function openModal(country, keys) {
        setIsOpen(true);
        setCountry(country)
    }
    function closeModal() {
        setIsOpen(false);
    }
    const [posts, setPosts] = useState([])
    const fetchPosts = (isAscending) => {
        fetch('https://restcountries.com/v3.1/all?fields=flags,name,cca2,cca3,altSpelling,idd')
            .then((response) => response.json())
            .then((data) => {
                if (isAscending == 1 || isAscending == null) {
                    data.sort((a, b) => a.name.common.localeCompare(b.name.common));
                    setPosts(data);
                    setsCountry(data);
                }
                else {
                    data.sort((a, b) => b.name.common.localeCompare(a.name.common));
                    setPosts(data);
                    setsCountry(data);
                }
            })
    }
    useEffect(() => {
        fetchPosts()
    }, []);
    const handleSubmit = (e, post) => {
        e.preventDefault();
        const fuse = new Fuse(post, {
            keys: ['name.common', 'name.official']
        });
        if (searchCountry != "") {
            setsCountry(fuse.search(searchCountry))
        }
        else {
            setErrorMessage("Cannot be empty!")
        }
    };
    console.log(searchCountry)
    console.log(sCountry)

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(25);

    // ...

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    let currentPosts = sCountry.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // const [posts2, setPosts2] = useState([])
    // const gotoModalContent2 = (country) => {

    //     const fetchPosts = () => {
    //         fetch('https://restcountries.com/v3.1/name/' + country)
    //             .then((response) => response.json())
    //             .then((data) => {
    //                 if (isAscending == 1) {
    //                     data.sort((a, b) => a.name.common.localeCompare(b.name.common));
    //                     setPosts2(data);
    //                 }
    //                 else {
    //                     data.sort((a, b) => b.name.common.localeCompare(a.name.common));
    //                     setPosts2(data);
    //                 }
    //             })
    //     }
    //     useEffect(() => {
    //         fetchPosts()
    //     }, []);
    // }
    return (
        <>
            <body>
                <div>
                    <form onSubmit={(e) => handleSubmit(e, posts)}>
                        <input type="text" name="country" value={searchCountry} onChange={(e) => setSearchCountry(e.target.value
                        )} />
                        <input type="submit" />
                    </form>
                    <Error error={errorMessage} />
                    <button onClick={() => fetchPosts(1)}>Sort ascending</button>
                    <button onClick={() => fetchPosts(0)}>Sort descending</button>
                    <div className="modal-body1">
                        <div className="modal-body2">{currentPosts.map((post) => {
                            return (
                                <>
                                    <div className="card" onClick={() => openModal(post.name.common)}>
                                        <Card contents={post} keys={Object.keys(post)} color={"green"} />
                                    </div>
                                </>
                            );
                        })}</div>
                    </div>

                    <div>
                        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Modal">
                            <div id="id01" className="modal">
                                <button onClick={closeModal}>close</button>
                                <ModalContent country={country} />
                            </div>
                        </Modal>
                    </div>
                    <div className="container">
                        <div className="title">
                            <h1>Page</h1>
                        </div>
                        {posts ? (
                            <div className="blog-content-section">
                                {/* ... */}
                                <Paginate
                                    postsPerPage={postsPerPage}
                                    totalPosts={posts.length}
                                    paginate={paginate}
                                />
                            </div>
                        ) : (
                            <div className="loading">Loading...</div>
                        )}
                    </div>
                </div>
            </body >
        </>
    );
}
export default ModalShow