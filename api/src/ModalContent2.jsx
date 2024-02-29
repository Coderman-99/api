
function ModalContent2(props) {
    const [posts, setPosts] = useState([])
    const fetchPosts = (props) => {
        fetch('https://restcountries.com/v3.1/name' + props)
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
    return (
        <p>{posts.name.official}</p>
    );
}
export default ModalContent2