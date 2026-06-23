function Pagination({ page, pageCount, onChange }) {
  if (pageCount <= 1) return null

  return (
    <div className="eg-pagination">
      <button
        className="eg-page-btn"
        disabled={page === 1}
        aria-label="Previous page"
        onClick={() => onChange(page - 1)}
      >
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
        </svg>
      </button>
      {Array.from({ length: pageCount }, (_, i) => i + 1).map((p) => (
        <button
          key={p}
          className={['eg-page-btn', p === page ? 'current' : ''].filter(Boolean).join(' ')}
          aria-current={p === page ? 'page' : undefined}
          aria-label={p === page ? `Page ${p}, current` : `Page ${p}`}
          onClick={() => onChange(p)}
        >
          {p}
        </button>
      ))}
      <button
        className="eg-page-btn"
        disabled={page === pageCount}
        aria-label="Next page"
        onClick={() => onChange(page + 1)}
      >
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
        </svg>
      </button>
    </div>
  )
}

export default Pagination
