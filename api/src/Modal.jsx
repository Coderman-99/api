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
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }

    const [posts, setPosts] = useState([])
    const fetchPosts = (isAscending) => {
        fetch('https://restcountries.com/v3.1/all')
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
        console.log(formData);
        const fuse = new Fuse(posts, {
            keys: ['name.common', 'name.official']
        });
        console.log(fuse.search("cam"));
        currentPosts = fuse.search(formData["country"]).slice()
    };
    const [posts2, setPosts2] = useState([])
    const gotoModalContent2 = (country) => {

        const fetchPosts = () => {
            fetch('https://restcountries.com/v3.1/name/' + country)
                .then((response) => response.json())
                .then((data) => {
                    if (isAscending == 1) {
                        data.sort((a, b) => a.name.common.localeCompare(b.name.common));
                        setPosts2(data);
                    }
                    else {
                        data.sort((a, b) => b.name.common.localeCompare(a.name.common));
                        setPosts2(data);
                    }
                })
        }
        useEffect(() => {
            fetchPosts()
        }, []);
    }
    console.log(currentPosts)
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
                                <div className="countries">
                                    <div className="card" onClick={openModal}>
                                        <div className="flag">
                                            <Card contents={post.flags.png} />
                                        </div>

                                        <div className="name"><p className="props">Country name: </p><Card contents={post.name.official} /></div>
                                        <div className="cca2"><p className="props">CCA2: </p><Card contents={post.cca2} /></div>
                                        <div className="cca3"><p className="props">CCA3: </p><Card contents={post.cca3} /></div>
                                        {/* <Card length={length} contents={nativeNames} /> */}
                                        <div className="altspelling"><p className="props">Alternative Spelling: </p><Card contents={post.altSpellings} />
                                            {/* <Card contents={post.idd.root} /> */}
                                        </div>
                                    </div>
                                </div>

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