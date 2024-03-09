import React from "react";
import './Pagination.css';

function Pagination({ counterItem, totalItem, paginate }) {
	const pageNumbers = []

	for (let i = 1; i <= Math.ceil(totalItem / counterItem); i++) {
		pageNumbers.push(i)
	}

  return (
    <section className="pagination-section">
			<ul className="pagination">
				{pageNumbers.map(number => (
					<li className="page-item" key={number}>
						<a href="!#" className="page-link" onClick={() => paginate(number)}>{number}</a>
					</li>
				))}
			</ul>
    </section>

    )
}

export default Pagination;