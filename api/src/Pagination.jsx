import React from 'react';

const Paginate = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <>
            {pageNumbers.map((number) => (
                <div
                    key={number}
                    onClick={() => paginate(number)}
                    className="page-number"
                >
                    {number}
                </div>

            ))}
        </>
    );
};

export default Paginate