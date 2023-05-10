import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNaumbers = [];

  for (let number = 1; number <= Math.ceil(totalPosts / postsPerPage); number++){
    pageNaumbers.push(number)
  }
    return <nav>
        <ul className="pagination">
            {
                pageNaumbers.map(no=>(
                    <li key={no} className="page-item">
                        <a onClick={()=>paginate(no)} href="javascript:void(0)" className="page-link">{no}</a>
                    </li>
                ))
            }
        </ul>
    </nav>;
};

export default Pagination;
