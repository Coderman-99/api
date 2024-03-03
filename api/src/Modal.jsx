import { useEffect, useState } from "react";
import Modal from "react-modal";
import Body from "./Body";
import Paginate from "./Pagination.jsx";
import ModalContent from "./ModalContent";
import Card from "./Card";
import Fuse from "fuse.js"
import ModalContent2 from "./ModalContent2.jsx";

Modal.setAppElement('#root');
function ModalShow() {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [country, setCountry] = useState()
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
    let currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            country: e.target.elements.country.value,
        };
        const fuse = new Fuse(posts, {
            keys: ['name.common', 'name.official']
        });
        currentPosts = fuse.search(formData["country"]).slice()
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
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <input type="text" name="country" />
                        <input type="submit" />
                    </form>
                    <button onClick={() => fetchPosts(1)}>Sort ascending</button>
                    <button onClick={() => fetchPosts(0)}>Sort descending</button>
                    {currentPosts.map((post) => {
                        return (
                            <>
                                <div className="card" onClick={() => openModal(post.name.common)}>
                                    <Card contents={post} keys={Object.keys(post)} />
                                    {/* <div className="name"><p className="props">Country name: </p><Card contents={post.name.official} /></div>
                                    <div className="cca2"><p className="props">CCA2: </p><Card contents={post.cca2} /></div>
                                    <div className="cca3"><p className="props">CCA3: </p><Card contents={post.cca3} /></div>
                                    <div className="altspelling"><p className="props">Alternative Spelling: </p><Card contents={post.altSpellings} /></div>
                                    <div className="idd"><p className="props">IDD: </p><Card contents={post.idd} /></div>
                                    <div className="native-name"><p className="props">Native name: </p><Card contents={post.name.nativeName} />  </div> */}
                                </div>
                            </>
                        );
                    })}
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