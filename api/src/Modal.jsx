import { useEffect, useState } from "react";
import Modal from "react-modal";
import Body from "./Body";
import Paginate from "./Pagination.jsx";
import ModalContent from "./ModalContent";
import Card from "./Card";

Modal.setAppElement('#root');
function ModalShow() {
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }

    const [isAscending, setIsAscending] = useState(0)
    const [posts, setPosts] = useState([])
    const fetchPosts = () => {
        fetch('https://restcountries.com/v3.1/all')
            .then((response) => response.json())
            .then((data) => {
                if (isAscending == 1) {
                    data.sort((a, b) => a.name.common.localeCompare(b.name.common));
                    setPosts(data);
                }
                else {
                    data.sort((a, b) => b.name.common.localeCompare(a.name.common));
                    setPosts(data);
                }
            })
    }
    useEffect(() => {
        fetchPosts()
    }, []);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(25);

    // ...

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleSortAsc = (num) => {
        setIsAscending(num)
    }
    const handleSortDes = () => {
        setIsAscending(num)
    }
    return (
        <>
            <body>
                <button onClick={() => handleSortAsc(1)}>Sort ascending</button>
                <button onClick={() => handleSortDes(0)}>Sort descending</button>
                {currentPosts.map((post) => {
                    return (
                        <>
                            <div className="countries">
                                <div className="card">
                                    <div className="flag">
                                        <Card contents={post.flags.png} />
                                    </div>
                                    <div>
                                        <Card contents={post.name.official} />
                                        <Card contents={post.cca2} />
                                        <Card contents={post.cca3} />
                                        {/* <Card length={length} contents={nativeNames} /> */}
                                        <Card contents={post.altSpellings} />
                                        {/* <Card contents={post.idd.root} /> */}
                                    </div>
                                </div>
                            </div>

                            <Body uniqueKey={post.cca2} body={post.name.official} length={posts.length} />
                        </>
                    );
                })}
                <div className="container">
                    <div className="title">
                        <h1>Blog</h1>
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




                <div>
                    <div className="country" onClick={openModal}><p>country</p></div>
                    <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="haha bro">
                        <div id="id01" className="modal">
                            <button onClick={closeModal}>close</button>
                            <h1>whatever</h1>
                            <h1>what ever dude</h1>
                        </div>
                    </Modal>
                </div>
            </body>
        </>
    );
}
export default ModalShow