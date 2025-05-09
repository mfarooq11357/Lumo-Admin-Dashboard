const Pagination = ({ currentPage = 1, totalPages = 7 }) => {
  return (
    <div className="flex justify-between items-center mt-4">
      <div className="text-sm text-gray-500">Showing 1 to 4 of 25 entries</div>
      <div className="flex gap-2">
        <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">Previous</button>
        <button className="px-3 py-1 bg-[#003732] text-white rounded text-sm">1</button>
        <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">2</button>
        <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">3</button>
        <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">...</button>
        <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">7</button>
        <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">Next</button>
      </div>
    </div>
  )
}

export default Pagination
