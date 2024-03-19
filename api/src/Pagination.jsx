import React from 'react';

const Paginate = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <ul className="pagination">
            {pageNumbers.map((number) => (
                <li
                    key={number}
                    onClick={() => paginate(number)}
                    className="page-number"
                >
                    {number}
                </li>
            ))}
        </ul>
    );
};

export default Paginate