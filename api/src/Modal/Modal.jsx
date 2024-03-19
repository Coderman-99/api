import { useEffect, useState } from "react";
import Modal from "react-modal";
import Paginate from "../Pagination.jsx";
import ModalContent from "../ModalContent.jsx";
import Card from "../Card/Card.jsx";
import Fuse from "fuse.js"
import ModalContent2 from "../ModalContent2.jsx";
import Error from "../Error.jsx";
import styles from "./Modal.module.css"

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
            setErrorMessage("")
        }
        else {
            setErrorMessage("Cannot be empty!")
        }
    };
    console.log(sCountry)

    // 25 cards per page

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(25);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    let currentPosts = sCountry.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <div>
                {/* search bar and sort ascending, descending */}
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div>
                        <form onSubmit={(e) => handleSubmit(e, posts)}>
                            <input type="text" name="country" value={searchCountry} onChange={(e) => setSearchCountry(e.target.value
                            )} />
                            <input type="submit" />
                        </form>
                        <Error error={errorMessage} />
                        <button className={styles.button} onClick={() => fetchPosts(1)}>Sort ascending</button>
                        <button className={styles.button} onClick={() => fetchPosts(0)}>Sort descending</button>
                    </div>

                    {/*show card country few info */}

                    <div className="modal-body1">
                        <div className={styles.modalBody2}>{currentPosts.map((post) => {
                            if (Object.keys(post).includes("item")) {
                                return (
                                    <>
                                        <div className={styles.card} onClick={() => openModal(post.item.name.common)}>
                                            <Card contents={post} keys={Object.keys(post)} color={"green"} />
                                        </div>
                                    </>
                                );
                            }
                            else {
                                return (
                                    <>
                                        <div className={styles.card} onClick={() => openModal(post.name.common)}>
                                            <Card contents={post} keys={Object.keys(post)} color={"green"} />
                                        </div>
                                    </>
                                );
                            }

                        })}</div>
                    </div>

                    {/*modal*/}

                    <div>
                        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Modal">

                            <div className={styles.modal}>
                                <button onClick={closeModal} style={{ position: "fixed", left: "90%" }}>close</button>
                                <ModalContent country={country} />
                            </div>

                        </Modal>
                    </div>

                    {/*pagination*/
                    }
                    <div className={styles.paginationContainer}>
                        {posts ? (
                            <Paginate
                                postsPerPage={postsPerPage}
                                totalPosts={posts.length}
                                paginate={paginate}
                            />
                        ) : (
                            <div className="loading">Loading...</div>
                        )}
                    </div>
                </div>
            </div>

        </>
    );
}
export default ModalShow